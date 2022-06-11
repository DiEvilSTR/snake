export class SnakeGame {
  static #canvasHeight = 600;

  static #canvasWidth = 600;

  #canvas = null;

  #canvasCtx = null;

  #canvasWrapper = null;

  #initialized = false;

  #startBtn = null;

  init() {
    if (this.#initialized) {
      this.#canvasWrapper.remove();
    }

    this.#canvasWrapper = document.createElement('div');
    this.#canvasWrapper.classList.add('snake');

    this.#startBtn = document.createElement('button');

    this.#startBtn.innerText = 'Start Da Game!';
    this.#startBtn.classList.add('snake-start_btn');
    this.#startBtn.addEventListener('click', this.start.bind(this));

    this.#canvas = document.createElement('canvas');
    this.#canvasCtx = this.#canvas.getContext('2d');
    this.#canvas.height = SnakeGame.#canvasHeight;
    this.#canvas.width = SnakeGame.#canvasWidth;
    this.#canvas.classList.add('snake-canvas');

    this.#canvasWrapper.appendChild(this.#canvas);
    this.#canvasWrapper.appendChild(this.#startBtn);
    document.body.appendChild(this.#canvasWrapper);

    this.#initialized = true;
  }

  start() {
    this.#startBtn.classList.add('hidden');

    const ctx = this.#canvasCtx;

    ctx.lineWidth = 5;

    ctx.strokeStyle = '#fff';
    ctx.fillStyle = '#fff';

    // Wall
    ctx.strokeRect(75, 140, 150, 110);

    // Door
    ctx.fillRect(130, 190, 40, 60);

    // Roof
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(150, 60);
    ctx.lineTo(250, 140);
    ctx.closePath();
    ctx.stroke();
  }
}
