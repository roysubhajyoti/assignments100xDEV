setInterval(()=>{
    let clock = new Date();
    let hr=clock.getHours();
    let min=clock.getMinutes();
    let sec=clock.getSeconds();

    console.log(hr+" : "+min+" :"+sec);
},1000);
setInterval(()=>{
    let clock = new Date();
    let hr=clock.getHours();
    let min=clock.getMinutes();
    let sec=clock.getSeconds();
    if(hr > 12)
    {
        hr -=12;
        console.log(hr+" : "+min+" :"+sec +" PM");
    }
    else{
        console.log(hr+" : "+min+" :"+sec +" AM");
    }


    
},1000);