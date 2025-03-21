import type { RestrictedViewName } from "./blockdata/RestrictedViewName.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { PropertyTypeMappingInfo } from "./PropertyTypeMappingInfo.js";
/**
* Object type datasource supporting edit only property types, that is backed by a restricted view in foundry,
* uniquely identified by its rid. It is only compatible with object storage v2, hence does not
* have a writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
*/
export interface OntologyIrObjectTypeRestrictedViewDatasourceV2 {
	restrictedViewRid: RestrictedViewName;
	propertyMapping: Record<ObjectTypeFieldApiName, PropertyTypeMappingInfo>;
}
