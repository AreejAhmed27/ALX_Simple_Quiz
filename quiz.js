function checkAnswer() {
    const correctAnswer = "4";
    document.getElementsByName("quiz");
    let userAnswer = document.querySelectorAll("input").value;
    let textContent = document.getElementById("feedback");

    if(userAnswer == correctAnswer){
        textContent.innerText = "Correct! Well done.";
        console.log(textContent.innerText);
    }else{
        textContent.innerText = "That's incorrect. Try again!";
        console.log(textContent.innerText);
    }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);    