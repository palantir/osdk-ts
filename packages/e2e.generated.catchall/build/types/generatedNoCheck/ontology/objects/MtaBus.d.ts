import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/client";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/client";
export declare namespace MtaBus {
	type PropertyKeys = "vehicleId" | "nextStopId" | "routeId" | "positionId";
	type Links = {};
	interface Props {
		readonly nextStopId: $PropType["string"] | undefined;
		readonly positionId: $PropType["geotimeSeriesReference"] | undefined;
		readonly routeId: $PropType["string"] | undefined;
		readonly vehicleId: $PropType["string"];
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<MtaBus, MtaBus.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof MtaBus.Props = keyof MtaBus.Props
	> = $Osdk.Instance<MtaBus, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof MtaBus.Props = keyof MtaBus.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface MtaBus extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "MtaBus";
	__DefinitionMetadata?: {
		objectSet: MtaBus.ObjectSet
		props: MtaBus.Props
		linksType: MtaBus.Links
		strictProps: MtaBus.StrictProps
		apiName: "MtaBus"
		description: "MtaBus"
		displayName: "MtaBus"
		icon: {
			type: "blueprint"
			name: "traffic"
			color: "color"
		}
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {}
		pluralDisplayName: "Fintraffic AIS"
		primaryKeyApiName: "vehicleId"
		primaryKeyType: "string"
		properties: {
			/**
			* (no ontology metadata)
			*/
			nextStopId: $PropertyDef<"string", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			positionId: $PropertyDef<"geotimeSeriesReference", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			routeId: $PropertyDef<"string", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			vehicleId: $PropertyDef<"string", "non-nullable", "single">
		}
		rid: "ri.a.b.c.d"
		status: "ACTIVE"
		titleProperty: "name"
		type: "object"
	};
}
export declare const MtaBus: MtaBus;
