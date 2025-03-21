import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { Todo } from "./Todo.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition, ObjectMetadata as $ObjectMetadata } from "@osdk/client";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/client";
export declare namespace Person {
	type PropertyKeys = "email";
	interface Links {
		readonly Friends: Person.ObjectSet;
		readonly Todos: Todo.ObjectSet;
	}
	interface Props {
		readonly email: $PropType["string"];
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
		description: "A person"
		displayName: "Person"
		icon: {
			type: "blueprint"
			name: "person"
			color: "color"
		}
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {
			Friends: $ObjectMetadata.Link<Person, true>
			Todos: $ObjectMetadata.Link<Todo, true>
		}
		pluralDisplayName: "People"
		primaryKeyApiName: "email"
		primaryKeyType: "string"
		properties: {
			/**
			* (no ontology metadata)
			*/
			email: $PropertyDef<"string", "non-nullable", "single">
		}
		rid: "rid.a.b.c.d"
		status: "ACTIVE"
		titleProperty: "email"
		type: "object"
	};
}
export declare const Person: Person;
