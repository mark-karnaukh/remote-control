import {
  mouse,
  up,
  down,
  left,
  right,
  Button,
  Point,
  straightTo,
} from '@nut-tree/nut-js';

import { DRAW_CIRCLE, DRAW_RECTANGLE, DRAW_SQUARE } from './constants.js';

export const draw = {
  [DRAW_CIRCLE]: async (radius: number) => {
    const { x, y } = await mouse.getPosition();
    await mouse.pressButton(Button.LEFT);

    for (let i = 0; i < 2 * Math.PI * radius; i++) {
      const px = x + radius * Math.cos(i / radius);
      const py = y + radius * Math.sin(i / radius);

      await mouse.move(straightTo(new Point(px - radius, py)));
    }

    mouse.releaseButton(Button.LEFT);

    return `${DRAW_CIRCLE}_${radius}`;
  },
  [DRAW_RECTANGLE]: async (x: number, y: number) => {
    // await mouse.move(down(y / 2));
    // await mouse.move(left(x / 2));

    await mouse.drag(down(y));
    await mouse.drag(left(x));
    await mouse.drag(up(y));
    await mouse.drag(right(x));

    return `${DRAW_RECTANGLE}_${x}_${y}`;
  },
  [DRAW_SQUARE]: async (value: number) => {
    // await mouse.move(down(value / 2));
    // await mouse.move(left(value / 2));

    await mouse.drag(down(value));
    await mouse.drag(left(value));
    await mouse.drag(up(value));
    await mouse.drag(right(value));

    return `${DRAW_SQUARE}_${value}`;
  },
};
