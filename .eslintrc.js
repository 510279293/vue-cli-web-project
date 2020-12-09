module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/no-unresolved': [2, {
      ignore: ['^@/'], // @ 是设置的路径别名
    }],
    'import/prefer-default-export': [2],
    'no-void': 2,
    "@typescript-eslint/no-explicit-any": ["off"],
    "import/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
    ]
  },
};
