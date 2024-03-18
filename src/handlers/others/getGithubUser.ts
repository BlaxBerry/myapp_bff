import type { RequestHandler } from "express";

/**
 * @description 获取个人 Github 账号的信息
 *
 * - GET  `api/others/github/user`
 */
export const getGithubUser: RequestHandler = async (req, res) => {
  try {
    const { name = "BlaxBerry" } = req.query;
    const url = `https://api.github.com/users/${name}`;
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
