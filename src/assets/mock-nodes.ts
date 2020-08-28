import { iTreeNode } from '../app/models/tree-node';

export const NODES: iTreeNode[] = [
    {
        name: 'Libgit2',
        showChildren: false,
        children: []
    },
    {
        name: 'appveyor',
        showChildren: false,
        children: []
    },
    {
        name: 'bindings',
        showChildren: false,
        children: [
            {
                name: 'libgit2sharp',
                showChildren: false,
                children: [
                    {
                        name: '020_2',
                        showChildren: false,
                        children: []
                    },
                    {
                        name: '020_1',
                        showChildren: false,
                        children: [
                        ]
                    },
                ]
            }

        ]
    },
    {
        name: 'brianmario',
        showChildren: false,
        children: [
            {
                name: 'attr-from-tree',
                showChildren: false,
                children: []
            },
            {
                name: 'revwalk-filter',
                showChildren: false,
                children: []
            },
            {
                name: 'trailer-info',
                showChildren: false,
                children: []
            },
            {
                name: 'trailer-list',
                showChildren: false,
                children: []
            },

        ]
    },
    {
        name: 'bug',
        showChildren: false,
        children: [
            {
                name: 'status_case',
                showChildren: false,
                children: []
            }
        ]
    },
    {
        name: 'clay-test',
        showChildren: false,
        children: []
    },

    {
        name: 'cmn',
        showChildren: false,
        children: [
            {
                name: 'atexit-skeleton',
                showChildren: false,
                children: []
            },
            {
                name: 'auth-retry',
                showChildren: false,
                children: []
            },
            {
                name: 'bump-pretend-git',
                showChildren: false,
                children: []
            },
            {
                name: 'cancellation',
                showChildren: false,
                children: []
            },
            {
                name: 'commit-on',
                showChildren: false,
                children: []
            },
            {
                name: 'commit-to-memory',
                showChildren: false,
                children: []
            },
            {
                name: 'commit-with-signature',
                showChildren: false,
                children: []
            },
        ]
    },



]