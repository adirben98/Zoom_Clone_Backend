"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const http_1 = require("http");
const socket_server_1 = __importDefault(require("./socket_server"));
const server = (0, http_1.createServer)(app);
(0, socket_server_1.default)(server);
server.listen(3000);
