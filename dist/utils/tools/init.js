"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRoutes = exports.initServerCORS = void 0;
var serverCORS_1 = require("./serverCORS");
Object.defineProperty(exports, "initServerCORS", { enumerable: true, get: function () { return __importDefault(serverCORS_1).default; } });
var serverRoutes_1 = require("./serverRoutes");
Object.defineProperty(exports, "initRoutes", { enumerable: true, get: function () { return __importDefault(serverRoutes_1).default; } });
//# sourceMappingURL=init.js.map