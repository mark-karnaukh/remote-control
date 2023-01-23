import { mouse, up, down, left, right } from '@nut-tree/nut-js';

import {
  DRAW_CIRCLE,
  DRAW_RECTANGLE,
  DRAW_SQUARE,
  MOUSE_DOWN,
  MOUSE_LEFT,
  MOUSE_POSITION,
  MOUSE_RIGHT,
  MOUSE_UP,
  PRINT_SCREEN,
} from './constants.js';

export const navigation = {
  [MOUSE_UP]: async (value: number) => {
    await mouse.move(up(value));

    return `${MOUSE_UP} ${value}`;
  },
  [MOUSE_DOWN]: async (value: number) => {
    await mouse.move(down(value));

    return `${MOUSE_DOWN} ${value}`;
  },
  [MOUSE_LEFT]: async (value: number) => {
    await mouse.move(left(value));

    return `${MOUSE_LEFT} ${value}`;
  },
  [MOUSE_RIGHT]: async (value: number) => {
    await mouse.move(right(value));

    return `${MOUSE_RIGHT} ${value}`;
  },
  [MOUSE_POSITION]: async () => {
    const { x, y } = await mouse.getPosition();

    return `${MOUSE_POSITION} ${x},${y}`;
  },
  [DRAW_CIRCLE]: () => {},
  [DRAW_RECTANGLE]: () => {},
  [DRAW_SQUARE]: () => {},
  [PRINT_SCREEN]: () => {},
};
