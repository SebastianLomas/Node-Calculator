const readlineSync = require('readline-sync')
const { add } = require('./src/ops')
const ops = require('./src/ops')
let op, fNumber, sNumber

console.log('Welcome to Node Calculator.\nSelect Operation:\n')

try {
    op = parseInt(readlineSync.question("1. add.\n2. substract\n3. multiply\n4. divide\n\n:"))

    if(isNaN(op)) {
        throw new Error('Not A Number!')
    }
} catch(err) {
    console.log(err)
}

try {
    fNumber = parseFloat(readlineSync.question("First Number\n\n:"))

    if(isNaN(fNumber)) {
        throw new Error('Not A Number!')
    }
} catch(err) {
    console.log(err)
}

try {
    sNumber = parseFloat(readlineSync.question("Seconde Number\n\n:"))

    if(isNaN(sNumber)) {
        throw new Error('Not A Number!')
    }
} catch(err) {
    console.log(err)
}

if(op === 1) {
    ops.add(fNumber,sNumber)
} else if(op === 2) {
    ops.subtract(fNumber,sNumber)
} else if(op === 3) {
    ops.multiply(fNumber,sNumber)
} else if(op === 4) {
    ops.divide(fNumber,sNumber)
}