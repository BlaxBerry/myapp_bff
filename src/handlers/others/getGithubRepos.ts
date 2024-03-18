import type { RequestHandler } from "express";

/**
 * @description 获取个人 Github 仓库的信息
 *
 * - GET  `api/others/github/repos`
 * - GET  `api/others/github/repos?name=[repoName]`
 */
export const getGithubRepos: RequestHandler = async (req, res) => {
  try {
    const { name = "" } = req.query;
    const url = name
      ? `https://api.github.com/repos/BlaxBerry/${name}`
      : `https://api.github.com/users/BlaxBerry/repos`;
    const re = await fetch(url);
    const data = await re.json();

    res.json({
      code: 200,
      error: null,
      data,
    });
  } catch (error) {
    res.json({
      code: 500,
      error,
      data: null,
    });
  }
};
