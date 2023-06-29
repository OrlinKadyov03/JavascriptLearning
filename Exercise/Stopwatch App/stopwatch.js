var countDown;
var sec = 0;

function count() {
    countDown = setInterval(function() {
    const timeTwo = document.querySelector('.counter');
    timeTwo.innerHTML = formatTime(sec);
    sec++;
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return minutes + ':' + seconds;
}

document.querySelector('.js-start').addEventListener('click', () => count());

document.querySelector('.js-reset').addEventListener('click', () => {
  clearInterval(countDown);
  sec = 0;
  document.querySelector('.js-counter').innerHTML = formatTime(sec);
});

document.querySelector('.js-stop').addEventListener('click', () => {
  clearInterval(countDown);
});


