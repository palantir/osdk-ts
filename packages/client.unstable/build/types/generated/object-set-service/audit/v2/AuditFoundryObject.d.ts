import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
import type { LoggableObjectPrimaryKeyV2 } from "../../loggable/LoggableObjectPrimaryKeyV2.js";
import type { LoggablePropertyValue } from "../../loggable/LoggablePropertyValue.js";
/**
* Property values other than primary key values are not included in the audit version of a FoundryObject to
* avoid dropping audit logs due to them being too large.
*/
export interface AuditFoundryObject {
	primaryKey: LoggableObjectPrimaryKeyV2;
	additionalObjectProperties: Record<PropertyTypeRid, LoggablePropertyValue> | undefined;
}
