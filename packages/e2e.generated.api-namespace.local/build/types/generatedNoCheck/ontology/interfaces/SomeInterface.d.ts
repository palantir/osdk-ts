import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { InterfaceDefinition as $InterfaceDefinition, ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/client";
export type OsdkObjectLinks$SomeInterface = {};
export declare namespace SomeInterface {
	type PropertyKeys = "com.example.dep.spt";
	interface Props {
		readonly "com.example.dep.spt": $PropType["string"] | undefined;
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<SomeInterface, SomeInterface.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof SomeInterface.Props = keyof SomeInterface.Props
	> = $Osdk.Instance<SomeInterface, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof SomeInterface.Props = keyof SomeInterface.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface SomeInterface extends $InterfaceDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "interface";
	apiName: "com.example.local.SomeInterface";
	__DefinitionMetadata?: {
		objectSet: SomeInterface.ObjectSet
		props: SomeInterface.Props
		linksType: OsdkObjectLinks$SomeInterface
		strictProps: SomeInterface.StrictProps
		apiName: "com.example.local.SomeInterface"
		displayName: "Sum Interface"
		implements: ["com.example.dep.SomeInterface"]
		links: {}
		properties: {
			/**
			*   display name: 'Some Property'
			*/
			"com.example.dep.spt": $PropertyDef<"string", "nullable", "single">
		}
		rid: "idk2"
		type: "interface"
	};
}
export declare const SomeInterface: SomeInterface;
