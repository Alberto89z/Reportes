"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./config/express"));
const port = process.env.PORT || 3000;
const main = () => {
    try {
        express_1.default.listen(port);
        console.log("Corriendo la app asi como: ¡itai, onichan! en el puerto : http://localhost:", port);
    }
    catch (error) {
        console.log(error);
    }
};
main();
//# sourceMappingURL=index.js.map