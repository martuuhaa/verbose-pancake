function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hoursDisplay = document.getElementById("hours");
    const minutesDisplay = document.getElementById("minutes");
    const secondsDisplay = document.getElementById("seconds");
  
    secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
  
    if (seconds === 0) {
      minutesDisplay.style.display = "block";
      minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
    } else {
      minutesDisplay.style.display = "none";
    }
  
    if (minutes === 0 && seconds === 0) {
      hoursDisplay.style.display = "block";
      hoursDisplay.textContent = hours < 10 ? "0" + hours : hours;
    } else {
      hoursDisplay.style.display = "none";
    }
  }
    setInterval(updateClock, 1000);
    updateClock();
  