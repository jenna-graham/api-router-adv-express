import http from 'node:http';
import app from './lib/app.js';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer(app);

const port = process.env.APP_PORT || 8080;
const hostname = process.env.APP_HOST || 'localhost';

server.listen(port, hostname, () => {
  console.log(
    `Server listening on ${JSON.stringify(server.address())}!`
  );
});
console.log('Starting to listen...');
