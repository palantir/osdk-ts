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
import type { MinimalFs } from "../../../MinimalFs";
import { formatTs } from "../../../util/test/formatTs";
import { reexportConsts } from "../util/reexportConsts";
import { reexportTypes } from "../util/reexportTypes";
import { generateGeoshapesDir } from "./baseTypes/generateGeoshapesDir";
import { generateTimeSeriesDir } from "./baseTypes/generateTimeSeriesDir";

export async function generateBaseTypesDir(
  runtimeDistDir: string,
  fs: MinimalFs,
) {
  const baseTypesDir = path.join(runtimeDistDir, "baseTypes");
  await fs.mkdir(baseTypesDir, { recursive: true });

  await fs.writeFile(
    path.join(baseTypesDir, "index.ts"),
    await formatTs(
      `export * from "./ActionType";
      // export * from "./attachments";
      export * from "./geoshapes";
      // export * from "./links";
      // export * from "./localDate";
      // export * from "./objectset";
      // export * from "./ObjectType";
      // export * from "./OntologyObject";
      // export * from "./ParameterValue";
      // export * from "./Queries";
      export * from "./timeseries";
      // export * from "./timestamp";`,
    ),
  );

  const geoshapesDir = path.join(baseTypesDir, "geoshapes");
  await generateGeoshapesDir(geoshapesDir, fs);
  const timeseriesDir = path.join(baseTypesDir, "timeseries");
  await generateTimeSeriesDir(timeseriesDir, fs);

  await fs.writeFile(
    path.join(baseTypesDir, "ActionType.ts"),
    await formatTs(
      `import { OntologyObject } from "./OntologyObject";
      `
        + reexportConsts([
          "ActionExecutionMode",
          "ReturnEditsMode",
          "ActionValidationResult",
        ])
        + reexportTypes([
          "ActionExecutionOptions",
          "ValidationResponse",
          "BulkEdits",
        ])
        + reexportTypes([
          "CreatedObjectEdits",
          "ModifiedObjectEdits",
        ], "<T extends OntologyObject>")
        + reexportTypes(
          [
            "Edits",
          ],
          "<TAddedObjects extends OntologyObject | void, TModifiedObjects extends OntologyObject | void>",
        )
        + reexportTypes(
          [
            "ActionResponse",
          ],
          "<TEdits extends Edits<any, any> | undefined = undefined>",
          "<TEdits>",
        )
        + reexportTypes(
          [
            "ActionResponseFromOptions",
          ],
          "<TOptions extends ActionExecutionOptions | undefined = undefined, TEdits extends Edits<any, any> | undefined = undefined>",
          "<TOptions, TEdits>",
        ),
    ),
  );

  await fs.writeFile(
    path.join(baseTypesDir, "OntologyObject.ts"),
    await formatTs(
      reexportTypes(["OntologyObject"]) + reexportConsts(["isOntologyObject"]),
    ),
  );
}
