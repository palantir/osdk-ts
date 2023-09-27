import fetchRetry from "fetch-retry";
import { PalantirApiError } from "../client/PalantirApiError";

const INITIAL_DELAY = 1_000;
const JITTER_FACTOR = 0.5;
const MAX_RETRIES = 3;

export function createRetryingFetch(fetch: typeof globalThis.fetch) {
  return fetchRetry(fetch, {
    retryDelay(attempt) {
      const delay = INITIAL_DELAY * 2 ** attempt;
      const jitter = delay * JITTER_FACTOR * (Math.random() * 2 - 1);
      return delay + jitter;
    },
    retryOn(attempt, error, response) {
      const status = response?.status ?? 0;
      return (
        !(status >= 200 && status < 300) &&
        isRetryable(error) &&
        attempt < MAX_RETRIES
      );
    },
  });
}

function isRetryable(e: any): boolean {
  if (e instanceof PalantirApiError) {
    if (
      e.statusCode !== SERVICE_UNAVAILABLE &&
      e.statusCode !== TOO_MANY_REQUESTS
    ) {
      return false;
    }
  }
  return true; // I think this logic is flawed?
}

const SERVICE_UNAVAILABLE = 503;
const TOO_MANY_REQUESTS = 429;
