import type { PropertyDef as $PropertyDef } from "@osdk/client";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from "@osdk/client";
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from "@osdk/client";
export declare namespace BuilderDeploymentState {
	type PropertyKeys = "skuId" | "date" | "currentTimestamp";
	type Links = {};
	interface Props {
		readonly currentTimestamp: $PropType["timestamp"] | undefined;
		readonly date: $PropType["datetime"] | undefined;
		readonly skuId: $PropType["string"];
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<BuilderDeploymentState, BuilderDeploymentState.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof BuilderDeploymentState.Props = keyof BuilderDeploymentState.Props
	> = $Osdk.Instance<BuilderDeploymentState, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof BuilderDeploymentState.Props = keyof BuilderDeploymentState.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface BuilderDeploymentState extends $ObjectTypeDefinition {
	osdkMetadata: typeof $osdkMetadata;
	type: "object";
	apiName: "BuilderDeploymentState";
	__DefinitionMetadata?: {
		objectSet: BuilderDeploymentState.ObjectSet
		props: BuilderDeploymentState.Props
		linksType: BuilderDeploymentState.Links
		strictProps: BuilderDeploymentState.StrictProps
		apiName: "BuilderDeploymentState"
		description: "Builder Deployment State"
		displayName: "BuilderDeploymentState"
		icon: {
			type: "blueprint"
			name: "builder"
			color: "color"
		}
		interfaceMap: {}
		inverseInterfaceMap: {}
		links: {}
		pluralDisplayName: "Builder Deployment States"
		primaryKeyApiName: "skuId"
		primaryKeyType: "string"
		properties: {
			/**
			* (no ontology metadata)
			*/
			currentTimestamp: $PropertyDef<"timestamp", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			date: $PropertyDef<"datetime", "nullable", "single">
			/**
			* (no ontology metadata)
			*/
			skuId: $PropertyDef<"string", "non-nullable", "single">
		}
		rid: "rid.a.b.c.d"
		status: "ACTIVE"
		titleProperty: "skuId"
		type: "object"
	};
}
export declare const BuilderDeploymentState: BuilderDeploymentState;
