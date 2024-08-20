const arrowFunction = ({value}) => `
    <div class="some-class">
        <style>h1{color: lime;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
        <div>${value}</div>
    </div>
`

const assignment = `
    <div class="some-class">
        <style>h1{color: blue;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
        <div>${value}</div>
    </div>
`

const tagFunction = anyTagFn `
    <div class="some-class">
        <style>h1{color: pink;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
        <div>${value}</div>
    </div>
`

const commentFollowedBySpace = /*any-comment*/ `
    <div class="some-class">
        <style>h1{color: brown;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
        <div>${value}</div>
    </div>
`

const disableWithCommentNoSpace = /**/`
    <div class="some-class">
        <style>h1{color: lime;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
        <div>${value}</div>
    </div>
`
const disableInlineWithCommentNoSpace = /**/`<This is a regular string> ${abc}`


const regularTLString = `A string without markup will be the color of HTML text <> ${abc}`

console.log(`<h1>Hello World!</h1>`)

console.log( 
    `<h1>Hello World!</h1>`
)

dotNotation[`<p>Test.</p>`]

{
    `<span>VSCode Template Literals</span>`
}
