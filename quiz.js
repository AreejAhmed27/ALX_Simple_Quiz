function checkAnswer() {
    const correctAnswer = "4";
    document.querySelector("input").value;
    let userAnswer = document.getElementsByName("quiz");
    let textContent = document.getElementById("feedback");

    if(userAnswer[0].checked){
        textContent.innerText = "Correct! Well done.";
        console.log(textContent.innerText);
    }else{
        textContent.innerText = "That's incorrect. Try again!";
        console.log(textContent.innerText);
    }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);    
