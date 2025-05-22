const lottieContainer = document.getElementById("lottie-animation");

const lottiePlayer = lottie.loadAnimation({
    container: lottieContainer,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "Animation - 1747213146953.json" 
});

const lottieContainerWrong = document.getElementById("lottie-animation-wrong");

const lottiePlayerWrong = lottie.loadAnimation({
    container: lottieContainerWrong,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "Animation - 1747214355699.json" 
});
var questions = [
    { question: "1) 9 + 12", options: ["23", "22", "21", "20"], answer: "21" },
    { question: "2) 3 x 6", options: ["16", "18", "12", "17"], answer: "18" },
    { question: "3) 12 - 3", options: ["15", "9", "8", "10"], answer: "9" },
    { question: "4) 9 x 5", options: ["45", "50", "40", "36"], answer: "45" },
    { question: "5) 8 / 2", options: ["3", "2", "6", "4"], answer: "4" },
    { question: "6) 11 + 12", options: ["24", "22", "23", "25"], answer: "23" },
    { question: "7) 12 - 11", options: ["23", "2", "1", "24"], answer: "1" },
    { question: "8) 10 / 10", options: ["0", "1", "10", "100"], answer: "1" },
    { question: "9) 6 x 7", options: ["40", "49", "52", "42"], answer: "42" },
    { question: "10) 5 + 9", options: ["14", "15", "16", "17"], answer: "14" }
];

var currentQuestion = 0;
var score = 0;

function nextQuestion() {
    if (currentQuestion < questions.length) {
        var q = questions[currentQuestion];
        document.getElementById("question").innerText = q.question;
        document.getElementById("option1").innerText = q.options[0];
        document.getElementById("option2").innerText = q.options[1];
        document.getElementById("option3").innerText = q.options[2];
        document.getElementById("option4").innerText = q.options[3];
    } else {
        endQuiz();
    }
}



function checkAnswer(userAnswer) {
    if (userAnswer === questions[currentQuestion].answer) {
        alert("Correct!");
        playCorrectSound();
        score++;
    
        lottieContainer.style.display = "block";
        lottiePlayer.goToAndPlay(0, true);
        
        setTimeout(() => {
            lottieContainer.style.display = "none";
        }, 2500);
    } else {
        alert("Sorry, that's not correct.");
        playWrongSound();

        lottieContainerWrong.style.display = "block";
        lottiePlayerWrong.goToAndPlay(0, true);
        
        setTimeout(() => {
            lottieContainerWrong.style.display = "none";
        }, 2500);
    }
    currentQuestion++;
    nextQuestion();
}

function endQuiz() {
    document.getElementById("question").innerText = "Quiz complete!";
    document.getElementById("score").innerText = "Final score: " + score;

    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "none";
    document.getElementById("option3").style.display = "none";
    document.getElementById("option4").style.display = "none";

    localStorage.setItem("lastScore", score);
    document.getElementById("backHome").style.display = "inline-block";
}

document.getElementById("option1").addEventListener("click", function() {
    checkAnswer(document.getElementById("option1").innerText);
});
document.getElementById("option2").addEventListener("click", function() {
    checkAnswer(document.getElementById("option2").innerText);
});
document.getElementById("option3").addEventListener("click", function() {
    checkAnswer(document.getElementById("option3").innerText);
});
document.getElementById("option4").addEventListener("click", function() {
    checkAnswer(document.getElementById("option4").innerText);
});

const correctSound = new Audio("sounds/TreeGrowingSound.mp3");
const wrongSound = new Audio("sounds/WrongBuzzer.mp3");


function playCorrectSound() {
    correctSound.currentTime = 0;
    correctSound.play();
}

// Play on wrong answer
function playWrongSound() {
    wrongSound.currentTime = 0;
    wrongSound.play();
}

// Start background music


nextQuestion();