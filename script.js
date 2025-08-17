let progressInPage = document.querySelector(".progress-page");
let linksLi = document.querySelector("header nav .menu");
let links = document.querySelector("header nav .links");
let skillsSection = document.querySelector(".skills");
let progSpans = document.querySelectorAll(".skills .con span");
let daysSpan = document.querySelector(".events .box .days");
let hoursSpan = document.querySelector(".events .box .hours");
let minutesSpan = document.querySelector(".events .box .minutes");
let secondsSpan = document.querySelector(".events .box .seconds");
let statsSection = document.querySelector(".stats");
let statsSpans = document.querySelectorAll(".stats .card span");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let startProg = false;
  let startSpans = false;
  let duration = 2000;
  let finalDate = new Date("Jan 1, 2028");
  linksLi.onclick = () => {
    links.classList.toggle("active");
  }
let timer = setInterval(() => {
  let today = new Date();
  let waitingTime = finalDate - today;
  let days = Math.trunc(waitingTime / (1000 * 60 * 60 * 24));
  let hours = Math.trunc(
    (waitingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.trunc((waitingTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.trunc((waitingTime % (1000 * 60)) / 1000);
  daysSpan.innerHTML = days < 10 ? `0${days}` : days;
  hoursSpan.innerHTML = hours < 10 ? `0${hours}` : hours;
  minutesSpan.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  secondsSpan.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
window.onscroll = () => {
  progressInPage.style.width = `${
    (document.documentElement.scrollTop * 100) / height
  }%`;
  if (skillsSection.offsetTop - 350 < window.scrollY) {
    if (!startProg) {
        startProg = true;
        progSpans.forEach(prog => {
            prog.style.width = prog.dataset.text;
        })
    }
  }
  if (statsSection.offsetTop - 350 < window.scrollY) {
    if (!startSpans) {
        startSpans = true;
        statsSpans.forEach(span => {
            let goal = span.dataset.num;
            let counter = setInterval(() => {
                span.textContent++;
                if (span.textContent == goal) {
                    clearInterval(counter);
                }
            }, duration / goal)
        })
    }
  }
};
