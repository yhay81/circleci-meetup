const axios = require("axios");

const AUTH = ""; // Add your personal access token from https://github.com/settings/tokens
const USERNAME = "yhay81"; // Change this to your username
const REPO = "circleci-meetup";
const ISSUE_NUMBER = "1"; // Make issue#1 on your GitHub

// See https://developer.github.com/v3/issues/comments/
const url = `https://${AUTH}:x-oauth-basic@api.github.com/repos/${USERNAME}/${REPO}/issues/${ISSUE_NUMBER}/comments`;

const body = `
<h3>From Local</h3>
Demo: <strong>Hello world</strong>
`;

axios
  .post(url, { body })
  .then(data => console.log(data))
  .catch(err => console.log(err));
