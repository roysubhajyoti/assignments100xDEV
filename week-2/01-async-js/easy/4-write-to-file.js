// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs =require('fs');

fs.appendFile('./new.txt',new Date().getDate().toLocaleString(),(err)=>{});

fs.readFile('./new.txt','UTF-8',(err,data)=>{
    console.log(data);
})