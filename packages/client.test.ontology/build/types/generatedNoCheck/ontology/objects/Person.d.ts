import type { PropertyDef as $PropertyDef } from "@osdk/api";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/api";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/api";
export declare namespace Person {
	type PropertyKeys = "id" | "name";
	type Links = {};
	interface Props {
		readonly id: $PropType["integer"];
		readonly name: $PropType["string"] | undefined;
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<Person, Person.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof Person.Props = keyof Person.Props
	> = $Osdk.Instance<Person, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof Person.Props = keyof Person.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface Person extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "Person";
	__DefinitionMetadata?: {
		objectSet: Person.ObjectSet
		props: Person.Props
		linksType: Person.Links
		strictProps: Person.StrictProps
		apiName: "Person"
		displayName: "Person"
		icon: {
			type: "blueprint"
			color: "blue"
			name: "person"
		}
		implements: []
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {}
		pluralDisplayName: "Persons"
		primaryKeyApiName: "id"
		primaryKeyType: "integer"
		properties: {
			/**
			* (no ontology metadata)
			*/
			id: $PropertyDef<"integer", "non-nullable", "single">
			/**
			* (no ontology metadata)
			*/
			name: $PropertyDef<"string", "nullable", "single">
		}
		rid: "ri.person"
		status: "ACTIVE"
		titleProperty: "name"
		type: "object"
	};
}
export declare const Person: Person;
