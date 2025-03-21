import type { PropertyDef as $PropertyDef } from "@osdk/api";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/api";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/api";
export declare namespace ObjectWithTimestampPrimaryKey {
	type PropertyKeys = "timestamp" | "value";
	type Links = {};
	interface Props {
		readonly timestamp: $PropType["timestamp"];
		readonly value: $PropType["string"] | undefined;
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<ObjectWithTimestampPrimaryKey, ObjectWithTimestampPrimaryKey.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof ObjectWithTimestampPrimaryKey.Props = keyof ObjectWithTimestampPrimaryKey.Props
	> = $Osdk.Instance<ObjectWithTimestampPrimaryKey, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof ObjectWithTimestampPrimaryKey.Props = keyof ObjectWithTimestampPrimaryKey.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface ObjectWithTimestampPrimaryKey extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "ObjectWithTimestampPrimaryKey";
	__DefinitionMetadata?: {
		objectSet: ObjectWithTimestampPrimaryKey.ObjectSet
		props: ObjectWithTimestampPrimaryKey.Props
		linksType: ObjectWithTimestampPrimaryKey.Links
		strictProps: ObjectWithTimestampPrimaryKey.StrictProps
		apiName: "ObjectWithTimestampPrimaryKey"
		description: "Object Type With Timestamp Primary Key"
		displayName: "ObjectWithTimestampPrimaryKey"
		icon: {
			type: "blueprint"
			color: "blue"
			name: "person"
		}
		implements: []
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {}
		pluralDisplayName: "ObjectWithTimestampPrimaryKeys"
		primaryKeyApiName: "timestamp"
		primaryKeyType: "timestamp"
		properties: {
			/**
			* (no ontology metadata)
			*/
			timestamp: $PropertyDef<"timestamp", "non-nullable", "single">
			/**
			* (no ontology metadata)
			*/
			value: $PropertyDef<"string", "nullable", "single">
		}
		rid: "ri.ontology.main.object-type.32bb9402-9cab-4705-81bb-edb65a4a6806"
		status: "ACTIVE"
		titleProperty: "value"
		type: "object"
	};
}
export declare const ObjectWithTimestampPrimaryKey: ObjectWithTimestampPrimaryKey;
