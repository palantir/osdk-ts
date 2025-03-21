import type { ObjectMetadata as $ObjectMetadata, ObjectSet as $ObjectSet, ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef, PropertyValueWireToClient as $PropType, SingleLinkAccessor as $SingleLinkAccessor } from "../index.js";
export declare namespace EmployeeApiTest {
	type PropertyKeys = "employeeId" | "fullName" | "class" | "booleanProp";
	interface Links {
		readonly lead: $SingleLinkAccessor<EmployeeApiTest>;
		readonly peeps: EmployeeApiTest.ObjectSet;
	}
	interface Props {
		readonly class: $PropType["string"] | undefined;
		readonly fullName: $PropType["string"] | undefined;
		readonly employeeId: $PropType["integer"] | undefined;
		readonly booleanProp: $PropType["boolean"] | undefined;
	}
	type StrictProps = Props;
	interface ObjectSet extends $ObjectSet<EmployeeApiTest, EmployeeApiTest.ObjectSet> {}
}
export interface EmployeeApiTest extends $ObjectTypeDefinition {
	type: "object";
	apiName: "Employee";
	__DefinitionMetadata?: {
		objectSet: EmployeeApiTest.ObjectSet
		props: EmployeeApiTest.Props
		linksType: EmployeeApiTest.Links
		strictProps: EmployeeApiTest.StrictProps
		apiName: "Employee"
		description: "A full-time or part-time \n\n employee of our firm"
		displayName: "Employee"
		icon: {
			type: "blueprint"
			color: "blue"
			name: "person"
		}
		implements: ["FooInterface"]
		interfaceMap: {
			FooInterface: {
				fooSpt: "fullName"
			}
		}
		inverseInterfaceMap: {
			FooInterface: {
				fullName: "fooSpt"
			}
		}
		links: {
			lead: $ObjectMetadata.Link<EmployeeApiTest, false>
			peeps: $ObjectMetadata.Link<EmployeeApiTest, true>
		}
		pluralDisplayName: "Employees"
		primaryKeyApiName: "employeeId"
		primaryKeyType: "integer"
		properties: {
			class: $PropertyDef<"string", "nullable", "single">
			fullName: $PropertyDef<"string", "nullable", "single">
			employeeId: $PropertyDef<"integer", "nullable", "single">
			booleanProp: $PropertyDef<"boolean", "nullable", "single">
		}
		rid: "ri.ontology.main.object-type.401ac022-89eb-4591-8b7e-0a912b9efb44"
		status: "ACTIVE"
		titleProperty: "fullName"
		type: "object"
		visibility: "NORMAL"
	};
}
export declare const EmployeeApiTest: EmployeeApiTest;
