import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { FunctionRid } from "./FunctionRid.js";
import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { OntologyRid } from "./OntologyRid.js";
import type { SdkPackageRid } from "./SdkPackageRid.js";
import type { SdkVersion } from "./SdkVersion.js";
export interface OntologyDataScopeV2 {
	ontologyRid: OntologyRid;
	objectTypes: Array<ObjectTypeRid>;
	linkTypes: Array<LinkTypeRid>;
	actionTypes: Array<ActionTypeRid>;
	functions: Array<FunctionRid>;
	sdkPackages: Record<SdkPackageRid, SdkVersion>;
	interfaceTypes: Array<InterfaceTypeRid>;
}
