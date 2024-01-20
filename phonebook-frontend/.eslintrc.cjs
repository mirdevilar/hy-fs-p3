module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  /*extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],*/
  extends: ['airbnb'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'jsx-a11y'],
  rules: {
    "react/function-component-definition": 0,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "indent": [
        "warn",
        2
    ],
    "linebreak-style": [
        "error",
        "unix"
    ],
    "quotes": [
        "error",
        "single"
    ],
    "no-unused-vars": [
        "warn"
    ],
    "no-unneeded-ternary": [
        "error",
        {
            "defaultAssignment": false
        }
    ],
    "object-shorthand": [
        "error",
        "always"
    ],
    "operator-assignment": [
        "error",
        "always"
    ],
    "curly": [
        "error",
        "multi-line"
    ],
    "arrow-body-style": [
        "error",
        "as-needed"
    ],
    "no-lonely-if": [
        "error"
    ],
    "no-multi-spaces": [
        "error"
    ],
    "no-multiple-empty-lines": [
        "error",
        {
            "max": 1
        }
    ],
    "object-curly-spacing": [
        "error",
        "always"
    ],
    "arrow-parens": [
        "error",
        "always"
    ],
    "max-len": [
        "warn",{ "code": 120 }
    ],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
        "error", "always"
    ],
    "arrow-spacing": [
        "error", { "before": true, "after": true }
    ],

    // OVERRIDE AIRBNB

    "object-curly-newline": 0,
    "comma-dangle": 0,
    "no-restricted-globals": 0,
    "react/react-in-jsx-scope": 0,
    "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
    "react/prop-types": 0,
    "react/button-has-type": 0,
    "radix": 0,
    "prefer-template": 0,
    // DEV
    "no-console": 0,
    "no-alert": 0,
    "no-unused-vars": 0
}
}
