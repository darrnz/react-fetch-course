"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonServer = require("json-server");
var cors = require("cors");
var server = jsonServer.create();
var router = jsonServer.router('db.json'); // Path to your db.json file
var middlewares = jsonServer.defaults();
server.use(middlewares);
// Enable CORS for all requests
server.use(cors({
    origin: '*', // You can restrict this to specific origins if needed
}));
// Custom route or middleware can be added here, for example:
server.use(function (req, res, next) {
    console.log('Request received:', req.method, req.path);
    next();
});
server.use(router);
var PORT = 5000;
server.listen(PORT, function () {
    console.log("JSON Server is running on http://localhost:".concat(PORT));
});
