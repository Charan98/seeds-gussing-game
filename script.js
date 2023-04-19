document.addEventListener("DOMContentLoaded", function () {
    const MAX_ATTEMPTS = 7;
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    let attempts = 0;
  
    function updateRemainingAttempts() {
      const remainingAttempts = MAX_ATTEMPTS - attempts;
      document.getElementById("remaining-attempts").innerText = `Remaining attempts: ${remainingAttempts}`;
    }
  
    function displayFeedback(message) {
      document.getElementById("feedback").innerText = message;
    }
  
    function guessNumber() {
      const guess = parseInt(document.getElementById("guess-input").value);
      attempts++;
  
      if (isNaN(guess) || guess < 1 || guess > 100) {
        displayFeedback("Please enter a valid number between 1 and 100.");
        attempts--;
      } else if (guess === randomNumber) {
        displayFeedback(`Congratulations! You guessed the number (${randomNumber}) correctly.`);
        document.getElementById("submit-btn").disabled = true;
        createConfetti();
      } else if (attempts === MAX_ATTEMPTS) {
        displayFeedback(`Sorry, you ran out of attempts. The correct number was ${randomNumber}.`);
        document.getElementById("submit-btn").disabled = true;
      } else {
        let feedback = "";
        switch (true) {
          case guess > randomNumber + 10:
            feedback = "Too high!";
            break;
          case guess < randomNumber - 10:
            feedback = "Too low!";
            break;
          default:
            feedback = guess > randomNumber ? "High, but close!" : "Low, but close!";
        }
        displayFeedback(feedback);
      }
  
      updateRemainingAttempts();
    }
  
    document.getElementById("submit-btn").addEventListener("click", guessNumber);
    updateRemainingAttempts();
  });
  