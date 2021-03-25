import React from 'react'
import ReactDom from 'react-dom'

ReactDom.render(<h1>hello</h1>, document.querySelector('#root'))

function readonly(target, key, descriptor) {
  descriptor.writable = false
}

class Person {
  @readonly PI = 3.14
}

const p = new Person()
// p.PI = 3.15
console.log(p.PI)
