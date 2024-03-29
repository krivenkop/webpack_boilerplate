module.exports = {
    'extends': ['stylelint-config-standard'],
    'plugins': ['stylelint-scss'],
    'rules': {
        'shorthand-property-no-redundant-values': true,
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-no-important': true,
        'at-rule-semicolon-space-before': 'never',
        'no-unknown-animations': true,
        'font-family-name-quotes': 'always-where-required',
        'string-quotes': 'double',
        'value-keyword-case': 'lower',
        'selector-attribute-quotes': 'always',
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'declaration-empty-line-before': 'never',
        'scss/operator-no-unspaced': true,
        'scss/declaration-nested-properties': [
            'always',
            {
                'except': ['only-of-namespace']
            }
        ],
        'scss/double-slash-comment-empty-line-before': [
            'always',
            {
                'except': ['first-nested'],
                'ignore': ['between-comments', 'stylelint-commands']
            }
        ],
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-empty-line-before': [
            'always',
            {
                'except': ['first-nested', 'after-comment', 'after-dollar-variable']
            }
        ],
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/at-mixin-parentheses-space-before': 'never',
        'scss/at-import-no-partial-leading-underscore': true,
        'scss/at-function-parentheses-space-before': 'never',
        'scss/at-else-if-parentheses-space-before': 'never',
        'scss/selector-no-redundant-nesting-selector': true,
        'scss/operator-no-newline-after': true,
        'scss/operator-no-newline-before': true,
        'scss/declaration-nested-properties-no-divided-groups': true,
        'scss/dollar-variable-colon-newline-after': 'always-multi-line',
        'scss/at-if-closing-brace-space-after': 'always-intermediate'
    }
};
