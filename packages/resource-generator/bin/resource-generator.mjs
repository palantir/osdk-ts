#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { parseArgs } from "node:util";

import { generateResourcePackage } from "../build/esm/index.js";

const { values } = parseArgs({
  options: {
    resources: { type: "string" },
    "package-name": { type: "string" },
    "package-version": { type: "string", default: "0.0.0" },
    "resource-version": { type: "string" },
    "out-dir": { type: "string" },
  },
});
if (
  !values.resources ||
  !values["package-name"] ||
  !values["resource-version"] ||
  !values["out-dir"]
) {
  throw new Error(
    "Usage: resource-generator --resources <file> --package-name <name> --resource-version <range> --out-dir <directory> [--package-version <version>]",
  );
}
await generateResourcePackage(
  JSON.parse(await readFile(values.resources, "utf-8")),
  {
    packageName: values["package-name"],
    packageVersion: values["package-version"],
    resourceVersion: values["resource-version"],
    outputDirectory: values["out-dir"],
  },
);
