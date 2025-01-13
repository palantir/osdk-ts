import { ProjectManifest } from "@pnpm/types";

interface MapVersionsToEnv {
  [envName: string]: string; /* package name */
}
export function convertMapVersionToEnvVars(
  mapVersions: MapVersionsToEnv | undefined,
  manifest: ProjectManifest,
): Record<string, string> {
  if (!mapVersions) return {};
  const ret: Record<string, string> = {};
  for (const [envName, projectName] of Object.entries(mapVersions)) {
    const maybe = manifest.dependencies?.[projectName]
      ?? manifest.peerDependencies?.[projectName]
      ?? manifest.optionalDependencies?.[projectName]
      ?? manifest.devDependencies?.[projectName];

    if (maybe) ret[envName] = maybe;
  }
  Object.fromEntries(
    Object.entries(mapVersions).map(([envName, projectName]) => [envName]),
  );

  return ret;
}
