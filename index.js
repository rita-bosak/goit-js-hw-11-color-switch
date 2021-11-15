'use strict';

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
};
let intervalId = null;

refs.start.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  refs.start.setAttribute('disabled', 'disabled');

  intervalId = setInterval(() => {
    const maxColorLength = colors.length - 1;

    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, maxColorLength)];
  }, 1000);
}

refs.stop.addEventListener('click', onStopBtnClick);

function onStopBtnClick() {
  clearInterval(intervalId);
  refs.start.removeAttribute('disabled');
}
