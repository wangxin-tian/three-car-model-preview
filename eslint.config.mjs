import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [{
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.all,
  {
    rules: {
      "func-style": "off",
      "id-length": "off",
      "no-underscore-dangle": "off",
    }
  }
];