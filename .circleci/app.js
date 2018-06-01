// circleCI env

const { basename } = require("path");
// const { execSync } = require("child_process");
// const auth = process.env["GH_AUTH_TOKEN"];
// const username = process.env["CIRCLE_PROJECT_USERNAME"];
// const repo = process.env["CIRCLE_PROJECT_REPONAME"];
const issueNumber = basename("CI_PULL_REQUEST");
// const exec = (command, options) =>
//   execSync(command, options)
//     .toString("utf8")
//     .trim();
// const commitMessage = exec(
//   "git --no-pager log --pretty=format:'%s' -1"
// ).replace(/\\"/g, "\\\\'");
// const body = `
// <h3>${commitMessage}</h3>
// Demo: <strong>Hi</strong>
// `;

//local env

const githubBot = require("./githubBot");
const AUTH = "30006bc2ad860812ac21c290a1c674df3506ac31";
const USERNAME = "yhay81";
const REPO = "circleci-meetup";

const bot = new githubBot(AUTH, USERNAME, REPO);

// const issueNumber = "2";
let body = `
<h3>From CircleCI</h3>
Demo: <strong>ganbatte</strong>
`;
bot
  .review(issueNumber, "REQUEST_CHANGES", body)
  .then(data => console.log(data));

// bot
//   .comment(issueNumber, body)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
