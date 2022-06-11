import { SNAKE_DIRECTION } from './constant';
import { Snake } from './Snake';

export class SnakeGame {
  static canvasSize = 650;

  static cellSize = 50;

  static cellCount = this.canvasSize / this.cellSize;

  #canvas = null;

  #canvasCtx = null;

  #canvasWrapper = null;

  #initialized = false;

  #snake = null;

  #startBtn = null;

  get snake() {
    return this.#snake;
  }

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
    this.#canvas.height = SnakeGame.canvasSize;
    this.#canvas.width = SnakeGame.canvasSize;
    this.#canvas.classList.add('snake-canvas');

    this.#canvasWrapper.appendChild(this.#canvas);
    this.#canvasWrapper.appendChild(this.#startBtn);
    document.body.appendChild(this.#canvasWrapper);

    this.#initialized = true;
  }

  start() {
    this.#startBtn.classList.add('hidden');

    // const ctx = this.#canvasCtx;

    // ctx.lineWidth = 5;

    // ctx.strokeStyle = '#fff';
    // ctx.fillStyle = '#fff';

    // // Wall
    // ctx.strokeRect(75, 140, 150, 110);

    // // Door
    // ctx.fillRect(130, 190, 40, 60);

    // // Roof
    // ctx.beginPath();
    // ctx.moveTo(50, 140);
    // ctx.lineTo(150, 60);
    // ctx.lineTo(250, 140);
    // ctx.closePath();
    // ctx.stroke();

    // const boardCentre = Math.floor(SnakeGame.cellCount / 2) * SnakeGame.cellSize;
    const boardCentre = Math.floor(SnakeGame.cellCount / 2);
    this.#snake = new Snake(boardCentre, boardCentre);

    document.addEventListener('keydown', this.handleKeyDown.bind(this));

    this.render();
    setInterval(this.render.bind(this), 750);
  }

  handleKeyDown(event) {
    let newDirection;

    if (event.key === 'w' || event.key === 'ArrowUp') {
      newDirection = SNAKE_DIRECTION.up;
    } else if (event.key === 'a' || event.key === 'ArrowLeft') {
      newDirection = SNAKE_DIRECTION.left;
    } else if (event.key === 'd' || event.key === 'ArrowRight') {
      newDirection = SNAKE_DIRECTION.right;
    } else if (event.key === 's' || event.key === 'ArrowDown') {
      newDirection = SNAKE_DIRECTION.down;
    }

    this.#snake.changeDirection(newDirection);
  }

  render() {
    // Update
    this.#snake.move();

    const snakeHead = this.#snake.bodyPartList[0];
    if (snakeHead.x < 0 || snakeHead.x >= SnakeGame.cellCount) this.gameOver();
    if (snakeHead.y < 0 || snakeHead.y >= SnakeGame.cellCount) this.gameOver();

    // Rendering
    const ctx = this.#canvasCtx;

    ctx.clearRect(0, 0, SnakeGame.canvasSize, SnakeGame.canvasSize);

    ctx.fillStyle = '#fff';

    for (const bodyPart of this.#snake.bodyPartList) {
      const x = bodyPart.x * SnakeGame.cellSize;
      const y = bodyPart.y * SnakeGame.cellSize;
      ctx.fillRect(x, y, SnakeGame.cellSize, SnakeGame.cellSize);
    }
  }

  gameOver() {
    this.#canvasWrapper.remove();
  }
}
