const axios = require("axios");

class githubBot {
  constructor(auth, username, repo) {
    this.url = `https://${auth}:x-oauth-basic@api.github.com/repos/${username}/${repo}`;
  }

  comment(issueNumber, body) {
    return axios.post(`${this.url}/issues/${issueNumber}/comments`, { body });
  }

  review(issueNumber, event, body) {
    return axios.post(`${this.url}/pulls/${issueNumber}/reviews`, {
      body,
      event
    });
  }
}

module.exports = githubBot;
