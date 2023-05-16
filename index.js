const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "files", "write.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "write.txt"),
      "\n updated"
    );
    //doing it as the next param will work but doesnt allow you to specify file path like path does here
    await fsPromises.rename(
      path.join(__dirname, "files", "write.txt"),
      path.join(__dirname, "files", "updated.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "updated.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    //dont need to throw since its being caught anyways here
    console.error(err);
  }
};

fileOps();
