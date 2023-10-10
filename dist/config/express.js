"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../modules/user/adapters/user.controller");
const path_1 = __importDefault(require("path"));
const cors = require('cors');
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(cors({
    origin: '*'
}));
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use(express_1.default.json({
    limit: '20mb'
}));
app.use('/api/user', user_controller_1.userRouter);
exports.default = app;
//# sourceMappingURL=express.js.map