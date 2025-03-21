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

import * as OntologiesV2 from "@osdk/foundry.ontologies";
import { asyncIterPointsHelper, getTimeRange } from "./util/timeseriesUtils.js";
export class TimeSeriesPropertyImpl {
  #triplet;
  #client;
  constructor(client, objectApiName, primaryKey, propertyName) {
    this.#client = client;
    this.#triplet = [objectApiName, primaryKey, propertyName];
  }
  async getFirstPoint() {
    return OntologiesV2.TimeSeriesPropertiesV2.getFirstPoint(this.#client, await this.#client.ontologyRid, ...this.#triplet);
  }
  async getLastPoint() {
    return OntologiesV2.TimeSeriesPropertiesV2.getLastPoint(this.#client, await this.#client.ontologyRid, ...this.#triplet);
  }
  async getAllPoints(query) {
    const allPoints = [];
    for await (const point of this.asyncIterPoints(query)) {
      allPoints.push(point);
    }
    return allPoints;
  }
  async *asyncIterPoints(query) {
    const streamPointsIterator = await OntologiesV2.TimeSeriesPropertiesV2.streamPoints(this.#client, await this.#client.ontologyRid, ...this.#triplet, query ? {
      range: getTimeRange(query)
    } : {});
    for await (const timeseriesPoint of asyncIterPointsHelper(streamPointsIterator)) {
      yield timeseriesPoint;
    }
  }
}
//# sourceMappingURL=createTimeseriesProperty.js.map