import {parser} from "./parser.js"

const source = `
if foo
then do abcd
> xyz
> 
else asdf
`

const parse = (source) => parser.parse(source.concat("\n"))

console.log(parse(source).toString())
