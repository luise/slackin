const { Container, publicInternet } = require('kelda');

/**
 * Creates a container running slackin. Callers must explicitly allow
 * traffic from the public internet if they want it to be publicly
 * accessible.
 */
function createSlackinContainer(slackTeamId, slackToken, port = 80) {
  const slackin = new Container('slackin', 'keldaio/slackin', {
    command: ['slackin', '--port', port.toString()],
    env: {
      SLACK_SUBDOMAIN: slackTeamId,
      SLACK_API_TOKEN: slackToken,
    },
  });

  publicInternet.allowFrom(slackin, 443);

  return slackin;
}

module.exports = { createSlackinContainer };
