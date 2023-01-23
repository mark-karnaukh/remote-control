import { WebSocket } from 'ws';
import {
  MOUSE_DOWN_REG_EXP,
  MOUSE_LEFT_REG_EXP,
  MOUSE_RIGHT_REG_EXP,
  MOUSE_UP_REG_EXP,
  VALID_COMMAND_REG_EXP,
  DRAW_CIRCLE_REG_EXP,
  DRAW_RECTANGLE_REG_EXP,
  DRAW_SQUARE_REG_EXP,
  PRINT_SCREEN_REG_EXP,
  MOUSE_POSITION_REG_EXP,
} from './commandRegExps.js';

import { navigation } from './navigation.js';
import { draw } from './draw.js';

const commands = new Map();

// Navigation
commands.set(MOUSE_DOWN_REG_EXP, async (ws: WebSocket, value: number) => {
  ws.send(await navigation.mouse_down(value));
});

commands.set(MOUSE_LEFT_REG_EXP, async (ws: WebSocket, value: number) => {
  ws.send(await navigation.mouse_left(value));
});

commands.set(MOUSE_RIGHT_REG_EXP, async (ws: WebSocket, value: number) => {
  ws.send(await navigation.mouse_right(value));
});

commands.set(MOUSE_UP_REG_EXP, async (ws: WebSocket, value: number) => {
  ws.send(await navigation.mouse_up(value));
});

commands.set(MOUSE_POSITION_REG_EXP, async (ws: WebSocket) => {
  ws.send(await navigation.mouse_position());
});

// Drawing
commands.set(DRAW_CIRCLE_REG_EXP, async (ws: WebSocket, radius: number) => {
  ws.send(await draw.draw_circle(radius));
});

commands.set(
  DRAW_RECTANGLE_REG_EXP,
  async (ws: WebSocket, x: number, y: number) => {
    ws.send(await draw.draw_rectangle(x, y));
  },
);

commands.set(DRAW_SQUARE_REG_EXP, async (ws: WebSocket, value) => {
  ws.send(await draw.draw_square(value));
});

// Screen image
commands.set(PRINT_SCREEN_REG_EXP, () =>
  console.log('print screen command received...'),
);

export const executeCommand = (command: string, ws: WebSocket): void => {
  if (!new RegExp(VALID_COMMAND_REG_EXP).test(command)) {
    return console.error(`${command} is invalid command format.`);
  }

  const [_, ...values] = command.split(' ');

  commands.forEach((cb, regExp) => {
    if (new RegExp(regExp).test(command)) {
      cb(ws, ...values.map((value) => parseFloat(value)));
    }
  });
};
