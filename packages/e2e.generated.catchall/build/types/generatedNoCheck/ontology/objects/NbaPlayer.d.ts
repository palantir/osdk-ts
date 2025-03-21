import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/client";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/client";
export declare namespace NbaPlayer {
	type PropertyKeys = "id" | "gamesPlayed" | "name" | "jerseyNumber" | "wikiUrl";
	type Links = {};
	interface Props {
		readonly gamesPlayed: $PropType["integer"] | undefined;
		readonly id: $PropType["string"];
		readonly jerseyNumber: $PropType["integer"] | undefined;
		readonly name: $PropType["string"] | undefined;
		readonly wikiUrl: $PropType["string"] | undefined;
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<NbaPlayer, NbaPlayer.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof NbaPlayer.Props = keyof NbaPlayer.Props
	> = $Osdk.Instance<NbaPlayer, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof NbaPlayer.Props = keyof NbaPlayer.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface NbaPlayer extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "NbaPlayer";
	__DefinitionMetadata?: {
		objectSet: NbaPlayer.ObjectSet
		props: NbaPlayer.Props
		linksType: NbaPlayer.Links
		strictProps: NbaPlayer.StrictProps
		apiName: "NbaPlayer"
		description: "NbaPlayer"
		displayName: "NbaPlayer"
		icon: {
			type: "blueprint"
			name: "traffic"
			color: "color"
		}
		implements: ["Athlete"]
		interfaceMap: {
			Athlete: {
				jerseyNumber: "jerseyNumber"
				athleteId: "id"
				name22: "name"
			}
		}
		inverseInterfaceMap: {
			Athlete: {
				jerseyNumber: "jerseyNumber"
				id: "athleteId"
				name: "name22"
			}
		}
		links: {}
		pluralDisplayName: "names"
		primaryKeyApiName: "id"
		primaryKeyType: "string"
		properties: {
			/**
			* (no ontology metadata)
			*/
			gamesPlayed: $PropertyDef<"integer", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			id: $PropertyDef<"string", "non-nullable", "single">
			/**
			* (no ontology metadata)
			*/
			jerseyNumber: $PropertyDef<"integer", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			name: $PropertyDef<"string", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			wikiUrl: $PropertyDef<"string", "nullable", "single">
		}
		rid: "ri.a.b.c.d"
		status: "ACTIVE"
		titleProperty: "name"
		type: "object"
	};
}
export declare const NbaPlayer: NbaPlayer;
