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

import type { FoundryApiError, Page, Result } from "@osdk/legacy-client";

export type Pageable<T> = {
  page: (
    options?: { pageSize?: number; pageToken?: string },
  ) => Promise<Result<Page<T>, any>>;
};

/**
 * Fetches a page of a pageable object
 *
 * @param pageable  A promise to an object that can be paged
 * @param pageSize  The size of the page to fetch
 * @param pageToken The token of the page to fetch
 * @returns A promise to the page
 */
export async function fetchPage<T, E extends FoundryApiError>(
  pageable: Pageable<T>,
  pageSize: number,
  pageToken?: string,
): Promise<Page<T>> {
  const result: Result<Page<T>, E> = await pageable.page({
    pageSize,
    pageToken,
  });
  if (result.type === "error") {
    throw new Error(result.error.message);
  }
  const page = result.value;
  return page;
}

/**
 * Fetches all pages of a pageable object
 *
 * @param pageable A promise to an object that can be paged
 * @param pageSize The size of the page to fetch, validates that the page size is correct for all pages
 * @returns A promise to an array of all the results
 */
export async function fetchAllPages<T>(
  pageable: Pageable<T>,
  pageSize: number,
): Promise<T[]> {
  const allResults: T[] = [];

  let pageToken: string | undefined;
  let page: Page<T> | undefined;
  do {
    page = await fetchPage(pageable, pageSize, pageToken);
    allResults.push(...page.data);
    pageToken = page.nextPageToken;

    if (page.nextPageToken && page.data.length !== pageSize) {
      throw new Error(
        `Expected page size of ${pageSize} but got ${page.data.length}`,
      );
    } else if (!page.nextPageToken && page.data.length > pageSize) {
      throw new Error(
        `Expected page size of ${pageSize} but got ${page.data.length}`,
      );
    }
  } while (pageToken);

  return allResults;
}
