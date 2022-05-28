# Template Literals
## The VS Code Syntax Highlighter for using HTML and SVG in [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

Use this extension to highlight markup used within template-literals **without the need to specify a tag function**.

### From 
```js
... => `<h1 class="greeting" style="background: lime;">Hello ${place}</h1>` 
```
### To
```html
... => `<h1 class="greeting" style="background: lime;">Hello ${place}</h1>`
```
## Usage
```html
/* 
To enable syntax highlighting, a template literal needs to be assigned or returned. 
(The end back-tick must either come immediately after the markup or at the start of a new line) */

// Assigned
const assigned = `
    <div class="some-class">
        <style>h1{color: lime;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
    </div>
`
const property = {
    templateLiteral: `
        <div class="some-class">
            <style>h1{color: lime;}</style>
            <h1>Hello World!</h1>
            <script>console.log('Hello World')</script>
        </div>`
}

// Returned 
const returned = () => {
    return `
        <div class="some-class">
            <h1>Hello World!</h1>
        </div>`
}

// Wtih tag function 
const tagged = html `
    <div class="some-class">
        <style>h1{color: lime;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
    </div>
`

// With starting comments
const startingComment = /*html*/ `
    <div class="some-class">
        <style>h1{color: lime;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
    </div>
`
```

--
## Disabling syntax highlighting
Because HTML's text syntax is neutral, you will rarely need to disable highlighting though if necessary there are two ways to do so. You may need to use [ignore](https://code.visualstudio.com/learn/get-started/extensions) in your linter.

### Disable single-line syntax using a trailing empty single-line comment
```html
`<h1 class="greeting" style="background: lime;">Hello ${place}</h1>`//
```
### Disable multi-line syntax with the `no-html` directive
```js
const ignoreMultiLine = /*no-html*/`    
    {"menu": {
        "id": "file",
        "value": "File",
        "popup": {
        "menuitem": [
            {"value": "New", "onclick": "CreateNewDoc()"},
            {"value": "Open", "onclick": "OpenDoc()"},
            {"value": "Close", "onclick": "CloseDoc()"}
        ]
        }
    }}
`
```
## Unsupported
```js
// Standalone template literals are not supported 
`<div class="some-class">
    <style>h1{color: lime;}</style>
    <h1>Hello World!</h1>
    <script>console.log('Hello World')</script>
</div>`

// Direct arguments are not supported (TBA)
someFunction(`<article></article>`)
```

## Install
Search for "template literals" in [VSCode extensions](https://marketplace.visualstudio.com/) and [install](https://code.visualstudio.com/learn/get-started/extensions).

---
This plugin is based on the [lit-html](https://github.com/mjbvz/vscode-lit-html) and [Literally HTML](https://github.com/WebReflection/vscode-literally-html) VS Code extensions.

### ** Contributions are welcomed **

MIT © 2022 Julien Etienne.