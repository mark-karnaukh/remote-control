import { WebSocketServer } from 'ws';

import { executeCommand } from '../commands/executeCommand.js';

export const runWebSocketServer = (port: number): void => {
  const webSocketServer = new WebSocketServer({ port });

  webSocketServer.on('connection', (ws) => {
    console.log('New client connected!');
    ws.send('connected');

    ws.on('message', function message(data) {
      console.log('received: %s', data);

      executeCommand(data.toString());
    });

    ws.on('close', () => console.log('Client has disconnected!'));

    ws.on('error', () => console.error('Uppppsss... , process is terminated.'));
  });
};
