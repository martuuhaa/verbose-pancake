const typedTextElement = document.getElementById("typedText");
const cursorElement = document.getElementById("cursor");
const userTextInput = document.getElementById("userText");
const startTypingButton = document.getElementById("startTyping");

let currentIndex = 0;
let textToType = "";

startTypingButton.addEventListener("click", () => {
  textToType = userTextInput.value;
  currentIndex = 0;
  typedTextElement.textContent = "";
  userTextInput.value = "";
  startTypingButton.disabled = true;
  typeText();
});

function typeText() {
  if (currentIndex < textToType.length) {
    const char = textToType.charAt(currentIndex);
    typedTextElement.textContent += char;
    currentIndex++;
    setTimeout(typeText, 100);
  } else {
    cursorElement.style.display = "none";
    startTypingButton.disabled = false;
  }
}
