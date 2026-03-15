let user = 0;
let comp = 0;

const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#computerScore");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");



const getCompChoice = () => {
    const choiceList = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return choiceList[randomIdx];
}



const getResult = (userWin, userChoice, compChoice) => {

    if(userWin === -1){
        msg.innerText = " Game draw!!"
        msg.style.backgroundColor = "#d75d00ff";

    }
    else {
            if(userWin) {
                user++;
                userScore.innerText = user;
                msg.innerText = `You Win 🎉! Your ${userChoice} beats ${compChoice}`
                msg.style.backgroundColor = "#095902ff";
            }
            else {
                comp++;
                compScore.innerText = comp;
                msg.innerText = `😑 You lost.. ${compChoice} beats your ${userChoice}`
                msg.style.backgroundColor = "#950000ff";
            }
        }
}


//start
// tracking which choice is selected by user
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});



const playGame = (userChoice) => {
    console.log("user choice: ",userChoice);
    // now lets generate comp choice
    const compChoice = getCompChoice();
    console.log("computer choice:", compChoice);

    if(compChoice === userChoice) {
        //game draw
        return -1;
    }
    else {
        let userWin = true;

        if (compChoice === "rock") {
            userWin = userChoice === "paper" ? true : false;
        }

        if(compChoice === "paper") {
            userWin = userChoice === "scissor" ? true : false;
        }

        if(compChoice === "scissor") {
            userWin = userChoice === "paper" ? false : true;
        }
        getResult(userWin, userChoice ,compChoice);
    }
}


