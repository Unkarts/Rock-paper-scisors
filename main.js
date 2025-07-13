function getComputerChoice() {
  let words = ["rock", "paper", "scissors"];
  const randomWord = words[Math.floor(Math.random() * words.length)];
  return randomWord;
}
console.log(getComputerChoice());

function getHumanChoice() {
  const choice = prompt("Ваш выбор");
  return choice;
}
const userWord = getHumanChoice();
console.log(userWord);
