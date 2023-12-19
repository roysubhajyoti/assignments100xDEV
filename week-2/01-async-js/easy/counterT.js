let a=0;

function startCounter(callbackCounter){
    a++;
    console.log(a);
    setTimeout(callbackCounter,1000);
}


function callbackCounter (){
    startCounter(callbackCounter);
}
   

callbackCounter();