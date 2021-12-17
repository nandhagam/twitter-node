"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var twitter_apis_controller_1 = require("./twitter-apis.controller");
var router = (0, express_1.Router)();
// Verifying twitter account
router.get('/verify', twitter_apis_controller_1.verifyTwitterAccount);
// Searching Twits
router.get('/search', twitter_apis_controller_1.searchTwits);
exports.default = router;
//# sourceMappingURL=twitter-apis.routes.js.map