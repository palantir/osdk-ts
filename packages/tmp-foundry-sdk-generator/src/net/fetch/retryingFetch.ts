/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export class RetryingFetch {
  public constructor(
    private fetchFunction: typeof globalThis.fetch,
    private initialDelay = 1000,
    private jitterFactor = 0.5,
    private maxRetries = 3,
  ) {}
  private SERVICE_UNAVAILABLE = 503 as const;
  private TOO_MANY_REQUESTS = 429 as const;

  public getFetch(): typeof globalThis.fetch {
    return this.retryWithBackoff.bind(this, 0);
  }

  private async retryWithBackoff(
    retries: number,
    url: URL | RequestInfo,
    init: RequestInit | undefined,
  ): Promise<Response> {
    let response: Response | undefined;
    let backoffDelay: number | undefined;
    try {
      response = await this.fetchFunction(url, init);

      if (response.ok) {
        return response;
      }

      backoffDelay = this.calculateBackoffDelay(retries, response.status);

      if (!backoffDelay) {
        return response;
      }
    } catch (error) {
      backoffDelay = this.calculateBackoffDelay(retries);

      if (!backoffDelay) {
        throw error;
      }
    }

    await new Promise(resolve => setTimeout(resolve, backoffDelay));
    return this.retryWithBackoff(retries + 1, url, init);
  }

  private calculateBackoffDelay(
    retries: number,
    status?: number,
  ): number | undefined {
    if (retries >= this.maxRetries) {
      return;
    }

    if (
      status && status !== this.SERVICE_UNAVAILABLE
      && status !== this.TOO_MANY_REQUESTS
    ) {
      return;
    }

    const delay = this.initialDelay * 2 ** retries;
    const jitter = delay * this.jitterFactor * (Math.random() * 2 - 1);
    return delay + jitter;
  }
}
