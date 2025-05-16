const head = document.getElementById('funkyHead');
const music = document.getElementById('bg-music');

let direction = 1;
const bpm = 130;
const interval = (60 / bpm) * 1000; // Duration per beat

function dance() {
  if (!music.paused) {
    const angle = direction * 15;
    head.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    direction *= -1;
  }
}

setInterval(dance, interval / 2); // Twice per beat for a bouncy effect
