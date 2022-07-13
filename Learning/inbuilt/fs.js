let fs = require("fs");
// fs.writeFile("firstOne.txt", "Here is the first text", function () {
//   console.log("Task finished");
// });

// fs.appendFile("secondOne.txt", "Here is the new text \n", function () {
//   console.log("Task finished again");
// });

// fs.readFile("secondOne.txt", "utf-8", function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });

// fs.rename("secondOne.txt", "newOne.txt", (err) => {
//   if (err) throw err;
//   console.log("File renamed");
// });

fs.unlink("newOne.txt", (err) => {
  if (err) throw err;
  console.log("File deleted");
});
