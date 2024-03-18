import { type Express } from "express";
import { PATHS } from "../routes";

import { getScenarioIdData } from "../../handlers/scenario";
import {
  getGithubRepoLanguages,
  getGithubRepos,
  getGithubUser,
} from "../../handlers/others";

/**
 * @description 初始化路由组
 */
export default function initRoutes(app: Express) {
  app.get("/", (req, res) => res.send("MyApp BFF API Server"));

  // scenario
  app.get(`/api/${PATHS.SCENARIO.ID_DATA}`, getScenarioIdData);

  // others
  app.get(`/api/${PATHS.OTHERS.GITHUB_USER}`, getGithubUser);
  app.get(`/api/${PATHS.OTHERS.GITHUB_REPOS}`, getGithubRepos);
  app.get(`/api/${PATHS.OTHERS.GITHUB_REPO_LANGUAGES}`, getGithubRepoLanguages);
}
