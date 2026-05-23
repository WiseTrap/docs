module.exports = {
    tutorialSidebar: [
        'intro',
        'abstract',
        'acknowledgments',
        {
            type: 'category',
            label: 'Introduction',
            items: [
                'introduction/overview',
                'introduction/problem-statement',
                'introduction/objectives',
                'introduction/research-strategy',
                'introduction/scope',
                'introduction/gantt-chart',
                'introduction/project-outline',
            ],
        },
        {
            type: 'category',
            label: 'Literature Review',
            items: [
                {
                    type: 'doc',
                    id: 'literature-review/overview',
                    label: 'Overview',
                },

                {
                    type: 'category',
                    label: 'Related Work',
                    items: [
                        {
                            type: 'doc',
                            id: 'literature-review/technologies',
                            label: 'Technologies',
                        },
                        {
                            type: 'doc',
                            id: 'literature-review/gap-analysis',
                            label: 'Gap Analysis',
                        },
                        {
                            type: 'doc',
                            id: 'literature-review/analysis',
                            label: 'Analysis',
                        },
                    ],
                },

                {
                    type: 'doc',
                    id: 'literature-review/summary',
                    label: 'Summary',
                },
            ],
        },
        {
            type: 'category',
            label: 'Methodology',
            items: [
                {
                    type: 'doc',
                    id: 'methodology/overview',
                    label: 'Overview',
                },

                {
                    type: 'category',
                    label: 'Feasibility Study',
                    items: [
                        {
                            type: 'doc',
                            id: 'methodology/technical-feasibility-study',
                            label: 'Technical Feasibility Study',
                        },
                        {
                            type: 'doc',
                            id: 'methodology/operational-feasibility-study',
                            label: 'Operational Feasibility Study',
                        },
                        {
                            type: 'doc',
                            id: 'methodology/economic-feasibility-study',
                            label: 'Economic Feasibility Study',
                        },
                    ],
                },
                {
                    type: 'doc',
                    id: 'methodology/methodology-process',
                    label: 'Methodology Process',
                },
                {
                    type: 'doc',
                    id: 'methodology/requirements',
                    label: 'Requirements',
                },
            ],
        },
        {
            type: 'category',
            label: 'Design Model',
            items: [
                'design-model/overview',
                'design-model/context-diagram',
                'design-model/data-flow-diagram',
                'design-model/use-case-diagram',
                'design-model/flowchart-diagram',
                'design-model/er-diagram',
                'design-model/relational-model',
            ],
        },
        {
            type: 'category',
            label: 'Experiments and Results',
            items: [
                {
                    type: 'doc',
                    id: 'experiments-and-results/overview',
                    label: 'Overview',
                },

                {
                    type: 'category',
                    label: 'Testing methodologies',
                    items: [
                        {
                            type: 'doc',
                            id: 'experiments-and-results/unit-testing-results',
                            label: 'Unit Testing Results',
                        },
                        {
                            type: 'doc',
                            id: 'experiments-and-results/integration-testing-results',
                            label: 'Integration Testing Results',
                        },
                        {
                            type: 'doc',
                            id: 'experiments-and-results/system-testing-results',
                            label: 'System Testing Results',
                        },
                        {
                            type: 'doc',
                            id: 'experiments-and-results/acceptance-system-results',
                            label: 'Acceptance System Results',
                        },
                    ],
                },
                {
                    type: 'doc',
                    id: 'experiments-and-results/discussion-and-evaluation',
                    label: 'Discussion and evaluation',
                },
            ],
        },
    ],
};