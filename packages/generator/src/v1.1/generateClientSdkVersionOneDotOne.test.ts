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

import { mkdir, rmdir, writeFile } from "fs/promises";
import { describe, expect, test } from "vitest";
import { compileThis } from "../util/test/compileThis";
import { createMockMinimalFiles } from "../util/test/createMockMinimalFiles";
import { TodoWireOntology } from "../util/test/TodoWireOntology";
import { generateClientSdkVersionOneDotOne } from "./generateClientSdkVersionOneDotOne";

describe("generator", () => {
  test("should be able to generate a project", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";

    await generateClientSdkVersionOneDotOne(
      TodoWireOntology,
      helper.minimalFiles,
      BASE_PATH,
    );

    expect(helper.minimalFiles.writeFile).toBeCalled();
    helper.dumpFilesToConsole();

    expect(
      helper.getFiles()[`${BASE_PATH}/index.ts`],
    ).toMatchInlineSnapshot(`
      "export {
        ActionExecutionMode,
        ActionResponse,
        ActionValidationResult,
        ArrayType,
        AttachmentType,
        BooleanType,
        ByteType,
        ConfidentialClientAuth,
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
        LocalDate,
        LongType,
        ObjectType,
        Op,
        Polygon,
        PublicClientAuth,
        ReturnEditsMode,
        SetType,
        ShortType,
        StringType,
        StructField,
        StructType,
        TimeSeriesType,
        Timestamp,
        TimestampType,
        UserTokenAuth,
        isErr,
        isOk,
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
      export { FoundryClient } from './FoundryClient';
      export { Ontology } from './Ontology';
      "
    `);

    const diagnostics = compileThis(helper.getFiles(), BASE_PATH);
    for (const q of diagnostics) {
      console.error(
        `${q.file?.fileName}:${q.file?.getLineStarts()} ${q.messageText}`,
      );
    }

    // TODO: Certain errors are expected since we can't resolve the static code, but we should fix them.
    const errors = diagnostics.filter((q) => q.code !== 2792);

    expect(errors).toHaveLength(0);
  });

  test.skip("runs generator locally", async () => {
    try {
      await rmdir(`${__dirname}/generated`, { recursive: true });
    } catch (e) {
    }
    await mkdir(`${__dirname}/generated`, { recursive: true });
    await generateClientSdkVersionOneDotOne(
      TodoWireOntology,
      {
        writeFile: async (path, contents) => {
          await writeFile(path, contents, { flag: "w" });
        },
        mkdir: async (path, options) => {
          await mkdir(path, options);
        },
      },
      `${__dirname}/generated/`,
    );
  });
});
