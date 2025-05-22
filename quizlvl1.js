const lottieContainerlvl1 = document.getElementById("lottie-animationlvl1");

const lottiePlayerlvl1 = lottie.loadAnimation({
    container: lottieContainerlvl1,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "Animation - 1747213146953.json" 
});

const lottieContainerWronglvl1 = document.getElementById("lottie-animation-wronglvl1");

const lottiePlayerWronglvl1 = lottie.loadAnimation({
    container: lottieContainerWronglvl1,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "Animation - 1747214355699.json" 
});

const questionslvl1 = [
    { questionlvl1: "1) 8 + 5", optionslvl1: ["14", "12", "13", "15"], answerlvl1: "13" },
    { questionlvl1: "2) 9 - 4", optionslvl1: ["3", "4", "6", "5"], answerlvl1: "5" },
    { questionlvl1: "3) 6 × 7", optionslvl1: ["36", "42", "48", "40"], answerlvl1: "42" },
    { questionlvl1: "4) 12 ÷ 3", optionslvl1: ["4", "3", "5", "6"], answerlvl1: "4" },
    { questionlvl1: "5) 11 + 2", optionslvl1: ["13", "14", "12", "15"], answerlvl1: "13" },
    { questionlvl1: "6) 10 - 6", optionslvl1: ["3", "4", "5", "2"], answerlvl1: "4" },
    { questionlvl1: "7) 3 × 4", optionslvl1: ["12", "9", "15", "10"], answerlvl1: "12" },
    { questionlvl1: "8) 8 ÷ 4", optionslvl1: ["1", "2", "3", "4"], answerlvl1: "2" },
    { questionlvl1: "9) 7 + 6", optionslvl1: ["14", "13", "12", "15"], answerlvl1: "13" },
    { questionlvl1: "10) 9 - 2", optionslvl1: ["8", "6", "7", "5"], answerlvl1: "7" }
];

let currentQuestionlvl1 = 0;
let scorelvl1 = 0;
let timer;
let timeLeft;
let quizActive = true;

function startTimer() {
    clearInterval(timer);
    timeLeft = 20;
    document.getElementById("timerlvl1").innerText = `Time left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timerlvl1").innerText = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            quizActive = false;
            alert("Time's up!");
            currentQuestionlvl1++;
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    if (currentQuestionlvl1 >= questionslvl1.length) {
        endQuiz();
        return;
    }

    quizActive = true;

    const q = questionslvl1[currentQuestionlvl1];
    document.getElementById("questionlvl1").innerText = q.questionlvl1;
    document.getElementById("option1lvl1").innerText = q.optionslvl1[0];
    document.getElementById("option2lvl1").innerText = q.optionslvl1[1];
    document.getElementById("option3lvl1").innerText = q.optionslvl1[2];
    document.getElementById("option4lvl1").innerText = q.optionslvl1[3];

    document.getElementById("option1lvl1").style.display = "inline-block";
    document.getElementById("option2lvl1").style.display = "inline-block";
    document.getElementById("option3lvl1").style.display = "inline-block";
    document.getElementById("option4lvl1").style.display = "inline-block";

    document.getElementById("scorelvl1").innerText = "";
    startTimer();
}


function checkAnswer(userAnswerlvl1) {
    if (!quizActive) return;

    clearInterval(timer);
    quizActive = false;

    const correct = questionslvl1[currentQuestionlvl1].answerlvl1;
    if (userAnswerlvl1 === correct) {
        alert("Correct!");
        scorelvl1++;
        
        lottieContainerlvl1.style.display = "block";
        lottiePlayerlvl1.goToAndPlay(0, true);
        
        setTimeout(() => {
            lottieContainerlvl1.style.display = "none";
            currentQuestionlvl1++;
            nextQuestion();
        }, 2500);
    } else {
        alert("Sorry, that's not correct.");
        
        
        lottieContainerWronglvl1.style.display = "block";
        lottiePlayerWronglvl1.goToAndPlay(0, true);
        
        setTimeout(() => {
            lottieContainerWronglvl1.style.display = "none";
            currentQuestionlvl1++;
            nextQuestion();
        }, 2500);
    }
}

function endQuiz() {
    clearInterval(timer);
    quizActive = false;

    document.getElementById("questionlvl1").innerText = "Quiz complete!";
    document.getElementById("scorelvl1").innerText = "Final score: " + scorelvl1;
    document.getElementById("timerlvl1").style.display = "none";

    document.getElementById("option1lvl1").style.display = "none";
    document.getElementById("option2lvl1").style.display = "none";
    document.getElementById("option3lvl1").style.display = "none";
    document.getElementById("option4lvl1").style.display = "none";

    document.getElementById("backHome").style.display = "inline-block";

    localStorage.setItem("lastScorelvl1", scorelvl1);
}


document.getElementById("option1lvl1").addEventListener("click", () => {
    checkAnswer(document.getElementById("option1lvl1").innerText);
});
document.getElementById("option2lvl1").addEventListener("click", () => {
    checkAnswer(document.getElementById("option2lvl1").innerText);
});
document.getElementById("option3lvl1").addEventListener("click", () => {
    checkAnswer(document.getElementById("option3lvl1").innerText);
});
document.getElementById("option4lvl1").addEventListener("click", () => {
    checkAnswer(document.getElementById("option4lvl1").innerText);
});


nextQuestion();
