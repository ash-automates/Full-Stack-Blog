const fs = require("fs");

// identify if directory exists, creating and deleting directories
// if (!fs.existsSync("./sampleFolder")) {
//   fs.mkdir("./sampleFolder", (error) => {
//     if (error) {
//       console.log(error);
//     }
//     console.log("Folder Created in Current Directory!");
//   });
// } else {
//   fs.rmdir("./sampleFolder", (error) => {
//     if (error) {
//       console.log(error);
//     }
//     console.log("Folder Deleted in Current Directory!");
//   });
// }

// writing to files
// fs.writeFile("./sampleFolder/example.txt", "Hello World!", (error) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log("Data written to a file in Current Directory");
// });

// reading from files
if (fs.existsSync("./sampleFolder")) {
  fs.readFile("./sampleFolder/example.txt", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data.toString());
    }
  });
}
