import fs from 'fs'

export default function formattedPuzzleInput(inputFile) {
    const inputAsTxt = fs.readFileSync(inputFile, {encoding: 'UTF8'})
    const inputAsArray = inputAsTxt.split('\n').filter(Boolean)
    const inputAsArrayOfInts = inputAsArray.map(item => parseInt(item))
    return inputAsArrayOfInts
}