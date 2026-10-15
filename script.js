function startJourney() {
  document.getElementById("story").scrollIntoView({ behavior: "smooth" });
  createHearts();
}

function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function blowCandles() {
  document.querySelectorAll(".flame").forEach(flame => flame.classList.add("out"));

  const button = document.getElementById("blowBtn");
  const message = document.getElementById("wishMessage");

  message.textContent = "Happy Birthday, AMMU! ❤️ May your dreams come true. You deserve so much happiness, today and always.";
  message.classList.add("show");
  button.textContent = "Wish Made! ❤️";
  button.disabled = true;
  createHearts();
}

const song = document.getElementById("ourSong");
const musicBtn = document.getElementById("musicBtn");
const musicNote = document.getElementById("musicNote");

async function toggleMusic() {
  if (song.paused) {
    try {
      await song.play();
      musicBtn.textContent = "❚❚ Pause Our Song";
      musicNote.textContent = "Now playing your song ❤️";
    } catch (error) {
      musicNote.textContent = "Couldn't play the song. Check that images/our-song.mp3 exists and is a valid MP3 file.";
      console.error("Music playback failed:", error);
    }
  } else {
    song.pause();
    musicBtn.textContent = "▶ Play Our Song";
    musicNote.textContent = "Paused. Tap play whenever you want.";
  }
}

song.addEventListener("ended", () => {
  musicBtn.textContent = "▶ Play Our Song";
  musicNote.textContent = "Add your MP3 file as images/our-song.mp3.";
});

function createHearts() {
  const container = document.getElementById("heartsBg");
  if (!container) return;

  // Keep a full, gently moving heart background throughout the page.
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.35 ? "♥" : "♡";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (12 + Math.random() * 26) + "px";
  heart.style.animationDuration = (8 + Math.random() * 9) + "s";
  heart.style.setProperty("--drift", (Math.random() * 100 - 50) + "px");
  heart.style.color = Math.random() > 0.45 ? "#ed334d" : "#ff8191";
  container.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove(), { once: true });
}

window.addEventListener("load", () => {
  // Fill the screen first, then keep adding hearts so they never disappear completely.
  for (let i = 0; i < 55; i++) {
    createHearts();
    const hearts = document.querySelectorAll(".floating-heart");
    const heart = hearts[hearts.length - 1];
    if (heart) {
      heart.style.animationDelay = (-Math.random() * 15) + "s";
      heart.style.opacity = "0.7";
    }
  }
  window.setInterval(createHearts, 350);
});
