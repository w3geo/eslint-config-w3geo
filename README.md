Basic eslint-configuration for w3geo projects with vue

Basic usage:

```
npm install --save-dev git+https://github.com/w3geo/eslint-config-w3geo.git
```

in the `.eslintrc`:

 ```
extends: ['w3geo']
 ```

To enable save-on-lint and other Vue features in VS Code, make sure your `settings.json` looks something like this:
```json
{
    "extensions.ignoreRecommendations": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "html",
        "javascript",
        "javascriptreact",
        "vue"
    ],
    "diffEditor.renderSideBySide": false,
    "editor.tabSize": 2,
    "typescript.disableAutomaticTypeAcquisition": true,
    "window.autoDetectColorScheme": true,
    "diffEditor.ignoreTrimWhitespace": false,
    "eslint.nodeEnv": "",
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "editor.inlineSuggest.enabled": true,
}
```
