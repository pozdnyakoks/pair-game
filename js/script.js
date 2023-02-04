import starter from './starter.js';
import { Card, AmazingCard } from './card.js';

starter();
const SEC = 60;

const wrapperModal = document.querySelector('.wrapper-modal');
const timeCount = document.querySelector('.timer');
const wrapper = document.querySelector('.wrapper');
const btnChoice = document.querySelector('.button-choice');
const btn = document.querySelector('.btn');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');

btn.disabled = true;
let timer;
let seconds = SEC;

function countdown() {
  timeCount.innerHTML = `Осталось: ${seconds} сек`;
  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(timer);
    wrapper.style.pointerEvents = 'none';
    alert('Время вышло :(');
    btn.disabled = false;
    btn.addEventListener('click', function () {
      location.reload();
    });
  }
}

function game(container, cardsCount) {
  let cardsNumberArray = [],
    cardsArray = [],
    firstCard = null,
    secondCard = null;

  for (let i = 1; i <= cardsCount / 2; i++) {
    cardsNumberArray.push(i);
    cardsNumberArray.push(i);
  }

  cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

  for (const cardNumber of cardsNumberArray) {
    cardsArray.push(
      new AmazingCard(container, cardNumber, pair).createElement()
    );
  }
  setTimeout(() => {
    let cards = document.querySelectorAll('.cards');
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove('is-flipped');
      wrapper.style.pointerEvents = 'auto';
    }
  }, 3000);

  function pair(cards) {
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.cardNumber !== secondCard.cardNumber) {
        firstCard.open = false;
        secondCard.open = false;
        firstCard = null;
        secondCard = null;
      }
    }

    if (firstCard == null) {
      firstCard = cards;
    } else {
      if (secondCard == null) {
        secondCard = cards;
      }
    }

    if (firstCard !== null && secondCard !== null) {
      if (firstCard.cardNumber == secondCard.cardNumber) {
        firstCard.success = true;
        secondCard.success = true;
        firstCard = null;
        secondCard = null;
      }
    }

    if (
      document.querySelectorAll('.cards.success').length ==
      cardsNumberArray.length
    ) {
      alert('Вы нашли все пары');
      btn.disabled = false;
      clearInterval(timer);
      btn.addEventListener('click', function () {
        container.innerHTML = '';
        cardsNumberArray = [];
        cardsArray = [];
        firstCard = null;
        secondCard = null;
        seconds = SEC;
        wrapper.innerHTML = '';
        wrapperModal.classList.add('active');
      });
    }
  }
}

btnChoice.addEventListener('click', function (ev) {
  ev.preventDefault();
  wrapperModal.classList.remove('active');
  let amount = choice1.value * choice2.value;
  game(wrapper, amount);
  wrapper.style.pointerEvents = 'none';
  setTimeout(() => {
    timer = setInterval(countdown, 1000);
  }, 3000)
});
