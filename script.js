let boxes= document.querySelectorAll(".box");

let reset_button = document.querySelector("#reset_button");

let newGamebutton=document.querySelector("#new-game-button");
let messageContainer=document.querySelector(".message-container");
let message=document.querySelector("#message");
let turnO= true; 
let count=0;

const winPatterns=[
[0,1,2],
[0,4,8],
[0,3,6],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
]; 

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
            console.log("BOX was CLICKED");
            if(turnO){
                box.innerText="O";
                box.style.color="blue";
                turnO=false; 
                
            }else {
                box.innerText="X";
                box.style.color="pink"; 
                turnO=true;
                
            }
            box.disabled=true;
            count++;
            let isWinner=checkWinner();
            if(count===9&&!isWinner){
                gameDraw();
            }
    });
});

const gameDraw = () => {
    message.innerText = `Game was a Draw.`;
    messageContainer.classList.remove("hide");
    disableBoxes();
  };


const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const showWinner = (winner)=>{
    message.innerText=`The winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableBoxes();
}

checkWinner =()=>{
    for (let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
    
  
      let pos1val=  boxes[pattern[0]].innerText;
      let pos2val=  boxes[pattern[1]].innerText;
      let pos3val=  boxes[pattern[2]].innerText;

    if(pos1val!=""&& pos2val!=""&&pos3val!=""){
        if(pos1val==pos2val&&pos2val ==pos3val){
            showWinner(pos1val);

        }

    }

}

};

const resetGame =()=>{
    trueO=true; 
    enableBoxes();
    messageContainer.classList.add("hide");

}
newGamebutton.addEventListener("click",resetGame);
reset_button.addEventListener("click",resetGame);