import type { DataValueClientToWire, DataValueWireToClient } from "../mapping/DataValueMapping.js";
import type { ObjectSet } from "../objectSet/ObjectSet.js";
import type { ObjectTypeDefinition } from "../ontology/ObjectTypeDefinition.js";
import type { AggregationKeyTypes, AggregationRangeKeyTypes, AggregationValueTypes } from "../ontology/QueryDefinition.js";
import type { OsdkBase } from "../OsdkBase.js";
import type { OsdkObjectPrimaryKeyType } from "../OsdkObjectPrimaryKeyType.js";
import type { AggKeyClientToWire, AggKeyWireToClient, AggValueClientToWire, AggValueWireToClient, ThreeDimensionalAggregation, TwoDimensionalAggregation } from "./Aggregations.js";
/**
* Helper types for converting query definition parameter types to typescript types
*/
export declare namespace QueryParam {
	type PrimitiveType<T extends keyof DataValueClientToWire> = DataValueClientToWire[T];
	type ObjectType<T extends ObjectTypeDefinition> = OsdkBase<T> | OsdkObjectPrimaryKeyType<T>;
	type ObjectSetType<T extends ObjectTypeDefinition> = ObjectSet<T>;
	type RangeKey<T extends AggregationRangeKeyTypes> = AggKeyClientToWire<"range", T>;
	type TwoDimensionalAggregationType<
		T extends AggregationKeyTypes | RangeKey<any>,
		V extends AggregationValueTypes
	> = TwoDimensionalAggregation<T extends AggregationKeyTypes ? AggKeyClientToWire<T> : T, AggValueClientToWire<V>>;
	type ThreeDimensionalAggregationType<
		OUT extends AggregationKeyTypes | RangeKey<any>,
		IN extends AggregationKeyTypes | RangeKey<any>,
		V extends AggregationValueTypes
	> = ThreeDimensionalAggregation<OUT extends AggregationKeyTypes ? AggKeyClientToWire<OUT> : OUT, IN extends AggregationKeyTypes ? AggKeyClientToWire<IN> : IN, AggValueClientToWire<V>>;
}
/**
* Helper types for converting query result types to typescript types
*/
export declare namespace QueryResult {
	type PrimitiveType<T extends keyof DataValueClientToWire> = DataValueWireToClient[T];
	type ObjectType<T extends ObjectTypeDefinition> = OsdkBase<T>;
	type ObjectSetType<T extends ObjectTypeDefinition> = ObjectSet<T>;
	type RangeKey<T extends AggregationRangeKeyTypes> = AggKeyWireToClient<"range", T>;
	type TwoDimensionalAggregationType<
		T extends AggregationKeyTypes | RangeKey<any>,
		V extends AggregationValueTypes
	> = TwoDimensionalAggregation<T extends AggregationKeyTypes ? AggKeyWireToClient<T> : T, AggValueWireToClient<V>>;
	type ThreeDimensionalAggregationType<
		OUT extends AggregationKeyTypes | RangeKey<any>,
		IN extends AggregationKeyTypes | RangeKey<any>,
		V extends AggregationValueTypes
	> = ThreeDimensionalAggregation<OUT extends AggregationKeyTypes ? AggKeyWireToClient<OUT> : OUT, IN extends AggregationKeyTypes ? AggKeyWireToClient<IN> : IN, AggValueWireToClient<V>>;
}
