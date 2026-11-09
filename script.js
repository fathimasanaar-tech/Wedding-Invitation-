function showRoseShower() {

// Remove any previous petals
document.querySelectorAll(".rose-petal").forEach(p => p.remove());

for (let i = 0; i < 90; i++) {

const petal = document.createElement("span");
petal.className = "rose-petal";

petal.style.left = Math.random() * 100 + "vw";

const size = 5 + Math.random() * 5;
petal.style.width = size + "px";
petal.style.height = (size * 1.4) + "px";

petal.style.opacity = 0.2 + Math.random() * 0.25;

petal.style.animationDuration = (10 + Math.random() * 5) + "s";
petal.style.animationDelay = Math.random() * 5 + "s";

petal.style.setProperty(
"--drift",
(Math.random() - 0.5) * 150 + "px"
);

document.body.appendChild(petal);

setTimeout(() => petal.remove(), 22000);
}
}

function openInvitation() {
    showRoseShower();

const music = document.getElementById("weddingMusic");
const button = document.getElementById("musicButton");

document.getElementById("opening").style.display = "none";
document.getElementById("invitation").style.display = "block";

// Start music from the opening button tap
music.volume = 0.7;

music.play()
.then(function () {
button.innerText = "Ⅱ";
})
.catch(function (error) {
console.log("Music playback error:", error);
alert("Please tap the music button to start the song.");
});

window.scrollTo({
top: 0,
behavior: "smooth"
});
  
 
}


/* =========================
   COUNTDOWN
========================= */

const weddingDate = new Date(
  "January 7, 2027 16:00:00"
).getTime();

function updateCountdown() {

  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    return;
  }

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (distance / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (distance / 1000) % 60
  );

  document.getElementById("days").innerText =
    String(days).padStart(2, "0");

  document.getElementById("hours").innerText =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").innerText =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").innerText =
    String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   MUSIC
========================= */

function toggleMusic() {

  const music = document.getElementById("weddingMusic");
  const button = document.getElementById("musicButton");

  if (music.paused) {

    music.play()
      .then(function () {
        button.innerText = "Ⅱ";
      })
      .catch(function () {
        alert("Please tap the music button again.");
      });

  } else {

    music.pause();
    button.innerText = "♪";

  }
}


/* =========================
   ADD TO CALENDAR
========================= */

function addToCalendar() {

  const title = encodeURIComponent(
    "Nikkah of Khaleelu & Fadila"
  );

  const details = encodeURIComponent(
    "Nikkah ceremony of Khaleelu Rahman & Fadila Mariyam"
  );

  const location = encodeURIComponent(
    "Rahath Melparamba"
  );

  const start = "20270107T160000";
  const end = "20270107T180000";

  const googleCalendar =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" + title +
    "&dates=" + start + "/" + end +
    "&details=" + details +
    "&location=" + location;

  window.open(
    googleCalendar,
    "_blank"
  );
}


