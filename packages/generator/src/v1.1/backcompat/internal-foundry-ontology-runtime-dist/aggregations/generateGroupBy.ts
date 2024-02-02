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

import * as path from "node:path";
import type { MinimalFs } from "../../../../MinimalFs";
import { formatTs } from "../../../../util/test/formatTs";
import { reexportConsts } from "../../util/reexportConsts";
import { reexportTypes } from "../../util/reexportTypes";

export async function generateGroupBy(
  fs: MinimalFs,
  aggregationsDir: string,
  importExt = "",
) {
  await fs.mkdir(path.join(aggregationsDir, "groupBy"), { recursive: true });

  const groupBys = [
    "BooleanGroupBy",
    "LocalDateGroupBy",
    "NumericGroupBy",
    "StringGroupBy",
    "TimestampGroupBy",
  ];

  const reexportFiles = [...groupBys, "GroupKeyType"];

  for (const key of reexportFiles) {
    await fs.writeFile(
      path.join(aggregationsDir, "groupBy", `${key}.ts`),
      await formatTs(`export {${key}} from "./index${importExt}";`),
    );
  }

  await fs.writeFile(
    path.join(aggregationsDir, "groupBy", "index.ts"),
    await formatTs(
      `import { Bucketing, BucketKey, Duration, Range, Rangeable } from "../Aggregations${importExt}";`
        + reexportConsts(groupBys)
        + reexportTypes(
          groupBys,
          "<T extends BucketKey>",
        )
        + `export {GroupKeyType} from "@osdk/legacy-client";
          `,
    ),
  );
}
