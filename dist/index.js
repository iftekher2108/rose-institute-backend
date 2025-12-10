"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, helmet_1.default)({
    xPoweredBy: true
}));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.get('/', (req, res) => {
    res.send("iftekher mahmud pervez");
});
app.get('/iftekher', (req, res) => {
    res.json({ name: "iftekher mahmud" });
});
app.listen(PORT, () => {
    console.log('server listening http://localhost:' + PORT);
});
