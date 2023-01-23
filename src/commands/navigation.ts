import { mouse, up, down, left, right } from '@nut-tree/nut-js';

import {
  MOUSE_DOWN,
  MOUSE_LEFT,
  MOUSE_POSITION,
  MOUSE_RIGHT,
  MOUSE_UP,
} from './constants.js';

export const navigation = {
  [MOUSE_UP]: async (value: number) => {
    await mouse.move(up(value));

    return `${MOUSE_UP}_${value}`;
  },
  [MOUSE_DOWN]: async (value: number) => {
    await mouse.move(down(value));

    return `${MOUSE_DOWN}_${value}`;
  },
  [MOUSE_LEFT]: async (value: number) => {
    await mouse.move(left(value));

    return `${MOUSE_LEFT}_${value}`;
  },
  [MOUSE_RIGHT]: async (value: number) => {
    await mouse.move(right(value));

    return `${MOUSE_RIGHT}_${value}`;
  },
  [MOUSE_POSITION]: async () => {
    const { x, y } = await mouse.getPosition();

    return `${MOUSE_POSITION} ${x},${y}`;
  },
};
