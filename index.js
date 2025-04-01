const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");
const feelEl = document.getElementById("feel");

function computeTemp(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      kelvinEl.value = (currentValue + 273.32).toFixed(2);
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      updateTemperatureFeel(currentValue);
      break;

    case "fahrenheit":
      let celsiusVal = ((currentValue - 32) / 1.8);
      celsiusEl.value = celsiusVal.toFixed(2);
      kelvinEl.value = (celsiusVal + 273.32).toFixed(2);
      updateTemperatureFeel(celsiusVal);
      break;

    case "kelvin":
      let celsiusFromKelvin = (currentValue - 273.32);
      celsiusEl.value = celsiusFromKelvin.toFixed(2);
      fahrenheitEl.value = ((celsiusFromKelvin * 1.8) + 32).toFixed(2);
      updateTemperatureFeel(celsiusFromKelvin);
      break;
  }
}

// function updateTemperatureFeel(celsius) {
//   if (celsius > 35) {
//     feelEl.innerHTML = "🌡️ Temperature Feel: Hot 🔥";
//   } else if (celsius >= 25) {
//     feelEl.innerHTML = "🌡️ Temperature Feel: Warm ☀️";
//   } else if (celsius >= 10) {
//     feelEl.innerHTML = "🌡️ Temperature Feel: Cool ❄️";
//   } else {
//     feelEl.innerHTML = "🌡️ Temperature Feel: Cold 🥶";
//   }
// }

function updateTemperatureFeel(celsius) {
  const body = document.body;
  
  if (celsius > 35) {
    feelEl.innerHTML = "🌡️ Temperature Feel: Hot 🔥";
    body.style.background = "linear-gradient(to left bottom, red, orange)";
  } else if (celsius >= 25) {
    feelEl.innerHTML = "🌡️ Temperature Feel: Warm ☀️";
    body.style.background = "linear-gradient(to left bottom, yellow, lightgreen)";
  } else if (celsius >= 10) {
    feelEl.innerHTML = "🌡️ Temperature Feel: Cool ❄️";
    body.style.background = "linear-gradient(to left bottom, blue, white)";
  } else {
    feelEl.innerHTML = "🌡️ Temperature Feel: Cold 🥶";
    body.style.background = "linear-gradient(to left bottom, darkblue, black)";
  }
}


let quizTemp = 0;
let score = 0;

function generateQuiz() {
  quizTemp = Math.floor(Math.random() * 51) - 10; // Random temp between -10 and 50
  document.getElementById("quiz-temp").innerText = quizTemp;
  document.getElementById("quiz-result").innerText = "";
}

function checkAnswer(choice) {
  let correctAnswer = "";

  if (quizTemp > 35) {
    correctAnswer = "Hot";
  } else if (quizTemp >= 25) {
    correctAnswer = "Warm";
  } else if (quizTemp >= 10) {
    correctAnswer = "Cool";
  } else {
    correctAnswer = "Cold";
  }

  if (choice === correctAnswer) {
    document.getElementById("quiz-result").innerText = "✅ Correct!";
    score++;
  } else {
    document.getElementById("quiz-result").innerText = `❌ Wrong! It's ${correctAnswer}.`;
  }

  document.getElementById("quiz-score").innerText = score;
}

// Start the first quiz round
generateQuiz();

