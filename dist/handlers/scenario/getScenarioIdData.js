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
exports.getScenarioIdData = void 0;
const __mocks__1 = require("../../__mocks__");
/**
 * @description 获取指定 id 对应的 Scenario 列表 ( nodes )
 *
 * - GET `api/scenario/data/:id`
 */
const getScenarioIdData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const url = `${process.env.API_SERVER_SCENARIO as string}/api/list`;
        // const re = await fetch(url);
        // const data = await re.json();
        // res.json(data);
        const { id = 1 } = req.params;
        res.json({
            code: 200,
            error: null,
            data: {
                id,
                nodes: __mocks__1.MOCK_SCENARIO_NODES,
                edges: __mocks__1.MOCK_SCENARIO_EDGES,
            },
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
exports.getScenarioIdData = getScenarioIdData;
//# sourceMappingURL=getScenarioIdData.js.map