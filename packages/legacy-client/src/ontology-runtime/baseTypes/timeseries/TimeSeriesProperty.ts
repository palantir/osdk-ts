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

import type { Auth } from "../../../oauth-client";
import {
  type OntologyMetadata,
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

  #provider: OntologyProvider;
  #ontologyMetadata: OntologyMetadata;

  static constructTimeSeries<T extends string | number>(
    propertyName: string,
    authClient: Auth,
    stack: string,
    apiName: string,
    primaryKey: string,
    ontologyMetadata: OntologyMetadata,
  ): TimeSeriesProperty<T> {
    return new TimeSeriesProperty<T>(
      authClient,
      stack,
      propertyName,
      apiName,
      primaryKey,
      ontologyMetadata,
    );
  }

  getFirstPoint(): Promise<Result<TimeSeriesPoint<T>, TimeSeriesError>> {
    return this.#provider.getFirstPoint(
      this.apiName,
      this.primaryKey,
      this.propertyName,
    );
  }

  getLastPoint(): Promise<Result<TimeSeriesPoint<T>, TimeSeriesError>> {
    return this.#provider.getLastPoint(
      this.apiName,
      this.primaryKey,
      this.propertyName,
    );
  }

  get points(): TimeSeriesQuery<T> {
    return new TimeSeriesQuery(
      this.authClient,
      this.stack,
      this.propertyName,
      this.apiName,
      this.primaryKey,
      this.#ontologyMetadata,
    );
  }

  private constructor(
    private authClient: Auth,
    private stack: string,
    private propertyName: string,
    private apiName: string,
    private primaryKey: string,
    ontologyMetadata: OntologyMetadata,
  ) {
    this.#provider = new OntologyProvider(authClient, stack, ontologyMetadata);
    this.#ontologyMetadata = ontologyMetadata;
  }
}
