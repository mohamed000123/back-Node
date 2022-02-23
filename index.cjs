"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const tasks_cjs_1 = require("./routes/tasks.cjs");
const app = (0, express_1.default)();
app.get('/', (req, res) => {
});
app.listen(3000, () => {
});
app.use(body_parser_1.default.json());
app.use("/api/tasks", tasks_cjs_1.tasksRouter);
