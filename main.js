function getComputerChoice() {
  let words = ["rock", "paper", "scissors"];
  const randomWord = words[Math.floor(Math.random() * words.length)];
  return randomWord;
}

console.log(getComputerChoice());
