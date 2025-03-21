import type { ArtifactsRepositoryRid } from "./ArtifactsRepositoryRid.js";
import type { CondaSdk } from "./CondaSdk.js";
import type { MavenSdk } from "./MavenSdk.js";
import type { NpmSdk } from "./NpmSdk.js";
import type { OntologyPackageRid } from "./OntologyPackageRid.js";
import type { PackageName } from "./PackageName.js";
import type { PypiSdk } from "./PypiSdk.js";
import type { SdkInputs } from "./SdkInputs.js";
import type { SdkPackageRid } from "./SdkPackageRid.js";
import type { SdkVersion } from "./SdkVersion.js";
/**
* An SDK generated using the specified data scope. It may
* include one or more package managers for various languages.
*/
export interface Sdk {
	sdkPackageRid: SdkPackageRid;
	repositoryRid: ArtifactsRepositoryRid;
	packageName: PackageName;
	version: SdkVersion;
	inputs: SdkInputs;
	npm: NpmSdk | undefined;
	pypi: PypiSdk | undefined;
	conda: CondaSdk | undefined;
	maven: MavenSdk | undefined;
	ontologyPackageRid: OntologyPackageRid | undefined;
}
