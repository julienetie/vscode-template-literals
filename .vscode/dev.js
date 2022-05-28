/* 
To enable syntax highlighting a template literal needs to be assigned or returned */

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

// Disable single line syntax highlighting by trailing a single line comment
const ignoreSingleLine = `<span class="some-class">Have Some Class! //</span>`//

// Disable multi-line syntax highlighting with the no-html directive
const ignoreMultiLine = /*no-html*/ `    
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

// Standalone template literals are not supported 
`<div class="some-class">
    <style>h1{color: lime;}</style>
    <h1>Hello World!</h1>
    <script>console.log('Hello World')</script>
</div>`

// Direct arguments are not supported (TBA)
const someFunction = () => {}
someFunction(`<article></article>`)
