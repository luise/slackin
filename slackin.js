const { Container, publicInternet } = require('@quilt/quilt');

exports.New = function New(slackTeamId, slackToken, port = 80) {
  const slackin = new Container('slackin', 'quilt/slackin', {
    command: ['slackin', '--port', port.toString()],
    env: {
      SLACK_SUBDOMAIN: slackTeamId,
      SLACK_API_TOKEN: slackToken,
    },
  });

  slackin.allowFrom(publicInternet, port);
  publicInternet.allowFrom(slackin, 443);

  return slackin;
};
