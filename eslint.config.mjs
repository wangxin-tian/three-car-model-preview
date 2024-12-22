import globals from "globals";
import importPlugin from "eslint-plugin-import";
import pluginJs from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";


/** @type {import('eslint').Linter.Config[]} */
export default [{
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.all,
  {
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin
    },
    rules: {
      "func-style": "off",
      "id-length": "off",
      "no-underscore-dangle": "off",
      "one-var": "off"
    }
  }
];