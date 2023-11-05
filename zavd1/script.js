function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }
  
  function updateClock() {
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());
  
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  setInterval(updateClock, 1000);
  updateClock();
  