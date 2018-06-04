const axios = require("axios");
const { basename } = require("path");
const AUTH = process.env["GH_AUTH_TOKEN"];
const USERNAME = process.env["CIRCLE_PROJECT_USERNAME"];
const REPO = process.env["CIRCLE_PROJECT_REPONAME"];
const PR = process.env["CI_PULL_REQUEST"];
const ISSUE_NUMBER = PR ? basename(PR) : "";
// const AUTH = "";
// const USERNAME = "yhay81";
// const REPO = "circleci-meetup";
// const ISSUE_NUMBER = "22";

const url = `https://${AUTH}:x-oauth-basic@api.github.com/repos/${USERNAME}/${REPO}/issues/${ISSUE_NUMBER}/comments`;
// const body = `
//   <h3>From CircleCI</h3>
//   Demo: <strong>Hello world</strong>
//   `;

const { execSync } = require("child_process");
const testResult = execSync("yarn test")
  .toString("utf8")
  .trim();
const body = `
<pre>${testResult}</pre>
`;

axios
  .post(url, { body })
  .then(data => console.log(data))
  .catch(err => console.log(err));
