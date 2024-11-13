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
import * as jestDiff from "jest-diff";
import { exec } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import * as tmp from "tmp";
import type { SdkVersion } from "../../create-app/build/esm/templates.js";
import { gitIgnoreFilter } from "./gitIgnoreFilter.js";

interface RunArgs {
  outputDirectory: string;
  check: boolean;
}

export async function run({ outputDirectory, check }: RunArgs): Promise<void> {
  const resolvedOutput = path.resolve(outputDirectory);
  const tmpDir = createTmpDir();
  await generateExamples(tmpDir);
  await fixMonorepolint(tmpDir);
  if (check) {
    await checkExamples(resolvedOutput, tmpDir);
  } else {
    await copyExamples(resolvedOutput, tmpDir);
  }
}

function createTmpDir(): tmp.DirResult {
  const tmpDir = tmp.dirSync({ unsafeCleanup: true });
  tmp.setGracefulCleanup();
  return tmpDir;
}

function templatesWithSdkVersions(templates: readonly Template[]) {
  return templates.flatMap((template) =>
    Object.keys(template.files).map((sdkVersion) =>
      [template, sdkVersion as SdkVersion] as const
    )
  );
}

async function generateExamples(tmpDir: tmp.DirResult): Promise<void> {
  process.chdir(tmpDir.name);
  for (const [template, sdkVersion] of templatesWithSdkVersions(TEMPLATES)) {
    const exampleId = sdkVersionedTemplateExampleId(template, sdkVersion);
    const osdkPackage = sdkVersion === "2.x"
      ? "@osdk/e2e.generated.catchall"
      : "@osdk/e2e.generated.1.1.x";
    consola.info(
      `Generating example ${exampleId} using osdkPackage ${osdkPackage}`,
    );
    await runCreateApp({
      project: exampleId,
      overwrite: true,
      template,
      sdkVersion,
      foundryUrl: "https://fake.palantirfoundry.com",
      applicationUrl: "https://example.com",
      application: "ri.third-party-applications.main.application.fake",
      clientId: "123",
      osdkPackage,
      osdkRegistryUrl:
        "https://fake.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.fake/contents/release/npm",
      corsProxy: false,
      scopes: ["api:ontologies-read", "api:ontologies-write"],
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
          sdkVersion,
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
}

async function fixMonorepolint(tmpDir: tmp.DirResult): Promise<void> {
  const mrlConfig = await findUp(
    ".monorepolint.config.mjs",
    { cwd: path.dirname(fileURLToPath(import.meta.url)) },
  );
  if (mrlConfig == null) {
    consola.error("Unable to find .monorepolint.config.mjs");
    process.exit(1);
  }
  process.chdir(path.dirname(mrlConfig));
  const mrlPaths = templatesWithSdkVersions(TEMPLATES).map((
    [template, sdkVersion],
  ) =>
    path.join(
      tmpDir.name,
      sdkVersionedTemplateExampleId(template, sdkVersion),
      "package.json",
    )
  );
  const { stdout: mrlStdout, stderr: mrlStderr } = await promisify(exec)(
    `pnpm exec monorepolint check --verbose --fix --paths ${
      mrlPaths.join(" ")
    }`,
  );
  consola.log(mrlStdout);
  consola.log(mrlStderr);
}

async function checkExamples(
  resolvedOutput: string,
  tmpDir: tmp.DirResult,
): Promise<void> {
  for (const [template, sdkVersion] of templatesWithSdkVersions(TEMPLATES)) {
    const exampleId = sdkVersionedTemplateExampleId(template, sdkVersion);
    consola.info(`Checking contents of ${exampleId}`);
    // realpath because globby in .gitignore filter requires symlinks in tmp directory to be resolved
    const pathLeft = fs.realpathSync(path.join(resolvedOutput, exampleId));
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

      for (const q of compareResult.diffSet ?? []) {
        if (q.state !== "equal") {
          const aPath = q.path1 && q.name1
            ? path.join(q.path1, q.relativePath, q.name1)
            : null;
          const bPath = q.path2 && q.name2
            ? path.join(q.path2, q.relativePath, q.name2)
            : null;

          const aContents = getContents(aPath);
          const bContents = getContents(bPath);

          if (aContents || bContents) {
            consola.error("Contents differ");
            consola.error(
              jestDiff.diff(aContents, bContents, {
                aAnnotation: aPath ?? undefined,
                bAnnotation: bPath ?? undefined,
                contextLines: 3,
              }),
            );
          }
        }
      }

      process.exit(1);
    }
    consola.success(`Contents equal`);
  }
}

function getContents(aPath: string | null) {
  return aPath?.endsWith(".json")
    ? JSON.parse(
      fs.readFileSync(aPath, "utf-8"),
    )
    : aPath?.endsWith(".ts") || aPath?.endsWith(".tsx")
        || aPath?.endsWith(".js") || aPath?.endsWith(".jsx")
    ? fs.readFileSync(aPath, "utf-8")
    : null;
}

async function copyExamples(
  resolvedOutput: string,
  tmpDir: tmp.DirResult,
): Promise<void> {
  consola.info("Copying generated packages to output directory");
  for (const [template, sdkVersion] of templatesWithSdkVersions(TEMPLATES)) {
    const exampleId = sdkVersionedTemplateExampleId(template, sdkVersion);
    const exampleOutputPath = path.join(resolvedOutput, exampleId);
    const exampleTmpPath = path.join(tmpDir.name, exampleId);
    fs.rmSync(exampleOutputPath, { recursive: true, force: true });
    fs.mkdirSync(exampleOutputPath, { recursive: true });
    fs.cpSync(exampleTmpPath, exampleOutputPath, { recursive: true });
  }
  consola.success("Done");
}

interface Mutator {
  filePattern: string;
  mutate: (
    template: Template,
    existingContent: string,
    sdkVersion: SdkVersion,
  ) => ModifyFile | DeleteFile;
}

interface ModifyFile {
  type: "modify";
  newContent: string;
}

interface DeleteFile {
  type: "delete";
}

const DELETE_NPM_RC: Mutator = {
  filePattern: ".npmrc",
  mutate: () => ({
    type: "delete",
  }),
};

const UPDATE_PACKAGE_JSON: Mutator = {
  filePattern: "package.json",
  mutate: (template, content, sdkVersion) => ({
    type: "modify",
    newContent: content.replace(
      // Use locally generated SDK in the monorepo
      "\"@osdk/e2e.generated.1.1.x\": \"latest\"",
      "\"@osdk/e2e.generated.1.1.x\": \"workspace:*\"",
    ).replace(
      // Use locally generated SDK in the monorepo
      "\"@osdk/e2e.generated.catchall\": \"latest\"",
      "\"@osdk/e2e.generated.catchall\": \"workspace:*\"",
    ).replace(
      // Use locally generated SDK in the monorepo
      /"@osdk\/client": "[\^~].*?"/,
      `"@osdk/client": "workspace:*"`,
    ).replace(
      // Use locally generated SDK in the monorepo
      /"@osdk\/oauth": "\^.*?"/,
      `"@osdk/oauth": "workspace:*"`,
    ).replace(
      // Follow monorepo package naming convention
      `"name": "${sdkVersionedTemplateExampleId(template, sdkVersion)}"`,
      `"name": "@osdk/examples.${
        sdkVersionedTemplateCanonicalId(template, sdkVersion)
      }"`,
    ),
  }),
};

const UPDATE_README: Mutator = {
  filePattern: "README.md",
  mutate: (template, _, sdkVersion) => ({
    type: "modify",
    newContent: readme(template, sdkVersion),
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

function sdkVersionedTemplateCanonicalId(
  template: Template,
  sdkVersion: SdkVersion,
): string {
  return `${templateCanonicalId(template)}-sdk-${sdkVersion}`;
}

function templateExampleId(template: Template): string {
  return `example-${templateCanonicalId(template)}`;
}

function sdkVersionedTemplateExampleId(
  template: Template,
  sdkVersion: SdkVersion,
): string {
  return `${templateExampleId(template)}-sdk-${sdkVersion}`;
}

function readme(template: Template, sdkVersion: SdkVersion): string {
  return `# ${templateExampleId(template)}

This project was generated with [\`@osdk/create-app\`](https://www.npmjs.com/package/@osdk/create-app) from the \`${
    templateCanonicalId(template)
  }\` template. It is built against a locally generated SDK and a non-existent Foundry stack, so it is intended for reference purposes only.

To quickly create your own version of this template run the following command and answer the prompts based on your Developer Console application:

\`\`\`
npm create @osdk/app@latest -- --template ${
    templateCanonicalId(template)
  } --sdkVersion ${sdkVersion}
\`\`\`

Alternatively check out the Developer Console docs for a full guide on creating and deploying frontend applications with the Ontology SDK.
`;
}
