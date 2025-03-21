import type { OsdkMetadata } from "../OsdkMetadata.js";
import type { ObjectOrInterfaceDefinition, PropertyKeys } from "./ObjectOrInterface.js";
import type { PrimaryKeyTypes } from "./PrimaryKeyTypes.js";
import type { VersionString } from "./VersionString.js";
import type { WirePropertyTypes } from "./WirePropertyTypes.js";
export type CompileTimeMetadata<T extends {
	__DefinitionMetadata?: {}
}> = NonNullable<T["__DefinitionMetadata"]>;
export type ObjectTypePropertyDefinitionFrom2<
	Q extends ObjectOrInterfaceDefinition,
	P extends PropertyKeys<Q>
> = CompileTimeMetadata<Q>["properties"][P];
export type ObjectInterfaceBaseMetadata = {
	type: "object" | "interface"
	apiName: string
	displayName: string
	description?: string
	properties: Record<any, ObjectMetadata.Property>
	links: Record<string, ObjectMetadata.Link<any, any>>
	rid: string
	/**
	* Represents the "super interfaces" of this object.
	*
	* Optional because they may not exist on legacy.
	*/
	implements?: ReadonlyArray<string>
};
export interface ObjectInterfaceCompileDefinition {
	type: "object" | "interface";
	objectSet?: any;
	props?: any;
	strictProps?: any;
	linksType?: any;
}
export interface VersionBound<V extends VersionString<any, any, any>> {
	__expectedClientVersion?: V;
}
export interface ObjectMetadata extends ObjectInterfaceBaseMetadata {
	type: "object";
	primaryKeyApiName: keyof this["properties"];
	titleProperty: keyof this["properties"];
	primaryKeyType: PrimaryKeyTypes;
	icon?: Icon;
	visibility?: ObjectTypeVisibility;
	pluralDisplayName: string;
	status: ReleaseStatus;
	interfaceMap: Record<string, Record<string, string>>;
	inverseInterfaceMap: Record<string, Record<string, string>>;
}
export declare namespace ObjectMetadata {
	interface Property {
		readonly?: boolean;
		displayName?: string;
		description?: string;
		type: WirePropertyTypes;
		multiplicity?: boolean;
		nullable?: boolean;
	}
	interface Link<
		Q extends ObjectTypeDefinition,
		M extends boolean
	> {
		__OsdkLinkTargetType?: Q;
		targetType: Q["apiName"];
		multiplicity: M;
	}
}
export interface ObjectTypeDefinition {
	type: "object";
	apiName: string;
	osdkMetadata?: OsdkMetadata;
	__DefinitionMetadata?: ObjectMetadata & ObjectInterfaceCompileDefinition;
}
export type ObjectTypeLinkKeysFrom2<Q extends ObjectTypeDefinition> = keyof CompileTimeMetadata<Q>["links"] & string;
export interface PropertyDef<
	T extends WirePropertyTypes,
	N extends "nullable" | "non-nullable" = "nullable",
	M extends "array" | "single" = "single"
> extends ObjectMetadata.Property {
	type: T;
	multiplicity: M extends "array" ? true : false;
	nullable: N extends "nullable" ? true : false;
}
export type ReleaseStatus = "ACTIVE" | "EXPERIMENTAL" | "DEPRECATED" | "ENDORSED";
type ObjectTypeVisibility = "NORMAL" | "PROMINENT" | "HIDDEN";
type BlueprintIcon = {
	type: "blueprint"
	color: string
	name: string
};
type Icon = BlueprintIcon;
export {};
