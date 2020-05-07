# K6-starter-suite
Starter suite for continuous performance testing using K6

## Purpose
This basic starter suite provides the foundations for setting up a continuous performance test pipeline, using GitHub actions. The concepts could equally be applied to other CI tools.

The suite is a proof of concept only, running a single test against a very basic node & express server on localhost.


## What does the suite do?
- Runs a 10 second performance test against a single endpoint
- Determines the average amount of time it takes for a 200 http response to be returned
- Runs within a GitHub Actions workflow on every push (this could be amended to every Pull Request or merge to master)
- Fails if the threshold for performance is not met, consequentally failing the build
- Prevents degradations in performance making their way into master
- Sends graphical output to the cloud for displaying on K6's dashboards - https://app.k6.io/ (This will require you to set up a trial account, which allows for 50 test runs. Alternatively, the results can be output to the console, Grafana via InfluxDB, or as a JSON file) 

## Possibility of expanding the suite
- 10 requests over the course of 10 seconds is very low - you may want to tailor this to your needs, while retaining the fast feedback loop of a short test
- A paid for K6 dashboard account would allow for more than 50 test runs
- GitHub Actions workflow runs on MacOS and currently does not leverage Docker - this could be added
- The current threshold is arbitary and the wait time within the API artificial. The threshold should be tailored to the application under test
