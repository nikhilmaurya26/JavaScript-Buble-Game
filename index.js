var timer = 60;
var point=0;
var ran;


function makeBubble(){
    var ch="";

    for(var i = 1 ; i<177;i++){
        var rando = Math.floor(Math.random()*10);
        ch += `<div class="bubbles">${rando}</div>`
    }

    document.querySelector(".downbar").innerHTML = ch;
}

function randomno(){
    ran = document.querySelector("#randomno").innerHTML = Math.floor(Math.random()*10);
}

function Incpoint(){
     point+=10;
     document.querySelector("#point").textContent=point;
    //  console.log(point);
}


function RunTimer(){
    var timeint = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timer").textContent=timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#downbar").textContent="GAME OVER";

        }
    },1000)
}

function match(){
    document.querySelector("#downbar")
    .addEventListener("click",function(e){
        console.log("clicked");
        var clicknum = Number(e.target.textContent);
        if(clicknum==ran){
            Incpoint();
            randomno();
            makeBubble();
        }

    })
}

match();
randomno();
makeBubble();
RunTimer();