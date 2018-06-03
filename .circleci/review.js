const bot = require("./githubBot");
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

bot
  .review("REQUEST_CHANGES", reviewMessage)
  .then(data => console.log(data))
  .catch(err => console.log(err));
