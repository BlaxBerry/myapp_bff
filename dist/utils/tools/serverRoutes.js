"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("../routes");
const scenario_1 = require("../../handlers/scenario");
const others_1 = require("../../handlers/others");
/**
 * @description 初始化路由组
 */
function initRoutes(app) {
    app.get("/", (req, res) => res.send("MyApp BFF API Server"));
    // scenario
    app.get(`/api/${routes_1.PATHS.SCENARIO.ID_DATA}`, scenario_1.getScenarioIdData);
    // others
    app.get(`/api/${routes_1.PATHS.OTHERS.GITHUB_USER}`, others_1.getGithubUser);
    app.get(`/api/${routes_1.PATHS.OTHERS.GITHUB_REPOS}`, others_1.getGithubRepos);
    app.get(`/api/${routes_1.PATHS.OTHERS.GITHUB_REPO_LANGUAGES}`, others_1.getGithubRepoLanguages);
}
exports.default = initRoutes;
//# sourceMappingURL=serverRoutes.js.map