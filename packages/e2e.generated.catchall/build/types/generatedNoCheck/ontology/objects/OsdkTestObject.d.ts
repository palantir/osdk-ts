import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/client";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/client";
export declare namespace OsdkTestObject {
	type PropertyKeys = "description" | "osdkObjectName" | "primaryKey_" | "stringProperty";
	type Links = {};
	interface Props {
		readonly description: $PropType["string"] | undefined;
		readonly osdkObjectName: $PropType["string"] | undefined;
		readonly primaryKey_: $PropType["string"];
		readonly stringProperty: $PropType["string"] | undefined;
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<OsdkTestObject, OsdkTestObject.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof OsdkTestObject.Props = keyof OsdkTestObject.Props
	> = $Osdk.Instance<OsdkTestObject, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof OsdkTestObject.Props = keyof OsdkTestObject.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface OsdkTestObject extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "OsdkTestObject";
	__DefinitionMetadata?: {
		objectSet: OsdkTestObject.ObjectSet
		props: OsdkTestObject.Props
		linksType: OsdkTestObject.Links
		strictProps: OsdkTestObject.StrictProps
		apiName: "OsdkTestObject"
		description: ""
		displayName: "Osdk Test Object"
		icon: {
			type: "blueprint"
			color: "#4C90F0"
			name: "cube"
		}
		implements: ["FooInterface", "OsdkTestInterface"]
		interfaceMap: {
			FooInterface: {
				name: "osdkObjectName"
				description: "description"
			}
			OsdkTestInterface: {
				objectDescription: "description"
			}
		}
		inverseInterfaceMap: {
			FooInterface: {
				osdkObjectName: "name"
				description: "description"
			}
			OsdkTestInterface: {
				description: "objectDescription"
			}
		}
		links: {}
		pluralDisplayName: "Osdk Test Objects"
		primaryKeyApiName: "primaryKey_"
		primaryKeyType: "string"
		properties: {
			/**
			*   display name: 'Description'
			*/
			description: $PropertyDef<"string", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			osdkObjectName: $PropertyDef<"string", "nullable", "single">
			/**
			*   display name: 'Primary Key'
			*/
			primaryKey_: $PropertyDef<"string", "non-nullable", "single">
			/**
			*   display name: 'String Property'
			*/
			stringProperty: $PropertyDef<"string", "nullable", "single">
		}
		rid: "ri.ontology.main.object-type.ba4a949c-547a-45de-9c78-b772bb55acfb"
		status: "EXPERIMENTAL"
		titleProperty: "primaryKey_"
		type: "object"
		visibility: "NORMAL"
	};
}
export declare const OsdkTestObject: OsdkTestObject;
