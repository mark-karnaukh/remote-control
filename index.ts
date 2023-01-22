import * as dotenv from 'dotenv';
import { httpServer } from './src/http_server/index.js';
import { runWebSocketServer } from './src/ws_server/index.js';
// import { mouse } from "@nut-tree/nut-js";

dotenv.config();

const HTTP_PORT = +(process.env.HTTP_PORT || 8181);
const WS_PORT = +(process.env.WS_PORT || 8080);

console.log('HTTP_PORT: ', process.env.HTTP_PORT);
console.log('WS_PORT: ', process.env.WS_PORT);

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

console.log(`Start web socket server on the ${WS_PORT} port!`);
runWebSocketServer(WS_PORT);

process.on('SIGINT', function () {
  console.log(`\nShutting down the process ${process.pid} (Ctrl-C)`);
  // some other closing procedures go here
  process.exit(0);
});
