import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { Country_1 } from "./Country_1.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition, ObjectMetadata as $ObjectMetadata } from "@osdk/client";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType, SingleLinkAccessor as $SingleLinkAccessor } from "@osdk/client";
export declare namespace StateTerritory {
	type PropertyKeys = "airportStateName" | "airportStateCode" | "country";
	interface Links {
		readonly country1: $SingleLinkAccessor<Country_1>;
	}
	interface Props {
		readonly airportStateCode: $PropType["string"] | undefined;
		readonly airportStateName: $PropType["string"];
		readonly country: $PropType["string"] | undefined;
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<StateTerritory, StateTerritory.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof StateTerritory.Props = keyof StateTerritory.Props
	> = $Osdk.Instance<StateTerritory, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof StateTerritory.Props = keyof StateTerritory.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface StateTerritory extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "StateTerritory";
	__DefinitionMetadata?: {
		objectSet: StateTerritory.ObjectSet
		props: StateTerritory.Props
		linksType: StateTerritory.Links
		strictProps: StateTerritory.StrictProps
		apiName: "StateTerritory"
		description: ""
		displayName: "State/Territory"
		icon: {
			type: "blueprint"
			color: "#4C90F0"
			name: "cube"
		}
		implements: []
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {
			country1: $ObjectMetadata.Link<Country_1, false>
		}
		pluralDisplayName: "States"
		primaryKeyApiName: "airportStateName"
		primaryKeyType: "string"
		properties: {
			/**
			* (no ontology metadata)
			*/
			airportStateCode: $PropertyDef<"string", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			airportStateName: $PropertyDef<"string", "non-nullable", "single">
			/**
			* (no ontology metadata)
			*/
			country: $PropertyDef<"string", "nullable", "single">
		}
		rid: "ri.ontology.main.object-type.98f324e1-b8f4-42ef-aee7-5c4a1494ce5e"
		status: "EXPERIMENTAL"
		titleProperty: "airportStateName"
		type: "object"
		visibility: "NORMAL"
	};
}
export declare const StateTerritory: StateTerritory;
