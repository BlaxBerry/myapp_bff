import type { RequestHandler } from "express";

/**
 * @description 获取个人 Github 指定仓库使用的所有语言
 *
 * - GET  `api/others/github/:repo/languages`
 */
export const getGithubRepoLanguages: RequestHandler = async (req, res) => {
  try {
    const { repo = "" } = req.params;
    const url = `https://api.github.com/repos/BlaxBerry/${repo}/languages`;
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
