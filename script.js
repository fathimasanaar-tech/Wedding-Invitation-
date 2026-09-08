function openInvitation() {
  document.querySelector(".opening").style.display = "none";
  document.querySelector("#invitation").style.display = "block";
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
const weddingDate = new Date("January 7, 2027 16:00:00").getTime();
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
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
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
setInterval(updateCountdown, 1000);
updateCountdown();
function toggleMusic() {
  const music = document.getElementById("weddingMusic");
  const button = document.getElementById("musicButton");
  if (music.paused) {
    music.play()
      .then(() => {
        button.innerText = "⏸️";
      })
      .catch(() => {
        alert("Tap the music button again to start the music.");
      });
  } else {
    music.pause();
    button.innerText = "🎵";
  }
}
