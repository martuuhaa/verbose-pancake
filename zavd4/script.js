document.getElementById("playButton").addEventListener("click", playGame);
function playGame() {
  const betAmount = parseInt(document.getElementById("betAmount").value);
  const randomValue = Math.floor(Math.random() * 11) - 5;
  setTimeout(function () {
    const resultElement = document.getElementById("result");
    if (randomValue <= 0) {
      resultElement.textContent = "Ви програли свою ставку.";
    } else {
      const winnings = betAmount * randomValue;
      resultElement.textContent = `Ви виграли ${winnings} гривень!`;
    }
  }, 1000);
}