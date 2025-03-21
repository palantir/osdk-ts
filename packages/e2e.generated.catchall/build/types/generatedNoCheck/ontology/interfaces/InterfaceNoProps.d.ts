import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { InterfaceDefinition as $InterfaceDefinition, ObjectSet as $ObjectSet, Osdk as $Osdk } from "@osdk/client";
export type OsdkObjectLinks$InterfaceNoProps = {};
export declare namespace InterfaceNoProps {
	type PropertyKeys = never;
	interface Props {}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<InterfaceNoProps, InterfaceNoProps.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof InterfaceNoProps.Props = keyof InterfaceNoProps.Props
	> = $Osdk.Instance<InterfaceNoProps, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof InterfaceNoProps.Props = keyof InterfaceNoProps.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface InterfaceNoProps extends $InterfaceDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "interface";
	apiName: "InterfaceNoProps";
	__DefinitionMetadata?: {
		objectSet: InterfaceNoProps.ObjectSet
		props: InterfaceNoProps.Props
		linksType: OsdkObjectLinks$InterfaceNoProps
		strictProps: InterfaceNoProps.StrictProps
		apiName: "InterfaceNoProps"
		description: "Its a Foo."
		displayName: "FInterfaceNoProps"
		links: {}
		properties: {}
		rid: "ri.ontology.main.interface-type.1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b"
		type: "interface"
	};
}
export declare const InterfaceNoProps: InterfaceNoProps;
