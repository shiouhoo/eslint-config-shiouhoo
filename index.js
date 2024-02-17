const _vue = require('./vue.js');

module.exports = {

    globals: {
        MyGlobal: true
    },
    overrides: [..._vue.overrides],
    rules: {
        // 在三元表达式的操作数之间强制换行
        'multiline-ternary': ["error", "always-multiline"],
        'no-console': 'warn',
        'no-debugger': 'warn',
        // 在 function 定义左括号之前强制保持一致的间距
        'space-before-function-paren': [
            'warn',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        // 要求或禁止使用分号
        semi: ["error", 'always'],
        // 在分号前后强制保持一致的间距
        'semi-spacing': [
            "error",
            {
                before: false,
                after: false
            }
        ],
        // 在块之前强制保持一致的间距
        'space-before-blocks': ["error", 'always'],
        // 在括号内强制保持一致的间距
        'space-in-parens': ["error", 'never'],
        // 中缀运算符周围需要间距
        'space-infix-ops': "error",
        // 在一元运算符之前或之后强制执行一致的间距
        'space-unary-ops': [
            "error",
            {
                words: true,
                nonwords: false
            }
        ],
        // 在注释中的 // 或 /* 之后强制保持一致的间距
        'spaced-comment': [
            "error",
            'always',
            {
                markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
            }
        ],
        // 禁止多个空格
        'no-multi-spaces': "error",
        // 不允许在行尾出现尾随空格
        'no-trailing-spaces': "error",
        // 禁止多个空行
        "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0 }],
        // 缩进
        'indent': ['error', 4],
        // 强制在花括号中使用一致的空格
        'object-curly-spacing': ["error", "always"],
        // 强制在对象字面量的键和值之间使用一致的间距
        'key-spacing': ['error', {
            'beforeColon': false,
            'afterColon': true,
        }],
        // 强制在数组内使用空格 
        'array-bracket-spacing': ['error', 'never'],
        // 强制在逗号周围使用空格
        'comma-spacing': ["error", { "before": false, "after": true }],
        // 对象键名不使用引号（保持一致）
        'quote-props': ['error', 'consistent-as-needed'],
        ..._vue.rules,
    }

};