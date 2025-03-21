import type { ObjectDbType } from "../entitymetadata/ObjectDbType.js";
import type { ObjectDbTypeConfig } from "../entitymetadata/ObjectDbTypeConfig.js";
/**
* Contains ObjectDb configurations for a particular ObjectType or LinkType. This modification carries out a complete overwrite of the existing `objectDbTypeConfigs` Map with the provided Map in this request.
*/
export interface EntityConfigModification {
	objectDbTypeConfigs: Record<ObjectDbType, ObjectDbTypeConfig>;
}
