import formattedPuzzleInput from './helpers/get-input-as-array-of-ints.mjs'

const puzzleInput = './puzzle-inputs/day1.txt'
const inputData = formattedPuzzleInput(puzzleInput)

let secondValueIsGreater = 0
const reducer = (a, b) => {
    if (a < b) { secondValueIsGreater +=1 }
    return b
}

// Part 1
// How many measurements are larger than the previous measurement?
// inputData.reduce(reducer)
// console.log({secondValueIsGreater})

const sumEachThreeValues = (data) => {
    const sumValuesArray = []
    let position = 0
    while (position < data.length - 2) {
        const threeValues = [data[position], data[position+1], data[position+2]]
        sumValuesArray.push(threeValues[0] + threeValues[1] + threeValues[2])
        position +=1
    }
    return sumValuesArray
}

// Part 2
// How many measurements are larger than the previous measurement?
// const sumThreeValuesArray = sumEachThreeValues(inputData)
// sumThreeValuesArray.reduce(reducer)
// console.log({secondValueIsGreater})