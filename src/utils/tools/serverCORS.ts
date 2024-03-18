import type { Express } from "express";
import cors from "cors";

/**
 * @description 初始化 CORS 设置
 */
export default function initServerCORS(app: Express) {
  useCORS(app, [
    "http://localhost:3000",
    "https://myapp-admin.vercel.app",
    "https://myapp-admin-git-main-blaxberry.vercel.app",
  ]);
}

/**
 * @description 利用 cors 设置 CORS
 */
function useCORS(app: Express, allowedOrigins: string[]) {
  app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    })
  );
}
