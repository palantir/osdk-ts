import type { InterfaceDefinition as $InterfaceDefinition, ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyDef as $PropertyDef, PropertyValueWireToClient as $PropType } from "../index.js";
export type OsdkObjectLinks$FooInterface = {};
export declare namespace FooInterfaceApiTest {
	type PropertyKeys = "name" | "description";
	interface Props {
		readonly description: $PropType["string"] | undefined;
		readonly name: $PropType["string"] | undefined;
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<FooInterfaceApiTest, FooInterfaceApiTest.ObjectSet> {}
	type OsdkInstance<
		OPTIONS extends never | "$rid" = never,
		K extends keyof FooInterfaceApiTest.Props = keyof FooInterfaceApiTest.Props
	> = $Osdk.Instance<FooInterfaceApiTest, OPTIONS, K>;
	type OsdkObject<
		OPTIONS extends never | "$rid" = never,
		K extends keyof FooInterfaceApiTest.Props = keyof FooInterfaceApiTest.Props
	> = OsdkInstance<OPTIONS, K>;
}
export interface FooInterfaceApiTest extends $InterfaceDefinition {
	osdkMetadata: any;
	type: "interface";
	apiName: "FooInterface";
	__DefinitionMetadata?: {
		objectSet: FooInterfaceApiTest.ObjectSet
		props: FooInterfaceApiTest.Props
		linksType: OsdkObjectLinks$FooInterface
		strictProps: FooInterfaceApiTest.StrictProps
		apiName: "FooInterface"
		description: "Its a Foo."
		displayName: "Foo interface"
		links: {}
		properties: {
			/**
			*   display name: 'Description',
			*   description: Description of Description
			*/
			description: $PropertyDef<"string", "nullable", "single">
			/**
			*   display name: 'Name',
			*   description: Name of Foo
			*/
			name: $PropertyDef<"string", "nullable", "single">
		}
		rid: "ri.ontology.main.interface-type.1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b"
		type: "interface"
		implementedBy: ["Employee"]
	};
}
export declare const FooInterfaceApiTest: FooInterfaceApiTest;
