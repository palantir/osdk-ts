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
import { generateAttachmentsDir } from "./baseTypes/generateAttachmentsDir";
import { generateGeoshapesDir } from "./baseTypes/generateGeoshapesDir";
import { generateObjectSetDir } from "./baseTypes/generateObjectSetDir";
import { generateSharedObjectCodeDir } from "./baseTypes/generateSharedObjectCode";
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
      export * from "./attachments";
      export * from "./geoshapes";
      export * from "./links";
      export * from "./localDate";
      export * from "./objectset";
      export * from "./ObjectType";
      export * from "./OntologyObject";
      export * from "./Queries";
      export * from "./timeseries";
      export * from "./timestamp";`,
    ),
  );

  const geoshapesDir = path.join(baseTypesDir, "geoshapes");
  await generateGeoshapesDir(geoshapesDir, fs);
  const timeseriesDir = path.join(baseTypesDir, "timeseries");
  await generateTimeSeriesDir(timeseriesDir, fs);
  const attachmentsDir = path.join(baseTypesDir, "attachments");
  await generateAttachmentsDir(attachmentsDir, fs);
  const objectSetDir = path.join(baseTypesDir, "objectset");
  await generateObjectSetDir(objectSetDir, fs);
  const sharedObjectCodeDir = path.join(baseTypesDir, "sharedObjectCode");
  await generateSharedObjectCodeDir(sharedObjectCodeDir, fs);

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

  await fs.writeFile(
    path.join(baseTypesDir, "links.ts"),
    await formatTs(
      `import { OntologyObject } from "./OntologyObject`
        + reexportTypes(
          ["SingleLink", "MultiLink"],
          "<T extends OntologyObject = OntologyObject>",
        ),
    ),
  );

  await fs.writeFile(
    path.join(baseTypesDir, "localDate.ts"),
    await formatTs(
      reexportConsts(
        ["LocalDate"],
      ) + reexportTypes(
        ["LocalDate"],
      ),
    ),
  );

  await fs.writeFile(
    path.join(baseTypesDir, "timestamp.ts"),
    await formatTs(
      reexportConsts(
        ["Timestamp"],
      )
        + reexportTypes(
          ["Timestamp"],
        ),
    ),
  );

  await fs.writeFile(
    path.join(baseTypesDir, "Queries.ts"),
    await formatTs(
      `import { BucketValue, Range, Rangeable } from "../aggregations";
      `
        + reexportTypes([
          "QueryResponse",
        ], "<T>")
        + reexportTypes([
          "BaseBucket",
        ], "<K, V>")
        + reexportTypes([
          "NestedBucket",
        ], "<TGroupKey, TSegmentKey, TValue extends BucketValue>")
        + reexportTypes(
          [
            "TwoDimensionalAggregation",
          ],
          "<TGroupKey extends QueryBucketKey, TValue extends BucketValue = number>",
        )
        + reexportTypes(
          [
            "ThreeDimensionalAggregation",
          ],
          "<TGroupKey extends QueryBucketKey, TSegmentKey extends QueryBucketKey, TValue extends BucketValue = number>",
        )
        + reexportTypes(
          [
            "QueryBucketKey",
          ],
        ),
    ),
  );

  await fs.writeFile(
    path.join(baseTypesDir, "ObjectType.ts"),
    await formatTs(
      `import { OntologyObject } from "./OntologyObject";`
        + reexportTypes([
          "BaseType",
          "StringType",
          "IntegerType",
          "DateType",
          "BooleanType",
          "ByteType",
          "DecimalType",
          "FloatType",
          "TimestampType",
          "ShortType",
          "LongType",
          "DoubleType",
          "GeoPointType",
          "GeoShapeType",
          "AttachmentType",
          "ObjectType",
          "StructField",
          "QueryBucketRangeableType",
          "QueryBucketKeyType",
          "QueryBucketValueType",
          "AllValueTypes",
          "OntologyType",
          "ObjectTypeProperties",
          "StructType",
        ])
        + reexportTypes(
          ["TimeSeriesType", "ArrayType", "SetType"],
          "<T extends BaseType>",
        )
        + reexportTypes(
          ["Property"],
          "<TType extends OntologyType = OntologyType>",
        )
        + reexportTypes(
          ["BaseObjectType"],
          "<TOntologyObject extends OntologyObject = OntologyObject>",
        )
        + reexportTypes(["ObjectSetType"], "<T extends ObjectType>")
        + reexportTypes(["RangeType"], "<T extends QueryBucketRangeableType>")
        + reexportTypes(
          ["TwoDimensionalAggregationType"],
          "<TGroupKey extends QueryBucketKeyType, TValue extends QueryBucketValueType>",
        )
        + reexportTypes(
          ["ThreeDimensionalAggregationType"],
          "<TGroupKey extends QueryBucketKeyType, TSegmentKey extends QueryBucketKeyType, TValue extends QueryBucketValueType>",
        ),
    ),
  );
}
