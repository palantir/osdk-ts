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

import type { ObjectSetListener } from "@osdk/client/unstable-do-not-use";
import { Employee } from "@osdk/e2e.generated.catchall";
import type { UNSTABLE_ObjectSet } from "../../client/build/esm/objectSet/createUnstableObjectSet.js";
import { client } from "./client.js";
import { logger } from "./logger.js";

export function runSubscriptionsTest() {
  const makeObjectSetListener = (prefix: string): ObjectSetListener<any> => {
    return {
      onError(err) {
        logger.error({ err }, "%s: Error in subscription", prefix);
      },

      onOutOfDate() {
        logger.info("%s: out of date", prefix);
      },

      onChange(objects) {
        logger.info("%s: Changed objects: %o", prefix, objects);
      },
    };
  };

  (client(Employee).where({
    jobProfile: "Echo",
  }) as UNSTABLE_ObjectSet<Employee>).subscribe(
    makeObjectSetListener("Sub(Echo)"),
  );

  (client(Employee).where({
    jobProfile: "Delta",
  }) as UNSTABLE_ObjectSet<Employee>).subscribe(
    makeObjectSetListener("Sub(Delta)"),
  );
}
