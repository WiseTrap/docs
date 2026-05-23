---
sidebar_position: 2
---

# Technologies

Several technologies and frameworks are commonly used in the field of honeypot deployment, attack monitoring, and cybersecurity analysis. Each solution provides different capabilities depending on its architecture and intended use case.

## Cowrie

Cowrie is an SSH and Telnet honeypot designed to simulate vulnerable services and capture brute-force attacks, login attempts, and attacker command execution activities.

It provides detailed logging and session recording features that help researchers analyze attacker behavior. However, Cowrie mainly focuses on textual logging and lacks advanced dashboard visualization and centralized management features.

## Dionaea

Dionaea is a low-interaction honeypot designed to capture malware samples and monitor malicious network activities.

The framework is widely used in research environments for collecting Indicators of Compromise (IOCs) and analyzing malware behavior. Despite its effectiveness in malware collection, Dionaea can be difficult to configure and does not provide integrated visualization or simplified management interfaces.

## T-Pot

T-Pot is an integrated honeypot environment that combines multiple honeypot technologies within a single platform.

It provides centralized monitoring and basic dashboard visualization for collected attack data. T-Pot simplifies the deployment of multiple honeypots but remains primarily oriented toward advanced users and security professionals.

## Elastic Stack (ELK)

Elastic Stack, which consists of Elasticsearch, Logstash, and Kibana, is widely used for log collection, indexing, and security event visualization.

The platform provides powerful search and dashboard capabilities for analyzing security-related data, including honeypot logs. However, ELK is a generic log analysis solution and is not specifically designed for honeypot-based attack simulation or cybersecurity research workflows.

These technologies demonstrate the importance of honeypot systems in cybersecurity monitoring and attack analysis. However, existing solutions still lack a lightweight, modular, and research-oriented framework specifically focused on web-based attack simulation and structured threat analysis.