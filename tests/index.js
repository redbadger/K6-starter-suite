/*eslint-disable */
import { check, sleep } from "k6";
import http from "k6/http";
import {
  requestDuration,
  errorRate,
  requestCounter,
  baseUrl,
  port,
} from "./test-setup.js";

export let options = {
  stages: [
    { duration: "10s", target: 2 },
  ],
  thresholds: {
    http_req_duration: ["p(95)<100"],
  },
};

let res;
let params;
let url;

export default function () {
  url = `${baseUrl}${port}/courses`;
  params = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  res = http.get(url, params);
  requestDuration.add(res.timings.duration);
  requestCounter.add(1);
  check(res, {
    "Response status is 200": (r) => r.status === 200,
  }) ||
    (errorRate.add(1) && console.log(res.url + " " + res.status));
  sleep(1);
}
