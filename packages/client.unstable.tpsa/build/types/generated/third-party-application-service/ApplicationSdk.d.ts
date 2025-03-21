import type { ApplicationSdkInputs } from "./ApplicationSdkInputs.js";
import type { ArtifactsRepositoryRid } from "./ArtifactsRepositoryRid.js";
import type { CondaSdk } from "./CondaSdk.js";
import type { MavenSdk } from "./MavenSdk.js";
import type { NpmSdk } from "./NpmSdk.js";
import type { PypiSdk } from "./PypiSdk.js";
import type { SdkVersion } from "./SdkVersion.js";
/**
* An SDK for the application generated using specified input versions. It may
* include one or more package managers for various languages.
*/
export interface ApplicationSdk {
	repositoryRid: ArtifactsRepositoryRid;
	version: SdkVersion;
	inputs: ApplicationSdkInputs;
	npm: NpmSdk | undefined;
	pypi: PypiSdk | undefined;
	conda: CondaSdk | undefined;
	maven: MavenSdk | undefined;
}
