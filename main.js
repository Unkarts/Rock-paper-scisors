const scoreDiv = document.getElementById("score");
const resultDiv = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");
const choiceButtons = document.querySelectorAll(".choice-btn");

let playerScore = 0;
let computerScore = 0;
const WIN_SCORE = 5;

function getComputerChoice() {
  const choices = ["камень", "ножницы", "бумага"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer) {
  if (player === computer) return { winner: "tie", text: "Ничья!" };

  if (
    (player === "камень" && computer === "ножницы") ||
    (player === "ножницы" && computer === "бумага") ||
    (player === "бумага" && computer === "камень")
  ) {
    playerScore++;
    return { winner: "player", text: "Вы выиграли этот раунд!" };
  } else {
    computerScore++;
    return { winner: "computer", text: "Компьютер выиграл этот раунд!" };
  }
}

function updateScore() {
  scoreDiv.textContent = `Вы: ${playerScore} | Компьютер: ${computerScore}`;
}

function updateResultUI(playerChoice, computerChoice, roundResult) {
  resultDiv.innerHTML = `
    <p>Вы выбрали: <strong>${playerChoice}</strong></p>
    <p>Компьютер выбрал: <strong>${computerChoice}</strong></p>
    <p><em>${roundResult.text}</em></p>
  `;
}

function disableChoices(disable) {
  choiceButtons.forEach((b) => (b.disabled = disable));
  choiceButtons.forEach((b) => (b.style.opacity = disable ? "0.6" : "1"));
}

function endGame() {
  disableChoices(true);
  restartBtn.hidden = false;
  if (playerScore > computerScore) {
    resultDiv.innerHTML += `<p class="final-win">🎉 Поздравляем — вы победили в игре!</p>`;
  } else {
    resultDiv.innerHTML += `<p class="final-lose">💻 Увы — победил компьютер.</p>`;
  }
}

// Обработчики на кнопки выбора
choiceButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (playerScore >= WIN_SCORE || computerScore >= WIN_SCORE) return;

    const playerChoice = btn.dataset.choice;
    const computerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice, computerChoice);

    updateScore();
    updateResultUI(playerChoice, computerChoice, roundResult);

    if (playerScore >= WIN_SCORE || computerScore >= WIN_SCORE) {
      endGame();
    }
  });
});

// Перезапуск игры
restartBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  resultDiv.innerHTML = "";
  restartBtn.hidden = true;
  disableChoices(false);
});

// Инициализация
updateScore();
