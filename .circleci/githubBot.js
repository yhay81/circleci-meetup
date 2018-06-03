const axios = require("axios");
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
const ISSUE_NUMBER = process.env["CIRCLE_PR_NUMBER"];
// const AUTH = "5e6ade5cae31814c364fa13011cb9ddadb250ec8";
// const USERNAME = "yhay81";
// const REPO = "circleci-meetup";
// const ISSUE_NUMBER = "14";
const bot = new githubBot(AUTH, USERNAME, REPO, ISSUE_NUMBER);

module.exports = bot;
