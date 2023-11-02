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
import type { MinimalFs } from "../MinimalFs";
import { formatTs } from "../util/test/formatTs";

export async function generateIndexFile(fs: MinimalFs, outDir: string) {
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(
    path.join(outDir, "index.ts"),
    await formatTs(`
    export {
      ActionExecutionMode,
      ActionResponse,
      ActionValidationResult, 
      ArrayType,
      AttachmentType,
      BooleanType,
      ByteType,
      DateType,
      DecimalType,
      DoubleType,
      FloatType,
      FoundryApiError, 
      GeoPoint,
      GeoPointType,
      GeoShape,
      GeoShapeType,
      IntegerType,
      isErr,
      isOk, 
      LocalDate,
      LongType,
      ObjectType,
      Op, 
      Polygon,
      ReturnEditsMode, 
      SetType,
      ShortType,
      StringType,
      StructField,
      StructType,
      TimeSeriesType,
      Timestamp,
      TimestampType,
      visitError, 
    } from '@osdk/legacy-client';
    export type {
      ActionError,
      AggregateObjectsError,
      AggregationGroup,
      AggregationResult, 
      Attachment,
      AttachmentMetadata, 
      AttachmentsError,
      Edits,
      ErrorVisitor,
      GetLinkedObjectError,
      GetObjectError,
      ListLinkedObjectsError,
      ListObjectsError,
      LoadObjectSetError,
      Page,
      PermissionDenied,
      QueryError,
      QueryResponse, 
      Result,
      SearchObjectsError,
      TimeSeries,
      TimeSeriesError,
      TimeSeriesPoint, 
      Unauthorized,
      UnknownError, 
    } from '@osdk/legacy-client';
    export { Ontology } from "./Ontology";
    export { FoundryClient } from "./FoundryClient";
    `),
  );
}
