import { conjureFetch } from 'conjure-lite';

// src/generated/third-party-application-service/SdkService/getSdk.ts
async function getSdk(ctx, repositoryRid, packageName, sdkVersion) {
  return conjureFetch(ctx, `/sdks/${repositoryRid}/${packageName}/${sdkVersion}`, "GET");
}
async function getSdkPackage(ctx, sdkPackageRid) {
  return conjureFetch(ctx, `/sdks/packages/${sdkPackageRid}`, "GET");
}

export { getSdk, getSdkPackage };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map