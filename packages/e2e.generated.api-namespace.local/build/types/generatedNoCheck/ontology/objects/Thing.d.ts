import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/client";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/client";
export declare namespace Thing {
	type PropertyKeys = "id" | "body";
	type Links = {};
	interface Props {
		readonly body: $PropType["string"] | undefined;
		readonly id: $PropType["integer"];
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<Thing, Thing.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof Thing.Props = keyof Thing.Props
	> = $Osdk.Instance<Thing, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof Thing.Props = keyof Thing.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface Thing extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "Thing";
	__DefinitionMetadata?: {
		objectSet: Thing.ObjectSet
		props: Thing.Props
		linksType: Thing.Links
		strictProps: Thing.StrictProps
		apiName: "Thing"
		displayName: "Thing"
		icon: {
			type: "blueprint"
			name: "thing"
			color: "green"
		}
		implements: ["com.example.dep.SomeInterface"]
		interfaceMap: {
			"com.example.dep.SomeInterface": {
				"com.example.dep.spt": "body"
			}
		}
		inverseInterfaceMap: {
			"com.example.dep.SomeInterface": {
				body: "com.example.dep.spt"
			}
		}
		links: {}
		pluralDisplayName: "Things"
		primaryKeyApiName: "id"
		primaryKeyType: "integer"
		properties: {
			/**
			* (no ontology metadata)
			*/
			body: $PropertyDef<"string", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			id: $PropertyDef<"integer", "non-nullable", "single">
		}
		rid: "ridForThing"
		status: "ACTIVE"
		titleProperty: "id"
		type: "object"
	};
}
export declare const Thing: Thing;
