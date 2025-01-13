/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks } from "@osdk/api/unstable";
import { Employee, WeatherStation } from "@osdk/e2e.generated.catchall";
import { client } from "../client.js";
import { logger } from "../logger.js";

export async function checkUnstableBulkLinks() {
  // Test one to many
  const stations = await client(WeatherStation).fetchPage();
  for await (
    const {
      object,
      linkApiName,
      otherObjectApiName,
      otherObjectPk,
    } of client(__EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks).getBulkLinks(
      stations.data,
      [
        "boundariesUsState",
      ],
    )
  ) {
    logger.info(
      `Found link ${object.$objectType}:${object.$primaryKey} <- (${linkApiName}) -> ${otherObjectApiName}:${otherObjectPk}`,
    );
  }

  const { data: employees } = await client(Employee).fetchPage({
    $pageSize: 100,
  });

  // test many to many
  logger.debug("Fetching the bulk links");

  for await (
    const {
      object,
      linkApiName,
      otherObjectApiName,
      otherObjectPk,
    } of client(__EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks).getBulkLinks(
      employees,
      [
        "ventures",
        "amishsSyncGroup",
      ],
    )
  ) {
    logger.info(
      `Found link ${object.$objectType}:${object.$primaryKey} <- (${linkApiName}) -> ${otherObjectApiName}:${otherObjectPk}`,
    );
  }
}

void checkUnstableBulkLinks();
