const overlay = document.querySelector('.overlay');
const video = document.querySelector('.video');

video.addEventListener('play', (event) => {
  overlay.style.visibility = "visible";
});

window.addEventListener('beforeunload', (event) => {
  overlay.style.visibility = "hidden";
});
