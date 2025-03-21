import { handlePromptCancel } from './chunk-N3LXG6II.js';
import { loadToken, createInternalClientContext, widget_registry_exports } from './chunk-L4N2UI42.js';
import './chunk-P5HXJTVE.js';
import './chunk-2U36M44D.js';
import { init_esm_shims } from './chunk-VHOQB2JW.js';
import { consola } from 'consola';
import { colorize } from 'consola/utils';

// src/commands/widgetset/version/delete/versionDeleteCommand.mts
init_esm_shims();
async function versionDeleteCommand({
  version,
  yes,
  widgetSet,
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
  const widgetSetRelease = await widget_registry_exports.getWidgetSetRelease(clientCtx, widgetSet, version);
  const {
    repositoryRid,
    siteVersion
  } = getSiteLocator(widgetSetRelease);
  await Promise.all([widget_registry_exports.deleteWidgetSetRelease(clientCtx, widgetSet, version), widget_registry_exports.deleteSiteVersion(clientCtx, repositoryRid, siteVersion)]);
  consola.success(`Deleted version ${version}`);
}
function getSiteLocator(widgetSetRelease) {
  switch (widgetSetRelease.locator.type) {
    case "internalSitesLayout":
      return {
        repositoryRid: widgetSetRelease.widgetSetRid,
        siteVersion: widgetSetRelease.locator.internalSitesLayout.version
      };
    case "externalSitesLayout":
      return {
        repositoryRid: widgetSetRelease.locator.externalSitesLayout.repositoryRid,
        siteVersion: widgetSetRelease.locator.externalSitesLayout.version
      };
    default:
      widgetSetRelease.locator;
      throw new Error(`Unknown widget set locator type ${widgetSetRelease.locator.type}`);
  }
}

export { versionDeleteCommand as default };
//# sourceMappingURL=versionDeleteCommand-MADNXF4Z.js.map
//# sourceMappingURL=versionDeleteCommand-MADNXF4Z.js.map