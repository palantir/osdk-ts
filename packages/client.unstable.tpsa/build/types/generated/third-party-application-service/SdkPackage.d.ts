import type { ArtifactsRepositoryRid } from "./ArtifactsRepositoryRid.js";
import type { PackageName } from "./PackageName.js";
import type { SdkPackageRid } from "./SdkPackageRid.js";
export interface SdkPackage {
	rid: SdkPackageRid;
	repositoryRid: ArtifactsRepositoryRid;
	packageName: PackageName;
}
