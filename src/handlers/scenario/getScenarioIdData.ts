import type { RequestHandler } from "express";
import { MOCK_SCENARIO_NODES, MOCK_SCENARIO_EDGES } from "../../__mocks__";

/**
 * @description 获取指定 id 对应的 Scenario 列表 ( nodes )
 *
 * - GET `api/scenario/data/:id`
 */
export const getScenarioIdData: RequestHandler = async (req, res) => {
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
        nodes: MOCK_SCENARIO_NODES,
        edges: MOCK_SCENARIO_EDGES,
      },
    });
  } catch (error) {
    res.json({
      code: 500,
      error,
      data: null,
    });
  }
};
