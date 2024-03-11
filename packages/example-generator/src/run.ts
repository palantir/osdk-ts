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

import type { Template } from "@osdk/create-app";
import { run as runCreateApp, TEMPLATES } from "@osdk/create-app";
import { consola } from "consola";
import { compareSync } from "dir-compare";
import { findUp } from "find-up";
import { globby } from "globby";
import { exec } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import * as tmp from "tmp";
import { gitIgnoreFilter } from "./gitIgnoreFilter.js";

interface RunArgs {
  outputDirectory: string;
  check: boolean;
}

interface Mutator {
  filePattern: string;
  mutate: (
    template: Template,
    existingContent: string,
  ) => ModifyFile | DeleteFile;
}

interface ModifyFile {
  type: "modify";
  newContent: string;
}

interface DeleteFile {
  type: "delete";
}

export async function run({ outputDirectory, check }: RunArgs) {
  const outputPath = path.resolve(outputDirectory);
  const tmpDir = tmp.dirSync({ unsafeCleanup: true });
  tmp.setGracefulCleanup();
  process.chdir(tmpDir.name);

  // Run @osdk/create-app and mutators
  for (const template of TEMPLATES) {
    const exampleId = templateExampleId(template);
    consola.info(`Generating example ${exampleId}`);
    await runCreateApp({
      project: exampleId,
      overwrite: true,
      template: template,
      foundryUrl: "https://fake.palantirfoundry.com",
      applicationUrl: "https://example.com",
      application: "ri.third-party-applications.main.application.fake",
      clientId: "123",
      osdkPackage: "@osdk/examples.one.dot.one",
      osdkRegistryUrl:
        "https://fake.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.fake/contents/release/npm",
      corsProxy: false,
    });

    for (const mutator of MUTATORS) {
      const matches = await globby(
        mutator.filePattern,
        { cwd: path.join(tmpDir.name, exampleId) },
      );
      for (const match of matches) {
        const filePath = path.join(tmpDir.name, exampleId, match);
        const result = mutator.mutate(
          template,
          fs.readFileSync(filePath, "utf-8"),
        );
        switch (result.type) {
          case "modify":
            fs.writeFileSync(filePath, result.newContent);
            break;
          case "delete":
            fs.rmSync(filePath);
            break;
          default:
            const unknown: never = result;
            throw new Error(`Unknown mutator type: ${unknown}`);
        }
      }
    }
  }

  // Run monorepolint formatting
  const mrlConfig = await findUp(
    ".monorepolint.config.mjs",
    { cwd: path.dirname(fileURLToPath(import.meta.url)) },
  );
  if (mrlConfig == null) {
    consola.error("Unable to find .monorepolint.config.mjs");
    process.exit(1);
  }
  process.chdir(path.dirname(mrlConfig));
  const mrlPaths = TEMPLATES.map((template) =>
    path.join(tmpDir.name, templateExampleId(template), "package.json")
  );
  const { stdout: mrlStdout, stderr: mrlStderr } = await promisify(exec)(
    `pnpm exec monorepolint check --fix --paths ${mrlPaths.join(" ")}`,
  );
  consola.log(mrlStdout);
  consola.log(mrlStderr);

  // Check or copy files
  if (check) {
    for (const template of TEMPLATES) {
      const exampleId = templateExampleId(template);
      consola.info(`Checking contents of ${exampleId}`);
      // realpath because globby in .gitignore filter requires symlinks in tmp directory to be resolved
      const pathLeft = fs.realpathSync(path.join(outputPath, exampleId));
      const pathRight = fs.realpathSync(path.join(tmpDir.name, exampleId));
      const compareResult = compareSync(
        pathLeft,
        pathRight,
        {
          compareContent: true,
          filterHandler: gitIgnoreFilter(pathLeft, pathRight),
          excludeFilter: "/.turbo",
        },
      );
      if (!compareResult.same) {
        consola.error(
          `Found ${compareResult.differences} differences in ${exampleId} please generate examples again.`,
        );
        consola.error(compareResult.diffSet?.filter(d => d.state !== "equal"));
        process.exit(1);
      }
      consola.success(`Contents equal`);
    }
  } else {
    consola.info("Copying generated packages to output directory");
    for (const template of TEMPLATES) {
      const exampleId = templateExampleId(template);
      const exampleOutputPath = path.join(outputPath, exampleId);
      const exampleTmpPath = path.join(tmpDir.name, exampleId);
      fs.rmSync(exampleOutputPath, { recursive: true, force: true });
      fs.mkdirSync(exampleOutputPath, { recursive: true });
      fs.cpSync(exampleTmpPath, exampleOutputPath, { recursive: true });
    }
    consola.success("Done");
  }
}

const DELETE_NPM_RC: Mutator = {
  filePattern: ".npmrc",
  mutate: () => ({
    type: "delete",
  }),
};

const UPDATE_PACKAGE_JSON: Mutator = {
  filePattern: "package.json",
  mutate: (template, content) => ({
    type: "modify",
    newContent: content.replace(
      "\"@osdk/examples.one.dot.one\": \"latest\"",
      "\"@osdk/examples.one.dot.one\": \"workspace:*\"",
    ).replace(
      `"name": "${templateExampleId(template)}"`,
      `"name": "@osdk/examples.${templateCanonicalId(template)}"`,
    ),
  }),
};

const UPDATE_README: Mutator = {
  filePattern: "README.md",
  mutate: (template) => ({
    type: "modify",
    newContent: readme(template),
  }),
};

const MUTATORS: Mutator[] = [
  DELETE_NPM_RC,
  UPDATE_PACKAGE_JSON,
  UPDATE_README,
];

function templateCanonicalId(template: Template): string {
  return template.id.replace(/^template-/, "");
}

function templateExampleId(template: Template): string {
  return `example-${templateCanonicalId(template)}`;
}

function readme(template: Template): string {
  return `# ${templateExampleId(template)}

This project was generated with [\`@osdk/create-app\`](https://www.npmjs.com/package/@osdk/create-app) from the \`${
    templateCanonicalId(template)
  }\` template. It is built against a locally generated SDK and a non-existent Foundry stack, so it is intended for reference purposes only.

To quickly create your own version of this template run the following command and answer the prompts based on your Developer Console application:

\`\`\`
npm create @osdk/app@latest -- --template ${templateCanonicalId(template)}
\`\`\`

Alternatively check out the Developer Console docs for a full guide on creating and deploying frontend applications with the Ontology SDK.
`;
}
