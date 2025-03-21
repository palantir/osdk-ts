import { handlePromptCancel } from './chunk-N3LXG6II.js';
import { loadToken, createInternalClientContext, third_party_applications_exports } from './chunk-L4N2UI42.js';
import './chunk-P5HXJTVE.js';
import './chunk-2U36M44D.js';
import { init_esm_shims } from './chunk-VHOQB2JW.js';
import { consola } from 'consola';
import { colorize } from 'consola/utils';

// src/commands/site/version/delete/versionDeleteCommand.mts
init_esm_shims();
async function versionDeleteCommand({
  version,
  yes,
  application,
  foundryUrl,
  token,
  tokenFile
}) {
  if (!yes) {
    const confirmed = await consola.prompt(`Are you sure you want to delete the version ${version}?
${colorize("bold", "This action cannot be undone.")}`, {
      type: "confirm",
      cancel: "symbol"
    });
    handlePromptCancel(confirmed);
  }
  consola.start(`Deleting version ${version}`);
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  await third_party_applications_exports.deleteVersion(clientCtx, application, version);
  consola.success(`Deleted version ${version}`);
}

export { versionDeleteCommand as default };
//# sourceMappingURL=versionDeleteCommand-JDE6I3BF.js.map
//# sourceMappingURL=versionDeleteCommand-JDE6I3BF.js.map