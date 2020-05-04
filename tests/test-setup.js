import { Counter, Trend } from "k6/metrics";

export const baseUrl = "http://localhost:";
export const port = "3003";
export const requestDuration = new Trend("GET /endpoint");
export const errorRate = new Counter("Error count - GET /endpoint");
export const requestCounter = new Counter("Request count");
