"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
/**
 * @description 初始化 CORS 设置
 */
function initServerCORS(app) {
    useCORS(app, [
        "http://localhost:3000",
        "https://myapp-admin.vercel.app",
        "https://myapp-admin-git-main-blaxberry.vercel.app",
    ]);
}
exports.default = initServerCORS;
/**
 * @description 利用 cors 设置 CORS
 */
function useCORS(app, allowedOrigins) {
    app.use((0, cors_1.default)({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            }
            else {
                callback(new Error("Not allowed by CORS"));
            }
        },
    }));
}
//# sourceMappingURL=serverCORS.js.map