const fs = require ('fs');
const path = require ('path');

const dirPath = path.join(__dirname,'files');

// console.log(dirPath);

// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", "I'm a simple file");
// }

fs.readdir(dirPath,(error,files)=>{
    files.forEach((item) => {
        console.log("this file name is", item)
    })
})