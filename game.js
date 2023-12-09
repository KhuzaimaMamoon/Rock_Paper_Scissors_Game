let userScore=0;
let comScore=0;
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const userscorePara=document.querySelector("#user-score")
const compscorePara=document.querySelector("#comp-score")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    })
})
// user choice
const playGame=(userChoice)=>{
    const compchoice=genCompChoice()
    if (userChoice===compchoice){
        drawGame()
    }
    else {
        let userWin=true;
        if (userChoice==='rock'){
            userWin=compchoice==='paper'? false:true;
        }
        else if (userChoice==='paper'){
            userWin= compchoice === 'scissors'? false:true;

        }
        else{
            userWin=compchoice==='rock'?false:true;
        }
        showWinner(userWin,userChoice,compchoice)
    }
}
// Computer choice
const genCompChoice=()=>{
    const options=['rock','paper','scissors']
    const randIdx=Math.floor(Math.random()*3)
    return options[randIdx];
}
// draw game
const drawGame=()=>{
    msg.innerText="Game Draw"
    msg.style.backgroundColor="#081b31"
}
// winner and loser
const showWinner=(userWin,userChoice,comchoice)=>{
    if(userWin){
        userScore++;
        userscorePara.innerText=userScore
        msg.innerText=`You win! Yours ${userChoice} beats ${comchoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        comScore++;
        compscorePara.innerText=comScore
        msg.innerText=`You Lost! ${comchoice} beats yours ${userChoice}`;
        msg.style.backgroundColor="red"
    }
}
