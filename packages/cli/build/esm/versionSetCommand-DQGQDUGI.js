import { loadToken, createInternalClientContext, third_party_applications_exports } from './chunk-L4N2UI42.js';
import './chunk-P5HXJTVE.js';
import './chunk-2U36M44D.js';
import { init_esm_shims } from './chunk-VHOQB2JW.js';
import { consola } from 'consola';

// src/commands/site/version/set/versionSetCommand.mts
init_esm_shims();
async function versionSetCommand({
  version,
  application,
  foundryUrl,
  token,
  tokenFile
}) {
  consola.start(`Setting live version`);
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  if (version) {
    await third_party_applications_exports.deployWebsite(clientCtx, application, {
      version
    });
  }
  consola.success(`Set live version to ${version}`);
}

export { versionSetCommand as default };
//# sourceMappingURL=versionSetCommand-DQGQDUGI.js.map
//# sourceMappingURL=versionSetCommand-DQGQDUGI.js.map