
const fs =require('fs');


//read a file then remove all the extra spaces then write the same content


fs.readFile('./a.txt',"UTF-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        let str = data;
        let trimdata=str.replace(/\s+/g,' ').trim();
        fs.writeFile('./a.txt',trimdata,(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("sucessfull");
            }

        })
        
    }
})