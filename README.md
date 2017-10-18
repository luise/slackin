# Slackin for Kelda
This repository implements a [Slackin](https://github.com/rauchg/slackin) specification
for [Kelda](http://kelda.io).

To create a new Slackin service, simply pass your Slack team ID and Slack token to the
constructor:

```javascript
var slackinService = slackin.New("YOUR_SLACK_TEAM", "YOUR_SLACK_TOKEN");
```

As a third argument, you can optionally specify the port Slackin should receive
traffic on. If you don't pass a port number (as above), we open port 80 by default.

See [main.js](./main.js) for a ready-to-use blueprint.
