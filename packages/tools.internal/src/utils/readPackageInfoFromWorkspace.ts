// @ts-check
import { createExportableManifest } from "@pnpm/exportable-manifest";
import { findWorkspaceDir } from "@pnpm/find-workspace-dir";
import { readProjectManifest } from "@pnpm/read-project-manifest";
import { type ProjectManifest } from "@pnpm/types";
import { WorkspaceManifest } from "@pnpm/workspace.read-manifest";
import { readWorkspaceManifest } from "@pnpm/workspace.read-manifest";

export async function readPackageInfoFromWorkspace(
  projectDir: string,
): Promise<{
  workspaceDir: string;
  workspaceManifest: WorkspaceManifest;
  exportableManifest: ProjectManifest;
  manifest: ProjectManifest;

  resolvedDependencies: Record<
    | "dependencies"
    | "devDependencies"
    | "peerDependencies"
    | "optionalDependencies",
    Record<string, string> | undefined
  >;
}> {
  const workspaceDir = await findWorkspaceDir(projectDir);
  if (!workspaceDir) throw "couldn't find workspace dir";
  const workspaceManifest = await readWorkspaceManifest(workspaceDir);
  if (!workspaceManifest) throw "couldn't find workspace manifest";

  const { manifest } = await readProjectManifest(projectDir);
  const exportableManifest = await createExportableManifest(
    projectDir,
    manifest,
    {
      catalogs: {
        default: workspaceManifest.catalog,
        ...workspaceManifest.catalogs,
      },
    },
  );

  return {
    workspaceDir,
    workspaceManifest,
    exportableManifest,
    manifest,
    resolvedDependencies: {
      dependencies: exportableManifest["dependencies"],
      devDependencies: exportableManifest["devDependencies"],
      peerDependencies: exportableManifest["peerDependencies"],
      optionalDependencies: exportableManifest["optionalDependencies"],
    },
  };
}
