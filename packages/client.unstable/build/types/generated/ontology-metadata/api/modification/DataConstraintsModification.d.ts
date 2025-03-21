import type { DataNullability } from "../DataNullability.js";
import type { DataNullabilityV2 } from "../DataNullabilityV2.js";
/**
* Constraints that apply to any data in this property. The constraints will be enforced by the storage
* backends. PropertyType type specific constraints can't be modified directly, since they are currently
* loaded from value types.
*/
export interface DataConstraintsModification {
	nullability: DataNullability | undefined;
	nullabilityV2: DataNullabilityV2 | undefined;
}
