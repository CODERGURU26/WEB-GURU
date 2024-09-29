let userScore = 0;
let compScore = 0;

let choices =   document.querySelectorAll(".choice");
let move = document.querySelector(".move")
let user = document.querySelector("#user")
let comp = document.querySelector("#comps")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        
        playGame(userChoice)
    })
})

const genCompChoice = () =>{
    const options = ["ROCK","PAPER", "SCISSOR"]
    const random = Math.floor(Math.random()*3)
    return options[random]
}
const draw = () =>{
    
     move.innerText = "GAME WAS DRAW , PLAY AGAIN!"
     move.style.backgroundColor="pink"
      move.style.color="black"
}
const chooseWinner = (userWin , compChoice,userChoice)=>{
    if(userWin){
        userScore++
        user.innerText=userScore
        move.innerText = `YOU WON! , YOUR ${userChoice} BEATS ${compChoice}`
        move.style.backgroundColor="green"
        move.style.color="wheat"
    }
    else{
        compScore++
         comp.innerText=compScore
         move.innerText = `YOU LOST! ,  ${compChoice} BEATS YOUR ${userChoice}`
         move.style.backgroundColor="red"
          move.style.color="black"
    }
}
const playGame = (userChoice) =>{
     console.log("user choice =", userChoice)
     const compChoice = genCompChoice()
     console.log("comp choice =",compChoice)
     
     if(userChoice === compChoice){
            draw();
     }
     else{
        let userWin = true
        if(userChoice === "ROCK"){
            userWin = compChoice ==="PAPER"?false:true
        }
        else if(userChoice === "PAPER"){
            userWin = compChoice ==="SCISSOR"?false:true
        }
        else{
            userWin = compChoice === "ROCK"?false:true
        }
        chooseWinner(userWin ,userChoice, compChoice);
     }
     

}