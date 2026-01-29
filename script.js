const intro = "Hey Beautiful, I have a surprise for you 💖";
const cardMsg = "You make my world brighter every day. Happy Birthday ❤️";

let i = 0, j = 0;

function typeIntro() {
  if (i < intro.length) {
    typing.innerHTML += intro.charAt(i++);
    setTimeout(typeIntro, 80);
  } else {
    setTimeout(() => {
      document.getElementById("intro").style.display = "none";
      document.getElementById("envelopeSection").classList.remove("hidden");
      typeCard();
    }, 1500);
  }
}

function typeCard() {
  if (j < cardMsg.length) {
    cardText.innerHTML += cardMsg.charAt(j++);
    setTimeout(typeCard, 60);
  }
}

next.onclick = () => {
  envelopeSection.style.display = "none";
  videoSection.classList.remove("hidden");
};

typeIntro();
