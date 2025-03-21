import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { Person } from "./Person.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition, ObjectMetadata as $ObjectMetadata } from "@osdk/client";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType, SingleLinkAccessor as $SingleLinkAccessor } from "@osdk/client";
export declare namespace Todo {
	type PropertyKeys = "id" | "body" | "text" | "priority" | "complete";
	interface Links {
		readonly Assignee: $SingleLinkAccessor<Person>;
	}
	interface Props {
		readonly body: $PropType["string"] | undefined;
		readonly complete: $PropType["boolean"] | undefined;
		readonly id: $PropType["integer"];
		readonly priority: $PropType["integer"] | undefined;
		readonly text: $PropType["string"] | undefined;
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<Todo, Todo.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof Todo.Props = keyof Todo.Props
	> = $Osdk.Instance<Todo, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof Todo.Props = keyof Todo.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface Todo extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "Todo";
	__DefinitionMetadata?: {
		objectSet: Todo.ObjectSet
		props: Todo.Props
		linksType: Todo.Links
		strictProps: Todo.StrictProps
		apiName: "Todo"
		description: "Its a todo item."
		displayName: "AwesomeTodoDisplayname"
		icon: {
			type: "blueprint"
			name: "todo"
			color: "color"
		}
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {
			Assignee: $ObjectMetadata.Link<Person, false>
		}
		pluralDisplayName: "AwesomeTodoDisplayname"
		primaryKeyApiName: "id"
		primaryKeyType: "integer"
		properties: {
			/**
			*   display name: 'Body',
			*   description: The text of the todo
			*/
			body: $PropertyDef<"string", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			complete: $PropertyDef<"boolean", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			id: $PropertyDef<"integer", "non-nullable", "single">
			/**
			* (no ontology metadata)
			*/
			priority: $PropertyDef<"integer", "nullable", "single">
			/**
			*   display name: 'Text'
			*/
			text: $PropertyDef<"string", "nullable", "single">
		}
		rid: "rid.a.b.c.d"
		status: "ACTIVE"
		titleProperty: "body"
		type: "object"
	};
}
export declare const Todo: Todo;
