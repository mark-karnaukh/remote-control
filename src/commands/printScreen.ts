import { Region, screen, mouse, FileType } from '@nut-tree/nut-js';
import { readFile } from 'fs/promises';

import { PRINT_SCREEN } from './constants.js';

export const printScreen = {
  [PRINT_SCREEN]: async () => {
    const { x, y } = await mouse.getPosition();

    const screenWidth = await screen.width();
    const screenHeight = await screen.height();

    let px = x;
    let py = y;

    if (px + 200 > screenWidth) {
      px = screenWidth - 200;
    }

    if (py + 200 > screenHeight) {
      py = screenHeight - 200;
    }

    const image = await screen.captureRegion(
      'screen',
      new Region(px, py, 200, 200),
      FileType.PNG,
      './image',
    );

    const base64 = await readFile(image, {encoding: "base64"});

    return `${PRINT_SCREEN} ${base64}`;
  },
};
