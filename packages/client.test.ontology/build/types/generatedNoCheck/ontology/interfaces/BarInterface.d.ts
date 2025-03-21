import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { InterfaceDefinition as $InterfaceDefinition, ObjectSet as $ObjectSet, Osdk as $Osdk } from "@osdk/api";
export type OsdkObjectLinks$BarInterface = {};
export declare namespace BarInterface {
	type PropertyKeys = never;
	interface Props {}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<BarInterface, BarInterface.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof BarInterface.Props = keyof BarInterface.Props
	> = $Osdk.Instance<BarInterface, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof BarInterface.Props = keyof BarInterface.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface BarInterface extends $InterfaceDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "interface";
	apiName: "BarInterface";
	__DefinitionMetadata?: {
		objectSet: BarInterface.ObjectSet
		props: BarInterface.Props
		linksType: OsdkObjectLinks$BarInterface
		strictProps: BarInterface.StrictProps
		apiName: "BarInterface"
		description: "Interface for Bar"
		displayName: "Bar Interface"
		implementedBy: []
		implements: []
		links: {}
		properties: {}
		rid: "ri.interface.main.interface.2"
		type: "interface"
	};
}
export declare const BarInterface: BarInterface;
