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
    'no-tabs': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-danger': 'off',
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
