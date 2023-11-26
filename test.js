import {parser} from "./parser.js"

const source = "nil; true; false; 12; \"foo\""

const parse = (source) => parser.parse(source.concat("\n"))

console.log(parse(source).toString())
