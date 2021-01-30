import express from 'express';
import http from 'http';
const app = express();
const server = http.createServer(app);
import routes from './routes/index.js';

app.use('/', routes);

server.listen(3333, () => { console.log('Server running at port 3003') });

