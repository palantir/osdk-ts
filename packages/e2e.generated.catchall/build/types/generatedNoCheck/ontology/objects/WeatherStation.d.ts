import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/client";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/client";
export declare namespace WeatherStation {
	type PropertyKeys = "stationId" | "geohash";
	type Links = {};
	interface Props {
		readonly geohash: $PropType["geopoint"] | undefined;
		readonly stationId: $PropType["string"];
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<WeatherStation, WeatherStation.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof WeatherStation.Props = keyof WeatherStation.Props
	> = $Osdk.Instance<WeatherStation, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof WeatherStation.Props = keyof WeatherStation.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface WeatherStation extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "WeatherStation";
	__DefinitionMetadata?: {
		objectSet: WeatherStation.ObjectSet
		props: WeatherStation.Props
		linksType: WeatherStation.Links
		strictProps: WeatherStation.StrictProps
		apiName: "WeatherStation"
		description: "Weather Station"
		displayName: "Weather Station"
		icon: {
			type: "blueprint"
			name: "weather"
			color: "color"
		}
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {}
		pluralDisplayName: "Weather Stations"
		primaryKeyApiName: "stationId"
		primaryKeyType: "string"
		properties: {
			/**
			*   display name: 'Geohash',
			*   description: geopoint
			*/
			geohash: $PropertyDef<"geopoint", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			stationId: $PropertyDef<"string", "non-nullable", "single">
		}
		rid: "ri.a.b.c.d"
		status: "ACTIVE"
		titleProperty: "stationId"
		type: "object"
	};
}
export declare const WeatherStation: WeatherStation;
