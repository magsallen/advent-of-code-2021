import formattedPuzzleInput from './helpers/get-input-as-array-of-strings.mjs'

const puzzleInput = './puzzle-inputs/day2.txt'
const inputData = formattedPuzzleInput(puzzleInput)

let x = 0
let y = 0
let aim = 0

const arrayOfDirections = inputData.map(item => {
    const split = item.split(' ')
    return [split[0], parseInt(split[1])]
})

const populateTravelTotals = (directions) => {
    console.log({directions});
    directions.map(direction => {
        if (direction[0] === 'forward') {
            x += direction[1]
        } else if (direction[0] === 'up') {
            y -= direction[1]
            aim -= direction[1]
        } else if (direction[0] === 'down') {
            y += direction[1]
            aim += direction[1]
        } else {
            console.log('direction does not match', direction[0]);
        }
    })
}

const populateTravelAndAimTotals = (directions) => {
    directions.map(direction => {
        if (direction[0] === 'forward') {
            x += direction[1]
            y += (direction[1] * aim)
        } else if (direction[0] === 'up') {
            aim -= direction[1]
        } else if (direction[0] === 'down') {
            aim += direction[1]
        } else {
            console.log('direction does not match', direction[0]);
        }
    })
}

// Part 1
// Multiply directions change x by directions change y
// populateTravelTotals(arrayOfDirections);
// console.log(x * y);


// Part 2
// Calculate aim and modified directions totals
// populateTravelAndAimTotals(arrayOfDirections);
// console.log(x * y);