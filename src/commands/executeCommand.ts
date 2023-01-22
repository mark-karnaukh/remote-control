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
} from './commandRegExps.js';

const commands = new Map();

// Navigation
commands.set(MOUSE_DOWN_REG_EXP, () =>
  console.log('mouse down command received...'),
);

commands.set(MOUSE_LEFT_REG_EXP, () =>
  console.log('mouse left command received...'),
);

commands.set(MOUSE_RIGHT_REG_EXP, () =>
  console.log('mouse right command received...'),
);

commands.set(MOUSE_UP_REG_EXP, () =>
  console.log('mouse up command received...'),
);

// Drawing
commands.set(DRAW_CIRCLE_REG_EXP, () =>
  console.log('draw circle command received...'),
);

commands.set(DRAW_RECTANGLE_REG_EXP, () =>
  console.log('draw rectangle command received...'),
);

commands.set(DRAW_SQUARE_REG_EXP, () =>
  console.log('draw square command received...'),
);

// Screen image
commands.set(PRINT_SCREEN_REG_EXP, () =>
  console.log('print screen command received...'),
);

export const executeCommand = (command: string): void => {
  if (!new RegExp(VALID_COMMAND_REG_EXP).test(command)) {
    return console.error(`${command} is invalid command format.`);
  }

  commands.forEach((cb, regExp) => {
    if (new RegExp(regExp).test(command)) {
      cb(command);
    }
  });
};
