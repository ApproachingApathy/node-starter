// .eslintrc.js example
module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
    "eslint:recommended",
    // Prettier is last.
    "prettier"
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
}
