'use strict';

var conjureLite = require('conjure-lite');

// src/generated/third-party-application-service/SdkService/getSdk.ts
async function getSdk(ctx, repositoryRid, packageName, sdkVersion) {
  return conjureLite.conjureFetch(ctx, `/sdks/${repositoryRid}/${packageName}/${sdkVersion}`, "GET");
}
async function getSdkPackage(ctx, sdkPackageRid) {
  return conjureLite.conjureFetch(ctx, `/sdks/packages/${sdkPackageRid}`, "GET");
}

exports.getSdk = getSdk;
exports.getSdkPackage = getSdkPackage;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map