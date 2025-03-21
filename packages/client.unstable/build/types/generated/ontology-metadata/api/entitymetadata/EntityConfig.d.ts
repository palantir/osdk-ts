import type { ObjectDbType } from "./ObjectDbType.js";
import type { ObjectDbTypeConfig } from "./ObjectDbTypeConfig.js";
/**
* Contains ObjectDb configurations for a particular ObjectType or LinkType.
*/
export interface EntityConfig {
	objectDbTypeConfigs: Record<ObjectDbType, ObjectDbTypeConfig>;
}
