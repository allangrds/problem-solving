function sockMerchant (arr = []) {
    let arrUniqueValues = []
    arr.forEach(item => {
        if (!arrUniqueValues.includes(item)) {
            arrUniqueValues.push(item)
        }
    })

    const arrOccurrences = arrUniqueValues.map(item => {
    const occurrences = arr.filter(val => val === item)
    
    return occurrences.length
    })

    const pairs = arrOccurrences.reduce((acc, actualValue) => {
        const calcualtePair = actualValue / 2
        const pair = calcualtePair === 0
        ? 1
        : Math.floor(calcualtePair)
    
        return acc + pair
    }, 0)
    
    return pairs
}

module.exports = sockMerchant