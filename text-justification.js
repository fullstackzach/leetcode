// https://leetcode.com/problems/text-justification/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
 var fullJustify = function(words, maxWidth) {
    let wordIndex = 0
    let justified = []

    while (wordIndex < words.length) {
        // get array of words that will fit
        let [fitWords, wordsLength] = getFittingWords(words, wordIndex, maxWidth)
        wordIndex += fitWords.length
        
        justified.push(buildLine(fitWords, wordsLength, maxWidth, wordIndex - 1 === words.length - 1))
    }
    return justified
};

function buildLine(fittingWords, wordsLength, maxWidth, isLast) {
    let line = ''
    let numSpaces = maxWidth - wordsLength
    
    if (isLast || fittingWords.length === 1) {
        // left justify
        // console.log(isLast, fittingWords)
        for (let i = 0; i < fittingWords.length; i++) {
            if (i === fittingWords.length - 1) {
                line += fittingWords[i]
                line += " ".repeat(maxWidth - line.length)
            } else {
                line += fittingWords[i] + " "
            }
        }
    } else {
        let spaces = Math.floor(numSpaces / (fittingWords.length - 1))
        let remainder = numSpaces % (fittingWords.length - 1)
        for (let i = 0; i < fittingWords.length; i++) {
            if (i === fittingWords.length - 1) { // last
                line += fittingWords[i]
            } else {
                line += fittingWords[i] + " ".repeat(spaces)
                if (remainder > 0) {
                    // handle odd space situations
                    line += " "
                    remainder--;
                }   
            }
        }
    }
    
    return line
}

// use recursion to get words from "words" that will fit, with one space between
function getFittingWords(words, i, widthRemaining, fittingWords = [], wordsLength = 0) {
    if (!words[i] || words[i].length > widthRemaining) return [fittingWords, wordsLength]
    if (words[i].length !== widthRemaining) {
         widthRemaining--;
    }
    fittingWords.push(words[i])
    wordsLength += words[i].length
    
    return getFittingWords(words, i + 1, widthRemaining - words[i].length, fittingWords, wordsLength)
}



// test cases

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))
/*
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
*/

console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16))
/*
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
*/
console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20))
/* 
[
    "Science  is  what we",
    "understand      well",
    "enough to explain to",
    "a  computer.  Art is",
    "everything  else  we",
    "do                  "
] 
*/