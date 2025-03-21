import { loadToken, createInternalClientContext, third_party_applications_exports } from './chunk-L4N2UI42.js';
import './chunk-P5HXJTVE.js';
import { autoVersion, AutoVersionError } from './chunk-MU54JM45.js';
import { ExitProcessError } from './chunk-2U36M44D.js';
import './chunk-KJFA7LBI.js';
import { init_esm_shims } from './chunk-VHOQB2JW.js';
import { consola } from 'consola';
import archiver from 'archiver';
import { colorize } from 'consola/utils';
import * as fs from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';
import prettyBytes from 'pretty-bytes';

// src/commands/site/deploy/siteDeployCommand.mts
init_esm_shims();
async function siteDeployCommand({
  selectedVersion,
  application,
  foundryUrl,
  uploadOnly,
  snapshot,
  snapshotId,
  directory,
  token,
  tokenFile
}) {
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);
  let siteVersion;
  if (typeof selectedVersion === "string") {
    siteVersion = selectedVersion;
  } else {
    siteVersion = await findAutoVersion(selectedVersion);
    consola.info(`Auto version inferred next version to be: ${siteVersion}`);
  }
  consola.debug(`Using directory for site files: "${path.resolve(directory)}`);
  const stat = await fs.promises.stat(directory);
  if (!stat.isDirectory()) {
    throw new ExitProcessError(2, "Specified path exists but is not a directory");
  }
  consola.start("Zipping site files");
  const archive = archiver("zip").directory(directory, false);
  logArchiveStats(archive);
  if (snapshot) {
    await uploadSnapshot(clientCtx, application, siteVersion, snapshotId ?? "", archive);
    consola.info("Snapshot mode enabled, skipping deployment");
    return;
  }
  await upload(clientCtx, application, siteVersion, archive);
  if (!uploadOnly) {
    const website = await third_party_applications_exports.deployWebsite(clientCtx, application, {
      version: siteVersion
    });
    consola.success(`Deployed ${siteVersion} successfully`);
    const domain = website.subdomains[0];
    if (domain != null) {
      logSiteLink("View live site:", `https://${domain}`);
    }
  } else {
    const website = await third_party_applications_exports.getWebsite(clientCtx, application);
    const domain = website?.subdomains[0];
    consola.info("Upload only mode enabled, skipping deployment");
    if (domain != null) {
      logSiteLink("Preview link:", `https://${domain}/.system/preview?previewVersion=${siteVersion}`);
    }
  }
}
async function findAutoVersion(config) {
  try {
    return await autoVersion(config);
  } catch (e) {
    throw new ExitProcessError(2, e instanceof Error ? e.message : undefined, e instanceof AutoVersionError ? e.tip : undefined);
  }
}
async function uploadSnapshot(clientCtx, application, siteVersion, snapshotId, archive) {
  consola.start("Uploading snapshot site files");
  await Promise.all([third_party_applications_exports.uploadSnapshotVersion(
    clientCtx,
    application,
    siteVersion,
    snapshotId,
    Readable.toWeb(archive)
    // This cast is because the dom fetch doesn't align type wise with streams
  ), archive.finalize()]);
  consola.success("Snapshot upload complete");
}
async function upload(clientCtx, application, siteVersion, archive) {
  consola.start("Uploading site files");
  await Promise.all([third_party_applications_exports.uploadVersion(
    clientCtx,
    application,
    siteVersion,
    Readable.toWeb(archive)
    // This cast is because the dom fetch doesn't align type wise with streams
  ), archive.finalize()]);
  consola.success("Upload complete");
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
function logSiteLink(title, link) {
  consola.box({
    message: `${title}

${colorize("green", link)}`,
    style: {
      padding: 2,
      borderColor: "green",
      borderStyle: "rounded"
    }
  });
}

export { siteDeployCommand as default };
//# sourceMappingURL=siteDeployCommand-MQM2IA4G.js.map
//# sourceMappingURL=siteDeployCommand-MQM2IA4G.js.map