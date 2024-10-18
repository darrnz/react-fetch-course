import * as jsonServer from 'json-server';
import * as cors from 'cors';
import { Request, Response } from 'express';

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Path to your db.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Enable CORS for all requests
server.use(cors({
  origin: '*', // You can restrict this to specific origins if needed
}));

// Custom route or middleware can be added here, for example:
server.use((req: Request, res: Response, next) => {
  console.log('Request received:', req.method, req.path);
  next();
});

server.use(router);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
