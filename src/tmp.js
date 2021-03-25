import txt from './1.txt'
import './style/index.css'
import './style/index.less'
import image from './images/logo.png'

const img = new Image()
img.src = image
document.body.appendChild(img)

const sum = (a, b) => a + b
console.log(txt)
console.log(sum(1, 2))
