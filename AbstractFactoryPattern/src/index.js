"use strict";
exports.__esModule = true;
var facebook_factory_1 = require("./factories/facebook/facebook-factory");
var linkedin_factory_1 = require("./factories/linkedin/linkedin-factory");
var slack_factory_1 = require("./factories/slack/slack-factory");
var publisher_1 = require("./publisher");
var content = "\nSolo por hoy, cualquier curso a US$ 5.99,\n\n https://kodoti.com/super-oferta\n";
var publisher = new publisher_1["default"](content);
publisher.send(new facebook_factory_1["default"]());
publisher.send(new linkedin_factory_1["default"]());
publisher.send(new slack_factory_1["default"]());
