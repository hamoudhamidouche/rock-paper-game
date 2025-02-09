function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
};

// function getHumanChoice() {
//     while(true) {
//         console.log("Choose one of these choices: \n 1.rock\n 2.paper \n 3.scissors\n");
//         let choice = prompt("Enter your choice : ");

//         if (choice == 1) {
//             return "rock";
//         }
//         else if (choice == 2) {
//             return "paper";
//         }
//         else if (choice == 3) {
//             return "scissors";
//         }
//         else {
//             alert("Invalid choice");
//         }
//     }
// };

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            alert("It's a tie");
            return 0;
        }
        else if (computerChoice == "paper") {
            alert("You lose!");
            return 1;
        }
        else {
            alert("You win!");
            return 2;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "paper") {
            alert("It's a tie");
            return 0;
        }
        else if (computerChoice == "scissors") {
            alert("You lose!");
            return 1;
        }
        else {
            alert("You win!");
            return 2;
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "scissors") {
            alert("It's a tie");
            return 0;
        }
        else if (computerChoice == "rock") {
            alert("You lose!");
            return 1;
        }
        else {
            alert("You win!");
            return 2;
        }
    }
}

const sect = document.querySelector("section");

const btnOne = document.createElement("button");
btnOne.textContent = "Rock";
const btnTwo = document.createElement("button");
btnTwo.textContent = "Paper";
const btnThree = document.createElement("button");
btnThree.textContent = "scissors";



btnOne.addEventListener("click", playRound("rock", getComputerChoice));
btnTwo.addEventListener("click", playRound("paper", getComputerChoice));
btnThree.addEventListener("click", playRound("scissors", getComputerChoice));

sect.appendChild(btnOne);
sect.appendChild(btnTwo);
sect.appendChild(btnThree);

    
let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(`Computer choose ${computerSelection}`)
let final = playRound(humanSelection, computerSelection);
    
if (final == 1) {
    computerScore++;
}
else if (final == 2) {
    humanScore++;
}
console.log(`Your score : ${humanScore} \nComputer score : ${computerScore}`);
console.log("\nThanks for playing");