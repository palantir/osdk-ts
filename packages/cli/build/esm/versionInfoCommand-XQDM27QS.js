import { loadToken, createInternalClientContext, widget_registry_exports } from './chunk-L4N2UI42.js';
import './chunk-P5HXJTVE.js';
import './chunk-2U36M44D.js';
import { init_esm_shims } from './chunk-VHOQB2JW.js';
import { consola } from 'consola';

// src/commands/widgetset/version/info/versionInfoCommand.mts
init_esm_shims();
async function versionInfoCommand({
  version,
  foundryUrl,
  widgetSet,
  token,
  tokenFile
}) {
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  consola.start("Loading version info");
  const response = await widget_registry_exports.getWidgetSetRelease(clientCtx, widgetSet, version);
  consola.success(`Loaded version info for ${version}`);
  consola.log(JSON.stringify(response, null, 2));
}

export { versionInfoCommand as default };
//# sourceMappingURL=versionInfoCommand-XQDM27QS.js.map
//# sourceMappingURL=versionInfoCommand-XQDM27QS.js.map