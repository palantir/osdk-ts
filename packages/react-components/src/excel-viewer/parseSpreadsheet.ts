/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

/* cspell:words defval */

import { read, utils } from "xlsx-republish";
import type { ParsedSpreadsheet, SheetData } from "./ExcelViewerApi.js";

export async function parseSpreadsheetFromResponse(
  response: Response,
): Promise<ParsedSpreadsheet> {
  const buffer = await response.arrayBuffer();
  const workbook = read(buffer, { type: "array" });

  const sheets: SheetData[] = workbook.SheetNames.map((name) => {
    const sheet = workbook.Sheets[name];
    const rows: string[][] = sheet != null
      ? utils.sheet_to_json<string[]>(sheet, {
        header: 1,
        defval: "",
        raw: false,
      })
      : [];
    return { name, rows };
  });

  return { sheets };
}
