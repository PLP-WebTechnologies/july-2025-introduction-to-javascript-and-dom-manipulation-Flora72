// Part 1: Variables & Conditionals
let userName = "Mariposa";
let isReady = true;

if (isReady) {
  console.log(`${userName} is ready to begin her metamorphosis.`);
} else {
  console.log(`Let’s give ${userName} a moment to prepare.`);
}

// Part 2: Custom Functions
function greetUser(name) {
  return `Hello, ${name}. Your wings are waiting.`;
}

function generateMetaphor(stage) {
  return `Stage: ${stage} — a moment of ${
    stage === "Cocoon"
      ? "stillness"
      : stage === "Emergence"
      ? "awakening"
      : stage === "Flight"
      ? "freedom"
      : "growth"
  }.`;
}

// my countdown 
function showCountdown(seconds) {
  const countdownEl = document.getElementById("countdownDisplay");
  let current = seconds;

  const interval = setInterval(() => {
    countdownEl.textContent = `Transforming in ${current}...`;
    current--;

    if (current < 0) {
      clearInterval(interval);
      countdownEl.textContent = ""; 
    }
  }, 1000);
}

// Part 3: Loops
const stages = ["Cocoon", "Emergence", "Flight", "Reflection"];

for (let i = 0; i < stages.length; i++) {
  console.log(`Stage ${i + 1}: ${stages[i]}`);
}

// Part 4: DOM Interactions
document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById("greeting");
  const message = document.getElementById("message");
  const button = document.getElementById("startBtn");
  const list = document.getElementById("loopList");
  const finalReveal = document.getElementById("finalReveal");

  let transformed = false;

  button.addEventListener("click", () => {
    if (!transformed) {
      transformed = true;

      // Update message
      message.textContent = greetUser(userName);

      // Animate heading
      greeting.classList.toggle("highlight");

      // Show countdown
      showCountdown(3);

      // Reveal stages with metaphors
      list.innerHTML = "";
      stages.forEach((stage, index) => {
        setTimeout(() => {
          const li = document.createElement("li");
          li.textContent = generateMetaphor(stage);
          li.classList.add("fade-in");
          list.appendChild(li);
        }, index * 400);
      });

      // Evolve button
      button.textContent = "Emerge";
    } else {
      // Final reveal
      finalReveal.style.display = "block";
      button.style.display = "none";
    }
  });
});
