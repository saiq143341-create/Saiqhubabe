const introText = "Happy Birthday My Girl";
const cardMessage = "You are the best thing that ever happened to me. ❤️";

const stage1 = document.getElementById('stage-1');
const stage2 = document.getElementById('stage-2');
const stage3 = document.getElementById('stage-3');
const envelope = document.getElementById('envelope');
const cardContent = document.getElementById('card-content');
const nextBtn = document.getElementById('btn-show-video');
const video = document.getElementById('birthday-video');

// Typing Intro function
let charIndex = 0;
function typeIntro() {
    if (charIndex < introText.length) {
        document.getElementById('intro-text').innerHTML += introText.charAt(charIndex);
        charIndex++;
        setTimeout(typeIntro, 150);
    } else {
        setTimeout(goToStage2, 2000);
    }
}

function goToStage2() {
    stage1.style.opacity = '0';
    setTimeout(() => {
        stage1.style.display = 'none';
        stage2.style.display = 'flex';
        setTimeout(() => { stage2.style.opacity = '1'; }, 50);
    }, 1000);
}

envelope.onclick = function() {
    if (!this.classList.contains('open')) {
        this.classList.add('open');
        setTimeout(() => typeCard(0), 1000);
    }
};

function typeCard(i) {
    if (i < cardMessage.length) {
        cardContent.innerHTML += cardMessage.charAt(i);
        setTimeout(() => typeCard(i + 1), 50);
    } else {
        nextBtn.style.display = 'block';
    }
}

nextBtn.onclick = function(e) {
    e.stopPropagation();
    stage2.style.opacity = '0';
    setTimeout(() => {
        stage2.style.display = 'none';
        stage3.style.display = 'flex';
        stage3.style.opacity = '1';
        video.play();
    }, 1000);
};

// Start immediately
window.onload = typeIntro;
