# Template Literals
## The VSCode Syntax Highlighter for HTML and SVG in [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

A syntax highlighter that includes HTML and SVG syntax within template strings, without the 
need to specify a tag function.

## Usage
#### From 
```js
`<h1 class="greeting" style="background: lime;">Hello ${place}</h1>` 
```
#### To
```html
`<h1 class="greeting" style="background: lime;">Hello ${place}</h1>`
```
#### disable with a trailing comment
Because HTML's text syntax is neutral, you will rarely need to disable highlighting. But if necessary there are 4 ways to do this, you may need to [disable these comments](https://code.visualstudio.com/learn/get-started/extensions) in your linter.
```html
`<h1 class="greeting" style="background: lime;">Hello ${place}</h1>`//
`<h1 class="greeting" style="background: lime;">Hello ${place}</h1>`;//
`<h1 class="greeting" style="background: lime;">Hello ${place}</h1>`/**/
`<h1 class="greeting" style="background: lime;">Hello ${place}</h1>`/* no-html */
```

## Install
Search for "template literals" in [VSCode extensions](https://marketplace.visualstudio.com/) and [install](https://code.visualstudio.com/learn/get-started/extensions).
```

MIT © 2022 Julien Etienne.