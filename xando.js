let boxes = document.querySelectorAll(".box")
let Winner = document.querySelector(".win")
let newBtn = document.querySelector(".newbtn")
let resetBtn = document.querySelector(".resetbtn")
let turnO = true;

let winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turnO){
            box.innerText="O"
            turnO = false;
        }
        else{
            box.innerText="X"
            turnO = true;
        }
        box.disabled=true;
        checkWinner()
    })
})
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

const resetbutton=()=>{
    turnO=true;
    enableboxes();
    Winner.classList.add("hide")
    newBtn.classList.add("hide")
}

const checkWinner = ()=>{
      for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText

        if(pos1val != ""  && pos2val !="" && pos3val != ""){
            if(pos1val === pos2val && pos2val===pos3val)
            {
                console.log("winner",pos1val)
                showWinner(pos1val)
            }
        }
      }
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    Winner.innerText=`CONGRATULATIONS WINNER IS ${winner}`
    Winner.classList.remove("hide")   
    newBtn.classList.remove("hide")
    disableboxes();
}

resetBtn.addEventListener("click",resetbutton)
newBtn.addEventListener("click",resetbutton)