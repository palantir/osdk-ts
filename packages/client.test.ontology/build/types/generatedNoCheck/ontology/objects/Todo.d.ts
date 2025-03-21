import type { PropertyDef as $PropertyDef } from "@osdk/api";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/api";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/api";
export declare namespace Todo {
	type PropertyKeys = "id" | "text";
	type Links = {};
	interface Props {
		readonly id: $PropType["integer"];
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
		displayName: "Todo"
		icon: {
			type: "blueprint"
			color: "blue"
			name: "box"
		}
		implements: []
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {}
		pluralDisplayName: "ManyTodo"
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
			text: $PropertyDef<"string", "nullable", "single">
		}
		rid: "ri.todo"
		status: "ACTIVE"
		titleProperty: "text"
		type: "object"
	};
}
export declare const Todo: Todo;
