/** /@test-app2/osdk/index **/
declare module "@test-app2/osdk" {
	export { actionTakesObjectSet, createOffice, createOfficeAndEmployee, moveOffice } from '@test-app2/osdk/ontology/actions';
	export * as $Actions from '@test-app2/osdk/ontology/actions';
	export { FooInterface } from '@test-app2/osdk/ontology/interfaces';
	export * as $Interfaces from '@test-app2/osdk/ontology/interfaces';
	export { Employee, equipment, objectTypeWithAllPropertyTypes, ObjectWithTimestampPrimaryKey, Office, } from '@test-app2/osdk/ontology/objects';
	export * as $Objects from '@test-app2/osdk/ontology/objects';
	export { addOne, incrementPersonAge, returnsDate, returnsObject, returnsTimestamp, threeDimensionalAggregationFunction, twoDimensionalAggregationFunction, } from '@test-app2/osdk/ontology/queries';
	export * as $Queries from '@test-app2/osdk/ontology/queries';
	export { $ontologyRid } from '@test-app2/osdk/OntologyMetadata';
}
/** /@test-app2/osdk/OntologyMetadata **/
declare module "@test-app2/osdk/OntologyMetadata" {
	export type $ExpectedClientVersion = '2.0.12';
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
	export { FooInterface } from '@test-app2/osdk/ontology/interfaces/FooInterface';
}
/** /@test-app2/osdk/ontology/objects **/
declare module "@test-app2/osdk/ontology/objects" {
	export { Employee } from '@test-app2/osdk/ontology/objects/Employee';
	export { equipment } from '@test-app2/osdk/ontology/objects/equipment';
	export { objectTypeWithAllPropertyTypes } from '@test-app2/osdk/ontology/objects/objectTypeWithAllPropertyTypes';
	export { ObjectWithTimestampPrimaryKey } from '@test-app2/osdk/ontology/objects/ObjectWithTimestampPrimaryKey';
	export { Office } from '@test-app2/osdk/ontology/objects/Office';
}
/** /@test-app2/osdk/ontology/queries **/
declare module "@test-app2/osdk/ontology/queries" {
	export { addOne } from '@test-app2/osdk/ontology/queries/addOne';
	export { incrementPersonAge } from '@test-app2/osdk/ontology/queries/incrementPersonAge';
	export { returnsDate } from '@test-app2/osdk/ontology/queries/returnsDate';
	export { returnsObject } from '@test-app2/osdk/ontology/queries/returnsObject';
	export { returnsTimestamp } from '@test-app2/osdk/ontology/queries/returnsTimestamp';
	export { threeDimensionalAggregationFunction } from '@test-app2/osdk/ontology/queries/threeDimensionalAggregationFunction';
	export { twoDimensionalAggregationFunction } from '@test-app2/osdk/ontology/queries/twoDimensionalAggregationFunction';
}
/** /@test-app2/osdk/ontology/actions/actionTakesObjectSet **/
declare module "@test-app2/osdk/ontology/actions/actionTakesObjectSet" {
	import type { ActionDefinition, ActionMetadata, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from 'internal/@osdk/api';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	import type { Employee } from '@test-app2/osdk/ontology/objects/Employee';
	export namespace actionTakesObjectSet {
	    type ParamsDefinition = {
	        employees: {
	            multiplicity: false;
	            nullable: false;
	            type: ActionMetadata.DataType.ObjectSet<Employee>;
	        };
	    };
	    /**
	     * An action which takes an Object Set
	     */
	    interface Params {
	        readonly employees: ActionParam.ObjectSetType<Employee>;
	    }
	    interface Signatures {
	        /**
	         * An action which takes an Object Set
	         */
	        applyAction<P extends actionTakesObjectSet.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	        batchApplyAction<P extends ReadonlyArray<actionTakesObjectSet.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	    }
	}
	/**
	 * An action which takes an Object Set
	 * @param {ActionParam.ObjectSetType<Employee>} employees
	 */
	export interface actionTakesObjectSet extends ActionDefinition<actionTakesObjectSet.Signatures> {
	    __DefinitionMetadata?: {
	        apiName: 'actionTakesObjectSet';
	        description: 'An action which takes an Object Set';
	        modifiedEntities: {};
	        parameters: actionTakesObjectSet.ParamsDefinition;
	        rid: 'ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2';
	        status: 'ACTIVE';
	        type: 'action';
	        signatures: actionTakesObjectSet.Signatures;
	    };
	    apiName: 'actionTakesObjectSet';
	    type: 'action';
	    osdkMetadata: typeof $osdkMetadata;
	}
	export const actionTakesObjectSet: actionTakesObjectSet;
}
/** /@test-app2/osdk/ontology/actions/createOffice **/
declare module "@test-app2/osdk/ontology/actions/createOffice" {
	import type { ActionDefinition, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from 'internal/@osdk/api';
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
	    interface Signatures {
	        /**
	         * Create an office's
	         */
	        applyAction<P extends createOffice.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	        batchApplyAction<P extends ReadonlyArray<createOffice.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	    }
	}
	/**
	 * Create an office's
	 * @param {ActionParam.PrimitiveType<"string">} [address] The office's physical address (not necessarily shipping address)
	 * @param {ActionParam.PrimitiveType<"integer">} [capacity] The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)
	 * @param {ActionParam.PrimitiveType<"string">} officeId
	 * @param {ActionParam.PrimitiveType<"string">} [officeNames] A list of all office names
	 */
	export interface createOffice extends ActionDefinition<createOffice.Signatures> {
	    __DefinitionMetadata?: {
	        apiName: 'createOffice';
	        description: "Create an office's";
	        modifiedEntities: {
	            Office: {
	                created: true;
	                modified: false;
	            };
	        };
	        parameters: createOffice.ParamsDefinition;
	        rid: 'ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f1';
	        status: 'ACTIVE';
	        type: 'action';
	        signatures: createOffice.Signatures;
	    };
	    apiName: 'createOffice';
	    type: 'action';
	    osdkMetadata: typeof $osdkMetadata;
	}
	export const createOffice: createOffice;
}
/** /@test-app2/osdk/ontology/actions/createOfficeAndEmployee **/
declare module "@test-app2/osdk/ontology/actions/createOfficeAndEmployee" {
	import type { ActionDefinition, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from 'internal/@osdk/api';
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
	    interface Signatures {
	        /**
	         * Create an office and employee
	         */
	        applyAction<P extends createOfficeAndEmployee.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	        batchApplyAction<P extends ReadonlyArray<createOfficeAndEmployee.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	    }
	}
	/**
	 * Create an office and employee
	 * @param {ActionParam.PrimitiveType<"string">} [address] The office's physical address (not necessarily shipping address)
	 * @param {ActionParam.PrimitiveType<"integer">} [capacity] The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)
	 * @param {ActionParam.PrimitiveType<"integer">} employeeId New employee Id
	 * @param {ActionParam.PrimitiveType<"string">} officeId
	 * @param {ActionParam.PrimitiveType<"string">} [officeNames] A list of all office names
	 */
	export interface createOfficeAndEmployee extends ActionDefinition<createOfficeAndEmployee.Signatures> {
	    __DefinitionMetadata?: {
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
	        parameters: createOfficeAndEmployee.ParamsDefinition;
	        rid: 'ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2';
	        status: 'ACTIVE';
	        type: 'action';
	        signatures: createOfficeAndEmployee.Signatures;
	    };
	    apiName: 'createOfficeAndEmployee';
	    type: 'action';
	    osdkMetadata: typeof $osdkMetadata;
	}
	export const createOfficeAndEmployee: createOfficeAndEmployee;
}
/** /@test-app2/osdk/ontology/actions/moveOffice **/
declare module "@test-app2/osdk/ontology/actions/moveOffice" {
	import type { ActionDefinition, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from 'internal/@osdk/api';
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
	    interface Signatures {
	        /**
	         * Update an office's physical location
	         */
	        applyAction<P extends moveOffice.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	        batchApplyAction<P extends ReadonlyArray<moveOffice.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
	    }
	}
	/**
	 * Update an office's physical location
	 * @param {ActionParam.PrimitiveType<"string">} [newAddress] The office's new physical address (not necessarily shipping address)
	 * @param {ActionParam.PrimitiveType<"integer">} [newCapacity] The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)
	 * @param {ActionParam.PrimitiveType<"string">} officeId
	 * @param {ActionParam.PrimitiveType<"integer">} [officeNames] A list of all office names
	 */
	export interface moveOffice extends ActionDefinition<moveOffice.Signatures> {
	    __DefinitionMetadata?: {
	        apiName: 'moveOffice';
	        description: "Update an office's physical location";
	        displayName: 'move-office';
	        modifiedEntities: {
	            Office: {
	                created: false;
	                modified: true;
	            };
	        };
	        parameters: moveOffice.ParamsDefinition;
	        rid: 'ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2';
	        status: 'ACTIVE';
	        type: 'action';
	        signatures: moveOffice.Signatures;
	    };
	    apiName: 'moveOffice';
	    type: 'action';
	    osdkMetadata: typeof $osdkMetadata;
	}
	export const moveOffice: moveOffice;
}
/** /@test-app2/osdk/ontology/interfaces/FooInterface **/
declare module "@test-app2/osdk/ontology/interfaces/FooInterface" {
	import type { PropertyDef as $PropertyDef } from 'internal/@osdk/api';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	import type { InterfaceDefinition as $InterfaceDefinition, ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from 'internal/@osdk/api';
	export type OsdkObjectLinks$FooInterface = {};
	export namespace FooInterface {
	    type PropertyKeys = 'fooSpt';
	    interface Props {
	        readonly fooSpt: $PropType['string'] | undefined;
	    }
	    type StrictProps = Props;
	    interface ObjectSet extends $ObjectSet<FooInterface, FooInterface.ObjectSet> {
	    }
	    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof FooInterface.Props = keyof FooInterface.Props> = $Osdk.Instance<FooInterface, OPTIONS, K>;
	    /** @deprecated use OsdkInstance */
	    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof FooInterface.Props = keyof FooInterface.Props> = OsdkInstance<OPTIONS, K>;
	}
	export interface FooInterface extends $InterfaceDefinition {
	    osdkMetadata: typeof $osdkMetadata;
	    type: 'interface';
	    apiName: 'FooInterface';
	    __DefinitionMetadata?: {
	        objectSet: FooInterface.ObjectSet;
	        props: FooInterface.Props;
	        linksType: OsdkObjectLinks$FooInterface;
	        strictProps: FooInterface.StrictProps;
	        apiName: 'FooInterface';
	        description: 'Interface for Foo';
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
	        rid: 'ri.interface.main.interface.1';
	        type: 'interface';
	    };
	}
	export const FooInterface: FooInterface;
}
/** /@test-app2/osdk/ontology/objects/Employee **/
declare module "@test-app2/osdk/ontology/objects/Employee" {
	import type { PropertyDef as $PropertyDef } from 'internal/@osdk/api';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	import type { ObjectTypeDefinition as $ObjectTypeDefinition } from 'internal/@osdk/api';
	import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from 'internal/@osdk/api';
	export namespace Employee {
	    type PropertyKeys = 'employeeId' | 'fullName' | 'office' | 'startDate' | 'employeeStatus';
	    type Links = {};
	    interface Props {
	        readonly employeeId: $PropType['integer'];
	        readonly employeeStatus: $PropType['stringTimeseries'] | undefined;
	        readonly fullName: $PropType['string'] | undefined;
	        readonly office: $PropType['string'] | undefined;
	        readonly startDate: $PropType['datetime'] | undefined;
	    }
	    type StrictProps = Props;
	    interface ObjectSet extends $ObjectSet<Employee, Employee.ObjectSet> {
	    }
	    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof Employee.Props = keyof Employee.Props> = $Osdk.Instance<Employee, OPTIONS, K>;
	    /** @deprecated use OsdkInstance */
	    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof Employee.Props = keyof Employee.Props> = OsdkInstance<OPTIONS, K>;
	}
	export interface Employee extends $ObjectTypeDefinition {
	    osdkMetadata: typeof $osdkMetadata;
	    type: 'object';
	    apiName: 'Employee';
	    __DefinitionMetadata?: {
	        objectSet: Employee.ObjectSet;
	        props: Employee.Props;
	        linksType: Employee.Links;
	        strictProps: Employee.StrictProps;
	        apiName: 'Employee';
	        description: 'A full-time or part-time \n\n employee of our firm';
	        displayName: 'Employee';
	        icon: {
	            type: 'blueprint';
	            color: 'blue';
	            name: 'person';
	        };
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
	        links: {};
	        pluralDisplayName: 'Employees';
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
	        rid: 'ri.ontology.main.object-type.401ac022-89eb-4591-8b7e-0a912b9efb44';
	        status: 'ACTIVE';
	        titleProperty: 'fullName';
	        type: 'object';
	        visibility: 'NORMAL';
	    };
	}
	export const Employee: Employee;
}
/** /@test-app2/osdk/ontology/objects/equipment **/
declare module "@test-app2/osdk/ontology/objects/equipment" {
	import type { PropertyDef as $PropertyDef } from 'internal/@osdk/api';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	import type { ObjectTypeDefinition as $ObjectTypeDefinition } from 'internal/@osdk/api';
	import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from 'internal/@osdk/api';
	export namespace equipment {
	    type PropertyKeys = 'equipmentId' | 'type';
	    type Links = {};
	    interface Props {
	        readonly equipmentId: $PropType['string'];
	        readonly type: $PropType['string'] | undefined;
	    }
	    type StrictProps = Props;
	    interface ObjectSet extends $ObjectSet<equipment, equipment.ObjectSet> {
	    }
	    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof equipment.Props = keyof equipment.Props> = $Osdk.Instance<equipment, OPTIONS, K>;
	    /** @deprecated use OsdkInstance */
	    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof equipment.Props = keyof equipment.Props> = OsdkInstance<OPTIONS, K>;
	}
	export interface equipment extends $ObjectTypeDefinition {
	    osdkMetadata: typeof $osdkMetadata;
	    type: 'object';
	    apiName: 'equipment';
	    __DefinitionMetadata?: {
	        objectSet: equipment.ObjectSet;
	        props: equipment.Props;
	        linksType: equipment.Links;
	        strictProps: equipment.StrictProps;
	        apiName: 'equipment';
	        displayName: 'Equipment';
	        icon: {
	            type: 'blueprint';
	            color: 'blue';
	            name: 'gear';
	        };
	        implements: [];
	        interfaceMap: {};
	        inverseInterfaceMap: {};
	        links: {};
	        pluralDisplayName: 'Equipment';
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
	        rid: 'ri.ontology.main.object-type.808ac022-89eb-4591-8b7e-1a912b9efb45';
	        status: 'ACTIVE';
	        titleProperty: 'type';
	        type: 'object';
	    };
	}
	export const equipment: equipment;
}
/** /@test-app2/osdk/ontology/objects/objectTypeWithAllPropertyTypes **/
declare module "@test-app2/osdk/ontology/objects/objectTypeWithAllPropertyTypes" {
	import type { PropertyDef as $PropertyDef } from 'internal/@osdk/api';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	import type { ObjectTypeDefinition as $ObjectTypeDefinition } from 'internal/@osdk/api';
	import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from 'internal/@osdk/api';
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
	    type StrictProps = Props;
	    interface ObjectSet extends $ObjectSet<objectTypeWithAllPropertyTypes, objectTypeWithAllPropertyTypes.ObjectSet> {
	    }
	    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof objectTypeWithAllPropertyTypes.Props = keyof objectTypeWithAllPropertyTypes.Props> = $Osdk.Instance<objectTypeWithAllPropertyTypes, OPTIONS, K>;
	    /** @deprecated use OsdkInstance */
	    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof objectTypeWithAllPropertyTypes.Props = keyof objectTypeWithAllPropertyTypes.Props> = OsdkInstance<OPTIONS, K>;
	}
	export interface objectTypeWithAllPropertyTypes extends $ObjectTypeDefinition {
	    osdkMetadata: typeof $osdkMetadata;
	    type: 'object';
	    apiName: 'objectTypeWithAllPropertyTypes';
	    __DefinitionMetadata?: {
	        objectSet: objectTypeWithAllPropertyTypes.ObjectSet;
	        props: objectTypeWithAllPropertyTypes.Props;
	        linksType: objectTypeWithAllPropertyTypes.Links;
	        strictProps: objectTypeWithAllPropertyTypes.StrictProps;
	        apiName: 'objectTypeWithAllPropertyTypes';
	        description: 'An object type with all property types';
	        displayName: 'objectTypeWithAllPropertyType';
	        icon: {
	            type: 'blueprint';
	            color: 'blue';
	            name: 'person';
	        };
	        implements: [];
	        interfaceMap: {};
	        inverseInterfaceMap: {};
	        links: {};
	        pluralDisplayName: 'objectTypeWithAllPropertyTypes';
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
	        rid: 'ri.ontology.main.object-type.401ac022-89eb-4591-8b7e-0a912b9efb44';
	        status: 'ACTIVE';
	        titleProperty: 'string';
	        type: 'object';
	    };
	}
	export const objectTypeWithAllPropertyTypes: objectTypeWithAllPropertyTypes;
}
/** /@test-app2/osdk/ontology/objects/ObjectWithTimestampPrimaryKey **/
declare module "@test-app2/osdk/ontology/objects/ObjectWithTimestampPrimaryKey" {
	import type { PropertyDef as $PropertyDef } from 'internal/@osdk/api';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	import type { ObjectTypeDefinition as $ObjectTypeDefinition } from 'internal/@osdk/api';
	import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from 'internal/@osdk/api';
	export namespace ObjectWithTimestampPrimaryKey {
	    type PropertyKeys = 'timestamp' | 'value';
	    type Links = {};
	    interface Props {
	        readonly timestamp: $PropType['timestamp'];
	        readonly value: $PropType['string'] | undefined;
	    }
	    type StrictProps = Props;
	    interface ObjectSet extends $ObjectSet<ObjectWithTimestampPrimaryKey, ObjectWithTimestampPrimaryKey.ObjectSet> {
	    }
	    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof ObjectWithTimestampPrimaryKey.Props = keyof ObjectWithTimestampPrimaryKey.Props> = $Osdk.Instance<ObjectWithTimestampPrimaryKey, OPTIONS, K>;
	    /** @deprecated use OsdkInstance */
	    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof ObjectWithTimestampPrimaryKey.Props = keyof ObjectWithTimestampPrimaryKey.Props> = OsdkInstance<OPTIONS, K>;
	}
	export interface ObjectWithTimestampPrimaryKey extends $ObjectTypeDefinition {
	    osdkMetadata: typeof $osdkMetadata;
	    type: 'object';
	    apiName: 'ObjectWithTimestampPrimaryKey';
	    __DefinitionMetadata?: {
	        objectSet: ObjectWithTimestampPrimaryKey.ObjectSet;
	        props: ObjectWithTimestampPrimaryKey.Props;
	        linksType: ObjectWithTimestampPrimaryKey.Links;
	        strictProps: ObjectWithTimestampPrimaryKey.StrictProps;
	        apiName: 'ObjectWithTimestampPrimaryKey';
	        description: 'Object Type With Timestamp Primary Key';
	        displayName: 'ObjectWithTimestampPrimaryKey';
	        icon: {
	            type: 'blueprint';
	            color: 'blue';
	            name: 'person';
	        };
	        implements: [];
	        interfaceMap: {};
	        inverseInterfaceMap: {};
	        links: {};
	        pluralDisplayName: 'ObjectWithTimestampPrimaryKeys';
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
	        rid: 'ri.ontology.main.object-type.32bb9402-9cab-4705-81bb-edb65a4a6806';
	        status: 'ACTIVE';
	        titleProperty: 'value';
	        type: 'object';
	    };
	}
	export const ObjectWithTimestampPrimaryKey: ObjectWithTimestampPrimaryKey;
}
/** /@test-app2/osdk/ontology/objects/Office **/
declare module "@test-app2/osdk/ontology/objects/Office" {
	import type { PropertyDef as $PropertyDef } from 'internal/@osdk/api';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	import type { ObjectTypeDefinition as $ObjectTypeDefinition } from 'internal/@osdk/api';
	import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from 'internal/@osdk/api';
	export namespace Office {
	    type PropertyKeys = 'officeId' | 'entrance' | 'occupiedArea' | 'name';
	    type Links = {};
	    interface Props {
	        readonly entrance: $PropType['geopoint'] | undefined;
	        readonly name: $PropType['string'] | undefined;
	        readonly occupiedArea: $PropType['geoshape'] | undefined;
	        readonly officeId: $PropType['string'];
	    }
	    type StrictProps = Props;
	    interface ObjectSet extends $ObjectSet<Office, Office.ObjectSet> {
	    }
	    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof Office.Props = keyof Office.Props> = $Osdk.Instance<Office, OPTIONS, K>;
	    /** @deprecated use OsdkInstance */
	    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof Office.Props = keyof Office.Props> = OsdkInstance<OPTIONS, K>;
	}
	export interface Office extends $ObjectTypeDefinition {
	    osdkMetadata: typeof $osdkMetadata;
	    type: 'object';
	    apiName: 'Office';
	    __DefinitionMetadata?: {
	        objectSet: Office.ObjectSet;
	        props: Office.Props;
	        linksType: Office.Links;
	        strictProps: Office.StrictProps;
	        apiName: 'Office';
	        description: 'A office in our Company';
	        displayName: 'Office';
	        icon: {
	            type: 'blueprint';
	            color: 'blue';
	            name: 'office';
	        };
	        implements: [];
	        interfaceMap: {};
	        inverseInterfaceMap: {};
	        links: {};
	        pluralDisplayName: 'Office';
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
	        rid: 'ri.ontology.main.object-type.404ac022-89eb-4591-8b7e-1a912b9efb45';
	        status: 'ACTIVE';
	        titleProperty: 'officeId';
	        type: 'object';
	    };
	}
	export const Office: Office;
}
/** /@test-app2/osdk/ontology/queries/addOne **/
declare module "@test-app2/osdk/ontology/queries/addOne" {
	import type { QueryDefinition, VersionBound } from 'internal/@osdk/api';
	import type { QueryParam, QueryResult } from 'internal/@osdk/api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	export namespace addOne {
	    interface Signature {
	        (query: addOne.Parameters): Promise<addOne.ReturnType>;
	    }
	    interface Parameters {
	        /**
	         * (no ontology metadata)
	         */
	        readonly n: QueryParam.PrimitiveType<'integer'>;
	    }
	    type ReturnType = QueryResult.PrimitiveType<'integer'>;
	}
	export interface addOne extends QueryDefinition<addOne.Signature>, VersionBound<$ExpectedClientVersion> {
	    __DefinitionMetadata?: {
	        apiName: 'addOne';
	        displayName: 'myFunction';
	        rid: 'ri.function-registry.main.function.abd64ff3-276e-48c5-afee-5a6ef0b2ea47';
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
	        signature: addOne.Signature;
	    };
	    apiName: 'addOne';
	    type: 'query';
	    version: '0.0.9';
	    osdkMetadata: typeof $osdkMetadata;
	}
	export const addOne: addOne;
}
/** /@test-app2/osdk/ontology/queries/incrementPersonAge **/
declare module "@test-app2/osdk/ontology/queries/incrementPersonAge" {
	import type { QueryDefinition, VersionBound } from 'internal/@osdk/api';
	import type { QueryParam, QueryResult } from 'internal/@osdk/api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	export namespace incrementPersonAge {
	    interface Signature {
	        (query: incrementPersonAge.Parameters): Promise<incrementPersonAge.ReturnType>;
	    }
	    interface Parameters {
	        /**
	         * (no ontology metadata)
	         */
	        readonly person: {
	            readonly age?: QueryParam.PrimitiveType<'integer'>;
	            readonly firstName: QueryParam.PrimitiveType<'string'>;
	            readonly lastName: QueryParam.PrimitiveType<'string'>;
	        };
	    }
	    interface ReturnType {
	        age?: QueryResult.PrimitiveType<'integer'>;
	        firstName: QueryResult.PrimitiveType<'string'>;
	        lastName: QueryResult.PrimitiveType<'string'>;
	    }
	}
	export interface incrementPersonAge extends QueryDefinition<incrementPersonAge.Signature>, VersionBound<$ExpectedClientVersion> {
	    __DefinitionMetadata?: {
	        apiName: 'incrementPersonAge';
	        displayName: 'incrementAge';
	        rid: 'ri.function-registry.main.function.b2ae7b3e-2c89-42f5-a762-68957a9c039d';
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
	        signature: incrementPersonAge.Signature;
	    };
	    apiName: 'incrementPersonAge';
	    type: 'query';
	    version: '0.0.9';
	    osdkMetadata: typeof $osdkMetadata;
	}
	export const incrementPersonAge: incrementPersonAge;
}
/** /@test-app2/osdk/ontology/queries/returnsDate **/
declare module "@test-app2/osdk/ontology/queries/returnsDate" {
	import type { QueryDefinition, VersionBound } from 'internal/@osdk/api';
	import type { QueryResult } from 'internal/@osdk/api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	export namespace returnsDate {
	    interface Signature {
	        (): Promise<returnsDate.ReturnType>;
	    }
	    type ReturnType = QueryResult.PrimitiveType<'datetime'>;
	}
	export interface returnsDate extends QueryDefinition<returnsDate.Signature>, VersionBound<$ExpectedClientVersion> {
	    __DefinitionMetadata?: {
	        apiName: 'returnsDate';
	        displayName: 'returnsDate';
	        rid: 'ri.function-registry.main.function.b2ae7b3e-2c89-42f5-a762-68957a9c039d';
	        type: 'query';
	        version: '0.0.9';
	        parameters: {};
	        output: {
	            nullable: false;
	            type: 'date';
	        };
	        signature: returnsDate.Signature;
	    };
	    apiName: 'returnsDate';
	    type: 'query';
	    version: '0.0.9';
	    osdkMetadata: typeof $osdkMetadata;
	}
	export const returnsDate: returnsDate;
}
/** /@test-app2/osdk/ontology/queries/returnsObject **/
declare module "@test-app2/osdk/ontology/queries/returnsObject" {
	import type { QueryDefinition, VersionBound } from 'internal/@osdk/api';
	import type { QueryResult } from 'internal/@osdk/api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	import type { Employee } from '@test-app2/osdk/ontology/objects/Employee';
	export namespace returnsObject {
	    interface Signature {
	        (): Promise<returnsObject.ReturnType>;
	    }
	    type ReturnType = QueryResult.ObjectType<Employee>;
	}
	export interface returnsObject extends QueryDefinition<returnsObject.Signature>, VersionBound<$ExpectedClientVersion> {
	    __DefinitionMetadata?: {
	        apiName: 'returnsObject';
	        displayName: 'returnsObject';
	        rid: 'ri.function-registry.main.function.b2ae7b3e-2c89-42f5-a762-68957a9c039d';
	        type: 'query';
	        version: '0.0.9';
	        parameters: {};
	        output: {
	            nullable: false;
	            object: 'Employee';
	            type: 'object';
	            __OsdkTargetType?: Employee;
	        };
	        signature: returnsObject.Signature;
	    };
	    apiName: 'returnsObject';
	    type: 'query';
	    version: '0.0.9';
	    osdkMetadata: typeof $osdkMetadata;
	}
	export const returnsObject: returnsObject;
}
/** /@test-app2/osdk/ontology/queries/returnsTimestamp **/
declare module "@test-app2/osdk/ontology/queries/returnsTimestamp" {
	import type { QueryDefinition, VersionBound } from 'internal/@osdk/api';
	import type { QueryResult } from 'internal/@osdk/api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	export namespace returnsTimestamp {
	    interface Signature {
	        (): Promise<returnsTimestamp.ReturnType>;
	    }
	    type ReturnType = QueryResult.PrimitiveType<'timestamp'>;
	}
	export interface returnsTimestamp extends QueryDefinition<returnsTimestamp.Signature>, VersionBound<$ExpectedClientVersion> {
	    __DefinitionMetadata?: {
	        apiName: 'returnsTimestamp';
	        displayName: 'returnsTimestamp';
	        rid: 'ri.function-registry.main.function.b2ae7b3e-2c89-42f5-a762-68957a9c039d';
	        type: 'query';
	        version: '0.0.9';
	        parameters: {};
	        output: {
	            nullable: false;
	            type: 'timestamp';
	        };
	        signature: returnsTimestamp.Signature;
	    };
	    apiName: 'returnsTimestamp';
	    type: 'query';
	    version: '0.0.9';
	    osdkMetadata: typeof $osdkMetadata;
	}
	export const returnsTimestamp: returnsTimestamp;
}
/** /@test-app2/osdk/ontology/queries/threeDimensionalAggregationFunction **/
declare module "@test-app2/osdk/ontology/queries/threeDimensionalAggregationFunction" {
	import type { QueryDefinition, VersionBound } from 'internal/@osdk/api';
	import type { QueryResult } from 'internal/@osdk/api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	export namespace threeDimensionalAggregationFunction {
	    interface Signature {
	        (): Promise<threeDimensionalAggregationFunction.ReturnType>;
	    }
	    type ReturnType = QueryResult.PrimitiveType<'threeDimensionalAggregation'>;
	}
	export interface threeDimensionalAggregationFunction extends QueryDefinition<threeDimensionalAggregationFunction.Signature>, VersionBound<$ExpectedClientVersion> {
	    __DefinitionMetadata?: {
	        apiName: 'threeDimensionalAggregationFunction';
	        displayName: 'threeDimensionalAggregation';
	        rid: 'ri.function-registry.main.function.9b55870a-63c7-4d48-8f06-9627c0805968';
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
	        signature: threeDimensionalAggregationFunction.Signature;
	    };
	    apiName: 'threeDimensionalAggregationFunction';
	    type: 'query';
	    version: '0.11.0';
	    osdkMetadata: typeof $osdkMetadata;
	}
	export const threeDimensionalAggregationFunction: threeDimensionalAggregationFunction;
}
/** /@test-app2/osdk/ontology/queries/twoDimensionalAggregationFunction **/
declare module "@test-app2/osdk/ontology/queries/twoDimensionalAggregationFunction" {
	import type { QueryDefinition, VersionBound } from 'internal/@osdk/api';
	import type { QueryResult } from 'internal/@osdk/api';
	import type { $ExpectedClientVersion } from '@test-app2/osdk/OntologyMetadata';
	import { $osdkMetadata } from '@test-app2/osdk/OntologyMetadata';
	export namespace twoDimensionalAggregationFunction {
	    interface Signature {
	        (): Promise<twoDimensionalAggregationFunction.ReturnType>;
	    }
	    type ReturnType = QueryResult.PrimitiveType<'twoDimensionalAggregation'>;
	}
	export interface twoDimensionalAggregationFunction extends QueryDefinition<twoDimensionalAggregationFunction.Signature>, VersionBound<$ExpectedClientVersion> {
	    __DefinitionMetadata?: {
	        apiName: 'twoDimensionalAggregationFunction';
	        displayName: 'twoDimensionalAggregation';
	        rid: 'ri.function-registry.main.function.9b55870a-63c7-4d48-8f06-9627c0805968';
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
	        signature: twoDimensionalAggregationFunction.Signature;
	    };
	    apiName: 'twoDimensionalAggregationFunction';
	    type: 'query';
	    version: '0.11.0';
	    osdkMetadata: typeof $osdkMetadata;
	}
	export const twoDimensionalAggregationFunction: twoDimensionalAggregationFunction;
}