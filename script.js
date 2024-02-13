"use strict";

const titleElement = document.querySelector("#title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const clickMeButton = document.querySelector(".btn--click-me");
const clickMeButtonDiv = document.getElementById("click-me-div");
const video = document.getElementById("video");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

function handleYesClick() {
  titleElement.innerHTML = "I'm very happy now🥰";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  clickMeButtonDiv.style.display = "block";
}

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    updateTitle();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

clickMeButton.addEventListener("click", function () {
  titleElement.innerHTML = "Now watch this video😊";
  clickMeButtonDiv.style.display = "none";
  video.style.display= "block";
  catImg.classList.add("hidden");
});

function updateTitle() {
  const titles = [
    "", // eerste staat al statisch in html
    "Think about it again",
    "Are you really sure?",
    "I'm begging you🥹",
    "Really no??",
    "Please say yes",
  ];

  const titleIndex = Math.min(noCount, titles.length - 1);
  titleElement.innerHTML = titles[titleIndex];
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?🥺",
    "Pookie pwease",
    "Don't do this to me :(",
    "You're breaking my heart",
    "Otherwise I'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}`;
  if (image == 1 || image == 2 || image == 3 || image == 4 || image == "yes") {
    catImg.src += ".gif";
  }
  else {
    catImg.src += ".jpg";
  }
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}