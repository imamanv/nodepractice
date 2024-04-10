const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./contentForFileSystem/firstSample.txt", "utf8");
const second = readFileSync("./contentForFileSystem/secondSample.txt", "utf8");

console.log(first);
console.log(second);

writeFileSync(
  "./contentForFileSystem/resultOfWriteSync.txt",
  `Here is the result of first and second file:
 
${first}
${second}
`
);

writeFileSync(
  "./contentForFileSystem/resultOfWriteSync.txt",
  `

This text has been appended to already existing file because append flag was provided`,
  { flag: "a" }
);
