const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'crud');

const filePath = `${dirPath}/apple.txt`;

// create a file

// fs.writeFileSync(filePath, "this is a just simple file");

// read a file

// fs.readFile(filePath,'utf8',(err, item) =>{
//     console.log(item);
// })

//update file

// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is updated")
// })

//rename file

// fs.rename(filePath,`${dirPath}/fruit.js`,(err)=>{
//     if(!err) console.log("file name is update")
// })

//delete file

fs.unlinkSync(`${dirPath}/fruit.js`);
