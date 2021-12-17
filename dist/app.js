"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = require("body-parser");
var twitter_apis_routes_1 = __importDefault(require("./twitter-apis/twitter-apis.routes"));
var port = process.env.port || 3000;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, body_parser_1.json)());
app.use('/', twitter_apis_routes_1.default);
app.listen(port, function () {
    console.log("The server is listening in the port " + port + ".");
});
//# sourceMappingURL=app.js.map