module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "max-len": [1, 100, 2, {ignoreComments: true}],
    "quote-props": [1, "consistent-as-needed"],
    "no-unused-vars": [2, {"args": "none"}],
    "radix": 0,
    "func-names": ["error", "never"],
    "jsx-a11y/no-static-element-interactions": 0,
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.config.js"
      }
    }
  },
  "globals": {
    "_": true
  },
};
