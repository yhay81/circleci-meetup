const bot = require("./githubBot");

let body = `
  <h3>From CircleCI</h3>
  Demo: <strong>Hello world</strong>
  `;

bot
  .comment(body)
  .then(data => console.log(data))
  .catch(err => console.log(err));
