"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOCK_SCENARIO_EDGES = exports.MOCK_SCENARIO_NODES = void 0;
exports.MOCK_SCENARIO_NODES = [
    { id: "0", type: "start", data: {}, position: { x: 100, y: 50 } },
    {
        id: "234",
        type: "message",
        data: { id: "234", title: "MM" },
        position: { x: 350, y: 200 },
    },
    {
        id: "666",
        type: "html",
        data: { id: "234", title: "HH" },
        position: { x: 100, y: 200 },
    },
];
exports.MOCK_SCENARIO_EDGES = [
    { id: "0-234", source: "0", target: "234" },
    { id: "234-666", source: "234", target: "666" },
];
//# sourceMappingURL=index.js.map