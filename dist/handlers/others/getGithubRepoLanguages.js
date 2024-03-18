"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGithubRepoLanguages = void 0;
/**
 * @description 获取个人 Github 指定仓库使用的所有语言
 *
 * - GET  `api/others/github/:repo/languages`
 */
const getGithubRepoLanguages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { repo = "" } = req.params;
        const url = `https://api.github.com/repos/BlaxBerry/${repo}/languages`;
        const re = yield fetch(url);
        const data = yield re.json();
        res.json({
            code: 200,
            error: null,
            data,
        });
    }
    catch (error) {
        res.json({
            code: 500,
            error,
            data: null,
        });
    }
});
exports.getGithubRepoLanguages = getGithubRepoLanguages;
//# sourceMappingURL=getGithubRepoLanguages.js.map