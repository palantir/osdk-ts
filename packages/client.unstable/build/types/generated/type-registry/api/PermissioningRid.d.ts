import type { CompassNamespaceRid } from "./CompassNamespaceRid.js";
import type { ServiceManagedRid } from "./ServiceManagedRid.js";
export interface PermissioningRid_compassNamespace {
	type: "compassNamespace";
	compassNamespace: CompassNamespaceRid;
}
export interface PermissioningRid_serviceManaged {
	type: "serviceManaged";
	serviceManaged: ServiceManagedRid;
}
/**
* Union representing gatekeeper parent of value types, defining their permissioning configuration. All union
* implementations need to be wrappers over rids.
*
* When extending the union, make sure to update security.yml of security-schema with the new type and ensure
* it can be properly serialized into Atlas tables as row key with bytes persister.
*/
export type PermissioningRid = PermissioningRid_compassNamespace | PermissioningRid_serviceManaged;
