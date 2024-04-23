let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
let resetbtn=document.querySelector("#reset-btn");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
 const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText=("Game was draw.Play Again!!");
    msg.style.backgroundColor="#081b31"
 }

const showWinner=(userWin,choiceId,compChoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
       console.log("you win !"); 
       msg.innerText=(`you win! Your  ${choiceId} beats ${compChoice}`)
       msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText=(`you lose ${compChoice} beats your ${choiceId}`);
        msg.style.backgroundColor="red";
    }
}

const playGame=(choiceId)=>{
    console.log("user choice =",choiceId);
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice);

    if(choiceId===compChoice){

         drawGame();

    }
    else{
        let userWin=true;
        if(choiceId==="rock"){
            userWin= compChoice==="paper"? false:true;
        }
        else if (choiceId==="paper"){
            userWin= compChoice==="scissors"? false:true;
        }
        else{
            userWin= compChoice==="rock"? false:true;
        }
       showWinner(userWin,choiceId,compChoice);
    }
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        console.log("choice was clicked",choiceId);
        playGame(choiceId)

    })
}
)
resetbtn.addEventListener('click', () => {
    // Set the score value to zero
    userscorepara.textContent = '0';
    compscorepara.textContent = '0';

  });
