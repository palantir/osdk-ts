import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/client";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/client";
export declare namespace StructPerson {
	type PropertyKeys = "name" | "address";
	type Links = {};
	interface Props {
		readonly address: {
			city: $PropType["string"] | undefined
			state: $PropType["string"] | undefined
		} | undefined;
		readonly name: $PropType["string"];
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<StructPerson, StructPerson.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof StructPerson.Props = keyof StructPerson.Props
	> = $Osdk.Instance<StructPerson, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof StructPerson.Props = keyof StructPerson.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface StructPerson extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "StructPerson";
	__DefinitionMetadata?: {
		objectSet: StructPerson.ObjectSet
		props: StructPerson.Props
		linksType: StructPerson.Links
		strictProps: StructPerson.StrictProps
		apiName: "StructPerson"
		description: "StructPerson"
		displayName: "StructPerson"
		icon: {
			type: "blueprint"
			name: "traffic"
			color: "color"
		}
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {}
		pluralDisplayName: "StructPeople"
		primaryKeyApiName: "name"
		primaryKeyType: "string"
		properties: {
			/**
			* (no ontology metadata)
			*/
			address: $PropertyDef<{
				city: "string"
				state: "string"
			}, "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			name: $PropertyDef<"string", "non-nullable", "single">
		}
		rid: "ri.a.b.c.d"
		status: "ACTIVE"
		titleProperty: "name"
		type: "object"
	};
}
export declare const StructPerson: StructPerson;
