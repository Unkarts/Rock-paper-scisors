const words = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  console.log(randomWord);
  return randomWord;
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Rock Paper Scissors");
    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (words.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a tie";
  } else if (result == "Player") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log("Welcome!");
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("---------");
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      scorePlayer += 1;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      scoreComputer += 1;
    }
  }
  if (scorePlayer > scoreComputer) {
    console.log("You win!");
  } else if (scoreComputer > scorePlayer) {
    console.log("You lose!");
  } else {
    console.log("It's a tie!");
  }
}

game();
