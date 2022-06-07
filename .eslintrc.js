module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'node': true,
  },
  'extends': ['eslint:recommended', 'google'],
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  'ignorePatterns': [
    'views/',
    'static/',
  ],
  'rules': {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
  },
};
