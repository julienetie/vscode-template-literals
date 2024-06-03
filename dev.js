const someElement = ({value}) => `
    <div class="some-class">
        <style>h1{color: lime;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
        <div>${value}</div>
    </div>
`

const someElement = `
    <div class="some-class">
        <style>h1{color: lime;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
        <div>${value}</div>
    </div>
`

const someElement = html `
    <div class="some-class">
        <style>h1{color: lime;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
        <div>${value}</div>
    </div>
`

const someElement = svg `
    <div class="some-class">
        <style>h1{color: lime;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
        <div>${value}</div>
    </div>
`

const someElement = /*html*/ `
    <div class="some-class">
        <style>h1{color: lime;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
        <div>${value}</div>
    </div>
`

const someElement = /*svg*/ `
    <div class="some-class">
        <style>h1{color: lime;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
        <div>${value}</div>
    </div>
`