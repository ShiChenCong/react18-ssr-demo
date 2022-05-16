module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    "no-tabs": 'off',
  },
};
