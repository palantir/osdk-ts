#!/usr/bin/env node
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

import Handlebars from "handlebars";
import * as fs from "node:fs";
import * as templates from "./templates.mjs";

let indexContents = "";

fs.mkdirSync("./src/generatedNoCheck", { recursive: true });

for (const c of ["loadObjectPageGuide"]) {
  const h = Handlebars.compile(templates[c]);

  fs.writeFileSync(
    `./src/generatedNoCheck/${c}.ts`,
    `import {client} from "../client.js";\n`
      + h({
        objectType: "Employee",
        packageName: "@osdk/e2e.generated.catchall",
        titleProperty: "firstName",
      }),
  );

  indexContents = `export const ${c} = ${JSON.stringify(templates[c])}\n\n`;
}

fs.writeFileSync(`./src/generatedNoCheck/index.ts`, indexContents);
