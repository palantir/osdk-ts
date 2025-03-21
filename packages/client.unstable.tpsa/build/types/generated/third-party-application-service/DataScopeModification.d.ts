import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { DataScopePatch } from "./DataScopePatch.js";
import type { FunctionRid } from "./FunctionRid.js";
import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { SdkPackageDataScopePatch } from "./SdkPackageDataScopePatch.js";
import type { SdkPackageRid } from "./SdkPackageRid.js";
export interface DataScopeModification {
	objectTypeUpdates: Record<ObjectTypeRid, DataScopePatch>;
	linkTypeUpdates: Record<LinkTypeRid, DataScopePatch>;
	actionTypeUpdates: Record<ActionTypeRid, DataScopePatch>;
	functionUpdates: Record<FunctionRid, DataScopePatch>;
	sdkPackageUpdates: Record<SdkPackageRid, SdkPackageDataScopePatch>;
	interfaceTypeUpdates: Record<InterfaceTypeRid, DataScopePatch>;
}
