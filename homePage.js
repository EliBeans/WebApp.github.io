let svgContainer = document.getElementById("lottie-birdAnimation");

let animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  autoplay: true,
  path: "Animation - 1747219548213.json"
});

const bgSound = new Audio("sounds/SeagullBackground.mp3");
bgSound.loop = true;

const soundBtn = document.getElementById("soundToggle");
let isPlaying = false;

soundBtn.addEventListener("click", () => {
    if (isPlaying) {
        bgSound.pause();
        soundBtn.innerText = "🔇";
    } else {
        bgSound.play();
        soundBtn.innerText = "🎵";
    }
    isPlaying = !isPlaying;
});

svgContainer.style.display = "block";

const lastScore = localStorage.getItem("lastScore");

if (lastScore !== null) {
    document.getElementById("lastScoreText").innerText = "Level 0 (last score): " + lastScore;
} else {
    document.getElementById("lastScoreText").innerText = "No previous score yet.";
}

const lastScorelvl1 = localStorage.getItem("lastScorelvl1");

if (lastScorelvl1 !== null) {
    document.getElementById("lastScoreTextlvl1").innerText = "Level 1 (last score): " + lastScorelvl1;
} else {
    document.getElementById("lastScoreTextlvl1").innerText = "No previous score yet.";
}

const lastScorelvl2 = localStorage.getItem("lastScorelvl2");

if (lastScorelvl2 !== null) {
    document.getElementById("lastScoreTextlvl2").innerText = "Level 2 (last score): " + lastScorelvl2;
} else {
    document.getElementById("lastScoreTextlvl2").innerText = "No previous score yet.";
    
}
