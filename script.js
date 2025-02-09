function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 0;
    }
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return 2;
    } else {
        return 1;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const btnOne = document.querySelector(".btnOne");
    const btnTwo = document.querySelector(".btnTwo");
    const btnThree = document.querySelector(".btnThree");
    const cpuScoreElement = document.querySelector(".cpuScore");
    const yourScoreElement = document.querySelector(".yourScore");
    const cpu = document.querySelector(".cpu");
    const winlose = document.querySelector(".winlose")

    btnOne.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const result = playRound("rock", computerSelection);

        if (result === 1) {
            computerScore++;
            winlose.textContent = "You Lose!";
        } else if (result === 2) {
            humanScore++;
            winlose.textContent = "You Win!";
        }
        else {
            winlose.textContent = "It's a Draw!";
        }

        cpuScoreElement.textContent = computerScore;
        yourScoreElement.textContent = humanScore;
        let text = "The computer has chosen : " + computerSelection;
        cpu.textContent = text;
    });

    btnTwo.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const result = playRound("paper", computerSelection);

        if (result === 1) {
            computerScore++;
            winlose.textContent = "You Lose!";
        } else if (result === 2) {
            humanScore++;
            winlose.textContent = "You Win!";
        }
        else {
            winlose.textContent = "It's a Draw!";
        }

        cpuScoreElement.textContent = computerScore;
        yourScoreElement.textContent = humanScore;
        let text = "The computer has chosen : " + computerSelection;
        cpu.textContent = text;
    });

    btnThree.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const result = playRound("scissors", computerSelection);

        if (result === 1) {
            computerScore++;
            winlose.textContent = "You Lose!";
        } else if (result === 2) {
            humanScore++;
            winlose.textContent = "You Win!";
        }
        else {
            winlose.textContent = "It's a Draw!";
        }

        cpuScoreElement.textContent = computerScore;
        yourScoreElement.textContent = humanScore;
        let text = "The computer has chosen : " + computerSelection;
        cpu.textContent = text;
    });

}

playGame();
