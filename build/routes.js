"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const info_1 = require("./handlers/info");
const persons_1 = require("./handlers/persons");
exports.routes = [
    {
        method: 'get',
        path: '/info',
        middleware: [],
        handler: info_1.info,
    },
    {
        method: 'get',
        path: '/api/persons',
        middleware: [],
        handler: persons_1.persons,
    },
];
