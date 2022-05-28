export class Snake {
  static canvasHeight = 600;
  static canvasWidth = 600;

  #initialized = false;
  #startBtn = null
  #canvas = null

  init() {
    if (this.#initialized) {
      this.#canvas.remove();
      this.#startBtn.remove();
    }

    this.#startBtn = document.createElement('button');
    this.#startBtn.innerText = 'Start';

    this.#canvas = document.createElement('canvas');
    this.#canvas.height = Snake.canvasHeight;
    this.#canvas.width = Snake.canvasWidth;
    this.#canvas.style = 'background-color: black;';

    document.body.appendChild(this.#canvas);
    document.body.appendChild(this.#startBtn);

    this.#initialized = true;
  }

  start() {
    console.log('Start the Game!');
  }
}