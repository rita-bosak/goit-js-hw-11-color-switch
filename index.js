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
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  refs.startBtn.disabled = true;

  intervalId = setInterval(() => {
    changeBgColor();
  }, 1000);
}

refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStopBtnClick() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}

function changeBgColor() {
  const maxColorLength = colors.length - 1;

  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, maxColorLength)];
}
