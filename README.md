# Template Literals
## The VS Code Syntax Highlighter for using HTML and SVG in [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

Use this extension to highlight markup used within template-literals **without the need to specify a tag function**.

### From 
```js
... => `<h1 class="greeting" style="background: lime;">Hello ${place}</h1>` 
```
### To
```html
... => _`<h1 class="greeting" style="background: lime;">Hello ${place}</h1>`
```
## Usage
You need to use a tag function or pass-though tag function to enable highlighting
```js
const tag = (strings, ...values) => {
  let result = '';

  for (let i = 0; i < strings.length; i++) {
      result += strings[i]
      if (i < values.length) result += values[i]
  }
  return result
}

const _ = tag
const html = tag
const svg = tag
```

## Install
Search for "template literals" in [VSCode extensions](https://marketplace.visualstudio.com/) and [install](https://code.visualstudio.com/learn/get-started/extensions).

---
This plugin is based on the [lit-html](https://github.com/mjbvz/vscode-lit-html) and [Literally HTML](https://github.com/WebReflection/vscode-literally-html) VS Code extensions.

### ** Contributions are welcomed **

MIT © 2024 Julien Etienne.