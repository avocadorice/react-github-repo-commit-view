# Browse Github Repo Commits
Simple React App to search any repository and browse recent commits.

## Build and Run locally
- Install Node.js and npm
  - Node.js v10.15.3
  - npm v6.4.1
- On Terminal:
   - git clone https://github.com/bhsiao123/react-github-repo-commit-view.git
   - cd react-github-repo-commit-view
   - npm install - installs the app locally
   - npm start - runs React development server
- Browse to localhost:3000 to see the app running locally

## Demo
- Here is [link to demo](https://bhsiao123.github.io.com/react-github-repo-commit-view) in case build and run instructions somehow don't work
- Recommend viewing in Chrome
- Features
   -  Search repositories by organization (e.g. Netflix) which are sorted by popularity (i.e. fork_count)
   -  Click on a repository to show the most recent commits done on the project
   -  Click on a commit for the diff view
   -  Invalid search yields the page 'No repositories were found for this organization'

## Notes
- Sometimes app doesn't load when Github API rate limit has been exceeded. In this case please revisit one hour later.
- Alternatively, when rate limit has been exceeded, you can choose to load the app using mock data by setting REACT_APP_USE_GITHUB_API=false in .env (located in root directory - you will need to restart npm for it to take effect)

## Todo
- Visual issues with react-diff-view
- Modularize/Cleanup code
- CSS Prettify
- Add Tests
- Look into OAuth
- ...
