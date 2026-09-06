// ==========================================
// WEDDING DATE
// ==========================================
const weddingDate = new Date(
  "January 7, 2027 16:00:00"
).getTime();
// ==========================================
// COUNTDOWN
// ==========================================
function updateCountdown() {
  const now = new Date().getTime();
  const difference = weddingDate - now;
  if (difference <= 0) {
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    return;
  }
  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );
  const seconds = Math.floor(
    (difference / 1000) % 60
  );
  document.getElementById("days").innerHTML =
    String(days).padStart(2, "0");
  document.getElementById("hours").innerHTML =
    String(hours).padStart(2, "0");
  document.getElementById("minutes").innerHTML =
    String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerHTML =
    String(seconds).padStart(2, "0");
}
// Update every second
updateCountdown();
setInterval(updateCountdown, 1000);
// ==========================================
// SCROLL ANIMATION
// ==========================================
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform =
          "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15
  }
);
sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform =
    "translateY(30px)";
  section.style.transition =
    "opacity 1s ease, transform 1s ease";
  observer.observe(section);
});
// ==========================================
// PREVENT FLASH ON FIRST SECTION
// ==========================================
window.addEventListener("load", () => {
  document.querySelector(".hero").style.opacity = "1";
  document.querySelector(".hero").style.transform =
    "translateY(0)";
});