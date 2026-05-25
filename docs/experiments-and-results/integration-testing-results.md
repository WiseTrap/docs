# Integration Testing Results

## Overview

Integration testing was conducted on the WiseTrap system to verify the interaction between the core system components, including authentication, session handling, trap endpoints, logging mechanisms, and database operations.

The main focus of this phase was to ensure that the system modules work together seamlessly, especially the interaction between the user access flow and the Honeypot logging subsystem.

---

## Integrated Components

| Component A           | Component B                 | Purpose                                  | Result |
|-----------------------|-----------------------------|------------------------------------------|--------|
| Authentication System | Session Manager             | Validate login flow and session creation | Passed |
| Trap Endpoint Handler | Honeypot Logger             | Capture and log attacker interactions    | Passed |
| Honeypot Logger       | Database (Attackers + Logs) | Store attacker data and requests         | Passed |
| Dashboard             | Database Layer              | Display statistics and attack data       | Passed |
| Settings Module       | Update System               | Validate system update workflow          | Passed |

---

## HoneypotLogger Integration Workflow

1. Attacker accesses a trap endpoint.
2. System identifies trap_endpoint_id.
3. HoneypotLogger::log() is executed.
4. IP, User Agent, Request data are collected.
5. Attacker is inserted or updated in database.
6. AttackLogs entry is created.
7. Dashboard reflects updated data.

---

## Code Snippets

### Attacker Lookup
```php
$stmt = $pdo->prepare("
SELECT attacker_id 
FROM Attackers 
WHERE ip_address = ? 
AND user_agent = ? 
LIMIT 1
");
$stmt->execute([$ip, $userAgent]);
$attacker = $stmt->fetch(PDO::FETCH_ASSOC);
```

### Attacker Insert / Update
```php
if (!$attacker) {
    $stmt = $pdo->prepare("
        INSERT INTO Attackers (ip_address, user_agent, first_seen, last_seen)
        VALUES (?, ?, NOW(), NOW())
    ");
    $stmt->execute([$ip, $userAgent]);
} else {
    $stmt = $pdo->prepare("
        UPDATE Attackers 
        SET last_seen = NOW() 
        WHERE attacker_id = ?
    ");
    $stmt->execute([$attacker['attacker_id']]);
}
```

### Log Insert
```php
$stmt = $pdo->prepare("
INSERT INTO AttackLogs (
attacker_id,
endpoint_id,
requested_url,
timestamp,
http_method,
status_code,
request_data,
response_data
) VALUES (?, ?, ?, NOW(), ?, ?, ?, ?)
");
$stmt->execute([
$attackerId,
$endpointId,
$requestUri,
$method,
http_response_code(),
json_encode(['GET'=>$_GET,'POST'=>$_POST]),
null
]);
```

---

## Results Summary

- Logging triggered successfully
- Attacker tracking works correctly
- Database synchronization stable
- Dashboard updates in real-time

---

## Conclusion

Integration between WiseTrap modules and HoneypotLogger is stable and fully functional.
