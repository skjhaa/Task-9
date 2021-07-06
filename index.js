// CRUD (Create) (update) (Read) (Delete)

// create a folder

const fs = require("fs");

fs.mkdirSync("SK Jha");

// Create again a file inside the file and add some data in the new file

fs.writeFileSync("SK Jha/bio.txt", "My name is SUDARSHAN KUMAR");

// Add more data in the previous file

fs.appendFileSync("SK Jha/bio.txt", "And this Task is done by SKJha");

// Read the data without getting buffer data at first

// "utf8" is used to overcome the buffer

const data = fs.readFileSync("SK Jha/bio.txt", "utf8");
console.log(data);

// Rename the file

fs.renameSync("SK JHA/bio.txt", "SK Jha/Jhabio.txt");

// Deleting

fs.unlinkSync("SK JHA/Jhabio.txt");

fs.rmdirSync("SK Jha");

