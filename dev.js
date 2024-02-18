/* 
To enabld syntax highlighting you need a tag function or a pass-though tag function */

// Example pass-through function
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


_`
    <div class="some-class">
        <style>h1{color: lime;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
    </div>
`

html`
    <div class="some-class">
        <style>h1{color: lime;}</style>
        <h1>Hello World!</h1>
        <script>console.log('Hello World')</script>
    </div>
`

svg`
<svg id = "svgelem" width = "300" height = "300" xmlns = "http://www.w3.org/2000/svg">
    <polygon points="100,10 40,180 190,60 10,60 160,180" fill="blue"/>
</svg>
`
