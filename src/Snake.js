import { SNAKE_DIRECTION } from './constant';
import { Object2D } from './Object2D';

export class Snake {
  direction = null;

  bodyPartList = [];

  constructor(startX, startY) {
    const head = new Object2D(startX, startY);

    this.bodyPartList.push(head);
  }

  changeDirection(newDirection) {
    if (this.direction === SNAKE_DIRECTION.down && newDirection === SNAKE_DIRECTION.up) return;
    if (this.direction === SNAKE_DIRECTION.left && newDirection === SNAKE_DIRECTION.right) return;
    if (this.direction === SNAKE_DIRECTION.right && newDirection === SNAKE_DIRECTION.left) return;
    if (this.direction === SNAKE_DIRECTION.up && newDirection === SNAKE_DIRECTION.down) return;

    this.direction = newDirection;
  }

  move() {
    for (const bodyPart of this.bodyPartList) {
      let offsetX;
      let offsetY;
      if (this.direction === SNAKE_DIRECTION.down) {
        offsetY = 1;
      } else if (this.direction === SNAKE_DIRECTION.up) {
        offsetY = -1;
      } else if (this.direction === SNAKE_DIRECTION.left) {
        offsetX = -1;
      } else if (this.direction === SNAKE_DIRECTION.right) {
        offsetX = 1;
      }
      bodyPart.x += offsetX || 0;
      bodyPart.y += offsetY || 0;
    }
  }
}
