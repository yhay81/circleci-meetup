// You can see these variables in CircleCI builds page

// BASH_ENV=/tmp/.bash_env-5b14d283faad6600155ac668-0-build
// CI=true
// CIRCLECI=true
// CIRCLE_BRANCH=another
// CIRCLE_BUILD_NUM=59
// CIRCLE_BUILD_URL=https://circleci.com/gh/yhay81/circleci-meetup/59
// CIRCLE_COMPARE_URL=
// CIRCLE_JOB=build
// CIRCLE_NODE_INDEX=0
// CIRCLE_NODE_TOTAL=1
// CIRCLE_PREVIOUS_BUILD_NUM=58
// CIRCLE_PROJECT_REPONAME=circleci-meetup
// CIRCLE_PROJECT_USERNAME=yhay81
// CIRCLE_PULL_REQUEST=https://github.com/yhay81/circleci-meetup/pull/24
// CIRCLE_PULL_REQUESTS=https://github.com/yhay81/circleci-meetup/pull/24
// CIRCLE_REPOSITORY_URL=git@github.com:yhay81/circleci-meetup.git
// CIRCLE_SHA1=c11ed97455793108be25c1a7f7801112e749fcc1
// CIRCLE_SHELL_ENV=/tmp/.bash_env-5b14d283faad6600155ac668-0-build
// CIRCLE_STAGE=build
// CIRCLE_USERNAME=yhay81
// CIRCLE_WORKING_DIRECTORY=~/repo
// CI_PULL_REQUEST=https://github.com/yhay81/circleci-meetup/pull/24
// CI_PULL_REQUESTS=https://github.com/yhay81/circleci-meetup/pull/24

const axios = require("axios");
const { basename } = require("path");
// const AUTH = process.env["GH_AUTH_TOKEN"];
// const USERNAME = process.env["CIRCLE_PROJECT_USERNAME"];
// const REPO = process.env["CIRCLE_PROJECT_REPONAME"];
// const PR = process.env["CI_PULL_REQUEST"];
// const ISSUE_NUMBER = PR ? basename(PR) : "";
const AUTH = "";
const USERNAME = "yhay81";
const REPO = "circleci-meetup";
const ISSUE_NUMBER = "19";

const url = `https://${AUTH}:x-oauth-basic@api.github.com/repos/${USERNAME}/${REPO}/issues/${ISSUE_NUMBER}/comments`;
const body = `
  <h3>From CircleCI</h3>
  Demo: <strong>Hello world</strong>
  `;

// const { execSync } = require("child_process");
// const testResult = execSync("yarn test")
//   .toString("utf8")
//   .trim();
// const body = `
// <pre>${testResult}</pre>
// `;

axios
  .post(url, { body })
  .then(data => console.log(data))
  .catch(err => console.log(err));
