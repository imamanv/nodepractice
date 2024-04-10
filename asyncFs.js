const { readFile, writeFile } = require("fs");

// warning: callback hell ahead :)
readFile("./contentForFileSystem/firstSample.txt", "utf8", (err, res) => {
  if (err) return;
  const firstSample = res;
  readFile("./contentForFileSystem/secondSample.txt", "utf8", (err, res) => {
    if (err) return;
    const secondSample = res;
    writeFile(
      "./contentForFileSystem/resultOfWriteAsync.txt",
      `Here is the result of async write operation:
        
        ${firstSample}
        ${secondSample}
        `,
      (err, res) => {
        if (err) return;
        console.log(res, "response of write async");
      }
    );
  });
});

console.log("I am sync operation in async file");
// as this is sync code it will be printed first
