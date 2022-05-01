let countDownID = document.getElementById("countDown");
setTimeout(()=>{
    countDownID.innerText = 10;
    randomeColor();
    setTimeout(()=>{
        countDownID.innerText = 9;
        randomeColor();
        setTimeout(()=>{
            countDownID.innerText = 8;
            randomeColor();
            setTimeout(()=>{
                countDownID.innerText = 7;
                setTimeout(()=>{
                    countDownID.innerText = 6;
                    randomeColor();
                    setTimeout(()=>{
                        countDownID.innerText = 5;
                        randomeColor();
                        setTimeout(()=>{
                            countDownID.innerText = 4;
                            randomeColor();
                            setTimeout(()=>{
                                countDownID.innerText = 3;
                                randomeColor();
                                setTimeout(()=>{
                                    countDownID.innerText = 2;
                                    randomeColor();
                                    setTimeout(()=>{
                                        countDownID.innerText = 1;
                                        randomeColor();
                                        setTimeout(()=>{
                                            countDownID.innerText = "Happy Independence Day";   
                                            randomeColor();                                         
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);                    
                },1000);
            },1000);
        },1000);
    },1000);
},1000);

function randomeColor(){
    let colorArr = ["blue","red","black","green","blueviolet","yellowgreen"];
    let getRandNo = Math.floor(Math.random() * 5);
    let getRandColor = colorArr[getRandNo];
    countDownID.setAttribute("style","color:"+getRandColor)
}