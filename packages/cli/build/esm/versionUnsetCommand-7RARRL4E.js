import { handlePromptCancel } from './chunk-N3LXG6II.js';
import { loadToken, createInternalClientContext, third_party_applications_exports } from './chunk-L4N2UI42.js';
import './chunk-P5HXJTVE.js';
import './chunk-2U36M44D.js';
import { init_esm_shims } from './chunk-VHOQB2JW.js';
import { consola } from 'consola';
import { colorize } from 'consola/utils';

// src/commands/site/version/unset/versionUnsetCommand.mts
init_esm_shims();
async function versionUnsetCommand({
  yes,
  application,
  foundryUrl,
  token,
  tokenFile
}) {
  if (!yes) {
    const confirmed = await consola.prompt(`Are you sure you want to clear the live site version?
${colorize("bold", "Your site will no longer be accessible until a new live site version is set.")}`, {
      type: "confirm",
      cancel: "symbol"
    });
    handlePromptCancel(confirmed);
  }
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  consola.start("Clearing live site version");
  await third_party_applications_exports.undeployWebsite(clientCtx, application);
  consola.success("Cleared live site version");
}

export { versionUnsetCommand as default };
//# sourceMappingURL=versionUnsetCommand-7RARRL4E.js.map
//# sourceMappingURL=versionUnsetCommand-7RARRL4E.js.map