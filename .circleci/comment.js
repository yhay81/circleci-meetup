const bot = require("./githubBot");
const { basename } = require("path");
const pr = process.env["CI_PULL_REQUEST"];
if (pr) {
  const issueNumber = basename(process.env["CI_PULL_REQUEST"]);
  let body = `
  <h3>From CircleCI</h3>
  Demo: <strong>Hello world</strong>
  `;

  bot
    .comment(issueNumber, body)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
