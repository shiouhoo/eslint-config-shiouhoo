let isVuePluginAvailable = false;

try {
    require.resolve('eslint-plugin-vue');
    isVuePluginAvailable = true;
} catch (err) {
    isVuePluginAvailable = false;
}

exports.isVuePluginAvailable = isVuePluginAvailable;

const rules = isVuePluginAvailable ? {
    'vue/html-indent': ['error', 4],
    // 每行最多的属性个数
    'vue/max-attributes-per-line': ['error', { singleline: 5 }],
    'vue/html-closing-bracket-newline': 'warn',
    'vue/first-attribute-linebreak': 'warn',
    'vue/html-self-closing': ['error', {
        html: {
            void: 'never',
            normal: 'never',
            component: 'never'
        },
        svg: 'always',
        math: 'always'
    }]
} : {};

const overrides = isVuePluginAvailable ?
    [
        {
            files: ['Index.vue', 'index.vue', 'App.vue'],
            rules: {
                'vue/multi-word-component-names': 'off',
            }
        }
    ] : [];

module.exports = {
    isVuePluginAvailable,
    overrides,
    rules,
}