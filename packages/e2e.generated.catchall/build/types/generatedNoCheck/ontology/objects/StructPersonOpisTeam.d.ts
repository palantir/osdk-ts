import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/client";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/client";
export declare namespace StructPersonOpisTeam {
	type PropertyKeys = "id" | "age" | "address";
	type Links = {};
	interface Props {
		readonly address: {
			city: $PropType["string"] | undefined
			state: $PropType["string"] | undefined
			zipcode: $PropType["integer"] | undefined
		} | undefined;
		readonly age: $PropType["integer"] | undefined;
		readonly id: $PropType["string"];
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<StructPersonOpisTeam, StructPersonOpisTeam.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof StructPersonOpisTeam.Props = keyof StructPersonOpisTeam.Props
	> = $Osdk.Instance<StructPersonOpisTeam, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof StructPersonOpisTeam.Props = keyof StructPersonOpisTeam.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface StructPersonOpisTeam extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "StructPersonOpisTeam";
	__DefinitionMetadata?: {
		objectSet: StructPersonOpisTeam.ObjectSet
		props: StructPersonOpisTeam.Props
		linksType: StructPersonOpisTeam.Links
		strictProps: StructPersonOpisTeam.StrictProps
		apiName: "StructPersonOpisTeam"
		description: "StructPersonOpisTeam"
		displayName: "StructPersonOpisTeam"
		icon: {
			type: "blueprint"
			name: "traffic"
			color: "color"
		}
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {}
		pluralDisplayName: "StructPeople"
		primaryKeyApiName: "id"
		primaryKeyType: "string"
		properties: {
			/**
			* (no ontology metadata)
			*/
			address: $PropertyDef<{
				city: "string"
				state: "string"
				zipcode: "integer"
			}, "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			age: $PropertyDef<"integer", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			id: $PropertyDef<"string", "non-nullable", "single">
		}
		rid: "ri.a.b.c.d"
		status: "ACTIVE"
		titleProperty: "name"
		type: "object"
	};
}
export declare const StructPersonOpisTeam: StructPersonOpisTeam;
