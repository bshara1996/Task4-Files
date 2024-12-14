"use strict";
/**
 * Students:
 * Bshara Karkaby [49-2]
 * Moner Makhouly [49-2]
 *
 */

const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "/texts"); // directory path of the texts files

const arr = [
  "txt1",
  "txt2",
  "txt3",
  "txt4",
  "txt5",
  "txt6",
  "txt7",
  "txt8",
  "txt9",
  "txt10",
];

let textOut = "";
for (let i = 0; i < arr.length; i++) {
  textOut += copyContentByIndex(arr[i], i);
}

fs.writeFileSync(`${dirPath}/output.txt`, textOut);

/**
 * Function that write Content according by Index.
 *
 * @param {string} txtName - Name of text file.
 * @param {number} require - File's index that tells how many lines to write.
 * @returns {string} - Returns content of lines amount of the file according to the index.
 */
function copyContentByIndex(txtName, require) {
  const textIn = fs.readFileSync(`${dirPath}/${txtName}.txt`, "utf-8");
  const arrOfLines = textIn.split("\r\n");

  let RequiredLines = "";
  for (let lineIndex = 0; lineIndex <= require; lineIndex++) {
    if (lineIndex < arrOfLines.length && arrOfLines[lineIndex].length > 0) // validating if the file is empty and if the line empty
      RequiredLines += arrOfLines[lineIndex] + "\n";
  }
  return RequiredLines;
}
