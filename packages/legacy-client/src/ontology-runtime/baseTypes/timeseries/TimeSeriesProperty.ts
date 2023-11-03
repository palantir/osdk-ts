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

import type { OntologyDefinition, ThinClient } from "@osdk/api";
import {
  OntologyProvider,
  type Result,
  type TimeSeriesError,
} from "../../ontologyProvider";
import type { TimeSeries } from "./TimeSeries";
import type { TimeSeriesPoint } from "./TimeSeriesPoint";
import { TimeSeriesQuery } from "./TimeSeriesQuery";

export class TimeSeriesProperty<T extends number | string>
  implements TimeSeries<T>
{
  public type = "TimeSeries" as const;

  #client: ThinClient<OntologyDefinition<any>>;
  #propertyName: string;
  #apiName: string;
  #primaryKey: string;

  static constructTimeSeries<T extends string | number>(
    client: ThinClient<OntologyDefinition<any>>,
    propertyName: string,
    apiName: string,
    primaryKey: string,
  ): TimeSeriesProperty<T> {
    return new TimeSeriesProperty<T>(
      client,
      propertyName,
      apiName,
      primaryKey,
    );
  }

  getFirstPoint(): Promise<Result<TimeSeriesPoint<T>, TimeSeriesError>> {
    const ontologyProvider = new OntologyProvider(this.#client);
    return ontologyProvider.getFirstPoint(
      this.#apiName,
      this.#primaryKey,
      this.#propertyName,
    );
  }

  getLastPoint(): Promise<Result<TimeSeriesPoint<T>, TimeSeriesError>> {
    const ontologyProvider = new OntologyProvider(this.#client);
    return ontologyProvider.getLastPoint(
      this.#apiName,
      this.#primaryKey,
      this.#propertyName,
    );
  }

  get points(): TimeSeriesQuery<T> {
    return new TimeSeriesQuery(
      this.#client,
      this.#propertyName,
      this.#apiName,
      this.#primaryKey,
    );
  }

  private constructor(
    client: ThinClient<OntologyDefinition<any>>,
    propertyName: string,
    apiName: string,
    primaryKey: string,
  ) {
    this.#client = client;
    this.#propertyName = propertyName;
    this.#apiName = apiName;
    this.#primaryKey = primaryKey;
  }
}
