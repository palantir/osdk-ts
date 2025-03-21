import type { BBox, Point, Polygon } from "geojson";
import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata, ObjectMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { BaseWirePropertyTypes } from "../ontology/WirePropertyTypes.js";
import type { IsNever } from "../OsdkObjectFrom.js";
import type { ArrayFilter } from "./ArrayFilter.js";
import type { BaseFilter } from "./BaseFilter.js";
import type { BooleanFilter } from "./BooleanFilter.js";
import type { DatetimeFilter } from "./DatetimeFilter.js";
import type { GeoFilter } from "./GeoFilter.js";
import type { Just } from "./Just.js";
import type { NumberFilter } from "./NumberFilter.js";
import type { StringFilter } from "./StringFilter.js";
export type PossibleWhereClauseFilters = "$gt" | "$eq" | "$ne" | "$isNull" | "$contains" | "$gte" | "$lt" | "$lte" | "$within" | "$in" | "$intersects" | "$startsWith" | "$containsAllTermsInOrder" | "$containsAnyTerm" | "$containsAllTerms";
export declare const DistanceUnitMapping: {
	centimeter: "CENTIMETERS"
	centimeters: "CENTIMETERS"
	cm: "CENTIMETERS"
	meter: "METERS"
	meters: "METERS"
	m: "METERS"
	kilometer: "KILOMETERS"
	kilometers: "KILOMETERS"
	km: "KILOMETERS"
	inch: "INCHES"
	inches: "INCHES"
	foot: "FEET"
	feet: "FEET"
	yard: "YARDS"
	yards: "YARDS"
	mile: "MILES"
	miles: "MILES"
	nautical_mile: "NAUTICAL_MILES"
	nauticalMile: "NAUTICAL_MILES"
	"nautical miles": "NAUTICAL_MILES"
};
export type GeoFilter_Within = {
	"$within": {
		$distance: [number, keyof typeof DistanceUnitMapping]
		$of: [number, number] | Readonly<Point>
		$bbox?: never
		$polygon?: never
	} | {
		$bbox: BBox
		$distance?: never
		$of?: never
		$polygon?: never
	} | BBox | {
		$polygon: Polygon["coordinates"]
		$bbox?: never
		$distance?: never
		$of?: never
	} | Polygon
};
export type GeoFilter_Intersects = {
	"$intersects": {
		$bbox: BBox
		$polygon?: never
	} | BBox | {
		$polygon: Polygon["coordinates"]
		$bbox?: never
	} | Polygon
};
type FilterFor<PD extends ObjectMetadata.Property> = PD["multiplicity"] extends true ? (PD["type"] extends "string" | "geopoint" | "geoshape" | "datetime" | "timestamp" ? ArrayFilter<string> : (PD["type"] extends boolean ? ArrayFilter<boolean> : ArrayFilter<number>)) : PD["type"] extends Record<string, BaseWirePropertyTypes> ? StructFilter<PD["type"]> | BaseFilter.$isNull<string> : (PD["type"] extends "string" ? StringFilter : PD["type"] extends "geopoint" | "geoshape" ? GeoFilter : PD["type"] extends "datetime" | "timestamp" ? DatetimeFilter : PD["type"] extends "boolean" ? BooleanFilter : PD["type"] extends "double" | "integer" | "long" | "float" | "decimal" | "byte" ? NumberFilter : BaseFilter<string>);
type StructFilterOpts<ST extends Record<string, BaseWirePropertyTypes>> = { [K in keyof ST]? : FilterFor<{
	"type": ST[K]
}> };
type StructFilter<ST extends Record<string, BaseWirePropertyTypes>> = { [K in keyof ST] : Just<K, StructFilterOpts<ST>> }[keyof ST];
export interface AndWhereClause<T extends ObjectOrInterfaceDefinition> {
	$and: WhereClause<T>[];
}
export interface OrWhereClause<T extends ObjectOrInterfaceDefinition> {
	$or: WhereClause<T>[];
}
export interface NotWhereClause<T extends ObjectOrInterfaceDefinition> {
	$not: WhereClause<T>;
}
export type PropertyWhereClause<T extends ObjectOrInterfaceDefinition> = { [P in keyof CompileTimeMetadata<T>["properties"]]? : FilterFor<CompileTimeMetadata<T>["properties"][P]> };
export type WhereClause<T extends ObjectOrInterfaceDefinition> = OrWhereClause<T> | AndWhereClause<T> | NotWhereClause<T> | (IsNever<keyof CompileTimeMetadata<T>["properties"]> extends true ? Record<string, never> : PropertyWhereClause<T>);
export {};
