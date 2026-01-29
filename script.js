const introText = "Happy Birthday My Girl";
const cardMessage = "To the most amazing person... You make every day brighter just by being you. I hope your day is as wonderful as your heart is. ❤️";

const stage1 = document.getElementById('stage-1');
const stage2 = document.getElementById('stage-2');
const stage3 = document.getElementById('stage-3');
const envelope = document.getElementById('envelope');
const cardContent = document.getElementById('card-content');
const nextBtn = document.getElementById('btn-show-video');
const video = document.getElementById('birthday-video');

// 1. Initial Typing Animation
let i = 0;
function typeIntro() {
    if (i < introText.length) {
        document.getElementById('intro-text').innerHTML += introText.charAt(i);
        i++;
        setTimeout(typeIntro, 100);
    } else {
        // After typing and heart drawing (approx 5s total), switch stages
        setTimeout(transitionToEnvelope, 2000);
    }
}

function transitionToEnvelope() {
    stage1.style.opacity = '0';
    setTimeout(() => {
        stage1.style.display = 'none';
        stage2.style.display = 'flex';
        stage2.style.opacity = '1';
    }, 1000);
}

// 2. Open Envelope & Type Card Message
envelope.addEventListener('click', () => {
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
        setTimeout(() => typeCard(0), 1000);
    }
});

function typeCard(charIndex) {
    if (charIndex < cardMessage.length) {
        cardContent.innerHTML += cardMessage.charAt(charIndex);
        setTimeout(() => typeCard(charIndex + 1), 50);
    } else {
        nextBtn.style.display = 'block';
    }
}

// 3. Final Video Stage
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents envelope clicks
    stage2.style.opacity = '0';
    setTimeout(() => {
        stage2.style.display = 'none';
        stage3.style.display = 'flex';
        video.play();
    }, 1000);
});

// Start the sequence
window.onload = typeIntro;
