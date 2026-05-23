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
    ],
};