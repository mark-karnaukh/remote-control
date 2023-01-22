import * as dotenv from 'dotenv';
import { httpServer } from './src/http_server/index.js';
// import { mouse } from "@nut-tree/nut-js";

dotenv.config();

const HTTP_PORT = process.env.HTTP_PORT || 8181;

console.log('HTTP_PORT: ', process.env.HTTP_PORT);
console.log('WS_PORT: ', process.env.WS_PORT);

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

process.on('SIGINT', function () {
  console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
  // some other closing procedures go here
  process.exit(0);
});
