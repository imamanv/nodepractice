const path = require("path");

console.log(path.sep);
// sep property in path returns the sperator in file paths for the current operating system, it could be different for different systems

const filePath = path.join("pathExample", "pathExample.txt", "aman.txt");
console.log(filePath);
// join method in path module returns the normalised file path by constructing it using that particular seperator unique to the system.

const basename = path.basename(filePath);
console.log(basename);
// basename method returns the filename

const absolutePath = path.resolve(__dirname, "pathExample", "pathExample.txt");
console.log(absolutePath);
// path.resolve is method which takes __dirname global as well as paths to join and it return the absolute path which is unique to different kinds of OS or platform.
