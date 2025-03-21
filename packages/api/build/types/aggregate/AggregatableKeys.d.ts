import type { NumericWithPropAggregateOption, StringWithPropAggregateOption } from "../derivedProperties/WithPropertiesAggregationOptions.js";
import type { GetWirePropertyValueFromClient } from "../mapping/PropertyValueMapping.js";
import type { ObjectOrInterfaceDefinition, PropertyKeys } from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
export type StringAggregateOption = "approximateDistinct" | "exactDistinct";
export type NumericAggregateOption = "min" | "max" | "sum" | "avg" | "approximateDistinct" | "exactDistinct";
type AGG_FOR_TYPE<
	T,
	U extends boolean
> = number extends T ? U extends true ? NumericAggregateOption : NumericWithPropAggregateOption : string extends T ? U extends true ? StringAggregateOption : StringWithPropAggregateOption : boolean extends T ? U extends true ? never : StringWithPropAggregateOption : never;
export type ValidAggregationKeys<
	Q extends ObjectOrInterfaceDefinition,
	R extends "aggregate" | "withPropertiesAggregate" = "aggregate"
> = keyof ({ [KK in AggregatableKeys<Q> as `${KK & string}:${AGG_FOR_TYPE<GetWirePropertyValueFromClient<CompileTimeMetadata<Q>["properties"][KK]["type"]>, R extends "aggregate" ? true : false>}`]? : any } & {
	$count?: any
});
export type AggregatableKeys<Q extends ObjectOrInterfaceDefinition> = keyof { [P in PropertyKeys<Q>] : any };
export {};
