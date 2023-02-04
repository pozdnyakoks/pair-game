export default function starter() {
  const container = document.querySelector('.container');

  const capture = document.createElement('h1');
  const wrapperModal = document.createElement('div');
  const form = document.createElement('form');
  const captureChoice1 = document.createElement('h2');
  const span1 = document.createElement('span');
  const input1 = document.createElement('input');

  const captureChoice2 = document.createElement('h2');
  const span2 = document.createElement('span');
  const input2 = document.createElement('input');
  const button = document.createElement('button');

  function setAttributesToInput(input) {
    input.setAttribute('type', 'range');
    input.setAttribute('step', '2');
    input.setAttribute('min', '2');
    input.setAttribute('max', '10');
    input.setAttribute('value', '4');
    input.classList.add('input-choice');
  }

  capture.textContent = 'Игра в пары';
  wrapperModal.classList.add('wrapper-modal', 'active');

  form.classList.add('modal-window');
  form.setAttribute('action', '/');

  captureChoice1.classList.add('capture-choice');
  captureChoice1.textContent = 'Количество карточек по вертикали:';

  span1.classList.add('number');
  span1.setAttribute('id', 'number1');
  setAttributesToInput(input1);
  input1.setAttribute('id', 'choice1');

  captureChoice2.classList.add('capture-choice');
  captureChoice2.textContent = 'Количество карточек по горизонтали:';

  span2.classList.add('number');
  span2.setAttribute('id', 'number2');
  setAttributesToInput(input2);
  input2.setAttribute('id', 'choice2');

  button.classList.add('button-choice');
  button.textContent = 'Начать игру';

  captureChoice1.append(span1);
  captureChoice2.append(span2);

  form.append(captureChoice1);
  form.append(input1);
  form.append(captureChoice2);
  form.append(input2);
  form.append(button);

  wrapperModal.append(form);

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const timer = document.createElement('div');
  timer.classList.add('timer');

  const btnMore = document.createElement('button');
  btnMore.classList.add('btn');
  btnMore.textContent = 'Сыграть еще раз';

  container.append(wrapperModal);
  container.append(wrapper);
  container.append(timer);
  container.append(btnMore);

  number1.innerHTML = choice1.value;
  choice1.addEventListener('input', function () {
    number1.innerHTML = this.value;
  });

  number2.innerHTML = choice2.value;
  choice2.addEventListener('input', function () {
    number2.innerHTML = this.value;
  });
}
