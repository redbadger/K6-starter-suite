# K6-starter-suite
Starter suite for continuous performance testing using K6

## Purpose
This basic starter suite provides the foundations for setting up a continuous performance test pipeline, using K6 and GitHub actions. The concepts could equally be applied to other CI tools.

The suite is a proof of concept only, running a single test against a very basic node & express server on localhost.


## What does the suite do?
- Runs a 10 second performance test against a single endpoint
- Determines the average amount of time it takes for a 200 http response to be returned
- Runs within a GitHub Actions workflow on every push (this could be amended to every Pull Request or merge to master)
- Fails if the threshold for performance is not met, consequentally failing the build
- Prevents degradations in performance making their way into master
- Sends graphical output to the cloud for displaying on K6's dashboards - https://app.k6.io/ (This will require you to set up a trial account, which allows for 50 test runs. Alternatively, the results can be output to the console, Grafana via InfluxDB, or as a JSON file)

## What is this suite not?
This is not designed to replace a comprehensive performance test, it is meant to supplement one with a continuous testing approach. By shifting performance testing into the build pipeline, a team can be confident that their application is at least performant and that no degradations are being introduced with new changes. This, in turn, should make a subsequent larger scale performance test more routine in future.

## Possibility of expanding the suite
- 10 requests over the course of 10 seconds is very low - you may want to tailor this to your needs, while retaining the fast feedback loop of a short test
- A paid for K6 dashboard account would allow for more than 50 test runs
- GitHub Actions workflow runs on MacOS and currently does not leverage Docker - this could be added
- The current threshold is arbitary and the wait time within the API artificial. The threshold should be tailored to the application under test
- Currently, the performance test runs on every push to GitHub. This may be excessive, so could be reduced to only occur within a pull request or on a merge to master
- More failure scenarios could be added, i.e. fail the test if any non-200 responses are returned


## Getting started

Copy the repo - `Git clone https://github.com/redbadger/K6-starter-suite.git`

Install dependencies - `yarn install`

Install K6 (required to run locally(also requires brew - https://brew.sh/)) - `brew install k6`

Run node server locally - `yarn start`

Run K6 locally - `k6 run tests/index.js`

To see the CI pipeline in action, create a branch on your cloned repo and push new changes to GitHub (`git push origin <branch name`)
