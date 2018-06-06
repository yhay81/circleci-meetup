# CircleCI Meetup

This repository is for the meetup:
https://www.meetup.com/ja-JP/CodeChrysalis/events/250738791/

With this repository, you can learn:

- How to add comment to GitHub issues from GitHub API v3.
- How to run commands after push/PR with CircleCI

## What to do with this repository

### 1.Fork and Set up

You can fork repo from top right Fork button.
Then clone and set up it with command:

```
git clone https://github.com/{your_username}/circleci-meetup
cd circleci-meetup
yarn install
```

### 2.Play with .circleci/comment_from_local.js

- You can send comment to GitHub Issues with command `node .cicleci/comment_from_local.js`
- But before that you need to change some variables in `.cicleci/comment_from_local.js` for fitting it to your forked repository.
  - `AUTH`: Add your _Personal access tokens_ into `AUTH` to add permission to comment.
    You can get it from https://github.com/settings/tokens.
    And make sure checking _public_repo (Access public repositories)_.
  - `USERNAME`: Change it into your username.
  - `ISSUE_NUMBER`: Add issue number you want to add comment. At first, your forked repo has no issues, so you need to make a issue from repo on GitHub web page.

### 3.Connect your repository with CircleCI

- Go to CircleCI web page [https://circleci.com](https://circleci.com/)
- Sign Up with GitHub (if you do not have account).
- from _ADD PROJECTS_, add _circleci-meetup_ repository.
- (You can get default config.yml(Linux/node). Compare with `.circleci/config.yml` in this repo.)
- Start building! And it should fail. Go to next to fix it.

### 4.Fix Fizz Buzz and Commit it

- `src/index.js`: This is a simple module for _Fizz Buzz_ [https://en.wikipedia.org/wiki/Fizz_buzz](https://en.wikipedia.org/wiki/Fizz_buzz)
- `text/test.js`: Test code for src/index.js. You can run this with `yarn test`. let's try it.
- Fix `src/index.js`
- Make feature branch

```
git checkout -b fizzbuzz-1
```

- Make commit and pull request

```
git add src/index.js
git commit -m "Fix Fizz Buzz"
git push origin fizzbuzz-1
```

### 5.See what circleCI did.

You can see results, variables, cashing from circleCI builds page [https://circleci.com/dashboard](https://circleci.com/dashboard).
And see comment_from_circleci.js and config.yml.

`.circleci/comment_from_circleci.js` is similar to `.circleci/comment_from_local.js`
Check these to know about `config.yml`

- How to write config.yml
  [https://circleci.com/docs/2.0/configuration-reference/#run](https://circleci.com/docs/2.0/configuration-reference/#run)

- Docker container
  [https://hub.docker.com/r/circleci/node/tags/](https://hub.docker.com/r/circleci/node/tags/)

## Acknowledgments

Thank you to [Code Chrysalis](https://www.codechrysalis.io/), without you this meetup and repository wouldn't exist.
