const bot = require("./githubBot");

const { basename } = require("path");
const issueNumber = basename("CI_PULL_REQUEST");
const { execSync } = require("child_process");
const exec = (command, options) =>
  execSync(command, options)
    .toString("utf8")
    .trim();
// const commitMessage = exec(
//   "git --no-pager log --pretty=format:'%s' -1"
// ).replace(/\\"/g, "\\\\'");
const testResult = exec("yarn test");
const reviewMessage = `
<pre>${testResult}</pre>
`;

const AUTH = process.env["GH_AUTH_TOKEN"];
const USERNAME = process.env["CIRCLE_PROJECT_USERNAME"];
const REPO = process.env["CIRCLE_PROJECT_REPONAME"];
// const AUTH = "30006bc2ad860812ac21c290a1c674df3506ac31";
// const USERNAME = "yhay81";
// const REPO = "circleci-meetup";
const bot = new githubBot(AUTH, USERNAME, REPO);

bot
  .review(issueNumber, "REQUEST_CHANGES", reviewMessage)
  .then(data => console.log(data));
