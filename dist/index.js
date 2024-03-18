"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const init_1 = require("./utils/tools/init");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
(0, init_1.initServerCORS)(app);
(0, init_1.initRoutes)(app);
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map