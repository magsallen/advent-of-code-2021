import fs from 'fs'

export default function formattedPuzzleInput(inputFile, regex) {
    const inputAsTxt = fs.readFileSync(inputFile, {encoding: 'UTF8'})
    return inputAsTxt.split('\n').filter(Boolean)
}

