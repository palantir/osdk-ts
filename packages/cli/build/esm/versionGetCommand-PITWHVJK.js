import { loadToken, createInternalClientContext, third_party_applications_exports } from './chunk-L4N2UI42.js';
import './chunk-P5HXJTVE.js';
import './chunk-2U36M44D.js';
import { init_esm_shims } from './chunk-VHOQB2JW.js';
import { consola } from 'consola';

// src/commands/site/version/get/versionGetCommand.mts
init_esm_shims();
async function versionGetCommand({
  foundryUrl,
  application,
  token,
  tokenFile
}) {
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  consola.start("Getting live version");
  const website = await third_party_applications_exports.getWebsite(clientCtx, application);
  const deployedVersion = website?.deployedVersion;
  if (!deployedVersion) {
    consola.info("No live site version set");
  } else {
    consola.success(`Live site version is ${deployedVersion}`);
  }
}

export { versionGetCommand as default };
//# sourceMappingURL=versionGetCommand-PITWHVJK.js.map
//# sourceMappingURL=versionGetCommand-PITWHVJK.js.map