const lottieContainerlvl2 = document.getElementById("lottie-animationlvl2");

const lottiePlayerlvl2 = lottie.loadAnimation({
    container: lottieContainerlvl2,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "Animation - 1747213146953.json" 
});

const lottieContainerWronglvl2 = document.getElementById("lottie-animation-wronglvl2");

const lottiePlayerWronglvl2 = lottie.loadAnimation({
    container: lottieContainerWronglvl2,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "Animation - 1747214355699.json" 
});

const questionslvl2 = [
    { questionlvl2: "1) 7 + 3", optionslvl2: ["9", "11", "10", "8"], answerlvl2: "10" },
    { questionlvl2: "2) 12 - 5", optionslvl2: ["8", "6", "7", "9"], answerlvl2: "7" },
    { questionlvl2: "3) 4 × 6", optionslvl2: ["24", "20", "22", "26"], answerlvl2: "24" },
    { questionlvl2: "4) 9 ÷ 3", optionslvl2: ["2", "3", "4", "5"], answerlvl2: "3" },
    { questionlvl2: "5) 10 + 2", optionslvl2: ["11", "13", "12", "14"], answerlvl2: "12" },
    { questionlvl2: "6) 8 - 6", optionslvl2: ["1", "3", "2", "4"], answerlvl2: "2" },
    { questionlvl2: "7) 5 × 2", optionslvl2: ["10", "12", "9", "8"], answerlvl2: "10" },
    { questionlvl2: "8) 6 ÷ 2", optionslvl2: ["4", "2", "3", "1"], answerlvl2: "3" },
    { questionlvl2: "9) 11 - 8", optionslvl2: ["4", "2", "3", "5"], answerlvl2: "3" },
    { questionlvl2: "10) 3 × 3", optionslvl2: ["9", "6", "8", "7"], answerlvl2: "9" }
];

let currentQuestionlvl2 = 0;
let scorelvl2 = 0;
let timer;
let timeLeft;
let quizActive = true;

function startTimer() {
    clearInterval(timer);
    timeLeft = 10;
    document.getElementById("timerlvl2").innerText = `Time left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timerlvl2").innerText = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            quizActive = false;
            alert("Time's up!");
            currentQuestionlvl2++;
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    if (currentQuestionlvl2 >= questionslvl2.length) {
        endQuiz();
        return;
    }

    quizActive = true;

    const q = questionslvl2[currentQuestionlvl2];
    document.getElementById("questionlvl2").innerText = q.questionlvl2;
    document.getElementById("option1lvl2").innerText = q.optionslvl2[0];
    document.getElementById("option2lvl2").innerText = q.optionslvl2[1];
    document.getElementById("option3lvl2").innerText = q.optionslvl2[2];
    document.getElementById("option4lvl2").innerText = q.optionslvl2[3];

    document.getElementById("option1lvl2").style.display = "inline-block";
    document.getElementById("option2lvl2").style.display = "inline-block";
    document.getElementById("option3lvl2").style.display = "inline-block";
    document.getElementById("option4lvl2").style.display = "inline-block";

    document.getElementById("scorelvl2").innerText = "";
    startTimer();
}

function checkAnswer(userAnswerlvl2) {
    if (!quizActive) return;

    clearInterval(timer);
    quizActive = false;

    const correct = questionslvl2[currentQuestionlvl2].answerlvl2;
    if (userAnswerlvl2 === correct) {
        alert("Correct!");
        scorelvl2++;
        
        lottieContainerlvl2.style.display = "block";
        lottiePlayerlvl2.goToAndPlay(0, true);
        
        setTimeout(() => {
            lottieContainerlvl2.style.display = "none";
            currentQuestionlvl2++;
            nextQuestion();
        }, 2500);
    } else {
        alert("Sorry, that's not correct.");
        
        
        lottieContainerWronglvl2.style.display = "block";
        lottiePlayerWronglvl2.goToAndPlay(0, true);
        
        setTimeout(() => {
            lottieContainerWronglvl2.style.display = "none";
            currentQuestionlvl2++;
            nextQuestion();
        }, 2500);
    }
}


function endQuiz() {
    clearInterval(timer);
    quizActive = false;

    document.getElementById("questionlvl2").innerText = "Quiz complete!";
    document.getElementById("scorelvl2").innerText = "Final score: " + scorelvl2;
    document.getElementById("timerlvl2").style.display = "none";

    document.getElementById("option1lvl2").style.display = "none";
    document.getElementById("option2lvl2").style.display = "none";
    document.getElementById("option3lvl2").style.display = "none";
    document.getElementById("option4lvl2").style.display = "none";

    document.getElementById("backHome").style.display = "inline-block";

    localStorage.setItem("lastScorelvl2", scorelvl2);
}


document.getElementById("option1lvl2").addEventListener("click", () => {
    checkAnswer(document.getElementById("option1lvl2").innerText);
});
document.getElementById("option2lvl2").addEventListener("click", () => {
    checkAnswer(document.getElementById("option2lvl2").innerText);
});
document.getElementById("option3lvl2").addEventListener("click", () => {
    checkAnswer(document.getElementById("option3lvl2").innerText);
});
document.getElementById("option4lvl2").addEventListener("click", () => {
    checkAnswer(document.getElementById("option4lvl2").innerText);
});


nextQuestion();
