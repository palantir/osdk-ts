import path from "node:path";
import { fileURLToPath } from "node:url";

import { compareSync } from "dir-compare";
import tmp, { DirResult } from "tmp";
import { beforeEach, expect, test, vi } from "vitest";

import { cli } from "../cli.js";
import { TEMPLATES } from "../templates.js";

const snapshotsDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "snapshots"
);
beforeEach(() => {
  let tmpDir: DirResult | undefined;
  if (process.env.UPDATE_SNAPSHOTS === "true") {
    vi.spyOn(process, "cwd").mockImplementation(() => snapshotsDir);
  } else {
    tmpDir = tmp.dirSync({ unsafeCleanup: true });
    const tmpDirName = tmpDir.name;
    vi.spyOn(process, "cwd").mockImplementation(() => tmpDirName);
  }

  return () => {
    vi.restoreAllMocks();
    tmpDir?.removeCallback();
  };
});

for (const template of TEMPLATES) {
  test(`CLI creates ${template.id}`, async () => {
    const project = `expected-${template.id}`;
    await cli([
      "node",
      "create-osdk-app",
      project,
      "--overwrite",
      "--template",
      template.id,
      "--foundry-url",
      "https://example.palantirfoundry.com",
      "--application-url",
      "https://app.example.palantirfoundry.com",
      "--client-id",
      "123",
      "--osdk-package",
      "@braeburn/sdk",
      "--osdk-registry-url",
      "https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.fake/contents/release/npm",
    ]);

    const result = compareSync(
      path.join(process.cwd(), project),
      path.join(snapshotsDir, project)
    );
    expect.soft(result.same).toBe(true);
    expect.soft(result.differences).toEqual(0);
  });
}
