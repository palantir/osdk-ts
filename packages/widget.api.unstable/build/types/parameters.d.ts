import type { AsyncValue } from "./utils/asyncValue.js";
/**
* Map of the name of the type to the corresponding JavaScript type.
*/
type PrimitiveParameterTypes = {
	boolean: boolean
	/** Formatted as an ISO date string, e.g. YYYY-MM-DD */
	date: string
	number: number
	string: string
	/** Formatted as an ISO datetime string */
	timestamp: string
};
type PrimitiveParameterType = keyof PrimitiveParameterTypes;
export interface AbstractParameterValue<T extends PrimitiveParameterType> {
	type: T;
	value: AsyncValue<PrimitiveParameterTypes[T]>;
}
export interface GenericArrayParameterValue<T extends PrimitiveParameterType> {
	type: "array";
	subType: T;
	value: AsyncValue<PrimitiveParameterTypes[T][]>;
}
/**
* Wire format of parameter values that will be sent through postMessage events to custom widgets.
*/
export declare namespace ParameterValue {
	type String = AbstractParameterValue<"string">;
	type Number = AbstractParameterValue<"number">;
	type Boolean = AbstractParameterValue<"boolean">;
	type Date = AbstractParameterValue<"date">;
	type Timestamp = AbstractParameterValue<"timestamp">;
	type StringArray = GenericArrayParameterValue<"string">;
	type NumberArray = GenericArrayParameterValue<"number">;
	type BooleanArray = GenericArrayParameterValue<"boolean">;
	type DateArray = GenericArrayParameterValue<"date">;
	type TimestampArray = GenericArrayParameterValue<"timestamp">;
	type Array = StringArray | NumberArray | BooleanArray | DateArray | TimestampArray;
	type Type = ParameterValue["type"];
	type PrimitiveType = PrimitiveParameterType;
}
export type ParameterValue = ParameterValue.String | ParameterValue.Number | ParameterValue.Boolean | ParameterValue.Date | ParameterValue.Timestamp | ParameterValue.Array;
export {};
