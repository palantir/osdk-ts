import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/client";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/client";
export declare namespace DherlihyComplexObject {
	type PropertyKeys = "id" | "secret" | "seriesId";
	type Links = {};
	interface Props {
		readonly id: $PropType["string"];
		readonly secret: $PropType["string"] | undefined;
		readonly seriesId: $PropType["numericTimeseries"] | undefined;
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<DherlihyComplexObject, DherlihyComplexObject.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof DherlihyComplexObject.Props = keyof DherlihyComplexObject.Props
	> = $Osdk.Instance<DherlihyComplexObject, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof DherlihyComplexObject.Props = keyof DherlihyComplexObject.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface DherlihyComplexObject extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "DherlihyComplexObject";
	__DefinitionMetadata?: {
		objectSet: DherlihyComplexObject.ObjectSet
		props: DherlihyComplexObject.Props
		linksType: DherlihyComplexObject.Links
		strictProps: DherlihyComplexObject.StrictProps
		apiName: "DherlihyComplexObject"
		description: "Dherlihy Complex Object"
		displayName: "Dherlihy Complex Object"
		icon: {
			type: "blueprint"
			name: "dherlihy"
			color: "color"
		}
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {}
		pluralDisplayName: "Dherlihy Complex Objects"
		primaryKeyApiName: "id"
		primaryKeyType: "string"
		properties: {
			/**
			* (no ontology metadata)
			*/
			id: $PropertyDef<"string", "non-nullable", "single">
			/**
			* (no ontology metadata)
			*/
			secret: $PropertyDef<"string", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			seriesId: $PropertyDef<"numericTimeseries", "nullable", "single">
		}
		rid: "rid.a.b.c.d"
		status: "ACTIVE"
		titleProperty: "id"
		type: "object"
	};
}
export declare const DherlihyComplexObject: DherlihyComplexObject;
