"use strict";

var { Container, Service, publicInternet } = require("@quilt/quilt");

exports.New = function(slack_team_id, slack_token, port = 80) {
	var container = new Container(
			"quilt/slackin",
			["slackin", "--port", port.toString()]
		).withEnv({
			SLACK_SUBDOMAIN: slack_team_id,
			SLACK_API_TOKEN: slack_token
		}
	);

	var slackin = new Service("slackin", [container]);
	slackin.allowFrom(publicInternet, port);
	publicInternet.allowFrom(slackin, 443);

	return slackin;
};
