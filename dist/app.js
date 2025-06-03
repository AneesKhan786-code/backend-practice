"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express = require('express');
const body_parser_1 = require("body-parser");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = express();
const origin = ["*"];
app.use((0, cors_1.default)({ origin }));
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)());
app.use("/api/v1/users", user_routes_1.default);
exports.default = app;
