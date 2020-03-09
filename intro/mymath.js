const adder = (a, b) => { 
    return a + b;
}
const subtractor = (a, b) => { 
    return a - b;
}
const multiplier = (a, b) => { 
    return a * b;
}
const divider = (a, b) => {
    return b === 0 ? throw "Denominator cannot be zero." : a / b
}
module.exports = { adder,
    subtractor,
    multiplier,
    divider
}