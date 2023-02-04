export class Card {
  _open = false;
  _success = false;
  _cardNumber;
  constructor(container, cardNumber, flip) {
    this.cardNumber = cardNumber;
    this.container = container;
    this.flip = flip;
  }
  createElement() {
    this.cardWrapper = document.createElement('div');
    this.cardWrapper.classList.add('card-wrapper');
    this.cardWrapper.style.width = `calc(98% / ${choice2.value})`;

    this.cards = document.createElement('div');
    this.cards.classList.add('cards', 'is-flipped');

    this.cardFront = document.createElement('div');
    this.cardFront.classList.add('card');
    this.cardFront.classList.add('card-front');

    this.cardBack = document.createElement('div');
    this.cardBack.classList.add('card');
    this.cardBack.classList.add('card-back');

    this.cards.append(this.cardFront);
    this.cards.append(this.cardBack);
    this.cardWrapper.append(this.cards);

    this.container.append(this.cardWrapper);

    this.cards.addEventListener('click', () => {
      if (this._open == false && this._success == false) {
        this.open = true;
        this.flip(this);
      }
    });
  }

  set cardNumber(value) {
    this._cardNumber = value;
    this.cardBack.textContent = this.cardNumber;
  }

  get cardNumber() {
    return this._cardNumber;
  }

  set open(value) {
    this._open = value;
    value
      ? this.cards.classList.add('is-flipped')
      : this.cards.classList.remove('is-flipped');
  }
  get open() {
    return this._open;
  }

  set success(value) {
    this._success = value;
    value
      ? this.cards.classList.add('success')
      : this.cards.classList.remove('success');
  }
  get success() {
    return this._open;
  }
}

export class AmazingCard extends Card {
  createElement() {
    super.createElement();
    this.cardBack.append(this.img);
    // console.log(this.img);
  }
  set cardNumber(value) {
    this._cardNumber = value;

    const cardsImgArray = [
      './img/1.svg',
      './img/2.svg',
      './img/3.svg',
      './img/4.svg',
      './img/5.svg',
      './img/6.svg',
      './img/7.svg',
      './img/8.svg',
      './img/9.svg',
      './img/10.svg',
      './img/11.svg',
      './img/12.svg',
      './img/13.svg',
      './img/14.svg',
      './img/15.svg',
      './img/16.svg',
      './img/17.svg',
      './img/18.svg',
      './img/19.svg',
      './img/20.svg',
      './img/21.svg',
      './img/22.svg',
      './img/23.svg',
      './img/24.svg',
      './img/25.svg',
      './img/26.svg',
      './img/27.svg',
      './img/28.svg',
      './img/29.svg',
      './img/30.svg',
      './img/31.svg',
      './img/32.svg',
      './img/33.svg',
      './img/34.svg',
      './img/35.svg',
      './img/36.svg',
      './img/37.svg',
      './img/38.svg',
      './img/39.svg',
      './img/40.svg',
      './img/41.svg',
      './img/42.svg',
      './img/43.svg',
      './img/44.svg',
      './img/45.svg',
      './img/46.svg',
      './img/47.svg',
      './img/48.svg',
      './img/49.svg',
      './img/50.svg',
    ];

    this.img = new Image();
    this.img.src = cardsImgArray[value];
    this.img.onerror = () => {
      this.img.src = './img/error.svg';
    };
  }

  get cardNumber() {
    return this._cardNumber;
  }
}
