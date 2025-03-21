const valueStorage = document.querySelector("input");
const bgValueStorage = document.querySelector('.used')
const avaliableStorage = document.querySelector(".avaliable");
const logo = document.querySelector(".logo")
const icons = document.querySelectorAll('.icon')

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    confetti()
  })
})

logo.addEventListener('click', () => {
  var end = Date.now() + (15 * 1000);

  var colors = ['#ffa399', '#ff4d97'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
})

valueStorage.addEventListener("input", () => {
  confetti({
    particleCount: 60,
    spread: 150,
    origin: { y: 0.5 }
  });

  updatePosition()
});

function updatePosition() {
  const valorAtual = 1000 - valueStorage.value;

  const percent = (Number(valueStorage.value) / 1000) * 100;

  bgValueStorage.style.width = `${percent}%`;

  avaliableStorage.textContent = valorAtual;
}

updatePosition()
