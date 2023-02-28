module.exports = {
    // 继承的规则
    extends: ['@commitlint/config-conventional'],
    // 定义自己的规则
    roles: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'perf',
                'test',
                'build',
                'ci',
                'chore',
                'revert'
            ]
        ],
        'subject-case': [0]
    }
}