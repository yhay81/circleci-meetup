const axios = require("axios");

class githubBot {
  constructor(auth, username, repo) {
    this.url = `https://${auth}:x-oauth-basic@api.github.com/repos/${username}/${repo}`;
  }

  comment(issueNumber, body) {
    const url = `${this.url}/issues/${issueNumber}/comments`;
    console.log(url);
    return axios.post(url, { body });
  }

  review(issueNumber, event, body) {
    return axios.post(`${this.url}/pulls/${issueNumber}/reviews`, {
      body,
      event
    });
  }
}

const AUTH = process.env["GH_AUTH_TOKEN"];
const USERNAME = process.env["CIRCLE_PROJECT_USERNAME"];
const REPO = process.env["CIRCLE_PROJECT_REPONAME"];
// const AUTH = "30006bc2ad860812ac21c290a1c674df3506ac31";
// const USERNAME = "yhay81";
// const REPO = "circleci-meetup";
const bot = new githubBot(AUTH, USERNAME, REPO);

module.exports = bot;
