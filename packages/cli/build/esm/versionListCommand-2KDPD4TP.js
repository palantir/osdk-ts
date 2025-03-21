import { loadToken, createInternalClientContext, third_party_applications_exports } from './chunk-L4N2UI42.js';
import './chunk-P5HXJTVE.js';
import './chunk-2U36M44D.js';
import { init_esm_shims } from './chunk-VHOQB2JW.js';
import { consola } from 'consola';
import { colorize } from 'consola/utils';

// src/commands/site/version/list/versionListCommand.mts
init_esm_shims();
async function versionListCommand({
  foundryUrl,
  application,
  token,
  tokenFile
}) {
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  consola.start("Fetching versions & deployed version");
  const [versions, website] = await Promise.all([third_party_applications_exports.listVersions(clientCtx, application), third_party_applications_exports.getWebsite(clientCtx, application)]);
  if (versions.data.length === 0) {
    consola.info("No site versions found");
    return;
  }
  consola.success("Found versions:");
  const semver = await import('semver');
  const sortedVersions = semver.rsort(versions.data.map((v) => v.version).filter((v) => semver.valid(v)));
  for (const version of sortedVersions) {
    consola.log(`    - ${version}${website?.deployedVersion && version === website?.deployedVersion ? colorize("green", ` (deployed)`) : ""}`);
  }
}

export { versionListCommand as default };
//# sourceMappingURL=versionListCommand-2KDPD4TP.js.map
//# sourceMappingURL=versionListCommand-2KDPD4TP.js.map