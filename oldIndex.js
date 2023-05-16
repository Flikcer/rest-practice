const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

//write new file, utf8 is default
fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "HelloWorld",
  (err) => {
    if (err) throw err;
    console.log(`File created`);

    //this will upodate the file created in appropriate runtime since these are inherently asynchronous
    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "Hello World Again",
      (err) => {
        if (err) throw err;
        console.log(`File updated`);
      }
    );
    //rename file. inside for aync purposes
    fs.renameFile(
      path.join(__dirname, "files", "reply.txt"),
      "HelloWorld.txt",
      (err) => {
        if (err) throw err;
        console.log(`Name updated`);
      }
    );
  }
);

//write new file, utf8 is default
fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "HelloWorld",
  (err) => {
    if (err) throw err;
    console.log(`File created`);
  }
);

//update file, will also create file if name doesnt exist. similar to mongoDB
fs.appendFile(
  path.join(__dirname, "files", "reply.txt"),
  "Hello World Again",
  (err) => {
    if (err) throw err;
    console.log(`File updated`);
  }
);

console.log("HelloWorld");

//exit on err/display error
process.on("uncaughtException", (err) => {
  console.error(`Error: ${err}`);
  process.exit(1);
});
