/** /@test-app2/osdk/index **/
declare module "@test-app2/osdk" {
	export * from '@test-app2/osdk/ontology/actions';
	export * as $Actions from '@test-app2/osdk/ontology/actions';
	export * from '@test-app2/osdk/ontology/interfaces';
	export * as $Interfaces from '@test-app2/osdk/ontology/interfaces';
	export * from '@test-app2/osdk/ontology/objects';
	export * as $Objects from '@test-app2/osdk/ontology/objects';
	export * from '@test-app2/osdk/ontology/queries';
	export * as $Queries from '@test-app2/osdk/ontology/queries';
	export { $ontologyRid } from '@test-app2/osdk/OntologyMetadata';
}
/** /@test-app2/osdk/OntologyMetadata **/
declare module "@test-app2/osdk/OntologyMetadata" {
	export type $ExpectedClientVersion = '2.0.0';
	export const $osdkMetadata: {
	    extraUserAgent: string;
	};
	export const $ontologyRid = "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361";
}
/** /@test-app2/osdk/ontology/actions **/
declare module "@test-app2/osdk/ontology/actions" {
	export { actionTakesObjectSet } from '@test-app2/osdk/ontology/actions/actionTakesObjectSet';
	export { createOffice } from '@test-app2/osdk/ontology/actions/createOffice';
	export { createOfficeAndEmployee } from '@test-app2/osdk/ontology/actions/createOfficeAndEmployee';
	export { moveOffice } from '@test-app2/osdk/ontology/actions/moveOffice';
}
/** /@test-app2/osdk/ontology/interfaces **/
declare module "@test-app2/osdk/ontology/interfaces" {
	export * from '@test-app2/osdk/ontology/interfaces/FooInterface';
}
/** /@test-app2/osdk/ontology/objects **/
declare module "@test-app2/osdk/ontology/objects" {
	export * from '@test-app2/osdk/ontology/objects/Employee';
	export * from '@test-app2/osdk/ontology/objects/equipment';
	export * from '@test-app2/osdk/ontology/objects/objectTypeWithAllPropertyTypes';
	export * from '@test-app2/osdk/ontology/objects/ObjectWithTimestampPrimaryKey';
	export * from '@test-app2/osdk/ontology/objects/Office';
}
/** /@test-app2/osdk/ontology/queries **/
declare module "@test-app2/osdk/ontology/queries" {
	export * from '@test-app2/osdk/ontology/queries/addOne';
	export * from '@test-app2/osdk/ontology/queries/incrementPersonAge';
	export * from '@test-app2/osdk/ontology/queries/returnsDate';
	export * from '@test-app2/osdk/ontology/queries/returnsObject';
	export * from '@test-app2/osdk/ontology/queries/returnsTimestamp';
	export * from '@test-app2/osdk/ontology/queries/threeDimensionalAggregationFunction';
	export * from '@test-app2/osdk/ontology/queries/twoDimensionalAggregationFunction';
}
/** /@test-app2/osdk/ontology/actions/actionTakesObjectSet **/
declare module "@test-app2/osdk/ontology/actions/actionTakesObjectSet" {
	import type { ActionDefinition, ObjectSetActionDataType, VersionBound } from 'internal/@osdk/api';
	import type { ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from 'internal/@osdk/client.api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	import type { Employee } from '@test-app2/osdk/ontology/objects/Employee';
	export namespace actionTakesObjectSet {
	    type ParamsDefinition = {
	        employees: {
	            multiplicity: false;
	            nullable: false;
	            type: ObjectSetActionDataType<'Employee', Employee>;
	        };
	    };
	    /**
	     * An action which takes an Object Set
	     */
	    interface Params {
	        readonly employees: ActionParam.ObjectSetType<Employee>;
	    }
	    interface Definition extends ActionDefinition<'actionTakesObjectSet', 'Employee', actionTakesObjectSet.Signatures>, VersionBound<$ExpectedClientVersion> {
	        apiName: 'actionTakesObjectSet';
	        description: 'An action which takes an Object Set';
	        modifiedEntities: {};
	        type: 'action';
	        parameters: actionTakesObjectSet.ParamsDefinition;
	        osdkMetadata: typeof $osdkMetadata;
	    }
	    interface Signatures {
	        /**
	         * An action which takes an Object Set
	         */
	        applyAction<P extends actionTakesObjectSet.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	        batchApplyAction<P extends ReadonlyArray<actionTakesObjectSet.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	    }
	}
	/** @deprecated Use `actionTakesObjectSet.Definition` **/
	export type actionTakesObjectSet = actionTakesObjectSet.Signatures;
	export const actionTakesObjectSet: actionTakesObjectSet.Definition;
}
/** /@test-app2/osdk/ontology/actions/createOffice **/
declare module "@test-app2/osdk/ontology/actions/createOffice" {
	import type { ActionDefinition, VersionBound } from 'internal/@osdk/api';
	import type { ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from 'internal/@osdk/client.api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	export namespace createOffice {
	    type ParamsDefinition = {
	        address: {
	            description: "The office's physical address (not necessarily shipping address)";
	            multiplicity: false;
	            nullable: true;
	            type: 'string';
	        };
	        capacity: {
	            description: 'The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)';
	            multiplicity: false;
	            nullable: true;
	            type: 'integer';
	        };
	        officeId: {
	            multiplicity: false;
	            nullable: false;
	            type: 'string';
	        };
	        officeNames: {
	            description: 'A list of all office names';
	            multiplicity: true;
	            nullable: true;
	            type: 'string';
	        };
	    };
	    /**
	     * Create an office's
	     */
	    interface Params {
	        /**
	         * The office's physical address (not necessarily shipping address)
	         */
	        readonly address?: ActionParam.PrimitiveType<'string'>;
	        /**
	         * The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)
	         */
	        readonly capacity?: ActionParam.PrimitiveType<'integer'>;
	        readonly officeId: ActionParam.PrimitiveType<'string'>;
	        /**
	         * A list of all office names
	         */
	        readonly officeNames?: ReadonlyArray<ActionParam.PrimitiveType<'string'>>;
	    }
	    interface Definition extends ActionDefinition<'createOffice', 'Office', createOffice.Signatures>, VersionBound<$ExpectedClientVersion> {
	        apiName: 'createOffice';
	        description: "Create an office's";
	        modifiedEntities: {
	            Office: {
	                created: true;
	                modified: false;
	            };
	        };
	        type: 'action';
	        parameters: createOffice.ParamsDefinition;
	        osdkMetadata: typeof $osdkMetadata;
	    }
	    interface Signatures {
	        /**
	         * Create an office's
	         */
	        applyAction<P extends createOffice.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	        batchApplyAction<P extends ReadonlyArray<createOffice.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	    }
	}
	/** @deprecated Use `createOffice.Definition` **/
	export type createOffice = createOffice.Signatures;
	export const createOffice: createOffice.Definition;
}
/** /@test-app2/osdk/ontology/actions/createOfficeAndEmployee **/
declare module "@test-app2/osdk/ontology/actions/createOfficeAndEmployee" {
	import type { ActionDefinition, VersionBound } from 'internal/@osdk/api';
	import type { ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from 'internal/@osdk/client.api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	export namespace createOfficeAndEmployee {
	    type ParamsDefinition = {
	        address: {
	            description: "The office's physical address (not necessarily shipping address)";
	            multiplicity: false;
	            nullable: true;
	            type: 'string';
	        };
	        capacity: {
	            description: 'The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)';
	            multiplicity: false;
	            nullable: true;
	            type: 'integer';
	        };
	        employeeId: {
	            description: 'New employee Id';
	            multiplicity: false;
	            nullable: false;
	            type: 'integer';
	        };
	        officeId: {
	            multiplicity: false;
	            nullable: false;
	            type: 'string';
	        };
	        officeNames: {
	            description: 'A list of all office names';
	            multiplicity: true;
	            nullable: true;
	            type: 'string';
	        };
	    };
	    /**
	     * Create an office and employee
	     */
	    interface Params {
	        /**
	         * The office's physical address (not necessarily shipping address)
	         */
	        readonly address?: ActionParam.PrimitiveType<'string'>;
	        /**
	         * The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)
	         */
	        readonly capacity?: ActionParam.PrimitiveType<'integer'>;
	        /**
	         * New employee Id
	         */
	        readonly employeeId: ActionParam.PrimitiveType<'integer'>;
	        readonly officeId: ActionParam.PrimitiveType<'string'>;
	        /**
	         * A list of all office names
	         */
	        readonly officeNames?: ReadonlyArray<ActionParam.PrimitiveType<'string'>>;
	    }
	    interface Definition extends ActionDefinition<'createOfficeAndEmployee', 'Office' | 'Employee', createOfficeAndEmployee.Signatures>, VersionBound<$ExpectedClientVersion> {
	        apiName: 'createOfficeAndEmployee';
	        description: 'Create an office and employee';
	        modifiedEntities: {
	            Office: {
	                created: true;
	                modified: false;
	            };
	            Employee: {
	                created: true;
	                modified: false;
	            };
	        };
	        type: 'action';
	        parameters: createOfficeAndEmployee.ParamsDefinition;
	        osdkMetadata: typeof $osdkMetadata;
	    }
	    interface Signatures {
	        /**
	         * Create an office and employee
	         */
	        applyAction<P extends createOfficeAndEmployee.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	        batchApplyAction<P extends ReadonlyArray<createOfficeAndEmployee.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	    }
	}
	/** @deprecated Use `createOfficeAndEmployee.Definition` **/
	export type createOfficeAndEmployee = createOfficeAndEmployee.Signatures;
	export const createOfficeAndEmployee: createOfficeAndEmployee.Definition;
}
/** /@test-app2/osdk/ontology/actions/moveOffice **/
declare module "@test-app2/osdk/ontology/actions/moveOffice" {
	import type { ActionDefinition, VersionBound } from 'internal/@osdk/api';
	import type { ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from 'internal/@osdk/client.api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	export namespace moveOffice {
	    type ParamsDefinition = {
	        newAddress: {
	            description: "The office's new physical address (not necessarily shipping address)";
	            multiplicity: false;
	            nullable: true;
	            type: 'string';
	        };
	        newCapacity: {
	            description: 'The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)';
	            multiplicity: false;
	            nullable: true;
	            type: 'integer';
	        };
	        officeId: {
	            multiplicity: false;
	            nullable: false;
	            type: 'string';
	        };
	        officeNames: {
	            description: 'A list of all office names';
	            multiplicity: true;
	            nullable: true;
	            type: 'integer';
	        };
	    };
	    /**
	     * Update an office's physical location
	     */
	    interface Params {
	        /**
	         * The office's new physical address (not necessarily shipping address)
	         */
	        readonly newAddress?: ActionParam.PrimitiveType<'string'>;
	        /**
	         * The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)
	         */
	        readonly newCapacity?: ActionParam.PrimitiveType<'integer'>;
	        readonly officeId: ActionParam.PrimitiveType<'string'>;
	        /**
	         * A list of all office names
	         */
	        readonly officeNames?: ReadonlyArray<ActionParam.PrimitiveType<'integer'>>;
	    }
	    interface Definition extends ActionDefinition<'moveOffice', 'Office', moveOffice.Signatures>, VersionBound<$ExpectedClientVersion> {
	        apiName: 'moveOffice';
	        description: "Update an office's physical location";
	        modifiedEntities: {
	            Office: {
	                created: false;
	                modified: true;
	            };
	        };
	        type: 'action';
	        parameters: moveOffice.ParamsDefinition;
	        osdkMetadata: typeof $osdkMetadata;
	    }
	    interface Signatures {
	        /**
	         * Update an office's physical location
	         */
	        applyAction<P extends moveOffice.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	        batchApplyAction<P extends ReadonlyArray<moveOffice.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	    }
	}
	/** @deprecated Use `moveOffice.Definition` **/
	export type moveOffice = moveOffice.Signatures;
	export const moveOffice: moveOffice.Definition;
}
/** /@test-app2/osdk/ontology/interfaces/FooInterface **/
declare module "@test-app2/osdk/ontology/interfaces/FooInterface" {
	import type { PropertyDef as $PropertyDef } from 'internal/@osdk/api';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	import type { InterfaceDefinition as $InterfaceDefinition } from 'internal/@osdk/api';
	import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from 'internal/@osdk/client.api';
	export type OsdkObjectLinks$FooInterface = {};
	export namespace FooInterface {
	    type PropertyKeys = 'fooSpt';
	    interface Props {
	        readonly fooSpt: $PropType['string'] | undefined;
	    }
	    interface StrictProps {
	        readonly fooSpt: $PropType['string'] | undefined;
	    }
	    interface ObjectSet extends $ObjectSet<FooInterface.Definition, FooInterface.ObjectSet> {
	    }
	    interface Definition extends $InterfaceDefinition<'FooInterface', FooInterface.Definition> {
	        osdkMetadata: typeof $osdkMetadata;
	        objectSet: FooInterface.ObjectSet;
	        props: FooInterface.Props;
	        linksType: OsdkObjectLinks$FooInterface;
	        strictProps: FooInterface.StrictProps;
	        displayName: 'Foo Interface';
	        implements: [];
	        links: {};
	        properties: {
	            /**
	             *   display name: 'Foo',
	             *   description: A foo
	             */
	            fooSpt: $PropertyDef<'string', 'nullable', 'single'>;
	        };
	    }
	    type OsdkObject<OPTIONS extends never | '$notStrict' | '$rid' = never, K extends keyof FooInterface.Props = keyof FooInterface.Props> = $Osdk<FooInterface.Definition, K | OPTIONS>;
	}
	/** @deprecated use FooInterface.Definition **/
	export type FooInterface = FooInterface.Definition;
	export const FooInterface: FooInterface.Definition;
}
/** /@test-app2/osdk/ontology/objects/Employee **/
declare module "@test-app2/osdk/ontology/objects/Employee" {
	import type { ObjectTypeDefinition as $ObjectTypeDefinition, ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition, PropertyDef as $PropertyDef } from 'internal/@osdk/api';
	import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType, SingleLinkAccessor as $SingleLinkAccessor } from 'internal/@osdk/client.api';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	import type { Office } from '@test-app2/osdk/ontology/objects/Office';
	export namespace Employee {
	    type PropertyKeys = 'employeeId' | 'fullName' | 'office' | 'startDate' | 'employeeStatus';
	    interface Links {
	        readonly lead: $SingleLinkAccessor<Employee>;
	        readonly officeLink: $SingleLinkAccessor<Office>;
	        readonly peeps: Employee.ObjectSet;
	    }
	    interface Props {
	        readonly employeeId: $PropType['integer'] | undefined;
	        readonly employeeStatus: $PropType['stringTimeseries'] | undefined;
	        readonly fullName: $PropType['string'] | undefined;
	        readonly office: $PropType['string'] | undefined;
	        readonly startDate: $PropType['datetime'] | undefined;
	    }
	    interface StrictProps {
	        readonly employeeId: $PropType['integer'];
	        readonly employeeStatus: $PropType['stringTimeseries'] | undefined;
	        readonly fullName: $PropType['string'] | undefined;
	        readonly office: $PropType['string'] | undefined;
	        readonly startDate: $PropType['datetime'] | undefined;
	    }
	    interface ObjectSet extends $ObjectSet<Employee, Employee.ObjectSet> {
	    }
	    type OsdkObject<OPTIONS extends never | '$notStrict' | '$rid' = never, K extends keyof Employee.Props = keyof Employee.Props> = $Osdk<Employee, K | OPTIONS>;
	}
	export interface Employee extends $ObjectTypeDefinition<'Employee', Employee> {
	    osdkMetadata: typeof $osdkMetadata;
	    objectSet: Employee.ObjectSet;
	    props: Employee.Props;
	    linksType: Employee.Links;
	    strictProps: Employee.StrictProps;
	    description: 'A full-time or part-time \n\n employee of our firm';
	    implements: ['FooInterface'];
	    interfaceMap: {
	        FooInterface: {
	            fooSpt: 'fullName';
	        };
	    };
	    inverseInterfaceMap: {
	        FooInterface: {
	            fullName: 'fooSpt';
	        };
	    };
	    inverseSpts: {
	        fullName: 'fooSpt';
	    };
	    links: {
	        lead: $ObjectTypeLinkDefinition<Employee, false>;
	        officeLink: $ObjectTypeLinkDefinition<Office, false>;
	        peeps: $ObjectTypeLinkDefinition<Employee, true>;
	    };
	    primaryKeyApiName: 'employeeId';
	    primaryKeyType: 'integer';
	    properties: {
	        /**
	         * (no ontology metadata)
	         */
	        employeeId: $PropertyDef<'integer', 'non-nullable', 'single'>;
	        /**
	         *   description: TimeSeries of the status of the employee
	         */
	        employeeStatus: $PropertyDef<'stringTimeseries', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        fullName: $PropertyDef<'string', 'nullable', 'single'>;
	        /**
	     *   description: The unique "ID" of the employee's \"primary\" assigned office.
	     This is some more text.
	     */
	        office: $PropertyDef<'string', 'nullable', 'single'>;
	        /**
	         *   description: The date the employee was hired (most recently, if they were re-hired)
	         */
	        startDate: $PropertyDef<'datetime', 'nullable', 'single'>;
	    };
	    spts: {
	        fooSpt: 'fullName';
	    };
	}
	export const Employee: Employee;
}
/** /@test-app2/osdk/ontology/objects/equipment **/
declare module "@test-app2/osdk/ontology/objects/equipment" {
	import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from 'internal/@osdk/api';
	import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from 'internal/@osdk/client.api';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	export namespace equipment {
	    type PropertyKeys = 'equipmentId' | 'type';
	    type Links = {};
	    interface Props {
	        readonly equipmentId: $PropType['string'] | undefined;
	        readonly type: $PropType['string'] | undefined;
	    }
	    interface StrictProps {
	        readonly equipmentId: $PropType['string'];
	        readonly type: $PropType['string'] | undefined;
	    }
	    interface ObjectSet extends $ObjectSet<equipment, equipment.ObjectSet> {
	    }
	    type OsdkObject<OPTIONS extends never | '$notStrict' | '$rid' = never, K extends keyof equipment.Props = keyof equipment.Props> = $Osdk<equipment, K | OPTIONS>;
	}
	export interface equipment extends $ObjectTypeDefinition<'equipment', equipment> {
	    osdkMetadata: typeof $osdkMetadata;
	    objectSet: equipment.ObjectSet;
	    props: equipment.Props;
	    linksType: equipment.Links;
	    strictProps: equipment.StrictProps;
	    implements: [];
	    interfaceMap: {};
	    inverseInterfaceMap: {};
	    inverseSpts: {};
	    links: {};
	    primaryKeyApiName: 'equipmentId';
	    primaryKeyType: 'string';
	    properties: {
	        /**
	         *   description: The id of an equipment
	         */
	        equipmentId: $PropertyDef<'string', 'non-nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        type: $PropertyDef<'string', 'nullable', 'single'>;
	    };
	    spts: {};
	}
	export const equipment: equipment;
}
/** /@test-app2/osdk/ontology/objects/objectTypeWithAllPropertyTypes **/
declare module "@test-app2/osdk/ontology/objects/objectTypeWithAllPropertyTypes" {
	import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from 'internal/@osdk/api';
	import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from 'internal/@osdk/client.api';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	export namespace objectTypeWithAllPropertyTypes {
	    type PropertyKeys = 'id' | 'string' | 'boolean' | 'date' | 'dateTime' | 'decimal' | 'integer' | 'long' | 'short' | 'float' | 'double' | 'byte' | 'attachment' | 'attachment2' | 'geoPoint' | 'geoShape' | 'stringArray' | 'booleanArray' | 'dateArray' | 'dateTimeArray' | 'decimalArray' | 'integerArray' | 'longArray' | 'shortArray' | 'floatArray' | 'doubleArray' | 'byteArray' | 'attachmentArray' | 'geoPointArray' | 'geoShapeArray';
	    type Links = {};
	    interface Props {
	        readonly attachment: $PropType['attachment'] | undefined;
	        readonly attachment2: $PropType['attachment'] | undefined;
	        readonly attachmentArray: $PropType['attachment'][] | undefined;
	        readonly boolean: $PropType['boolean'] | undefined;
	        readonly booleanArray: $PropType['boolean'][] | undefined;
	        readonly byte: $PropType['byte'] | undefined;
	        readonly byteArray: $PropType['byte'][] | undefined;
	        readonly date: $PropType['datetime'] | undefined;
	        readonly dateArray: $PropType['datetime'][] | undefined;
	        readonly dateTime: $PropType['timestamp'] | undefined;
	        readonly dateTimeArray: $PropType['timestamp'][] | undefined;
	        readonly decimal: $PropType['decimal'] | undefined;
	        readonly decimalArray: $PropType['decimal'][] | undefined;
	        readonly double: $PropType['double'] | undefined;
	        readonly doubleArray: $PropType['double'][] | undefined;
	        readonly float: $PropType['float'] | undefined;
	        readonly floatArray: $PropType['float'][] | undefined;
	        readonly geoPoint: $PropType['geopoint'] | undefined;
	        readonly geoPointArray: $PropType['geopoint'][] | undefined;
	        readonly geoShape: $PropType['geoshape'] | undefined;
	        readonly geoShapeArray: $PropType['geoshape'][] | undefined;
	        readonly id: $PropType['integer'] | undefined;
	        readonly integer: $PropType['integer'] | undefined;
	        readonly integerArray: $PropType['integer'][] | undefined;
	        readonly long: $PropType['long'] | undefined;
	        readonly longArray: $PropType['long'][] | undefined;
	        readonly short: $PropType['short'] | undefined;
	        readonly shortArray: $PropType['short'][] | undefined;
	        readonly string: $PropType['string'] | undefined;
	        readonly stringArray: $PropType['string'][] | undefined;
	    }
	    interface StrictProps {
	        readonly attachment: $PropType['attachment'] | undefined;
	        readonly attachment2: $PropType['attachment'] | undefined;
	        readonly attachmentArray: $PropType['attachment'][] | undefined;
	        readonly boolean: $PropType['boolean'] | undefined;
	        readonly booleanArray: $PropType['boolean'][] | undefined;
	        readonly byte: $PropType['byte'] | undefined;
	        readonly byteArray: $PropType['byte'][] | undefined;
	        readonly date: $PropType['datetime'] | undefined;
	        readonly dateArray: $PropType['datetime'][] | undefined;
	        readonly dateTime: $PropType['timestamp'] | undefined;
	        readonly dateTimeArray: $PropType['timestamp'][] | undefined;
	        readonly decimal: $PropType['decimal'] | undefined;
	        readonly decimalArray: $PropType['decimal'][] | undefined;
	        readonly double: $PropType['double'] | undefined;
	        readonly doubleArray: $PropType['double'][] | undefined;
	        readonly float: $PropType['float'] | undefined;
	        readonly floatArray: $PropType['float'][] | undefined;
	        readonly geoPoint: $PropType['geopoint'] | undefined;
	        readonly geoPointArray: $PropType['geopoint'][] | undefined;
	        readonly geoShape: $PropType['geoshape'] | undefined;
	        readonly geoShapeArray: $PropType['geoshape'][] | undefined;
	        readonly id: $PropType['integer'];
	        readonly integer: $PropType['integer'] | undefined;
	        readonly integerArray: $PropType['integer'][] | undefined;
	        readonly long: $PropType['long'] | undefined;
	        readonly longArray: $PropType['long'][] | undefined;
	        readonly short: $PropType['short'] | undefined;
	        readonly shortArray: $PropType['short'][] | undefined;
	        readonly string: $PropType['string'] | undefined;
	        readonly stringArray: $PropType['string'][] | undefined;
	    }
	    interface ObjectSet extends $ObjectSet<objectTypeWithAllPropertyTypes, objectTypeWithAllPropertyTypes.ObjectSet> {
	    }
	    type OsdkObject<OPTIONS extends never | '$notStrict' | '$rid' = never, K extends keyof objectTypeWithAllPropertyTypes.Props = keyof objectTypeWithAllPropertyTypes.Props> = $Osdk<objectTypeWithAllPropertyTypes, K | OPTIONS>;
	}
	export interface objectTypeWithAllPropertyTypes extends $ObjectTypeDefinition<'objectTypeWithAllPropertyTypes', objectTypeWithAllPropertyTypes> {
	    osdkMetadata: typeof $osdkMetadata;
	    objectSet: objectTypeWithAllPropertyTypes.ObjectSet;
	    props: objectTypeWithAllPropertyTypes.Props;
	    linksType: objectTypeWithAllPropertyTypes.Links;
	    strictProps: objectTypeWithAllPropertyTypes.StrictProps;
	    description: 'An object type with all property types';
	    implements: [];
	    interfaceMap: {};
	    inverseInterfaceMap: {};
	    inverseSpts: {};
	    links: {};
	    primaryKeyApiName: 'id';
	    primaryKeyType: 'integer';
	    properties: {
	        /**
	         * (no ontology metadata)
	         */
	        attachment: $PropertyDef<'attachment', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        attachment2: $PropertyDef<'attachment', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        attachmentArray: $PropertyDef<'attachment', 'nullable', 'array'>;
	        /**
	         * (no ontology metadata)
	         */
	        boolean: $PropertyDef<'boolean', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        booleanArray: $PropertyDef<'boolean', 'nullable', 'array'>;
	        /**
	         * (no ontology metadata)
	         */
	        byte: $PropertyDef<'byte', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        byteArray: $PropertyDef<'byte', 'nullable', 'array'>;
	        /**
	         * (no ontology metadata)
	         */
	        date: $PropertyDef<'datetime', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        dateArray: $PropertyDef<'datetime', 'nullable', 'array'>;
	        /**
	         * (no ontology metadata)
	         */
	        dateTime: $PropertyDef<'timestamp', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        dateTimeArray: $PropertyDef<'timestamp', 'nullable', 'array'>;
	        /**
	         * (no ontology metadata)
	         */
	        decimal: $PropertyDef<'decimal', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        decimalArray: $PropertyDef<'decimal', 'nullable', 'array'>;
	        /**
	         * (no ontology metadata)
	         */
	        double: $PropertyDef<'double', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        doubleArray: $PropertyDef<'double', 'nullable', 'array'>;
	        /**
	         * (no ontology metadata)
	         */
	        float: $PropertyDef<'float', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        floatArray: $PropertyDef<'float', 'nullable', 'array'>;
	        /**
	         * (no ontology metadata)
	         */
	        geoPoint: $PropertyDef<'geopoint', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        geoPointArray: $PropertyDef<'geopoint', 'nullable', 'array'>;
	        /**
	         * (no ontology metadata)
	         */
	        geoShape: $PropertyDef<'geoshape', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        geoShapeArray: $PropertyDef<'geoshape', 'nullable', 'array'>;
	        /**
	         * (no ontology metadata)
	         */
	        id: $PropertyDef<'integer', 'non-nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        integer: $PropertyDef<'integer', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        integerArray: $PropertyDef<'integer', 'nullable', 'array'>;
	        /**
	         * (no ontology metadata)
	         */
	        long: $PropertyDef<'long', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        longArray: $PropertyDef<'long', 'nullable', 'array'>;
	        /**
	         * (no ontology metadata)
	         */
	        short: $PropertyDef<'short', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        shortArray: $PropertyDef<'short', 'nullable', 'array'>;
	        /**
	         * (no ontology metadata)
	         */
	        string: $PropertyDef<'string', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        stringArray: $PropertyDef<'string', 'nullable', 'array'>;
	    };
	    spts: {};
	}
	export const objectTypeWithAllPropertyTypes: objectTypeWithAllPropertyTypes;
}
/** /@test-app2/osdk/ontology/objects/ObjectWithTimestampPrimaryKey **/
declare module "@test-app2/osdk/ontology/objects/ObjectWithTimestampPrimaryKey" {
	import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from 'internal/@osdk/api';
	import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from 'internal/@osdk/client.api';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	export namespace ObjectWithTimestampPrimaryKey {
	    type PropertyKeys = 'timestamp' | 'value';
	    type Links = {};
	    interface Props {
	        readonly timestamp: $PropType['timestamp'] | undefined;
	        readonly value: $PropType['string'] | undefined;
	    }
	    interface StrictProps {
	        readonly timestamp: $PropType['timestamp'];
	        readonly value: $PropType['string'] | undefined;
	    }
	    interface ObjectSet extends $ObjectSet<ObjectWithTimestampPrimaryKey, ObjectWithTimestampPrimaryKey.ObjectSet> {
	    }
	    type OsdkObject<OPTIONS extends never | '$notStrict' | '$rid' = never, K extends keyof ObjectWithTimestampPrimaryKey.Props = keyof ObjectWithTimestampPrimaryKey.Props> = $Osdk<ObjectWithTimestampPrimaryKey, K | OPTIONS>;
	}
	export interface ObjectWithTimestampPrimaryKey extends $ObjectTypeDefinition<'ObjectWithTimestampPrimaryKey', ObjectWithTimestampPrimaryKey> {
	    osdkMetadata: typeof $osdkMetadata;
	    objectSet: ObjectWithTimestampPrimaryKey.ObjectSet;
	    props: ObjectWithTimestampPrimaryKey.Props;
	    linksType: ObjectWithTimestampPrimaryKey.Links;
	    strictProps: ObjectWithTimestampPrimaryKey.StrictProps;
	    description: 'Object Type With Timestamp Primary Key';
	    implements: [];
	    interfaceMap: {};
	    inverseInterfaceMap: {};
	    inverseSpts: {};
	    links: {};
	    primaryKeyApiName: 'timestamp';
	    primaryKeyType: 'timestamp';
	    properties: {
	        /**
	         * (no ontology metadata)
	         */
	        timestamp: $PropertyDef<'timestamp', 'non-nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        value: $PropertyDef<'string', 'nullable', 'single'>;
	    };
	    spts: {};
	}
	export const ObjectWithTimestampPrimaryKey: ObjectWithTimestampPrimaryKey;
}
/** /@test-app2/osdk/ontology/objects/Office **/
declare module "@test-app2/osdk/ontology/objects/Office" {
	import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from 'internal/@osdk/api';
	import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from 'internal/@osdk/client.api';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	export namespace Office {
	    type PropertyKeys = 'officeId' | 'entrance' | 'occupiedArea' | 'name';
	    type Links = {};
	    interface Props {
	        readonly entrance: $PropType['geopoint'] | undefined;
	        readonly name: $PropType['string'] | undefined;
	        readonly occupiedArea: $PropType['geoshape'] | undefined;
	        readonly officeId: $PropType['string'] | undefined;
	    }
	    interface StrictProps {
	        readonly entrance: $PropType['geopoint'] | undefined;
	        readonly name: $PropType['string'] | undefined;
	        readonly occupiedArea: $PropType['geoshape'] | undefined;
	        readonly officeId: $PropType['string'];
	    }
	    interface ObjectSet extends $ObjectSet<Office, Office.ObjectSet> {
	    }
	    type OsdkObject<OPTIONS extends never | '$notStrict' | '$rid' = never, K extends keyof Office.Props = keyof Office.Props> = $Osdk<Office, K | OPTIONS>;
	}
	export interface Office extends $ObjectTypeDefinition<'Office', Office> {
	    osdkMetadata: typeof $osdkMetadata;
	    objectSet: Office.ObjectSet;
	    props: Office.Props;
	    linksType: Office.Links;
	    strictProps: Office.StrictProps;
	    description: 'A office in our Company';
	    implements: [];
	    interfaceMap: {};
	    inverseInterfaceMap: {};
	    inverseSpts: {};
	    links: {};
	    primaryKeyApiName: 'officeId';
	    primaryKeyType: 'string';
	    properties: {
	        /**
	         * (no ontology metadata)
	         */
	        entrance: $PropertyDef<'geopoint', 'nullable', 'single'>;
	        /**
	         *   description: The Name of the Office
	         */
	        name: $PropertyDef<'string', 'nullable', 'single'>;
	        /**
	         *   description: The occupied area of the Office
	         */
	        occupiedArea: $PropertyDef<'geoshape', 'nullable', 'single'>;
	        /**
	         * (no ontology metadata)
	         */
	        officeId: $PropertyDef<'string', 'non-nullable', 'single'>;
	    };
	    spts: {};
	}
	export const Office: Office;
}
/** /@test-app2/osdk/ontology/queries/addOne **/
declare module "@test-app2/osdk/ontology/queries/addOne" {
	import type { QueryDefinition, VersionBound } from 'internal/@osdk/api';
	import type { QueryParam, QueryResult } from 'internal/@osdk/client.api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	export namespace addOne {
	    interface Signature {
	        (query: addOne.Parameters): Promise<QueryResult.PrimitiveType<'integer'>>;
	    }
	    interface Parameters {
	        /**
	         * (no ontology metadata)
	         */
	        readonly n: QueryParam.PrimitiveType<'integer'>;
	    }
	    interface Definition extends QueryDefinition<'addOne', never, addOne.Signature>, VersionBound<$ExpectedClientVersion> {
	        apiName: 'addOne';
	        displayName: 'myFunction';
	        type: 'query';
	        version: '0.0.9';
	        parameters: {
	            /**
	             * (no ontology metadata)
	             */
	            n: {
	                nullable: false;
	                type: 'integer';
	            };
	        };
	        output: {
	            nullable: false;
	            type: 'integer';
	        };
	    }
	}
	/** @deprecated use `addOne.Signature' instead */
	export type addOne = addOne.Signature;
	export const addOne: addOne.Definition;
}
/** /@test-app2/osdk/ontology/queries/incrementPersonAge **/
declare module "@test-app2/osdk/ontology/queries/incrementPersonAge" {
	import type { QueryDefinition, VersionBound } from 'internal/@osdk/api';
	import type { QueryParam, QueryResult } from 'internal/@osdk/client.api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	export namespace incrementPersonAge {
	    interface Signature {
	        (query: incrementPersonAge.Parameters): Promise<QueryResult.PrimitiveType<'struct'>>;
	    }
	    interface Parameters {
	        /**
	         * (no ontology metadata)
	         */
	        readonly person: QueryParam.PrimitiveType<'struct'>;
	    }
	    interface Definition extends QueryDefinition<'incrementPersonAge', never, incrementPersonAge.Signature>, VersionBound<$ExpectedClientVersion> {
	        apiName: 'incrementPersonAge';
	        displayName: 'incrementAge';
	        type: 'query';
	        version: '0.0.9';
	        parameters: {
	            /**
	             * (no ontology metadata)
	             */
	            person: {
	                nullable: false;
	                struct: {
	                    firstName: {
	                        type: 'string';
	                        nullable: false;
	                    };
	                    lastName: {
	                        type: 'string';
	                        nullable: false;
	                    };
	                    age: {
	                        type: 'integer';
	                        nullable: true;
	                    };
	                };
	                type: 'struct';
	            };
	        };
	        output: {
	            nullable: false;
	            struct: {
	                firstName: {
	                    type: 'string';
	                    nullable: false;
	                };
	                lastName: {
	                    type: 'string';
	                    nullable: false;
	                };
	                age: {
	                    type: 'integer';
	                    nullable: true;
	                };
	            };
	            type: 'struct';
	        };
	    }
	}
	/** @deprecated use `incrementPersonAge.Signature' instead */
	export type incrementPersonAge = incrementPersonAge.Signature;
	export const incrementPersonAge: incrementPersonAge.Definition;
}
/** /@test-app2/osdk/ontology/queries/returnsDate **/
declare module "@test-app2/osdk/ontology/queries/returnsDate" {
	import type { QueryDefinition, VersionBound } from 'internal/@osdk/api';
	import type { QueryResult } from 'internal/@osdk/client.api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	export namespace returnsDate {
	    interface Signature {
	        (): Promise<QueryResult.PrimitiveType<'datetime'>>;
	    }
	    interface Definition extends QueryDefinition<'returnsDate', never, returnsDate.Signature>, VersionBound<$ExpectedClientVersion> {
	        apiName: 'returnsDate';
	        displayName: 'returnsDate';
	        type: 'query';
	        version: '0.0.9';
	        parameters: {};
	        output: {
	            nullable: false;
	            type: 'date';
	        };
	    }
	}
	/** @deprecated use `returnsDate.Signature' instead */
	export type returnsDate = returnsDate.Signature;
	export const returnsDate: returnsDate.Definition;
}
/** /@test-app2/osdk/ontology/queries/returnsObject **/
declare module "@test-app2/osdk/ontology/queries/returnsObject" {
	import type { QueryDefinition, VersionBound } from 'internal/@osdk/api';
	import type { QueryResult } from 'internal/@osdk/client.api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	import type { Employee } from '@test-app2/osdk/ontology/objects/Employee';
	export namespace returnsObject {
	    interface Signature {
	        (): Promise<QueryResult.ObjectType<Employee>>;
	    }
	    interface Definition extends QueryDefinition<'returnsObject', 'Employee', returnsObject.Signature>, VersionBound<$ExpectedClientVersion> {
	        apiName: 'returnsObject';
	        displayName: 'returnsObject';
	        type: 'query';
	        version: '0.0.9';
	        parameters: {};
	        output: {
	            nullable: false;
	            object: 'Employee';
	            type: 'object';
	            __OsdkTargetType?: Employee;
	        };
	    }
	}
	/** @deprecated use `returnsObject.Signature' instead */
	export type returnsObject = returnsObject.Signature;
	export const returnsObject: returnsObject.Definition;
}
/** /@test-app2/osdk/ontology/queries/returnsTimestamp **/
declare module "@test-app2/osdk/ontology/queries/returnsTimestamp" {
	import type { QueryDefinition, VersionBound } from 'internal/@osdk/api';
	import type { QueryResult } from 'internal/@osdk/client.api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	export namespace returnsTimestamp {
	    interface Signature {
	        (): Promise<QueryResult.PrimitiveType<'timestamp'>>;
	    }
	    interface Definition extends QueryDefinition<'returnsTimestamp', never, returnsTimestamp.Signature>, VersionBound<$ExpectedClientVersion> {
	        apiName: 'returnsTimestamp';
	        displayName: 'returnsTimestamp';
	        type: 'query';
	        version: '0.0.9';
	        parameters: {};
	        output: {
	            nullable: false;
	            type: 'timestamp';
	        };
	    }
	}
	/** @deprecated use `returnsTimestamp.Signature' instead */
	export type returnsTimestamp = returnsTimestamp.Signature;
	export const returnsTimestamp: returnsTimestamp.Definition;
}
/** /@test-app2/osdk/ontology/queries/threeDimensionalAggregationFunction **/
declare module "@test-app2/osdk/ontology/queries/threeDimensionalAggregationFunction" {
	import type { QueryDefinition, VersionBound } from 'internal/@osdk/api';
	import type { QueryResult } from 'internal/@osdk/client.api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	export namespace threeDimensionalAggregationFunction {
	    interface Signature {
	        (): Promise<QueryResult.PrimitiveType<'threeDimensionalAggregation'>>;
	    }
	    interface Definition extends QueryDefinition<'threeDimensionalAggregationFunction', never, threeDimensionalAggregationFunction.Signature>, VersionBound<$ExpectedClientVersion> {
	        apiName: 'threeDimensionalAggregationFunction';
	        displayName: 'threeDimensionalAggregation';
	        type: 'query';
	        version: '0.11.0';
	        parameters: {};
	        output: {
	            nullable: false;
	            threeDimensionalAggregation: {
	                keyType: 'string';
	                valueType: {
	                    keyType: 'range';
	                    keySubtype: 'timestamp';
	                    valueType: 'double';
	                };
	            };
	            type: 'threeDimensionalAggregation';
	        };
	    }
	}
	/** @deprecated use `threeDimensionalAggregationFunction.Signature' instead */
	export type threeDimensionalAggregationFunction = threeDimensionalAggregationFunction.Signature;
	export const threeDimensionalAggregationFunction: threeDimensionalAggregationFunction.Definition;
}
/** /@test-app2/osdk/ontology/queries/twoDimensionalAggregationFunction **/
declare module "@test-app2/osdk/ontology/queries/twoDimensionalAggregationFunction" {
	import type { QueryDefinition, VersionBound } from 'internal/@osdk/api';
	import type { QueryResult } from 'internal/@osdk/client.api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	export namespace twoDimensionalAggregationFunction {
	    interface Signature {
	        (): Promise<QueryResult.PrimitiveType<'twoDimensionalAggregation'>>;
	    }
	    interface Definition extends QueryDefinition<'twoDimensionalAggregationFunction', never, twoDimensionalAggregationFunction.Signature>, VersionBound<$ExpectedClientVersion> {
	        apiName: 'twoDimensionalAggregationFunction';
	        displayName: 'twoDimensionalAggregation';
	        type: 'query';
	        version: '0.11.0';
	        parameters: {};
	        output: {
	            nullable: false;
	            twoDimensionalAggregation: {
	                keyType: 'string';
	                valueType: 'double';
	            };
	            type: 'twoDimensionalAggregation';
	        };
	    }
	}
	/** @deprecated use `twoDimensionalAggregationFunction.Signature' instead */
	export type twoDimensionalAggregationFunction = twoDimensionalAggregationFunction.Signature;
	export const twoDimensionalAggregationFunction: twoDimensionalAggregationFunction.Definition;
}