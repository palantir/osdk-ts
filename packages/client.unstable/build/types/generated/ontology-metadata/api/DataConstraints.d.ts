import type { DataNullability } from "./DataNullability.js";
import type { DataNullabilityV2 } from "./DataNullabilityV2.js";
import type { PropertyTypeDataConstraintsWrapper } from "./PropertyTypeDataConstraintsWrapper.js";
export interface DataConstraints {
	nullability: DataNullability | undefined;
	nullabilityV2: DataNullabilityV2 | undefined;
	propertyTypeConstraints: Array<PropertyTypeDataConstraintsWrapper>;
}
