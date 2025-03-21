import type { PropertyDef as $PropertyDef } from "@osdk/api";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { Todo } from "./Todo.js";
import type { Person } from "./Person.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition, ObjectMetadata as $ObjectMetadata } from "@osdk/api";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType, SingleLinkAccessor as $SingleLinkAccessor } from "@osdk/api";
export declare namespace Task {
	type PropertyKeys = "id" | "name";
	interface Links {
		readonly RP: $SingleLinkAccessor<Person>;
		readonly Todos: Todo.ObjectSet;
	}
	interface Props {
		readonly id: $PropType["integer"];
		readonly name: $PropType["string"] | undefined;
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<Task, Task.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof Task.Props = keyof Task.Props
	> = $Osdk.Instance<Task, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof Task.Props = keyof Task.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface Task extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "Task";
	__DefinitionMetadata?: {
		objectSet: Task.ObjectSet
		props: Task.Props
		linksType: Task.Links
		strictProps: Task.StrictProps
		apiName: "Task"
		displayName: "Task"
		icon: {
			type: "blueprint"
			color: "blue"
			name: "box"
		}
		implements: []
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {
			RP: $ObjectMetadata.Link<Person, false>
			Todos: $ObjectMetadata.Link<Todo, true>
		}
		pluralDisplayName: "Tasks"
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
		rid: "ri.task"
		status: "ACTIVE"
		titleProperty: "name"
		type: "object"
	};
}
export declare const Task: Task;
