import type { ObjectDbRid } from "../ObjectDbRid.js";
import type { ObjectDbConfig } from "./ObjectDbConfig.js";
/**
* Configuration for one type of ObjectDb which contains the individual configurations for each cluster
* of the particular ObjectDbType.
*/
export interface ObjectDbTypeConfig {
	objectDbConfigs: Record<ObjectDbRid, ObjectDbConfig>;
}
