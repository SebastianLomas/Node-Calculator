const ops = {}

const add = (n1,n2) => {
    console.log(n1 + n2)
}

const subtract = (n1,n2) => {
    console.log(n1 - n2)
}

const multiply = (n1,n2) => {
    console.log(n1 * n2)
}

const divide = (n1,n2) => {
    try {
        if(n2 === 0) {
            throw new Error("Can't Divide by 0")
        } else {
            console.log(n1 / n2)
        }
    } catch(err) {
        console.log(err)
    }
}

ops.add = add
ops.subtract = subtract
ops.mumultiply = multiply
ops.divide = divide

module.exports = ops
