// Hardcoded credentials
const USER_PASSWORD = "1234";

// Fixed allocated time (10 minutes)
const TOTAL_TIME = 10 * 60; // seconds
let remainingTime = TOTAL_TIME;

// Elements
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const errorMsg = document.getElementById("errorMsg");
const circle = document.getElementById("circle");
const timeLeft = document.getElementById("timeLeft");
const exitBtn = document.getElementById("exitBtn");

// Password screen login logic
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    if (passwordInput.value === USER_PASSWORD) {
      errorMsg.textContent = "";
      circle.classList.add("circle-animate");

      // Delay navigation to lab page to show animation
      setTimeout(() => {
        // Save remaining time to sessionStorage
        sessionStorage.setItem("remainingTime", remainingTime);
        window.location.href = "lab.html";
      }, 600);
    } else {
      errorMsg.textContent = "Incorrect Password!";
    }
  });
}

// Lab screen countdown logic
if (timeLeft) {
  // Load remaining time from sessionStorage
  remainingTime =
    parseInt(sessionStorage.getItem("remainingTime")) || TOTAL_TIME;

  const timer = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(timer);
      alert("Time is up! You have been logged out.");
      sessionStorage.setItem("remainingTime", 0);
      window.location.href = "index.html";
      return;
    }
    const mins = Math.floor(remainingTime / 60);
    const secs = remainingTime % 60;
    timeLeft.textContent = `${mins}:${secs < 10 ? "0" + secs : secs}`;
    remainingTime--;
    sessionStorage.setItem("remainingTime", remainingTime);
  }, 1000);
}

// Exit button logic
if (exitBtn) {
  exitBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
