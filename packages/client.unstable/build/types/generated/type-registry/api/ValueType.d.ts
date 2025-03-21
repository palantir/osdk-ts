import type { BaseType } from "./BaseType.js";
import type { ExampleValue } from "./ExampleValue.js";
import type { ValueTypeAttribution } from "./ValueTypeAttribution.js";
import type { ValueTypeDataConstraint } from "./ValueTypeDataConstraint.js";
import type { ValueTypeRid } from "./ValueTypeRid.js";
import type { ValueTypeVersion } from "./ValueTypeVersion.js";
import type { ValueTypeVersionId } from "./ValueTypeVersionId.js";
/**
* A specific version of a value type.
*/
export interface ValueType {
	rid: ValueTypeRid;
	versionId: ValueTypeVersionId;
	version: ValueTypeVersion;
	constraints: Array<ValueTypeDataConstraint>;
	exampleValues: Array<ExampleValue>;
	attribution: ValueTypeAttribution;
	baseType: BaseType | undefined;
}
