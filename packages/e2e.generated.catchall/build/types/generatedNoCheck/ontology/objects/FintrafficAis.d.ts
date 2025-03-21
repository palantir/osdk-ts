import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/client";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/client";
export declare namespace FintrafficAis {
	type PropertyKeys = "mmsi" | "name" | "centroid" | "geometry" | "seriesId" | "shipType" | "timestamp";
	type Links = {};
	interface Props {
		readonly centroid: $PropType["geopoint"] | undefined;
		readonly geometry: $PropType["geoshape"] | undefined;
		readonly mmsi: $PropType["string"];
		readonly name: $PropType["string"] | undefined;
		readonly seriesId: $PropType["geotimeSeriesReference"] | undefined;
		readonly shipType: $PropType["string"] | undefined;
		readonly timestamp: $PropType["timestamp"] | undefined;
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<FintrafficAis, FintrafficAis.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof FintrafficAis.Props = keyof FintrafficAis.Props
	> = $Osdk.Instance<FintrafficAis, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof FintrafficAis.Props = keyof FintrafficAis.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface FintrafficAis extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "FintrafficAis";
	__DefinitionMetadata?: {
		objectSet: FintrafficAis.ObjectSet
		props: FintrafficAis.Props
		linksType: FintrafficAis.Links
		strictProps: FintrafficAis.StrictProps
		apiName: "FintrafficAis"
		description: "Fintraffic AIS"
		displayName: "Fintraffic AIS"
		icon: {
			type: "blueprint"
			name: "traffic"
			color: "color"
		}
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {}
		pluralDisplayName: "Fintraffic AIS"
		primaryKeyApiName: "mmsi"
		primaryKeyType: "string"
		properties: {
			/**
			* (no ontology metadata)
			*/
			centroid: $PropertyDef<"geopoint", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			geometry: $PropertyDef<"geoshape", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			mmsi: $PropertyDef<"string", "non-nullable", "single">
			/**
			* (no ontology metadata)
			*/
			name: $PropertyDef<"string", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			seriesId: $PropertyDef<"geotimeSeriesReference", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			shipType: $PropertyDef<"string", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			timestamp: $PropertyDef<"timestamp", "nullable", "single">
		}
		rid: "ri.a.b.c.d"
		status: "ACTIVE"
		titleProperty: "name"
		type: "object"
	};
}
export declare const FintrafficAis: FintrafficAis;
