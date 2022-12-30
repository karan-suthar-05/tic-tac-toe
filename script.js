let turn = "X";
let gameOver = false;
let isFull = false;
let isWin = false;
let tin = new Audio("tin.mp3");
let winAudio = new Audio("win.wav");
let mq = window.matchMedia("( max-width:370px) and ( max-height:700px)");

const change  = ()=>{
    return turn==="X"?"O":"X";
}
const win = ()=>{
    let text = document.querySelectorAll(".boxi");
    
    let win = [
        [0,1,2,53,-93,0],
        [3,4,5,53,0,0],
        [6,7,8,53,91,0],
        [0,3,6,-58,0,90],
        [1,4,7,53,0,90],
        [2,5,8,165,0,90],
        [0,4,8,50,-4,45],
        [2,4,6,50,-4,140]
    ]

    let draw = [
        [0,1,2,3,4,5,6,7,8]
    ]

    win.forEach((e)=>{
        if((text[e[0]].innerText===text[e[1]].innerText) && (text[e[1]].innerText===text[e[2]].innerText) && text[e[2]].innerText!=="")
        {
            winAudio.currentTime = 0;
            winAudio.play();
            isWin=true;
            document.getElementById("h2").removeAttribute("hidden");
            document.getElementById("ct").setAttribute("hidden","hidden");
            turn = change();
            document.getElementById("turn").innerText = turn;
            document.getElementById(turn).innerText = parseInt(document.getElementById(turn).innerText) + 10;
            document.getElementById("winLose").innerText = "Win";
            if(mq.matches)
            {
                document.getElementById("img").style.width = "21vh";
                document.querySelector(".line").removeAttribute("hidden");
                document.querySelector(".line").style.transform = `translate(${e[3]}px, ${e[4]}px) rotate(${e[5]}deg)`;
            } 
            setTimeout(() => {
                winAudio.pause();    
                text.forEach((e)=>{
                    e.innerText = "";   
                })
                isFull=false;
                gameOver=false;
                isWin=false;
                document.getElementById("img").style.width = "0";
                document.getElementById("h2").setAttribute("hidden","hidden");
                document.getElementById("ct").removeAttribute("hidden");
                document.querySelector(".line").setAttribute("hidden","hidden");
            }, 3000);
        } 
    }) 

    draw.forEach((e)=>{
        if(text[e[0]].innerText!=="" && text[e[1]].innerText!=="" && text[e[2]].innerText!=="" && text[e[3]].innerText!=="" && text[e[4]].innerText!=="" && text[e[5]].innerText!=="" && text[e[6]].innerText!=="" && text[e[7]].innerText!=="" && text[e[8]].innerText!=="" && isWin==false)
        {
            document.getElementById("h2").removeAttribute("hidden");
            document.getElementById("ct").setAttribute("hidden","hidden");
            document.getElementById("turn").innerText = "Game";
            document.getElementById("winLose").innerText = "Draw";
        }
    })
     
    
}
const Full = ()=>{

    let text = document.querySelectorAll(".boxi");
    if(text[0].innerText!=="" && text[1].innerText!=="" && text[2].innerText!=="" && text[3].innerText!=="" && text[4].innerText!=="" && text[5].innerText!=="" && text[6].innerText!=="" && text[7].innerText!=="" && text[8].innerText!=="")
    {
        isFull=true;
    }
    console.log(isFull);
    if(isFull)
    {
        setTimeout(() => {
             
            text.forEach((e)=>{
                e.innerText = "";   
            })
            isFull=false;
            gameOver=false;
            document.getElementById("h2").setAttribute("hidden","hidden");
            document.getElementById("ct").removeAttribute("hidden");
        }, 3000);
    }
}

let text = document.querySelectorAll(".boxi");
text.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(e.innerText=="" && isWin==false)
        {
            tin.play();
            e.innerText = turn;
            turn = change();
            win();
        }
        Full();
        document.getElementById("xo").innerText = turn;
    })
})

//restart

let rbtn = document.getElementById("rbtn");
rbtn.addEventListener("click",()=>{
    tin.play();
    let text = document.querySelectorAll(".boxi");
    text.forEach((e)=>{
        e.innerText = "";   
    })
    isFull=false;
    gameOver=false;
    isWin=false;
    document.getElementById("X").innerText = 0;
    document.getElementById("O").innerText = 0;
})  