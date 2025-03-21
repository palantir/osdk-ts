import { PalantirApiError, createFetchHeaderMutator, createFetchOrThrow, UnknownError } from './chunk-P5HXJTVE.js';
import { ExitProcessError } from './chunk-2U36M44D.js';
import { init_esm_shims, __export } from './chunk-VHOQB2JW.js';
import { consola } from 'consola';
import { inspect } from 'node:util';
import prettyBytes from 'pretty-bytes';
import { promises } from 'node:fs';
import path from 'node:path';

// src/net/createInternalClientContext.mts
init_esm_shims();
function createInternalClientContext(foundryUrl, tokenProvider) {
  return {
    tokenProvider,
    foundryUrl
  };
}

// src/net/third-party-applications/index.mts
var third_party_applications_exports = {};
__export(third_party_applications_exports, {
  deleteVersion: () => deleteVersion,
  deployWebsite: () => deployWebsite,
  getWebsite: () => getWebsite,
  listVersions: () => listVersions,
  undeployWebsite: () => undeployWebsite,
  uploadSnapshotVersion: () => uploadSnapshotVersion,
  uploadVersion: () => uploadVersion
});
init_esm_shims();

// src/net/third-party-applications/deleteVersion.mts
init_esm_shims();

// src/net/createFetch.mts
init_esm_shims();

// src/net/UserAgent.ts
init_esm_shims();
var USER_AGENT = `osdk-cli/${"0.26.0-beta.9"}`;

// src/net/createFetch.mts
function createFetch(tokenProvider, fetchFn = fetch) {
  return createFetchHeaderMutator(createRequestLoggingFetch(createErrorExitingFetch(createFetchOrThrow(fetchFn))), async (headers) => {
    const token = await tokenProvider();
    headers.set("Authorization", `Bearer ${token}`);
    headers.set("Fetch-User-Agent", USER_AGENT);
    return headers;
  });
}
function createErrorExitingFetch(fetchFn = fetch) {
  return function errorExitingFetch(input, init) {
    return fetchFn(input, init).catch(handleFetchError);
  };
}
function handleFetchError(e) {
  if (!(e instanceof PalantirApiError)) {
    throw new ExitProcessError(1, "Unexpected fetch error");
  }
  let tip;
  if (e.statusCode === 401) {
    tip = "Check your token is valid and has not expired or been disabled";
  } else if (e.statusCode === 403) {
    tip = "Check your token has the required scopes for this operation";
  } else if (e.statusCode === 404) {
    tip = "The resource may not exist or your token may not have the required scopes to load it";
  }
  let message;
  if (e.errorName === "CannotDeleteDeployedVersion") {
    message = "The site version to delete is live and cannot be deleted";
    tip = "Run the `site version set` command to change the live site version";
  } else if (e.errorName === "InvalidVersion") {
    message = "The site version is invalid and must be a valid SemVer string";
  } else if (e.errorName === "VersionAlreadyExists") {
    message = "The site version already exists";
  } else if (e.errorName === "VersionNotFound") {
    message = "The site version could not be found";
  } else if (e.errorName === "VersionLimitExceeded") {
    const {
      versionLimit
    } = e.parameters ?? {};
    const versionLimitPart = versionLimit != null ? ` (Limit: ${versionLimit} versions)` : "";
    message = `The site contains too many versions${versionLimitPart}`;
    tip = "Run the `site version delete` command to delete an old version and try again";
  } else if (e.errorName === "FileCountLimitExceeded") {
    const {
      fileCountLimit
    } = e.parameters ?? {};
    const fileCountLimitPart = fileCountLimit != null ? ` (Limit: ${fileCountLimit} files)` : "";
    message = `The .zip file contains too many files${fileCountLimitPart}`;
    tip = "Reduce the number of files in the production build to below the limit";
  } else if (e.errorName === "FileSizeLimitExceeded") {
    const {
      currentFilePath,
      currentFileSizeBytes,
      fileSizeBytesLimit
    } = e.parameters ?? {};
    const currentFilePathPart = currentFilePath != null ? ` "${currentFilePath}"` : "";
    const currentFileSizePart = currentFileSizeBytes != null ? ` (${prettyBytes(parseInt(currentFileSizeBytes), {
      binary: true
    })})` : "";
    const fileSizeLimitPart = fileSizeBytesLimit != null ? ` (Limit: ${prettyBytes(parseInt(fileSizeBytesLimit), {
      binary: true
    })})` : "";
    message = `The .zip file contains a file${currentFilePathPart}${currentFileSizePart} that is too large${fileSizeLimitPart}`;
    tip = "Ensure all files in the production build are below the size limit";
  } else {
    if (e instanceof UnknownError) {
      message = `${e.message}

${inspect(e, {
        depth: 10,
        colors: true
      })}`;
    } else {
      const {
        errorCode,
        errorName,
        errorInstanceId,
        parameters
      } = e;
      message = `${e.message}

${JSON.stringify({
        errorCode,
        errorName,
        errorInstanceId,
        parameters
      }, null, 2)}`;
    }
  }
  throw new ExitProcessError(1, message, tip, e);
}
function createRequestLoggingFetch(fetchFn = fetch) {
  return function requestLoggingFetch(input, init) {
    const requestLog = typeof input === "string" || input instanceof URL ? `${init?.method ?? "GET"}: ${input.toString().trim()}` : `${input.method ?? "GET"}: ${input.url.toString().trim()}`;
    consola.trace(requestLog);
    return fetchFn(input, init).then((a) => {
      consola.trace(`FINISH ${requestLog}`);
      return a;
    });
  };
}

// src/net/third-party-applications/deleteVersion.mts
async function deleteVersion(ctx, thirdPartyAppRid, version) {
  const fetch2 = createFetch(ctx.tokenProvider);
  const url = `${ctx.foundryUrl}/api/v2/thirdPartyApplications/${thirdPartyAppRid}/website/versions/${version}?preview=true`;
  await fetch2(url, {
    method: "DELETE"
  });
}

// src/net/third-party-applications/deployWebsite.mts
init_esm_shims();
async function deployWebsite(ctx, thirdPartyAppRid, request) {
  const fetch2 = createFetch(ctx.tokenProvider);
  const url = `${ctx.foundryUrl}/api/v2/thirdPartyApplications/${thirdPartyAppRid}/website/deploy?preview=true`;
  const result = await fetch2(url, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return result.json();
}

// src/net/third-party-applications/getWebsite.mts
init_esm_shims();
async function getWebsite(ctx, thirdPartyAppRid) {
  const fetch2 = createFetch(ctx.tokenProvider);
  const url = `${ctx.foundryUrl}/api/v2/thirdPartyApplications/${thirdPartyAppRid}/website?preview=true`;
  try {
    const result = await fetch2(url);
    return await result.json();
  } catch (e) {
    if (e instanceof ExitProcessError && e.originalError != null && e.originalError instanceof PalantirApiError && e.originalError.errorName === "WebsiteNotFound") {
      return undefined;
    }
    throw e;
  }
}

// src/net/third-party-applications/listVersions.mts
init_esm_shims();
async function listVersions(ctx, thirdPartyAppRid) {
  const fetch2 = createFetch(ctx.tokenProvider);
  const url = `${ctx.foundryUrl}/api/v2/thirdPartyApplications/${thirdPartyAppRid}/website/versions?preview=true`;
  const result = await fetch2(url);
  return result.json();
}

// src/net/third-party-applications/undeployWebsite.mts
init_esm_shims();
async function undeployWebsite(ctx, thirdPartyAppRid) {
  const fetch2 = createFetch(ctx.tokenProvider);
  const url = `${ctx.foundryUrl}/api/v2/thirdPartyApplications/${thirdPartyAppRid}/website/undeploy?preview=true`;
  await fetch2(url, {
    method: "POST"
  });
}

// src/net/third-party-applications/uploadSnapshotVersion.mts
init_esm_shims();
async function uploadSnapshotVersion(ctx, thirdPartyAppRid, version, snapshotId, zipFile) {
  const fetch2 = createFetch(ctx.tokenProvider);
  const url = `${ctx.foundryUrl}/api/v2/thirdPartyApplications/${thirdPartyAppRid}/website/versions/uploadSnapshot?version=${version}&preview=true${snapshotId !== "" ? `&snapshotIdentifier=${snapshotId}` : ""}`;
  const result = await fetch2(url, {
    method: "POST",
    body: zipFile,
    headers: {
      "Content-Type": "application/octet-stream"
    },
    duplex: "half"
    // Node hates me
  });
  return result.json();
}

// src/net/third-party-applications/uploadVersion.mts
init_esm_shims();
async function uploadVersion(ctx, thirdPartyAppRid, version, zipFile) {
  const fetch2 = createFetch(ctx.tokenProvider);
  const url = `${ctx.foundryUrl}/api/v2/thirdPartyApplications/${thirdPartyAppRid}/website/versions/upload?version=${version}&preview=true`;
  const result = await fetch2(url, {
    method: "POST",
    body: zipFile,
    headers: {
      "Content-Type": "application/octet-stream"
    },
    duplex: "half"
    // Node hates me
  });
  return result.json();
}

// src/net/widget-registry/index.mts
var widget_registry_exports = {};
__export(widget_registry_exports, {
  deleteSiteVersion: () => deleteSiteVersion,
  deleteWidgetSetRelease: () => deleteWidgetSetRelease,
  getWidgetSetRelease: () => getWidgetSetRelease,
  listWidgetSetReleases: () => listWidgetSetReleases,
  publishManifest: () => publishManifest,
  uploadSiteVersion: () => uploadSiteVersion
});
init_esm_shims();

// src/net/widget-registry/deleteSiteVersion.mts
init_esm_shims();
async function deleteSiteVersion(ctx, repositoryRid, version) {
  const fetch2 = createFetch(ctx.tokenProvider);
  const url = `${ctx.foundryUrl}/artifacts/api/repositories/${repositoryRid}/contents/release/siteasset/versions/${version}`;
  await fetch2(url, {
    method: "DELETE"
  });
}

// src/net/widget-registry/deleteWidgetSetRelease.mts
init_esm_shims();
async function deleteWidgetSetRelease(ctx, widgetSetRid, version) {
  const fetch2 = createFetch(ctx.tokenProvider);
  const url = `${ctx.foundryUrl}/widget-registry/api/widget-sets/${widgetSetRid}/releases/${version}`;
  await fetch2(url, {
    method: "DELETE"
  });
}

// src/net/widget-registry/getWidgetSetRelease.mts
init_esm_shims();
async function getWidgetSetRelease(ctx, widgetSetRid, version) {
  const fetch2 = createFetch(ctx.tokenProvider);
  const url = `${ctx.foundryUrl}/widget-registry/api/widget-sets/${widgetSetRid}/releases/${version}`;
  const response = await fetch2(url);
  return response.json();
}

// src/net/widget-registry/listWidgetSetReleases.mts
init_esm_shims();
async function listWidgetSetReleases(ctx, widgetSetRid) {
  const fetch2 = createFetch(ctx.tokenProvider);
  const url = `${ctx.foundryUrl}/widget-registry/api/widget-sets/${widgetSetRid}/releases`;
  const response = await fetch2(url);
  return response.json();
}

// src/net/widget-registry/publishManifest.mts
init_esm_shims();
async function publishManifest(ctx, repositoryRid, version) {
  const fetch2 = createFetch(ctx.tokenProvider);
  const url = `${ctx.foundryUrl}/widget-registry/api/repositories/${repositoryRid}/publish-manifest`;
  await fetch2(url, {
    method: "POST",
    body: JSON.stringify({
      version
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
}

// src/net/widget-registry/uploadSiteVersion.mts
init_esm_shims();
async function uploadSiteVersion(ctx, repositoryRid, version, zipFile) {
  const fetch2 = createFetch(ctx.tokenProvider);
  const url = `${ctx.foundryUrl}/artifacts/api/repositories/${repositoryRid}/contents/release/siteasset/versions/zip/${version}`;
  await fetch2(url, {
    method: "PUT",
    body: zipFile,
    headers: {
      "Content-Type": "application/octet-stream"
    },
    duplex: "half"
    // Node hates me
  });
}

// src/net/index.mts
init_esm_shims();

// src/util/token.ts
init_esm_shims();
var TOKEN_ENV_VARS = ["FOUNDRY_TOKEN", "FOUNDRY_SDK_AUTH_TOKEN"];
async function loadToken(token, tokenFile) {
  if (token) {
    consola.debug(`Using token from --token option`);
    validate(token);
    return token;
  }
  if (tokenFile) {
    const loadedToken = await loadTokenFile(tokenFile);
    consola.debug(`Using token from --tokenFile=${loadedToken.filePath} option`);
    validate(loadedToken.token);
    return loadedToken.token;
  }
  for (const envVar of TOKEN_ENV_VARS) {
    const environmentToken = process.env[envVar];
    if (environmentToken) {
      consola.debug(`Using token from ${envVar} environment variable`);
      validate(environmentToken);
      if (envVar === "FOUNDRY_SDK_AUTH_TOKEN") {
        consola.warn(`Using FOUNDRY_SDK_AUTH_TOKEN environment variable is deprecated. Please use FOUNDRY_TOKEN instead.`);
      }
      return environmentToken;
    }
  }
  throw new ExitProcessError(2, `No token found.`, `You can supply a --token or --token-file option, or set the ${TOKEN_ENV_VARS[0]} environment variable`);
}
async function loadTokenFile(filePath) {
  let token;
  let resolvedPath;
  try {
    resolvedPath = path.resolve(filePath);
    token = await promises.readFile(resolvedPath, "utf8");
    token = token.trim();
  } catch (error) {
    throw new ExitProcessError(2, `Unable to read token file "${filePath}": ${error}`);
  }
  return {
    filePath: resolvedPath,
    token
  };
}
function validate(token) {
  if (!isJWT(token)) {
    throw new ExitProcessError(2, `Token does not appear to be a JWT`);
  }
}
function isJWT(token) {
  const jwtPattern = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  return jwtPattern.test(token);
}

export { createInternalClientContext, loadToken, third_party_applications_exports, widget_registry_exports };
//# sourceMappingURL=chunk-L4N2UI42.js.map
//# sourceMappingURL=chunk-L4N2UI42.js.map