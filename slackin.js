const { Container, Service, publicInternet } = require('@quilt/quilt');

exports.New = function New(slackTeamId, slackToken, port = 80) {
  const container = new Container('quilt/slackin', [
    'slackin', '--port', port.toString(),
  ]).withEnv({
    SLACK_SUBDOMAIN: slackTeamId,
    SLACK_API_TOKEN: slackToken,
  });

  const slackin = new Service('slackin', [container]);
  slackin.allowFrom(publicInternet, port);
  publicInternet.allowFrom(slackin, 443);

  return slackin;
};
