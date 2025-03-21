import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/client";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/client";
export declare namespace RhemmingsObjectWithGtsrProperty2 {
	type PropertyKeys = "id" | "type" | "location" | "gtsr" | "timestamp";
	type Links = {};
	interface Props {
		readonly gtsr: $PropType["geotimeSeriesReference"] | undefined;
		readonly id: $PropType["string"];
		readonly location: $PropType["geopoint"] | undefined;
		readonly timestamp: $PropType["timestamp"] | undefined;
		readonly type: $PropType["string"] | undefined;
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<RhemmingsObjectWithGtsrProperty2, RhemmingsObjectWithGtsrProperty2.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof RhemmingsObjectWithGtsrProperty2.Props = keyof RhemmingsObjectWithGtsrProperty2.Props
	> = $Osdk.Instance<RhemmingsObjectWithGtsrProperty2, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof RhemmingsObjectWithGtsrProperty2.Props = keyof RhemmingsObjectWithGtsrProperty2.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface RhemmingsObjectWithGtsrProperty2 extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "RhemmingsObjectWithGtsrProperty2";
	__DefinitionMetadata?: {
		objectSet: RhemmingsObjectWithGtsrProperty2.ObjectSet
		props: RhemmingsObjectWithGtsrProperty2.Props
		linksType: RhemmingsObjectWithGtsrProperty2.Links
		strictProps: RhemmingsObjectWithGtsrProperty2.StrictProps
		apiName: "RhemmingsObjectWithGtsrProperty2"
		description: "(rhemmings) Object with GTSR property 2"
		displayName: "(rhemmings) Object with GTSR property 2"
		icon: {
			type: "blueprint"
			name: "traffic"
			color: "color"
		}
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {}
		pluralDisplayName: "(rhemmings) Object with GTSR property 2"
		primaryKeyApiName: "id"
		primaryKeyType: "string"
		properties: {
			/**
			* (no ontology metadata)
			*/
			gtsr: $PropertyDef<"geotimeSeriesReference", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			id: $PropertyDef<"string", "non-nullable", "single">
			/**
			* (no ontology metadata)
			*/
			location: $PropertyDef<"geopoint", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			timestamp: $PropertyDef<"timestamp", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			type: $PropertyDef<"string", "nullable", "single">
		}
		rid: "ri.a.b.c.d"
		status: "ACTIVE"
		titleProperty: "id"
		type: "object"
	};
}
export declare const RhemmingsObjectWithGtsrProperty2: RhemmingsObjectWithGtsrProperty2;
