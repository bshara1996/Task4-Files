# 🔢 Task #4 - File Content Copier

A Node.js program that copies specific lines from multiple text files into a single output file.

## 📋 Task Requirements

Write a program that defines names of 10 input files (names are in an array) and copies their content to a new file in the following way:
- 1 line from the first file
- 2 lines from the second file
- 3 lines from the third file
- ...
- n lines from the n-th file

If there are not enough lines in a file, do not copy the missing lines.

## 🚀 How to Run

```bash
node app.js
```

## 💡 Solution Approach

The solution uses:
- `fs` module for file system operations
- `path` module for handling file paths
- A loop to iterate through the file array
- A helper function `copyContentByIndex` to read specific lines from each file

## 👥 Students

- Bshara Karkaby [49-2]
- Moner Makhouly [49-2]

---

**Happy coding!** 💻✨
