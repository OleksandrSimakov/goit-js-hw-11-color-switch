// import
import './styles.css';

// const
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  bodyEl: document.querySelector('body'),
};
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const COLOR_CHANGE_DELAY = 1000;
var intervalId = null;

// element selection
refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);

// functions
function onStartClick() {
  disableStart();
  intervalId = setInterval(() => {
    console.log(randomIntegerFromInterval(0, colors.length));
    refs.bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
  }, COLOR_CHANGE_DELAY);
}

function disableStart() {
  refs.start.setAttribute('disabled', true)
}

function onStopClick() {
  enableStart();
  clearInterval(intervalId);
}

function enableStart() {
  refs.start.removeAttribute('disabled',true)
}
