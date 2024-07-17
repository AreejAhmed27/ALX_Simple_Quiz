function checkAnswer() {
    let correctAnswer = "4";
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    let textContent = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        textContent.innerText = "Correct! Well done."
    } else {
        textContent.innerText = "That's incorrect. Try again!";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);