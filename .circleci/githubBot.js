const axios = require("axios");
const { basename } = require("path");
class githubBot {
  constructor(auth, username, repo, issueNumber) {
    this.url = `https://${auth}:x-oauth-basic@api.github.com/repos/${username}/${repo}`;
    this.issueNumber = issueNumber;
  }

  comment(body) {
    const url = `${this.url}/issues/${this.issueNumber}/comments`;
    console.log(url, body);
    return axios.post(url, { body });
  }

  review(event, body) {
    return axios.post(`${this.url}/pulls/${this.issueNumber}/reviews`, {
      body,
      event
    });
  }
}

const AUTH = process.env["GH_AUTH_TOKEN"];
const USERNAME = process.env["CIRCLE_PROJECT_USERNAME"];
const REPO = process.env["CIRCLE_PROJECT_REPONAME"];
const PR = process.env["CI_PULL_REQUEST"];
const ISSUE_NUMBER = PR ? basename(process.env["CI_PULL_REQUEST"]) : "";
// const AUTH = "cfe7554b1bdf8b97814cde1fe3a4f2c580bf627c";
// const USERNAME = "yhay81";
// const REPO = "circleci-meetup";
// const ISSUE_NUMBER = "12";
console.log(AUTH);
const bot = new githubBot(AUTH, USERNAME, REPO, ISSUE_NUMBER);

module.exports = bot;
