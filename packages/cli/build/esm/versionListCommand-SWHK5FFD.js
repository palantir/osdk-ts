import { loadToken, createInternalClientContext, widget_registry_exports } from './chunk-L4N2UI42.js';
import './chunk-P5HXJTVE.js';
import './chunk-2U36M44D.js';
import { init_esm_shims } from './chunk-VHOQB2JW.js';
import { consola } from 'consola';

// src/commands/widgetset/version/list/versionListCommand.mts
init_esm_shims();
async function versionListCommand({
  foundryUrl,
  widgetSet,
  token,
  tokenFile
}) {
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  consola.start("Fetching versions");
  const response = await widget_registry_exports.listWidgetSetReleases(clientCtx, widgetSet);
  if (response.releases.length === 0) {
    consola.info("No widget set versions found");
    return;
  }
  consola.success("Found versions:");
  const semver = await import('semver');
  const sortedVersions = semver.rsort(response.releases.map((v) => v.widgetSetVersion).filter((v) => semver.valid(v)));
  for (const version of sortedVersions) {
    consola.log(`    - ${version}`);
  }
}

export { versionListCommand as default };
//# sourceMappingURL=versionListCommand-SWHK5FFD.js.map
//# sourceMappingURL=versionListCommand-SWHK5FFD.js.map