module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', '@vue/airbnb'],
  rules: {
    'no-param-reassign': 'off',
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
