import type { PropertyDef as $PropertyDef } from "@osdk/api";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/api";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/api";
export declare namespace BgaoNflPlayer {
	type PropertyKeys = "id" | "gamesPlayed" | "name" | "number" | "wikiUrl" | "address";
	type Links = {};
	interface Props {
		readonly address: {
			addressLine1: $PropType["string"] | undefined
			addressLine2: $PropType["string"] | undefined
			city: $PropType["string"] | undefined
			state: $PropType["string"] | undefined
			zipCode: $PropType["integer"] | undefined
		} | undefined;
		readonly gamesPlayed: $PropType["integer"] | undefined;
		readonly id: $PropType["string"];
		readonly name: $PropType["string"] | undefined;
		readonly number: $PropType["integer"] | undefined;
		readonly wikiUrl: $PropType["string"] | undefined;
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<BgaoNflPlayer, BgaoNflPlayer.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof BgaoNflPlayer.Props = keyof BgaoNflPlayer.Props
	> = $Osdk.Instance<BgaoNflPlayer, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof BgaoNflPlayer.Props = keyof BgaoNflPlayer.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface BgaoNflPlayer extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "BgaoNflPlayer";
	__DefinitionMetadata?: {
		objectSet: BgaoNflPlayer.ObjectSet
		props: BgaoNflPlayer.Props
		linksType: BgaoNflPlayer.Links
		strictProps: BgaoNflPlayer.StrictProps
		apiName: "BgaoNflPlayer"
		displayName: "id"
		icon: {
			type: "blueprint"
			color: "blue"
			name: "box"
		}
		implements: []
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {}
		pluralDisplayName: "BgaoNflPlayers"
		primaryKeyApiName: "id"
		primaryKeyType: "string"
		properties: {
			/**
			* (no ontology metadata)
			*/
			address: $PropertyDef<{
				addressLine1: "string"
				addressLine2: "string"
				city: "string"
				state: "string"
				zipCode: "integer"
			}, "nullable", "single">
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
			name: $PropertyDef<"string", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			number: $PropertyDef<"integer", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			wikiUrl: $PropertyDef<"string", "nullable", "single">
		}
		rid: "ri.nflplayer"
		status: "ACTIVE"
		titleProperty: "name"
		type: "object"
	};
}
export declare const BgaoNflPlayer: BgaoNflPlayer;
