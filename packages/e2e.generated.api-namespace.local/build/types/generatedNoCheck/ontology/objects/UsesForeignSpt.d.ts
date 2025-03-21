import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/client";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/client";
export declare namespace UsesForeignSpt {
	type PropertyKeys = "id" | "body";
	type Links = {};
	interface Props {
		readonly body: $PropType["string"] | undefined;
		readonly id: $PropType["integer"];
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<UsesForeignSpt, UsesForeignSpt.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof UsesForeignSpt.Props = keyof UsesForeignSpt.Props
	> = $Osdk.Instance<UsesForeignSpt, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof UsesForeignSpt.Props = keyof UsesForeignSpt.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface UsesForeignSpt extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "UsesForeignSpt";
	__DefinitionMetadata?: {
		objectSet: UsesForeignSpt.ObjectSet
		props: UsesForeignSpt.Props
		linksType: UsesForeignSpt.Links
		strictProps: UsesForeignSpt.StrictProps
		apiName: "UsesForeignSpt"
		displayName: "Uses Foreign Spt"
		icon: {
			type: "blueprint"
			name: "foreign"
			color: "red"
		}
		implements: []
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {}
		pluralDisplayName: "Uses Foreign Spts"
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
		rid: "theRid"
		status: "ACTIVE"
		titleProperty: "id"
		type: "object"
	};
}
export declare const UsesForeignSpt: UsesForeignSpt;
