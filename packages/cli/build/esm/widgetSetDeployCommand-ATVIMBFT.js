import { loadToken, createInternalClientContext, widget_registry_exports } from './chunk-L4N2UI42.js';
import './chunk-P5HXJTVE.js';
import { MANIFEST_FILE_LOCATION } from './chunk-ML7ZMS6G.js';
import { ExitProcessError } from './chunk-2U36M44D.js';
import { init_esm_shims } from './chunk-VHOQB2JW.js';
import archiver from 'archiver';
import { consola } from 'consola';
import * as fs from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';
import prettyBytes from 'pretty-bytes';

// src/commands/widgetset/deploy/widgetSetDeployCommand.mts
init_esm_shims();
async function widgetSetDeployCommand({
  widgetSet,
  foundryUrl,
  directory,
  repository,
  token,
  tokenFile
}) {
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  consola.debug(`Using directory for widget set files: "${path.resolve(directory)}`);
  const stat = await fs.promises.stat(directory);
  if (!stat.isDirectory()) {
    throw new ExitProcessError(2, "Specified path exists but is not a directory");
  }
  const widgetSetVersion = await findWidgetSetVersion(directory);
  consola.info(`Found version from manifest: ${widgetSetVersion}`);
  consola.start("Zipping widget set files");
  const archive = archiver("zip").directory(directory, false);
  logArchiveStats(archive);
  let deployRid = widgetSet;
  if (repository != null) {
    deployRid = repository;
    consola.debug(`Deploying to repository ${repository} for ${widgetSet}`);
  }
  consola.start("Uploading widget set files");
  await Promise.all([widget_registry_exports.uploadSiteVersion(
    clientCtx,
    deployRid,
    widgetSetVersion,
    Readable.toWeb(archive)
    // This cast is because the dom fetch doesn't align type wise with streams
  ), archive.finalize()]);
  consola.success("Upload complete");
  consola.start("Publishing widget set manifest");
  try {
    await widget_registry_exports.publishManifest(clientCtx, deployRid, widgetSetVersion);
    consola.success(`Deployed ${widgetSetVersion} successfully`);
  } catch (e) {
    consola.fail("Failed to publish manifest, cleaning up");
    await widget_registry_exports.deleteSiteVersion(clientCtx, deployRid, widgetSetVersion);
    throw e;
  }
}
async function findWidgetSetVersion(directory) {
  try {
    const manifestContent = await fs.promises.readFile(path.resolve(directory, MANIFEST_FILE_LOCATION), "utf8");
    const manifest = JSON.parse(manifestContent);
    if (manifest.widgetSet == null || manifest.widgetSet.version == null) {
      throw new Error(`Unable to find widget set version in manifest`);
    }
    return manifest.widgetSet.version;
  } catch (e) {
    throw new ExitProcessError(2, `Unable to process manifest at ${MANIFEST_FILE_LOCATION}${e instanceof Error ? `: ${e.message}` : ""}`);
  }
}
function logArchiveStats(archive) {
  let archiveStats = {
    fileCount: 0,
    bytes: 0
  };
  archive.on("progress", (progress) => {
    archiveStats = {
      fileCount: progress.entries.total,
      bytes: progress.fs.totalBytes
    };
  });
  archive.on("finish", () => {
    consola.info(`Zipped ${prettyBytes(archiveStats.bytes, {
      binary: true
    })} total over ${archiveStats.fileCount} files`);
  });
}

export { widgetSetDeployCommand as default };
//# sourceMappingURL=widgetSetDeployCommand-ATVIMBFT.js.map
//# sourceMappingURL=widgetSetDeployCommand-ATVIMBFT.js.map