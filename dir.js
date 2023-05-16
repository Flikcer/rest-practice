const fs = require("fs");

//if does not exists create
if (!fs.existsSync("./new")) {
  //create new directory
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Dir Created");
  });
}

//if exists remove
if (fs.existsSync("./new")) {
  //create new directory
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Dir Removed");
  });
}
