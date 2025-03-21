import { PropertyValueWireToClient, ObjectSet, Osdk, ObjectTypeDefinition, ObjectMetadata, PropertyDef, SingleLinkAccessor, ActionMetadata, ActionParam, ApplyActionOptions, ActionReturnTypeForOptions, ApplyBatchActionOptions, ActionDefinition, InterfaceDefinition, QueryParam, QueryResult, QueryDefinition, VersionBound, ObjectSpecifier } from '@osdk/client';

type $ExpectedClientVersion = '2.2.0';
declare const $osdkMetadata: {
    extraUserAgent: string;
};
declare const $ontologyRid = "ri.ontology.main.ontology.a35bb7f9-2c57-4199-a1cd-af461d88bd6e";

declare namespace Person {
    type PropertyKeys = 'email';
    interface Links {
        readonly Friends: Person.ObjectSet;
        readonly Todos: Todo.ObjectSet;
    }
    interface Props {
        readonly email: PropertyValueWireToClient['string'];
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<Person, Person.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof Person.Props = keyof Person.Props> = Osdk.Instance<Person, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof Person.Props = keyof Person.Props> = OsdkInstance<OPTIONS, K>;
}
interface Person extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'Person';
    __DefinitionMetadata?: {
        objectSet: Person.ObjectSet;
        props: Person.Props;
        linksType: Person.Links;
        strictProps: Person.StrictProps;
        apiName: 'Person';
        description: 'A person';
        displayName: 'Person';
        icon: {
            type: 'blueprint';
            name: 'person';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {
            Friends: ObjectMetadata.Link<Person, true>;
            Todos: ObjectMetadata.Link<Todo, true>;
        };
        pluralDisplayName: 'People';
        primaryKeyApiName: 'email';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            email: PropertyDef<'string', 'non-nullable', 'single'>;
        };
        rid: 'rid.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'email';
        type: 'object';
    };
}
declare const Person: Person;

declare namespace Todo {
    type PropertyKeys = 'id' | 'body' | 'text' | 'priority' | 'complete';
    interface Links {
        readonly Assignee: SingleLinkAccessor<Person>;
    }
    interface Props {
        readonly body: PropertyValueWireToClient['string'] | undefined;
        readonly complete: PropertyValueWireToClient['boolean'] | undefined;
        readonly id: PropertyValueWireToClient['integer'];
        readonly priority: PropertyValueWireToClient['integer'] | undefined;
        readonly text: PropertyValueWireToClient['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<Todo, Todo.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof Todo.Props = keyof Todo.Props> = Osdk.Instance<Todo, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof Todo.Props = keyof Todo.Props> = OsdkInstance<OPTIONS, K>;
}
interface Todo extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'Todo';
    __DefinitionMetadata?: {
        objectSet: Todo.ObjectSet;
        props: Todo.Props;
        linksType: Todo.Links;
        strictProps: Todo.StrictProps;
        apiName: 'Todo';
        description: 'Its a todo item.';
        displayName: 'AwesomeTodoDisplayname';
        icon: {
            type: 'blueprint';
            name: 'todo';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {
            Assignee: ObjectMetadata.Link<Person, false>;
        };
        pluralDisplayName: 'AwesomeTodoDisplayname';
        primaryKeyApiName: 'id';
        primaryKeyType: 'integer';
        properties: {
            /**
             *   display name: 'Body',
             *   description: The text of the todo
             */
            body: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            complete: PropertyDef<'boolean', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            id: PropertyDef<'integer', 'non-nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            priority: PropertyDef<'integer', 'nullable', 'single'>;
            /**
             *   display name: 'Text'
             */
            text: PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'rid.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'body';
        type: 'object';
    };
}
declare const Todo: Todo;

declare namespace actionTakesAllParameterTypes {
    type ParamsDefinition = {
        attachmentArray: {
            multiplicity: true;
            nullable: false;
            type: 'attachment';
        };
        dateArray: {
            multiplicity: true;
            nullable: true;
            type: 'datetime';
        };
        object: {
            description: 'A person Object';
            multiplicity: false;
            nullable: true;
            type: ActionMetadata.DataType.Object<Person>;
        };
        objectSet: {
            multiplicity: false;
            nullable: false;
            type: ActionMetadata.DataType.ObjectSet<Todo>;
        };
        string: {
            multiplicity: false;
            nullable: false;
            type: 'string';
        };
        'time-stamp': {
            multiplicity: false;
            nullable: false;
            type: 'timestamp';
        };
    };
    /**
     * An action which takes different types of parameters
     */
    interface Params {
        readonly attachmentArray: ReadonlyArray<ActionParam.PrimitiveType<'attachment'>>;
        readonly dateArray?: ReadonlyArray<ActionParam.PrimitiveType<'datetime'>>;
        /**
         * A person Object
         */
        readonly object?: ActionParam.ObjectType<Person>;
        readonly objectSet: ActionParam.ObjectSetType<Todo>;
        readonly string: ActionParam.PrimitiveType<'string'>;
        readonly 'time-stamp': ActionParam.PrimitiveType<'timestamp'>;
    }
    interface Signatures {
        /**
         * An action which takes different types of parameters
         */
        applyAction<P extends actionTakesAllParameterTypes.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<actionTakesAllParameterTypes.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/**
 * An action which takes different types of parameters
 * @param {ActionParam.PrimitiveType<"attachment">} attachmentArray
 * @param {ActionParam.PrimitiveType<"datetime">} [dateArray]
 * @param {ActionParam.ObjectType<Person>} [object] A person Object
 * @param {ActionParam.ObjectSetType<Todo>} objectSet
 * @param {ActionParam.PrimitiveType<"string">} string
 * @param {ActionParam.PrimitiveType<"timestamp">} time-stamp
 */
interface actionTakesAllParameterTypes extends ActionDefinition<actionTakesAllParameterTypes.Signatures> {
    __DefinitionMetadata?: {
        apiName: 'actionTakesAllParameterTypes';
        description: 'An action which takes different types of parameters';
        modifiedEntities: {
            Todo: {
                created: true;
                modified: true;
            };
            ObjectTypeWithAllPropertyTypes: {
                created: false;
                modified: true;
            };
        };
        parameters: actionTakesAllParameterTypes.ParamsDefinition;
        rid: 'ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2';
        status: 'ACTIVE';
        type: 'action';
        signatures: actionTakesAllParameterTypes.Signatures;
    };
    apiName: 'actionTakesAllParameterTypes';
    type: 'action';
    osdkMetadata: typeof $osdkMetadata;
}
declare const actionTakesAllParameterTypes: actionTakesAllParameterTypes;

declare namespace Venture {
    type PropertyKeys = 'ventureId' | 'ventureName' | 'ventureStart';
    interface Links {
        readonly employees: Employee.ObjectSet;
    }
    interface Props {
        readonly ventureId: PropertyValueWireToClient['string'];
        readonly ventureName: PropertyValueWireToClient['string'] | undefined;
        readonly ventureStart: PropertyValueWireToClient['datetime'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<Venture, Venture.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof Venture.Props = keyof Venture.Props> = Osdk.Instance<Venture, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof Venture.Props = keyof Venture.Props> = OsdkInstance<OPTIONS, K>;
}
interface Venture extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'Venture';
    __DefinitionMetadata?: {
        objectSet: Venture.ObjectSet;
        props: Venture.Props;
        linksType: Venture.Links;
        strictProps: Venture.StrictProps;
        apiName: 'Venture';
        description: 'A venture';
        displayName: 'Venture';
        icon: {
            type: 'blueprint';
            name: 'ventureIcon';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {
            employees: ObjectMetadata.Link<Employee, true>;
        };
        pluralDisplayName: 'Ventures';
        primaryKeyApiName: 'ventureId';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            ventureId: PropertyDef<'string', 'non-nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            ventureName: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            ventureStart: PropertyDef<'datetime', 'nullable', 'single'>;
        };
        rid: 'rid.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'ventureName';
        type: 'object';
    };
}
declare const Venture: Venture;

declare namespace Employee {
    type PropertyKeys = 'id' | 'firstName' | 'email' | 'adUsername' | 'locationName' | 'locationCity' | 'firstFullTimeStartDate' | 'businessTitle' | 'employeeNumber' | 'jobProfile' | 'locationType' | 'favPlace';
    interface Links {
        readonly lead: SingleLinkAccessor<Employee>;
        readonly peeps: Employee.ObjectSet;
        readonly ventures: Venture.ObjectSet;
    }
    interface Props {
        readonly adUsername: PropertyValueWireToClient['string'] | undefined;
        readonly businessTitle: PropertyValueWireToClient['string'] | undefined;
        readonly email: PropertyValueWireToClient['string'] | undefined;
        readonly employeeNumber: PropertyValueWireToClient['double'] | undefined;
        readonly favPlace: PropertyValueWireToClient['geopoint'] | undefined;
        readonly firstFullTimeStartDate: PropertyValueWireToClient['datetime'] | undefined;
        readonly firstName: PropertyValueWireToClient['string'] | undefined;
        readonly id: PropertyValueWireToClient['string'];
        readonly jobProfile: PropertyValueWireToClient['string'] | undefined;
        readonly locationCity: PropertyValueWireToClient['string'] | undefined;
        readonly locationName: PropertyValueWireToClient['string'] | undefined;
        readonly locationType: PropertyValueWireToClient['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<Employee, Employee.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof Employee.Props = keyof Employee.Props> = Osdk.Instance<Employee, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof Employee.Props = keyof Employee.Props> = OsdkInstance<OPTIONS, K>;
}
interface Employee extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'Employee';
    __DefinitionMetadata?: {
        objectSet: Employee.ObjectSet;
        props: Employee.Props;
        linksType: Employee.Links;
        strictProps: Employee.StrictProps;
        apiName: 'Employee';
        description: 'An employee';
        displayName: 'Employee';
        icon: {
            type: 'blueprint';
            name: 'color';
            color: 'color';
        };
        implements: ['FooInterface'];
        interfaceMap: {
            FooInterface: {
                name: 'firstName';
                description: 'email';
            };
        };
        inverseInterfaceMap: {
            FooInterface: {
                firstName: 'name';
                email: 'description';
            };
        };
        links: {
            lead: ObjectMetadata.Link<Employee, false>;
            peeps: ObjectMetadata.Link<Employee, true>;
            ventures: ObjectMetadata.Link<Venture, true>;
        };
        pluralDisplayName: 'Employees';
        primaryKeyApiName: 'id';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            adUsername: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            businessTitle: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            email: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            employeeNumber: PropertyDef<'double', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            favPlace: PropertyDef<'geopoint', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            firstFullTimeStartDate: PropertyDef<'datetime', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            firstName: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            id: PropertyDef<'string', 'non-nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            jobProfile: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            locationCity: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            locationName: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            locationType: PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'rid.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'firstName';
        type: 'object';
    };
}
declare const Employee: Employee;

declare namespace assignEmployee1 {
    type ParamsDefinition = {
        'employee-1': {
            multiplicity: false;
            nullable: false;
            type: ActionMetadata.DataType.Object<Employee>;
        };
        'venture-1': {
            multiplicity: false;
            nullable: false;
            type: ActionMetadata.DataType.Object<Venture>;
        };
    };
    /**
     * Assigns an employee to a venture
     */
    interface Params {
        readonly 'employee-1': ActionParam.ObjectType<Employee>;
        readonly 'venture-1': ActionParam.ObjectType<Venture>;
    }
    interface Signatures {
        /**
         * Assigns an employee to a venture
         */
        applyAction<P extends assignEmployee1.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<assignEmployee1.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/**
 * Assigns an employee to a venture
 * @param {ActionParam.ObjectType<Employee>} employee-1
 * @param {ActionParam.ObjectType<Venture>} venture-1
 */
interface assignEmployee1 extends ActionDefinition<assignEmployee1.Signatures> {
    __DefinitionMetadata?: {
        apiName: 'assignEmployee1';
        description: 'Assigns an employee to a venture';
        modifiedEntities: {
            Employee: {
                created: false;
                modified: true;
            };
        };
        parameters: assignEmployee1.ParamsDefinition;
        rid: 'ri.a.b.c.d';
        status: 'ACTIVE';
        type: 'action';
        signatures: assignEmployee1.Signatures;
    };
    apiName: 'assignEmployee1';
    type: 'action';
    osdkMetadata: typeof $osdkMetadata;
}
declare const assignEmployee1: assignEmployee1;

declare namespace createFooInterface {
    type ParamsDefinition = {
        createdInterface: {
            multiplicity: false;
            nullable: false;
            type: 'objectType';
        };
    };
    interface Params {
        readonly createdInterface: ActionParam.PrimitiveType<'objectType'>;
    }
    interface Signatures {
        applyAction<P extends createFooInterface.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<createFooInterface.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/**
 * @param {ActionParam.PrimitiveType<"objectType">} createdInterface
 */
interface createFooInterface extends ActionDefinition<createFooInterface.Signatures> {
    __DefinitionMetadata?: {
        apiName: 'createFooInterface';
        displayName: 'Create Foo Interface';
        modifiedEntities: {};
        parameters: createFooInterface.ParamsDefinition;
        rid: 'ri.actions.main.action-type.3828bab4-49c7-4fdf-a780-6ccbc359d817';
        status: 'EXPERIMENTAL';
        type: 'action';
        signatures: createFooInterface.Signatures;
    };
    apiName: 'createFooInterface';
    type: 'action';
    osdkMetadata: typeof $osdkMetadata;
}
declare const createFooInterface: createFooInterface;

declare namespace createMediaObject {
    type ParamsDefinition = {
        media_reference: {
            multiplicity: false;
            nullable: false;
            type: 'mediaReference';
        };
        path: {
            multiplicity: false;
            nullable: false;
            type: 'string';
        };
    };
    interface Params {
        readonly media_reference: ActionParam.PrimitiveType<'mediaReference'>;
        readonly path: ActionParam.PrimitiveType<'string'>;
    }
    interface Signatures {
        applyAction<P extends createMediaObject.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<createMediaObject.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/**
 * @param {ActionParam.PrimitiveType<"mediaReference">} media_reference
 * @param {ActionParam.PrimitiveType<"string">} path
 */
interface createMediaObject extends ActionDefinition<createMediaObject.Signatures> {
    __DefinitionMetadata?: {
        apiName: 'createMediaObject';
        displayName: 'Create media object';
        modifiedEntities: {
            MnayanOsdkMediaObject: {
                created: true;
                modified: false;
            };
        };
        parameters: createMediaObject.ParamsDefinition;
        rid: 'ri.actions.main.action-type.55c19ac6-47a4-46f6-9bab-b97f9016ff92';
        status: 'EXPERIMENTAL';
        type: 'action';
        signatures: createMediaObject.Signatures;
    };
    apiName: 'createMediaObject';
    type: 'action';
    osdkMetadata: typeof $osdkMetadata;
}
declare const createMediaObject: createMediaObject;

declare namespace createMediaViaFunction {
    type ParamsDefinition = {
        mediaItem: {
            multiplicity: false;
            nullable: false;
            type: 'mediaReference';
        };
    };
    interface Params {
        readonly mediaItem: ActionParam.PrimitiveType<'mediaReference'>;
    }
    interface Signatures {
        applyAction<P extends createMediaViaFunction.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<createMediaViaFunction.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/**
 * @param {ActionParam.PrimitiveType<"mediaReference">} mediaItem
 */
interface createMediaViaFunction extends ActionDefinition<createMediaViaFunction.Signatures> {
    __DefinitionMetadata?: {
        apiName: 'createMediaViaFunction';
        displayName: 'Create media object via function';
        modifiedEntities: {
            MnayanOsdkMediaObject: {
                created: true;
                modified: false;
            };
        };
        parameters: createMediaViaFunction.ParamsDefinition;
        rid: 'ri.actions.main.action-type.55c19ac6-47a4-46f6-9bab-b97f9016ff92';
        status: 'EXPERIMENTAL';
        type: 'action';
        signatures: createMediaViaFunction.Signatures;
    };
    apiName: 'createMediaViaFunction';
    type: 'action';
    osdkMetadata: typeof $osdkMetadata;
}
declare const createMediaViaFunction: createMediaViaFunction;

declare namespace createOsdkTestObject {
    type ParamsDefinition = {
        description: {
            multiplicity: false;
            nullable: false;
            type: 'string';
        };
        osdk_object_name: {
            multiplicity: false;
            nullable: false;
            type: 'string';
        };
        string_property: {
            multiplicity: false;
            nullable: false;
            type: 'string';
        };
    };
    interface Params {
        readonly description: ActionParam.PrimitiveType<'string'>;
        readonly osdk_object_name: ActionParam.PrimitiveType<'string'>;
        readonly string_property: ActionParam.PrimitiveType<'string'>;
    }
    interface Signatures {
        applyAction<P extends createOsdkTestObject.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<createOsdkTestObject.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/**
 * @param {ActionParam.PrimitiveType<"string">} description
 * @param {ActionParam.PrimitiveType<"string">} osdk_object_name
 * @param {ActionParam.PrimitiveType<"string">} string_property
 */
interface createOsdkTestObject extends ActionDefinition<createOsdkTestObject.Signatures> {
    __DefinitionMetadata?: {
        apiName: 'createOsdkTestObject';
        displayName: 'Create Osdk Test Object';
        modifiedEntities: {
            OsdkTestObject: {
                created: true;
                modified: false;
            };
        };
        parameters: createOsdkTestObject.ParamsDefinition;
        rid: 'ri.actions.main.action-type.75c72b90-815b-48df-a3b3-314af2e9e2eb';
        status: 'EXPERIMENTAL';
        type: 'action';
        signatures: createOsdkTestObject.Signatures;
    };
    apiName: 'createOsdkTestObject';
    type: 'action';
    osdkMetadata: typeof $osdkMetadata;
}
declare const createOsdkTestObject: createOsdkTestObject;

declare namespace createStructPerson {
    type ParamsDefinition = {
        address: {
            multiplicity: false;
            nullable: true;
            type: ActionMetadata.DataType.Struct<{
                city: 'string';
                state: 'string';
            }>;
        };
        name: {
            multiplicity: false;
            nullable: false;
            type: 'string';
        };
    };
    /**
     * Create a struct
     */
    interface Params {
        readonly address?: ActionParam.StructType<{
            city: 'string';
            state: 'string';
        }>;
        readonly name: ActionParam.PrimitiveType<'string'>;
    }
    interface Signatures {
        /**
         * Create a struct
         */
        applyAction<P extends createStructPerson.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<createStructPerson.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/**
 * Create a struct
 * @param {ActionParam.StructType<{"city":"string","state":"string"}>} [address]
 * @param {ActionParam.PrimitiveType<"string">} name
 */
interface createStructPerson extends ActionDefinition<createStructPerson.Signatures> {
    __DefinitionMetadata?: {
        apiName: 'createStructPerson';
        description: 'Create a struct';
        modifiedEntities: {
            Employee: {
                created: false;
                modified: true;
            };
        };
        parameters: createStructPerson.ParamsDefinition;
        rid: 'ri.a.b.c.d';
        status: 'ACTIVE';
        type: 'action';
        signatures: createStructPerson.Signatures;
    };
    apiName: 'createStructPerson';
    type: 'action';
    osdkMetadata: typeof $osdkMetadata;
}
declare const createStructPerson: createStructPerson;

declare namespace createStructPersonOpiTeam {
    type ParamsDefinition = {
        address: {
            multiplicity: false;
            nullable: true;
            type: ActionMetadata.DataType.Struct<{
                city: 'string';
                state: 'string';
                zipcode: 'integer';
            }>;
        };
        age: {
            multiplicity: false;
            nullable: false;
            type: 'integer';
        };
        id: {
            multiplicity: false;
            nullable: false;
            type: 'string';
        };
    };
    /**
     * Create a struct person on the OPI team
     */
    interface Params {
        readonly address?: ActionParam.StructType<{
            city: 'string';
            state: 'string';
            zipcode: 'integer';
        }>;
        readonly age: ActionParam.PrimitiveType<'integer'>;
        readonly id: ActionParam.PrimitiveType<'string'>;
    }
    interface Signatures {
        /**
         * Create a struct person on the OPI team
         */
        applyAction<P extends createStructPersonOpiTeam.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<createStructPersonOpiTeam.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/**
 * Create a struct person on the OPI team
 * @param {ActionParam.StructType<{"city":"string","state":"string","zipcode":"integer"}>} [address]
 * @param {ActionParam.PrimitiveType<"integer">} age
 * @param {ActionParam.PrimitiveType<"string">} id
 */
interface createStructPersonOpiTeam extends ActionDefinition<createStructPersonOpiTeam.Signatures> {
    __DefinitionMetadata?: {
        apiName: 'createStructPersonOpiTeam';
        description: 'Create a struct person on the OPI team';
        modifiedEntities: {
            StructPersonOpisTeam: {
                created: true;
                modified: false;
            };
        };
        parameters: createStructPersonOpiTeam.ParamsDefinition;
        rid: 'ri.a.b.c.d';
        status: 'ACTIVE';
        type: 'action';
        signatures: createStructPersonOpiTeam.Signatures;
    };
    apiName: 'createStructPersonOpiTeam';
    type: 'action';
    osdkMetadata: typeof $osdkMetadata;
}
declare const createStructPersonOpiTeam: createStructPersonOpiTeam;

declare namespace createTodo {
    type ParamsDefinition = Record<string, never>;
    /**
     * Creates a new Todo
     */
    interface Params {
    }
    interface Signatures {
        /**
         * Creates a new Todo
         */
        applyAction<P extends createTodo.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<createTodo.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/**
 * Creates a new Todo
 */
interface createTodo extends ActionDefinition<createTodo.Signatures> {
    __DefinitionMetadata?: {
        apiName: 'createTodo';
        description: 'Creates a new Todo';
        modifiedEntities: {
            Todo: {
                created: true;
                modified: false;
            };
        };
        parameters: createTodo.ParamsDefinition;
        rid: 'ri.a.b.c.d';
        status: 'ACTIVE';
        type: 'action';
        signatures: createTodo.Signatures;
    };
    apiName: 'createTodo';
    type: 'action';
    osdkMetadata: typeof $osdkMetadata;
}
declare const createTodo: createTodo;

type OsdkObjectLinks$FooInterface = {};
declare namespace FooInterface {
    type PropertyKeys = 'name' | 'description' | 'inheritedDescription';
    interface Props {
        readonly description: PropertyValueWireToClient['string'] | undefined;
        readonly inheritedDescription: PropertyValueWireToClient['string'] | undefined;
        readonly name: PropertyValueWireToClient['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<FooInterface, FooInterface.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof FooInterface.Props = keyof FooInterface.Props> = Osdk.Instance<FooInterface, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof FooInterface.Props = keyof FooInterface.Props> = OsdkInstance<OPTIONS, K>;
}
interface FooInterface extends InterfaceDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'interface';
    apiName: 'FooInterface';
    __DefinitionMetadata?: {
        objectSet: FooInterface.ObjectSet;
        props: FooInterface.Props;
        linksType: OsdkObjectLinks$FooInterface;
        strictProps: FooInterface.StrictProps;
        apiName: 'FooInterface';
        description: 'Its a Foo.';
        displayName: 'Foo interface';
        links: {};
        properties: {
            /**
             *   display name: 'Description',
             *   description: Description of Description
             */
            description: PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Inherited Description',
             *   description: Description property we inherited from some parent interface
             */
            inheritedDescription: PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Name',
             *   description: Name of Foo
             */
            name: PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'ri.ontology.main.interface-type.1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b';
        type: 'interface';
    };
}
declare const FooInterface: FooInterface;

declare namespace deleteFooInterface {
    type ParamsDefinition = {
        deletedInterface: {
            multiplicity: false;
            nullable: false;
            type: ActionMetadata.DataType.Interface<FooInterface>;
        };
    };
    interface Params {
        readonly deletedInterface: ActionParam.InterfaceType<FooInterface>;
    }
    interface Signatures {
        applyAction<P extends deleteFooInterface.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<deleteFooInterface.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/**
 * @param {ActionParam.InterfaceType<FooInterface>} deletedInterface
 */
interface deleteFooInterface extends ActionDefinition<deleteFooInterface.Signatures> {
    __DefinitionMetadata?: {
        apiName: 'deleteFooInterface';
        displayName: 'Delete Foo Interface';
        modifiedEntities: {};
        parameters: deleteFooInterface.ParamsDefinition;
        rid: 'ri.actions.main.action-type.3828bab4-49c7-4fdf-a780-6ccbc359d817';
        status: 'ACTIVE';
        type: 'action';
        signatures: deleteFooInterface.Signatures;
    };
    apiName: 'deleteFooInterface';
    type: 'action';
    osdkMetadata: typeof $osdkMetadata;
}
declare const deleteFooInterface: deleteFooInterface;

declare namespace OsdkTestObject {
    type PropertyKeys = 'description' | 'osdkObjectName' | 'primaryKey_' | 'stringProperty';
    type Links = {};
    interface Props {
        readonly description: PropertyValueWireToClient['string'] | undefined;
        readonly osdkObjectName: PropertyValueWireToClient['string'] | undefined;
        readonly primaryKey_: PropertyValueWireToClient['string'];
        readonly stringProperty: PropertyValueWireToClient['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<OsdkTestObject, OsdkTestObject.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof OsdkTestObject.Props = keyof OsdkTestObject.Props> = Osdk.Instance<OsdkTestObject, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof OsdkTestObject.Props = keyof OsdkTestObject.Props> = OsdkInstance<OPTIONS, K>;
}
interface OsdkTestObject extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'OsdkTestObject';
    __DefinitionMetadata?: {
        objectSet: OsdkTestObject.ObjectSet;
        props: OsdkTestObject.Props;
        linksType: OsdkTestObject.Links;
        strictProps: OsdkTestObject.StrictProps;
        apiName: 'OsdkTestObject';
        description: '';
        displayName: 'Osdk Test Object';
        icon: {
            type: 'blueprint';
            color: '#4C90F0';
            name: 'cube';
        };
        implements: ['FooInterface', 'OsdkTestInterface'];
        interfaceMap: {
            FooInterface: {
                name: 'osdkObjectName';
                description: 'description';
            };
            OsdkTestInterface: {
                objectDescription: 'description';
            };
        };
        inverseInterfaceMap: {
            FooInterface: {
                osdkObjectName: 'name';
                description: 'description';
            };
            OsdkTestInterface: {
                description: 'objectDescription';
            };
        };
        links: {};
        pluralDisplayName: 'Osdk Test Objects';
        primaryKeyApiName: 'primaryKey_';
        primaryKeyType: 'string';
        properties: {
            /**
             *   display name: 'Description'
             */
            description: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            osdkObjectName: PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Primary Key'
             */
            primaryKey_: PropertyDef<'string', 'non-nullable', 'single'>;
            /**
             *   display name: 'String Property'
             */
            stringProperty: PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'ri.ontology.main.object-type.ba4a949c-547a-45de-9c78-b772bb55acfb';
        status: 'EXPERIMENTAL';
        titleProperty: 'primaryKey_';
        type: 'object';
        visibility: 'NORMAL';
    };
}
declare const OsdkTestObject: OsdkTestObject;

declare namespace deleteOsdkTestObject {
    type ParamsDefinition = {
        OsdkTestObject: {
            multiplicity: false;
            nullable: false;
            type: ActionMetadata.DataType.Object<OsdkTestObject>;
        };
    };
    interface Params {
        readonly OsdkTestObject: ActionParam.ObjectType<OsdkTestObject>;
    }
    interface Signatures {
        applyAction<P extends deleteOsdkTestObject.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<deleteOsdkTestObject.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/**
 * @param {ActionParam.ObjectType<OsdkTestObject>} OsdkTestObject
 */
interface deleteOsdkTestObject extends ActionDefinition<deleteOsdkTestObject.Signatures> {
    __DefinitionMetadata?: {
        apiName: 'deleteOsdkTestObject';
        displayName: 'Delete Osdk Test Object';
        modifiedEntities: {};
        parameters: deleteOsdkTestObject.ParamsDefinition;
        rid: 'ri.actions.main.action-type.3858bab4-49c7-4fdf-a780-6ccbc359d817';
        status: 'EXPERIMENTAL';
        type: 'action';
        signatures: deleteOsdkTestObject.Signatures;
    };
    apiName: 'deleteOsdkTestObject';
    type: 'action';
    osdkMetadata: typeof $osdkMetadata;
}
declare const deleteOsdkTestObject: deleteOsdkTestObject;

declare namespace editOsdkTestObject {
    type ParamsDefinition = {
        OsdkTestObject: {
            multiplicity: false;
            nullable: false;
            type: ActionMetadata.DataType.Object<OsdkTestObject>;
        };
        string_property: {
            multiplicity: false;
            nullable: false;
            type: 'string';
        };
    };
    interface Params {
        readonly OsdkTestObject: ActionParam.ObjectType<OsdkTestObject>;
        readonly string_property: ActionParam.PrimitiveType<'string'>;
    }
    interface Signatures {
        applyAction<P extends editOsdkTestObject.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<editOsdkTestObject.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/**
 * @param {ActionParam.ObjectType<OsdkTestObject>} OsdkTestObject
 * @param {ActionParam.PrimitiveType<"string">} string_property
 */
interface editOsdkTestObject extends ActionDefinition<editOsdkTestObject.Signatures> {
    __DefinitionMetadata?: {
        apiName: 'editOsdkTestObject';
        displayName: 'Edit Osdk Test Object';
        modifiedEntities: {
            OsdkTestObject: {
                created: false;
                modified: true;
            };
        };
        parameters: editOsdkTestObject.ParamsDefinition;
        rid: 'ri.actions.main.action-type.4a70a939-b2ee-46dd-8099-a290cafa28e1';
        status: 'EXPERIMENTAL';
        type: 'action';
        signatures: editOsdkTestObject.Signatures;
    };
    apiName: 'editOsdkTestObject';
    type: 'action';
    osdkMetadata: typeof $osdkMetadata;
}
declare const editOsdkTestObject: editOsdkTestObject;

declare const actions_actionTakesAllParameterTypes: typeof actionTakesAllParameterTypes;
declare const actions_assignEmployee1: typeof assignEmployee1;
declare const actions_createFooInterface: typeof createFooInterface;
declare const actions_createMediaObject: typeof createMediaObject;
declare const actions_createMediaViaFunction: typeof createMediaViaFunction;
declare const actions_createOsdkTestObject: typeof createOsdkTestObject;
declare const actions_createStructPerson: typeof createStructPerson;
declare const actions_createStructPersonOpiTeam: typeof createStructPersonOpiTeam;
declare const actions_createTodo: typeof createTodo;
declare const actions_deleteFooInterface: typeof deleteFooInterface;
declare const actions_deleteOsdkTestObject: typeof deleteOsdkTestObject;
declare const actions_editOsdkTestObject: typeof editOsdkTestObject;
declare namespace actions {
  export { actions_actionTakesAllParameterTypes as actionTakesAllParameterTypes, actions_assignEmployee1 as assignEmployee1, actions_createFooInterface as createFooInterface, actions_createMediaObject as createMediaObject, actions_createMediaViaFunction as createMediaViaFunction, actions_createOsdkTestObject as createOsdkTestObject, actions_createStructPerson as createStructPerson, actions_createStructPersonOpiTeam as createStructPersonOpiTeam, actions_createTodo as createTodo, actions_deleteFooInterface as deleteFooInterface, actions_deleteOsdkTestObject as deleteOsdkTestObject, actions_editOsdkTestObject as editOsdkTestObject };
}

type OsdkObjectLinks$Athlete = {};
declare namespace Athlete {
    type PropertyKeys = 'jerseyNumber' | 'athleteId' | 'name22';
    interface Props {
        readonly athleteId: PropertyValueWireToClient['string'] | undefined;
        readonly jerseyNumber: PropertyValueWireToClient['integer'] | undefined;
        readonly name22: PropertyValueWireToClient['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<Athlete, Athlete.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof Athlete.Props = keyof Athlete.Props> = Osdk.Instance<Athlete, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof Athlete.Props = keyof Athlete.Props> = OsdkInstance<OPTIONS, K>;
}
interface Athlete extends InterfaceDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'interface';
    apiName: 'Athlete';
    __DefinitionMetadata?: {
        objectSet: Athlete.ObjectSet;
        props: Athlete.Props;
        linksType: OsdkObjectLinks$Athlete;
        strictProps: Athlete.StrictProps;
        apiName: 'Athlete';
        description: 'Its an athlete.';
        displayName: 'Athlete interface';
        links: {};
        properties: {
            /**
             *   display name: 'Athlete ID',
             *   description: Athlete ID
             */
            athleteId: PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Jersey Number',
             *   description: Jersey Number
             */
            jerseyNumber: PropertyDef<'integer', 'nullable', 'single'>;
            /**
             *   display name: 'Name',
             *   description: Name
             */
            name22: PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'ri.ontology.main.interface-type.1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b';
        type: 'interface';
    };
}
declare const Athlete: Athlete;

type OsdkObjectLinks$InterfaceNoProps = {};
declare namespace InterfaceNoProps {
    type PropertyKeys = never;
    interface Props {
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<InterfaceNoProps, InterfaceNoProps.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof InterfaceNoProps.Props = keyof InterfaceNoProps.Props> = Osdk.Instance<InterfaceNoProps, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof InterfaceNoProps.Props = keyof InterfaceNoProps.Props> = OsdkInstance<OPTIONS, K>;
}
interface InterfaceNoProps extends InterfaceDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'interface';
    apiName: 'InterfaceNoProps';
    __DefinitionMetadata?: {
        objectSet: InterfaceNoProps.ObjectSet;
        props: InterfaceNoProps.Props;
        linksType: OsdkObjectLinks$InterfaceNoProps;
        strictProps: InterfaceNoProps.StrictProps;
        apiName: 'InterfaceNoProps';
        description: 'Its a Foo.';
        displayName: 'FInterfaceNoProps';
        links: {};
        properties: {};
        rid: 'ri.ontology.main.interface-type.1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b';
        type: 'interface';
    };
}
declare const InterfaceNoProps: InterfaceNoProps;

type OsdkObjectLinks$OsdkTestInterface = {};
declare namespace OsdkTestInterface {
    type PropertyKeys = 'objectDescription';
    interface Props {
        readonly objectDescription: PropertyValueWireToClient['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<OsdkTestInterface, OsdkTestInterface.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof OsdkTestInterface.Props = keyof OsdkTestInterface.Props> = Osdk.Instance<OsdkTestInterface, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof OsdkTestInterface.Props = keyof OsdkTestInterface.Props> = OsdkInstance<OPTIONS, K>;
}
interface OsdkTestInterface extends InterfaceDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'interface';
    apiName: 'OsdkTestInterface';
    __DefinitionMetadata?: {
        objectSet: OsdkTestInterface.ObjectSet;
        props: OsdkTestInterface.Props;
        linksType: OsdkObjectLinks$OsdkTestInterface;
        strictProps: OsdkTestInterface.StrictProps;
        apiName: 'OsdkTestInterface';
        description: 'OsdkTestInterface';
        displayName: 'OsdkTestInterface';
        implementedBy: ['OsdkTestObject'];
        links: {};
        properties: {
            /**
             * (no ontology metadata)
             */
            objectDescription: PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'ri.ontology.main.interface.06c534fd-4f68-44d9-b268-72729a47eaab';
        type: 'interface';
    };
}
declare const OsdkTestInterface: OsdkTestInterface;

declare const interfaces_Athlete: typeof Athlete;
declare const interfaces_FooInterface: typeof FooInterface;
declare const interfaces_InterfaceNoProps: typeof InterfaceNoProps;
declare const interfaces_OsdkTestInterface: typeof OsdkTestInterface;
declare namespace interfaces {
  export { interfaces_Athlete as Athlete, interfaces_FooInterface as FooInterface, interfaces_InterfaceNoProps as InterfaceNoProps, interfaces_OsdkTestInterface as OsdkTestInterface };
}

declare namespace BgaoNflPlayer {
    type PropertyKeys = 'id' | 'gamesPlayed' | 'name' | 'number' | 'wikiUrl' | 'address';
    type Links = {};
    interface Props {
        readonly address: {
            addressLine1: PropertyValueWireToClient['string'] | undefined;
            addressLine2: PropertyValueWireToClient['string'] | undefined;
            city: PropertyValueWireToClient['string'] | undefined;
            state: PropertyValueWireToClient['string'] | undefined;
            zipCode: PropertyValueWireToClient['integer'] | undefined;
        } | undefined;
        readonly gamesPlayed: PropertyValueWireToClient['integer'] | undefined;
        readonly id: PropertyValueWireToClient['string'];
        readonly name: PropertyValueWireToClient['string'] | undefined;
        readonly number: PropertyValueWireToClient['integer'] | undefined;
        readonly wikiUrl: PropertyValueWireToClient['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<BgaoNflPlayer, BgaoNflPlayer.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof BgaoNflPlayer.Props = keyof BgaoNflPlayer.Props> = Osdk.Instance<BgaoNflPlayer, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof BgaoNflPlayer.Props = keyof BgaoNflPlayer.Props> = OsdkInstance<OPTIONS, K>;
}
interface BgaoNflPlayer extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'BgaoNflPlayer';
    __DefinitionMetadata?: {
        objectSet: BgaoNflPlayer.ObjectSet;
        props: BgaoNflPlayer.Props;
        linksType: BgaoNflPlayer.Links;
        strictProps: BgaoNflPlayer.StrictProps;
        apiName: 'BgaoNflPlayer';
        description: 'BgaoNflPlayer';
        displayName: 'BgaoNflPlayer';
        icon: {
            type: 'blueprint';
            name: 'traffic';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'GtfsTripTrackObject';
        primaryKeyApiName: 'id';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            address: PropertyDef<{
                addressLine1: 'string';
                addressLine2: 'string';
                city: 'string';
                state: 'string';
                zipCode: 'integer';
            }, 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            gamesPlayed: PropertyDef<'integer', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            id: PropertyDef<'string', 'non-nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            name: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            number: PropertyDef<'integer', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            wikiUrl: PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'ri.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'entityId';
        type: 'object';
    };
}
declare const BgaoNflPlayer: BgaoNflPlayer;

declare namespace BoundariesUsState {
    type PropertyKeys = 'usState' | 'latitude' | 'longitude' | 'geometry10M';
    type Links = {};
    interface Props {
        readonly geometry10M: PropertyValueWireToClient['geoshape'] | undefined;
        readonly latitude: PropertyValueWireToClient['double'] | undefined;
        readonly longitude: PropertyValueWireToClient['double'] | undefined;
        readonly usState: PropertyValueWireToClient['string'];
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<BoundariesUsState, BoundariesUsState.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof BoundariesUsState.Props = keyof BoundariesUsState.Props> = Osdk.Instance<BoundariesUsState, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof BoundariesUsState.Props = keyof BoundariesUsState.Props> = OsdkInstance<OPTIONS, K>;
}
interface BoundariesUsState extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'BoundariesUsState';
    __DefinitionMetadata?: {
        objectSet: BoundariesUsState.ObjectSet;
        props: BoundariesUsState.Props;
        linksType: BoundariesUsState.Links;
        strictProps: BoundariesUsState.StrictProps;
        apiName: 'BoundariesUsState';
        description: 'Boundaries US State';
        displayName: 'Boundaries US State';
        icon: {
            type: 'blueprint';
            name: 'usState';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'Boundaries US States';
        primaryKeyApiName: 'usState';
        primaryKeyType: 'string';
        properties: {
            /**
             *   display name: 'Geometry10M',
             *   description: geoshape
             */
            geometry10M: PropertyDef<'geoshape', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            latitude: PropertyDef<'double', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            longitude: PropertyDef<'double', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            usState: PropertyDef<'string', 'non-nullable', 'single'>;
        };
        rid: 'ri.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'usState';
        type: 'object';
    };
}
declare const BoundariesUsState: BoundariesUsState;

declare namespace BuilderDeploymentState {
    type PropertyKeys = 'skuId' | 'date' | 'currentTimestamp';
    type Links = {};
    interface Props {
        readonly currentTimestamp: PropertyValueWireToClient['timestamp'] | undefined;
        readonly date: PropertyValueWireToClient['datetime'] | undefined;
        readonly skuId: PropertyValueWireToClient['string'];
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<BuilderDeploymentState, BuilderDeploymentState.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof BuilderDeploymentState.Props = keyof BuilderDeploymentState.Props> = Osdk.Instance<BuilderDeploymentState, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof BuilderDeploymentState.Props = keyof BuilderDeploymentState.Props> = OsdkInstance<OPTIONS, K>;
}
interface BuilderDeploymentState extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'BuilderDeploymentState';
    __DefinitionMetadata?: {
        objectSet: BuilderDeploymentState.ObjectSet;
        props: BuilderDeploymentState.Props;
        linksType: BuilderDeploymentState.Links;
        strictProps: BuilderDeploymentState.StrictProps;
        apiName: 'BuilderDeploymentState';
        description: 'Builder Deployment State';
        displayName: 'BuilderDeploymentState';
        icon: {
            type: 'blueprint';
            name: 'builder';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'Builder Deployment States';
        primaryKeyApiName: 'skuId';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            currentTimestamp: PropertyDef<'timestamp', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            date: PropertyDef<'datetime', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            skuId: PropertyDef<'string', 'non-nullable', 'single'>;
        };
        rid: 'rid.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'skuId';
        type: 'object';
    };
}
declare const BuilderDeploymentState: BuilderDeploymentState;

declare namespace StateTerritory {
    type PropertyKeys = 'airportStateName' | 'airportStateCode' | 'country';
    interface Links {
        readonly country1: SingleLinkAccessor<Country_1>;
    }
    interface Props {
        readonly airportStateCode: PropertyValueWireToClient['string'] | undefined;
        readonly airportStateName: PropertyValueWireToClient['string'];
        readonly country: PropertyValueWireToClient['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<StateTerritory, StateTerritory.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof StateTerritory.Props = keyof StateTerritory.Props> = Osdk.Instance<StateTerritory, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof StateTerritory.Props = keyof StateTerritory.Props> = OsdkInstance<OPTIONS, K>;
}
interface StateTerritory extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'StateTerritory';
    __DefinitionMetadata?: {
        objectSet: StateTerritory.ObjectSet;
        props: StateTerritory.Props;
        linksType: StateTerritory.Links;
        strictProps: StateTerritory.StrictProps;
        apiName: 'StateTerritory';
        description: '';
        displayName: 'State/Territory';
        icon: {
            type: 'blueprint';
            color: '#4C90F0';
            name: 'cube';
        };
        implements: [];
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {
            country1: ObjectMetadata.Link<Country_1, false>;
        };
        pluralDisplayName: 'States';
        primaryKeyApiName: 'airportStateName';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            airportStateCode: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            airportStateName: PropertyDef<'string', 'non-nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            country: PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'ri.ontology.main.object-type.98f324e1-b8f4-42ef-aee7-5c4a1494ce5e';
        status: 'EXPERIMENTAL';
        titleProperty: 'airportStateName';
        type: 'object';
        visibility: 'NORMAL';
    };
}
declare const StateTerritory: StateTerritory;

declare namespace Country_1 {
    type PropertyKeys = 'airportCountryName' | 'airportCountryIsoCode';
    interface Links {
        readonly stateTerritory: StateTerritory.ObjectSet;
    }
    interface Props {
        readonly airportCountryIsoCode: PropertyValueWireToClient['string'] | undefined;
        readonly airportCountryName: PropertyValueWireToClient['string'];
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<Country_1, Country_1.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof Country_1.Props = keyof Country_1.Props> = Osdk.Instance<Country_1, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof Country_1.Props = keyof Country_1.Props> = OsdkInstance<OPTIONS, K>;
}
interface Country_1 extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'Country_1';
    __DefinitionMetadata?: {
        objectSet: Country_1.ObjectSet;
        props: Country_1.Props;
        linksType: Country_1.Links;
        strictProps: Country_1.StrictProps;
        apiName: 'Country_1';
        description: '';
        displayName: 'Country';
        icon: {
            type: 'blueprint';
            color: '#4C90F0';
            name: 'cube';
        };
        implements: [];
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {
            stateTerritory: ObjectMetadata.Link<StateTerritory, true>;
        };
        pluralDisplayName: 'Countries';
        primaryKeyApiName: 'airportCountryName';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            airportCountryIsoCode: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            airportCountryName: PropertyDef<'string', 'non-nullable', 'single'>;
        };
        rid: 'ri.ontology.main.object-type.0a276176-8d93-489e-93b4-77673de56b9e';
        status: 'EXPERIMENTAL';
        titleProperty: 'airportCountryName';
        type: 'object';
        visibility: 'NORMAL';
    };
}
declare const Country_1: Country_1;

declare namespace DherlihyComplexObject {
    type PropertyKeys = 'id' | 'secret' | 'seriesId';
    type Links = {};
    interface Props {
        readonly id: PropertyValueWireToClient['string'];
        readonly secret: PropertyValueWireToClient['string'] | undefined;
        readonly seriesId: PropertyValueWireToClient['numericTimeseries'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<DherlihyComplexObject, DherlihyComplexObject.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof DherlihyComplexObject.Props = keyof DherlihyComplexObject.Props> = Osdk.Instance<DherlihyComplexObject, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof DherlihyComplexObject.Props = keyof DherlihyComplexObject.Props> = OsdkInstance<OPTIONS, K>;
}
interface DherlihyComplexObject extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'DherlihyComplexObject';
    __DefinitionMetadata?: {
        objectSet: DherlihyComplexObject.ObjectSet;
        props: DherlihyComplexObject.Props;
        linksType: DherlihyComplexObject.Links;
        strictProps: DherlihyComplexObject.StrictProps;
        apiName: 'DherlihyComplexObject';
        description: 'Dherlihy Complex Object';
        displayName: 'Dherlihy Complex Object';
        icon: {
            type: 'blueprint';
            name: 'dherlihy';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'Dherlihy Complex Objects';
        primaryKeyApiName: 'id';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            id: PropertyDef<'string', 'non-nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            secret: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            seriesId: PropertyDef<'numericTimeseries', 'nullable', 'single'>;
        };
        rid: 'rid.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'id';
        type: 'object';
    };
}
declare const DherlihyComplexObject: DherlihyComplexObject;

declare namespace FintrafficAis {
    type PropertyKeys = 'mmsi' | 'name' | 'centroid' | 'geometry' | 'seriesId' | 'shipType' | 'timestamp';
    type Links = {};
    interface Props {
        readonly centroid: PropertyValueWireToClient['geopoint'] | undefined;
        readonly geometry: PropertyValueWireToClient['geoshape'] | undefined;
        readonly mmsi: PropertyValueWireToClient['string'];
        readonly name: PropertyValueWireToClient['string'] | undefined;
        readonly seriesId: PropertyValueWireToClient['geotimeSeriesReference'] | undefined;
        readonly shipType: PropertyValueWireToClient['string'] | undefined;
        readonly timestamp: PropertyValueWireToClient['timestamp'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<FintrafficAis, FintrafficAis.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof FintrafficAis.Props = keyof FintrafficAis.Props> = Osdk.Instance<FintrafficAis, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof FintrafficAis.Props = keyof FintrafficAis.Props> = OsdkInstance<OPTIONS, K>;
}
interface FintrafficAis extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'FintrafficAis';
    __DefinitionMetadata?: {
        objectSet: FintrafficAis.ObjectSet;
        props: FintrafficAis.Props;
        linksType: FintrafficAis.Links;
        strictProps: FintrafficAis.StrictProps;
        apiName: 'FintrafficAis';
        description: 'Fintraffic AIS';
        displayName: 'Fintraffic AIS';
        icon: {
            type: 'blueprint';
            name: 'traffic';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'Fintraffic AIS';
        primaryKeyApiName: 'mmsi';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            centroid: PropertyDef<'geopoint', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            geometry: PropertyDef<'geoshape', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            mmsi: PropertyDef<'string', 'non-nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            name: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            seriesId: PropertyDef<'geotimeSeriesReference', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            shipType: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            timestamp: PropertyDef<'timestamp', 'nullable', 'single'>;
        };
        rid: 'ri.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'name';
        type: 'object';
    };
}
declare const FintrafficAis: FintrafficAis;

declare namespace GtfsTripTrackObject {
    type PropertyKeys = 'entityId' | 'geotimeSeriesReferences' | 'timestamp';
    type Links = {};
    interface Props {
        readonly entityId: PropertyValueWireToClient['string'];
        readonly geotimeSeriesReferences: PropertyValueWireToClient['geotimeSeriesReference'] | undefined;
        readonly timestamp: PropertyValueWireToClient['timestamp'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<GtfsTripTrackObject, GtfsTripTrackObject.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof GtfsTripTrackObject.Props = keyof GtfsTripTrackObject.Props> = Osdk.Instance<GtfsTripTrackObject, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof GtfsTripTrackObject.Props = keyof GtfsTripTrackObject.Props> = OsdkInstance<OPTIONS, K>;
}
interface GtfsTripTrackObject extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'GtfsTripTrackObject';
    __DefinitionMetadata?: {
        objectSet: GtfsTripTrackObject.ObjectSet;
        props: GtfsTripTrackObject.Props;
        linksType: GtfsTripTrackObject.Links;
        strictProps: GtfsTripTrackObject.StrictProps;
        apiName: 'GtfsTripTrackObject';
        description: 'GtfsTripTrackObject';
        displayName: 'GtfsTripTrackObject';
        icon: {
            type: 'blueprint';
            name: 'traffic';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'GtfsTripTrackObject';
        primaryKeyApiName: 'entityId';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            entityId: PropertyDef<'string', 'non-nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            geotimeSeriesReferences: PropertyDef<'geotimeSeriesReference', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            timestamp: PropertyDef<'timestamp', 'nullable', 'single'>;
        };
        rid: 'ri.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'entityId';
        type: 'object';
    };
}
declare const GtfsTripTrackObject: GtfsTripTrackObject;

declare namespace McAirportStruct {
    type PropertyKeys = 'airportName' | 'city' | 'airportStruct' | 'state' | 'originDate';
    type Links = {};
    interface Props {
        readonly airportName: PropertyValueWireToClient['string'];
        readonly airportStruct: {
            code: PropertyValueWireToClient['string'] | undefined;
            geoHash: PropertyValueWireToClient['string'] | undefined;
            timestamp: PropertyValueWireToClient['string'] | undefined;
        } | undefined;
        readonly city: PropertyValueWireToClient['string'] | undefined;
        readonly originDate: PropertyValueWireToClient['timestamp'] | undefined;
        readonly state: PropertyValueWireToClient['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<McAirportStruct, McAirportStruct.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof McAirportStruct.Props = keyof McAirportStruct.Props> = Osdk.Instance<McAirportStruct, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof McAirportStruct.Props = keyof McAirportStruct.Props> = OsdkInstance<OPTIONS, K>;
}
interface McAirportStruct extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'McAirportStruct';
    __DefinitionMetadata?: {
        objectSet: McAirportStruct.ObjectSet;
        props: McAirportStruct.Props;
        linksType: McAirportStruct.Links;
        strictProps: McAirportStruct.StrictProps;
        apiName: 'McAirportStruct';
        description: 'McAirportStruct';
        displayName: 'McAirportStruct';
        icon: {
            type: 'blueprint';
            name: 'mcAirportStruct';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'McAirportStructs';
        primaryKeyApiName: 'airportName';
        primaryKeyType: 'string';
        properties: {
            /**
             *   display name: 'Airport Name'
             */
            airportName: PropertyDef<'string', 'non-nullable', 'single'>;
            /**
             *   display name: 'Airport Struct'
             */
            airportStruct: PropertyDef<{
                code: 'string';
                geoHash: 'string';
                timestamp: 'string';
            }, 'nullable', 'single'>;
            /**
             *   display name: 'City'
             */
            city: PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Origin Date'
             */
            originDate: PropertyDef<'timestamp', 'nullable', 'single'>;
            /**
             *   display name: 'State'
             */
            state: PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'rid.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'airportName';
        type: 'object';
    };
}
declare const McAirportStruct: McAirportStruct;

declare namespace MnayanOsdkMediaObject {
    type PropertyKeys = 'id' | 'path' | 'mediaReference';
    type Links = {};
    interface Props {
        readonly id: PropertyValueWireToClient['string'];
        readonly mediaReference: PropertyValueWireToClient['mediaReference'] | undefined;
        readonly path: PropertyValueWireToClient['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<MnayanOsdkMediaObject, MnayanOsdkMediaObject.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof MnayanOsdkMediaObject.Props = keyof MnayanOsdkMediaObject.Props> = Osdk.Instance<MnayanOsdkMediaObject, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof MnayanOsdkMediaObject.Props = keyof MnayanOsdkMediaObject.Props> = OsdkInstance<OPTIONS, K>;
}
interface MnayanOsdkMediaObject extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'MnayanOsdkMediaObject';
    __DefinitionMetadata?: {
        objectSet: MnayanOsdkMediaObject.ObjectSet;
        props: MnayanOsdkMediaObject.Props;
        linksType: MnayanOsdkMediaObject.Links;
        strictProps: MnayanOsdkMediaObject.StrictProps;
        apiName: 'MnayanOsdkMediaObject';
        description: 'Media OT for OSDK e2e testing';
        displayName: 'MnayanOSDKMediaObject';
        icon: {
            type: 'blueprint';
            name: 'object';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'Mnayan OSDKMedia Objects';
        primaryKeyApiName: 'id';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            id: PropertyDef<'string', 'non-nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            mediaReference: PropertyDef<'mediaReference', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            path: PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'rid.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'path';
        type: 'object';
    };
}
declare const MnayanOsdkMediaObject: MnayanOsdkMediaObject;

declare namespace MtaBus {
    type PropertyKeys = 'vehicleId' | 'nextStopId' | 'routeId' | 'positionId';
    type Links = {};
    interface Props {
        readonly nextStopId: PropertyValueWireToClient['string'] | undefined;
        readonly positionId: PropertyValueWireToClient['geotimeSeriesReference'] | undefined;
        readonly routeId: PropertyValueWireToClient['string'] | undefined;
        readonly vehicleId: PropertyValueWireToClient['string'];
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<MtaBus, MtaBus.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof MtaBus.Props = keyof MtaBus.Props> = Osdk.Instance<MtaBus, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof MtaBus.Props = keyof MtaBus.Props> = OsdkInstance<OPTIONS, K>;
}
interface MtaBus extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'MtaBus';
    __DefinitionMetadata?: {
        objectSet: MtaBus.ObjectSet;
        props: MtaBus.Props;
        linksType: MtaBus.Links;
        strictProps: MtaBus.StrictProps;
        apiName: 'MtaBus';
        description: 'MtaBus';
        displayName: 'MtaBus';
        icon: {
            type: 'blueprint';
            name: 'traffic';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'Fintraffic AIS';
        primaryKeyApiName: 'vehicleId';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            nextStopId: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            positionId: PropertyDef<'geotimeSeriesReference', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            routeId: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            vehicleId: PropertyDef<'string', 'non-nullable', 'single'>;
        };
        rid: 'ri.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'name';
        type: 'object';
    };
}
declare const MtaBus: MtaBus;

declare namespace NbaPlayer {
    type PropertyKeys = 'id' | 'gamesPlayed' | 'name' | 'jerseyNumber' | 'wikiUrl';
    type Links = {};
    interface Props {
        readonly gamesPlayed: PropertyValueWireToClient['integer'] | undefined;
        readonly id: PropertyValueWireToClient['string'];
        readonly jerseyNumber: PropertyValueWireToClient['integer'] | undefined;
        readonly name: PropertyValueWireToClient['string'] | undefined;
        readonly wikiUrl: PropertyValueWireToClient['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<NbaPlayer, NbaPlayer.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof NbaPlayer.Props = keyof NbaPlayer.Props> = Osdk.Instance<NbaPlayer, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof NbaPlayer.Props = keyof NbaPlayer.Props> = OsdkInstance<OPTIONS, K>;
}
interface NbaPlayer extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'NbaPlayer';
    __DefinitionMetadata?: {
        objectSet: NbaPlayer.ObjectSet;
        props: NbaPlayer.Props;
        linksType: NbaPlayer.Links;
        strictProps: NbaPlayer.StrictProps;
        apiName: 'NbaPlayer';
        description: 'NbaPlayer';
        displayName: 'NbaPlayer';
        icon: {
            type: 'blueprint';
            name: 'traffic';
            color: 'color';
        };
        implements: ['Athlete'];
        interfaceMap: {
            Athlete: {
                jerseyNumber: 'jerseyNumber';
                athleteId: 'id';
                name22: 'name';
            };
        };
        inverseInterfaceMap: {
            Athlete: {
                jerseyNumber: 'jerseyNumber';
                id: 'athleteId';
                name: 'name22';
            };
        };
        links: {};
        pluralDisplayName: 'names';
        primaryKeyApiName: 'id';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            gamesPlayed: PropertyDef<'integer', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            id: PropertyDef<'string', 'non-nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            jerseyNumber: PropertyDef<'integer', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            name: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            wikiUrl: PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'ri.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'name';
        type: 'object';
    };
}
declare const NbaPlayer: NbaPlayer;

declare namespace ObjectTypeWithAllPropertyTypes {
    type PropertyKeys = 'id' | 'string' | 'boolean' | 'date' | 'dateTime' | 'decimal' | 'integer' | 'long' | 'short' | 'float' | 'double' | 'byte' | 'attachment' | 'geoPoint' | 'geoShape' | 'stringArray' | 'booleanArray' | 'dateArray' | 'dateTimeArray' | 'decimalArray' | 'integerArray' | 'longArray' | 'shortArray' | 'floatArray' | 'doubleArray' | 'byteArray' | 'attachmentArray' | 'geoPointArray' | 'geoShapeArray' | 'numericTimeseries' | 'stringTimeseries';
    type Links = {};
    interface Props {
        readonly attachment: PropertyValueWireToClient['attachment'] | undefined;
        readonly attachmentArray: PropertyValueWireToClient['attachment'][] | undefined;
        readonly boolean: PropertyValueWireToClient['boolean'] | undefined;
        readonly booleanArray: PropertyValueWireToClient['boolean'][] | undefined;
        readonly byte: PropertyValueWireToClient['byte'] | undefined;
        readonly byteArray: PropertyValueWireToClient['byte'][] | undefined;
        readonly date: PropertyValueWireToClient['datetime'] | undefined;
        readonly dateArray: PropertyValueWireToClient['datetime'][] | undefined;
        readonly dateTime: PropertyValueWireToClient['timestamp'] | undefined;
        readonly dateTimeArray: PropertyValueWireToClient['timestamp'][] | undefined;
        readonly decimal: PropertyValueWireToClient['decimal'] | undefined;
        readonly decimalArray: PropertyValueWireToClient['decimal'][] | undefined;
        readonly double: PropertyValueWireToClient['double'] | undefined;
        readonly doubleArray: PropertyValueWireToClient['double'][] | undefined;
        readonly float: PropertyValueWireToClient['float'] | undefined;
        readonly floatArray: PropertyValueWireToClient['float'][] | undefined;
        readonly geoPoint: PropertyValueWireToClient['geopoint'] | undefined;
        readonly geoPointArray: PropertyValueWireToClient['geopoint'][] | undefined;
        readonly geoShape: PropertyValueWireToClient['geoshape'] | undefined;
        readonly geoShapeArray: PropertyValueWireToClient['geoshape'][] | undefined;
        readonly id: PropertyValueWireToClient['integer'];
        readonly integer: PropertyValueWireToClient['integer'] | undefined;
        readonly integerArray: PropertyValueWireToClient['integer'][] | undefined;
        readonly long: PropertyValueWireToClient['long'] | undefined;
        readonly longArray: PropertyValueWireToClient['long'][] | undefined;
        readonly numericTimeseries: PropertyValueWireToClient['numericTimeseries'] | undefined;
        readonly short: PropertyValueWireToClient['short'] | undefined;
        readonly shortArray: PropertyValueWireToClient['short'][] | undefined;
        readonly string: PropertyValueWireToClient['string'] | undefined;
        readonly stringArray: PropertyValueWireToClient['string'][] | undefined;
        readonly stringTimeseries: PropertyValueWireToClient['stringTimeseries'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<ObjectTypeWithAllPropertyTypes, ObjectTypeWithAllPropertyTypes.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof ObjectTypeWithAllPropertyTypes.Props = keyof ObjectTypeWithAllPropertyTypes.Props> = Osdk.Instance<ObjectTypeWithAllPropertyTypes, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof ObjectTypeWithAllPropertyTypes.Props = keyof ObjectTypeWithAllPropertyTypes.Props> = OsdkInstance<OPTIONS, K>;
}
interface ObjectTypeWithAllPropertyTypes extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'ObjectTypeWithAllPropertyTypes';
    __DefinitionMetadata?: {
        objectSet: ObjectTypeWithAllPropertyTypes.ObjectSet;
        props: ObjectTypeWithAllPropertyTypes.Props;
        linksType: ObjectTypeWithAllPropertyTypes.Links;
        strictProps: ObjectTypeWithAllPropertyTypes.StrictProps;
        apiName: 'ObjectTypeWithAllPropertyTypes';
        description: 'A type with all property types';
        displayName: 'ObjectTypeWithAllPropertyTypes';
        icon: {
            type: 'blueprint';
            name: 'objectTypeWithAllPropertyTypes';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'ObjectTypeWithAllPropertyTypes';
        primaryKeyApiName: 'id';
        primaryKeyType: 'integer';
        properties: {
            /**
             * (no ontology metadata)
             */
            attachment: PropertyDef<'attachment', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            attachmentArray: PropertyDef<'attachment', 'nullable', 'array'>;
            /**
             * (no ontology metadata)
             */
            boolean: PropertyDef<'boolean', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            booleanArray: PropertyDef<'boolean', 'nullable', 'array'>;
            /**
             * (no ontology metadata)
             */
            byte: PropertyDef<'byte', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            byteArray: PropertyDef<'byte', 'nullable', 'array'>;
            /**
             * (no ontology metadata)
             */
            date: PropertyDef<'datetime', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            dateArray: PropertyDef<'datetime', 'nullable', 'array'>;
            /**
             * (no ontology metadata)
             */
            dateTime: PropertyDef<'timestamp', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            dateTimeArray: PropertyDef<'timestamp', 'nullable', 'array'>;
            /**
             * (no ontology metadata)
             */
            decimal: PropertyDef<'decimal', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            decimalArray: PropertyDef<'decimal', 'nullable', 'array'>;
            /**
             * (no ontology metadata)
             */
            double: PropertyDef<'double', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            doubleArray: PropertyDef<'double', 'nullable', 'array'>;
            /**
             * (no ontology metadata)
             */
            float: PropertyDef<'float', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            floatArray: PropertyDef<'float', 'nullable', 'array'>;
            /**
             * (no ontology metadata)
             */
            geoPoint: PropertyDef<'geopoint', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            geoPointArray: PropertyDef<'geopoint', 'nullable', 'array'>;
            /**
             * (no ontology metadata)
             */
            geoShape: PropertyDef<'geoshape', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            geoShapeArray: PropertyDef<'geoshape', 'nullable', 'array'>;
            /**
             * (no ontology metadata)
             */
            id: PropertyDef<'integer', 'non-nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            integer: PropertyDef<'integer', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            integerArray: PropertyDef<'integer', 'nullable', 'array'>;
            /**
             * (no ontology metadata)
             */
            long: PropertyDef<'long', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            longArray: PropertyDef<'long', 'nullable', 'array'>;
            /**
             * (no ontology metadata)
             */
            numericTimeseries: PropertyDef<'numericTimeseries', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            short: PropertyDef<'short', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            shortArray: PropertyDef<'short', 'nullable', 'array'>;
            /**
             * (no ontology metadata)
             */
            string: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            stringArray: PropertyDef<'string', 'nullable', 'array'>;
            /**
             * (no ontology metadata)
             */
            stringTimeseries: PropertyDef<'stringTimeseries', 'nullable', 'single'>;
        };
        rid: 'rid.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'id';
        type: 'object';
    };
}
declare const ObjectTypeWithAllPropertyTypes: ObjectTypeWithAllPropertyTypes;

declare namespace RhemmingsObjectWithGtsrProperty2 {
    type PropertyKeys = 'id' | 'type' | 'location' | 'gtsr' | 'timestamp';
    type Links = {};
    interface Props {
        readonly gtsr: PropertyValueWireToClient['geotimeSeriesReference'] | undefined;
        readonly id: PropertyValueWireToClient['string'];
        readonly location: PropertyValueWireToClient['geopoint'] | undefined;
        readonly timestamp: PropertyValueWireToClient['timestamp'] | undefined;
        readonly type: PropertyValueWireToClient['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<RhemmingsObjectWithGtsrProperty2, RhemmingsObjectWithGtsrProperty2.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof RhemmingsObjectWithGtsrProperty2.Props = keyof RhemmingsObjectWithGtsrProperty2.Props> = Osdk.Instance<RhemmingsObjectWithGtsrProperty2, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof RhemmingsObjectWithGtsrProperty2.Props = keyof RhemmingsObjectWithGtsrProperty2.Props> = OsdkInstance<OPTIONS, K>;
}
interface RhemmingsObjectWithGtsrProperty2 extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'RhemmingsObjectWithGtsrProperty2';
    __DefinitionMetadata?: {
        objectSet: RhemmingsObjectWithGtsrProperty2.ObjectSet;
        props: RhemmingsObjectWithGtsrProperty2.Props;
        linksType: RhemmingsObjectWithGtsrProperty2.Links;
        strictProps: RhemmingsObjectWithGtsrProperty2.StrictProps;
        apiName: 'RhemmingsObjectWithGtsrProperty2';
        description: '(rhemmings) Object with GTSR property 2';
        displayName: '(rhemmings) Object with GTSR property 2';
        icon: {
            type: 'blueprint';
            name: 'traffic';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: '(rhemmings) Object with GTSR property 2';
        primaryKeyApiName: 'id';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            gtsr: PropertyDef<'geotimeSeriesReference', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            id: PropertyDef<'string', 'non-nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            location: PropertyDef<'geopoint', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            timestamp: PropertyDef<'timestamp', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            type: PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'ri.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'id';
        type: 'object';
    };
}
declare const RhemmingsObjectWithGtsrProperty2: RhemmingsObjectWithGtsrProperty2;

declare namespace SotSensor {
    type PropertyKeys = 'isEnum' | 'timeSeriesProperty' | 'sensorName' | 'seriesId' | 'wellId';
    type Links = {};
    interface Props {
        readonly isEnum: PropertyValueWireToClient['boolean'] | undefined;
        readonly sensorName: PropertyValueWireToClient['string'] | undefined;
        readonly seriesId: PropertyValueWireToClient['string'];
        readonly timeSeriesProperty: PropertyValueWireToClient['sensorTimeseries'] | undefined;
        readonly wellId: PropertyValueWireToClient['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<SotSensor, SotSensor.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof SotSensor.Props = keyof SotSensor.Props> = Osdk.Instance<SotSensor, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof SotSensor.Props = keyof SotSensor.Props> = OsdkInstance<OPTIONS, K>;
}
interface SotSensor extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'SotSensor';
    __DefinitionMetadata?: {
        objectSet: SotSensor.ObjectSet;
        props: SotSensor.Props;
        linksType: SotSensor.Links;
        strictProps: SotSensor.StrictProps;
        apiName: 'SotSensor';
        description: 'SOT-Sensor';
        displayName: 'SOT-Sensor';
        icon: {
            type: 'blueprint';
            name: 'sotsensor';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'SOT-Sensors';
        primaryKeyApiName: 'seriesId';
        primaryKeyType: 'string';
        properties: {
            /**
             *   display name: 'Is Enum'
             */
            isEnum: PropertyDef<'boolean', 'nullable', 'single'>;
            /**
             *   display name: 'Sensor Name'
             */
            sensorName: PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Series Id'
             */
            seriesId: PropertyDef<'string', 'non-nullable', 'single'>;
            /**
             *   display name: 'Time Series Property'
             */
            timeSeriesProperty: PropertyDef<'sensorTimeseries', 'nullable', 'single'>;
            /**
             *   display name: 'Well Id'
             */
            wellId: PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'rid.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'seriesId';
        type: 'object';
    };
}
declare const SotSensor: SotSensor;

declare namespace StructPerson {
    type PropertyKeys = 'name' | 'address';
    type Links = {};
    interface Props {
        readonly address: {
            city: PropertyValueWireToClient['string'] | undefined;
            state: PropertyValueWireToClient['string'] | undefined;
        } | undefined;
        readonly name: PropertyValueWireToClient['string'];
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<StructPerson, StructPerson.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof StructPerson.Props = keyof StructPerson.Props> = Osdk.Instance<StructPerson, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof StructPerson.Props = keyof StructPerson.Props> = OsdkInstance<OPTIONS, K>;
}
interface StructPerson extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'StructPerson';
    __DefinitionMetadata?: {
        objectSet: StructPerson.ObjectSet;
        props: StructPerson.Props;
        linksType: StructPerson.Links;
        strictProps: StructPerson.StrictProps;
        apiName: 'StructPerson';
        description: 'StructPerson';
        displayName: 'StructPerson';
        icon: {
            type: 'blueprint';
            name: 'traffic';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'StructPeople';
        primaryKeyApiName: 'name';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            address: PropertyDef<{
                city: 'string';
                state: 'string';
            }, 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            name: PropertyDef<'string', 'non-nullable', 'single'>;
        };
        rid: 'ri.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'name';
        type: 'object';
    };
}
declare const StructPerson: StructPerson;

declare namespace StructPersonOpisTeam {
    type PropertyKeys = 'id' | 'age' | 'address';
    type Links = {};
    interface Props {
        readonly address: {
            city: PropertyValueWireToClient['string'] | undefined;
            state: PropertyValueWireToClient['string'] | undefined;
            zipcode: PropertyValueWireToClient['integer'] | undefined;
        } | undefined;
        readonly age: PropertyValueWireToClient['integer'] | undefined;
        readonly id: PropertyValueWireToClient['string'];
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<StructPersonOpisTeam, StructPersonOpisTeam.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof StructPersonOpisTeam.Props = keyof StructPersonOpisTeam.Props> = Osdk.Instance<StructPersonOpisTeam, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof StructPersonOpisTeam.Props = keyof StructPersonOpisTeam.Props> = OsdkInstance<OPTIONS, K>;
}
interface StructPersonOpisTeam extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'StructPersonOpisTeam';
    __DefinitionMetadata?: {
        objectSet: StructPersonOpisTeam.ObjectSet;
        props: StructPersonOpisTeam.Props;
        linksType: StructPersonOpisTeam.Links;
        strictProps: StructPersonOpisTeam.StrictProps;
        apiName: 'StructPersonOpisTeam';
        description: 'StructPersonOpisTeam';
        displayName: 'StructPersonOpisTeam';
        icon: {
            type: 'blueprint';
            name: 'traffic';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'StructPeople';
        primaryKeyApiName: 'id';
        primaryKeyType: 'string';
        properties: {
            /**
             * (no ontology metadata)
             */
            address: PropertyDef<{
                city: 'string';
                state: 'string';
                zipcode: 'integer';
            }, 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            age: PropertyDef<'integer', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            id: PropertyDef<'string', 'non-nullable', 'single'>;
        };
        rid: 'ri.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'name';
        type: 'object';
    };
}
declare const StructPersonOpisTeam: StructPersonOpisTeam;

declare namespace WeatherStation {
    type PropertyKeys = 'stationId' | 'geohash';
    type Links = {};
    interface Props {
        readonly geohash: PropertyValueWireToClient['geopoint'] | undefined;
        readonly stationId: PropertyValueWireToClient['string'];
    }
    type StrictProps = Props;
    interface ObjectSet extends ObjectSet<WeatherStation, WeatherStation.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof WeatherStation.Props = keyof WeatherStation.Props> = Osdk.Instance<WeatherStation, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof WeatherStation.Props = keyof WeatherStation.Props> = OsdkInstance<OPTIONS, K>;
}
interface WeatherStation extends ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'WeatherStation';
    __DefinitionMetadata?: {
        objectSet: WeatherStation.ObjectSet;
        props: WeatherStation.Props;
        linksType: WeatherStation.Links;
        strictProps: WeatherStation.StrictProps;
        apiName: 'WeatherStation';
        description: 'Weather Station';
        displayName: 'Weather Station';
        icon: {
            type: 'blueprint';
            name: 'weather';
            color: 'color';
        };
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'Weather Stations';
        primaryKeyApiName: 'stationId';
        primaryKeyType: 'string';
        properties: {
            /**
             *   display name: 'Geohash',
             *   description: geopoint
             */
            geohash: PropertyDef<'geopoint', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            stationId: PropertyDef<'string', 'non-nullable', 'single'>;
        };
        rid: 'ri.a.b.c.d';
        status: 'ACTIVE';
        titleProperty: 'stationId';
        type: 'object';
    };
}
declare const WeatherStation: WeatherStation;

declare const objects_BgaoNflPlayer: typeof BgaoNflPlayer;
declare const objects_BoundariesUsState: typeof BoundariesUsState;
declare const objects_BuilderDeploymentState: typeof BuilderDeploymentState;
declare const objects_Country_1: typeof Country_1;
declare const objects_DherlihyComplexObject: typeof DherlihyComplexObject;
declare const objects_Employee: typeof Employee;
declare const objects_FintrafficAis: typeof FintrafficAis;
declare const objects_GtfsTripTrackObject: typeof GtfsTripTrackObject;
declare const objects_McAirportStruct: typeof McAirportStruct;
declare const objects_MnayanOsdkMediaObject: typeof MnayanOsdkMediaObject;
declare const objects_MtaBus: typeof MtaBus;
declare const objects_NbaPlayer: typeof NbaPlayer;
declare const objects_ObjectTypeWithAllPropertyTypes: typeof ObjectTypeWithAllPropertyTypes;
declare const objects_OsdkTestObject: typeof OsdkTestObject;
declare const objects_Person: typeof Person;
declare const objects_RhemmingsObjectWithGtsrProperty2: typeof RhemmingsObjectWithGtsrProperty2;
declare const objects_SotSensor: typeof SotSensor;
declare const objects_StateTerritory: typeof StateTerritory;
declare const objects_StructPerson: typeof StructPerson;
declare const objects_StructPersonOpisTeam: typeof StructPersonOpisTeam;
declare const objects_Todo: typeof Todo;
declare const objects_Venture: typeof Venture;
declare const objects_WeatherStation: typeof WeatherStation;
declare namespace objects {
  export { objects_BgaoNflPlayer as BgaoNflPlayer, objects_BoundariesUsState as BoundariesUsState, objects_BuilderDeploymentState as BuilderDeploymentState, objects_Country_1 as Country_1, objects_DherlihyComplexObject as DherlihyComplexObject, objects_Employee as Employee, objects_FintrafficAis as FintrafficAis, objects_GtfsTripTrackObject as GtfsTripTrackObject, objects_McAirportStruct as McAirportStruct, objects_MnayanOsdkMediaObject as MnayanOsdkMediaObject, objects_MtaBus as MtaBus, objects_NbaPlayer as NbaPlayer, objects_ObjectTypeWithAllPropertyTypes as ObjectTypeWithAllPropertyTypes, objects_OsdkTestObject as OsdkTestObject, objects_Person as Person, objects_RhemmingsObjectWithGtsrProperty2 as RhemmingsObjectWithGtsrProperty2, objects_SotSensor as SotSensor, objects_StateTerritory as StateTerritory, objects_StructPerson as StructPerson, objects_StructPersonOpisTeam as StructPersonOpisTeam, objects_Todo as Todo, objects_Venture as Venture, objects_WeatherStation as WeatherStation };
}

declare namespace getNamesOfCustomersFromCountry {
    interface Signature {
        (query: getNamesOfCustomersFromCountry.Parameters): Promise<getNamesOfCustomersFromCountry.ReturnType>;
    }
    interface Parameters {
        /**
         * (no ontology metadata)
         */
        readonly country: QueryParam.PrimitiveType<'string'>;
    }
    type ReturnType = Array<QueryResult.PrimitiveType<'string'>>;
}
interface getNamesOfCustomersFromCountry extends QueryDefinition<getNamesOfCustomersFromCountry.Signature>, VersionBound<$ExpectedClientVersion> {
    __DefinitionMetadata?: {
        apiName: 'getNamesOfCustomersFromCountry';
        rid: 'ri.function-registry.main.function.c3e58d52-8430-44ee-9f0b-3785d9a9bdda';
        type: 'query';
        version: '0.1.1';
        parameters: {
            /**
             * (no ontology metadata)
             */
            country: {
                nullable: false;
                type: 'string';
            };
        };
        output: {
            multiplicity: true;
            nullable: false;
            type: 'string';
        };
        signature: getNamesOfCustomersFromCountry.Signature;
    };
    apiName: 'getNamesOfCustomersFromCountry';
    type: 'query';
    version: '0.1.1';
    osdkMetadata: typeof $osdkMetadata;
}
declare const getNamesOfCustomersFromCountry: getNamesOfCustomersFromCountry;

declare namespace getTodoCount {
    interface Signature {
        (): Promise<getTodoCount.ReturnType>;
    }
    type ReturnType = QueryResult.PrimitiveType<'integer'>;
}
interface getTodoCount extends QueryDefinition<getTodoCount.Signature>, VersionBound<$ExpectedClientVersion> {
    __DefinitionMetadata?: {
        apiName: 'getTodoCount';
        rid: 'query.rid2';
        type: 'query';
        version: '0.1.2';
        parameters: {};
        output: {
            nullable: false;
            type: 'integer';
        };
        signature: getTodoCount.Signature;
    };
    apiName: 'getTodoCount';
    type: 'query';
    version: '0.1.2';
    osdkMetadata: typeof $osdkMetadata;
}
declare const getTodoCount: getTodoCount;

declare namespace queryTakesAllParameterTypes {
    interface Signature {
        /**
         * description of the query that takes all parameter types
         */
        (query: queryTakesAllParameterTypes.Parameters): Promise<queryTakesAllParameterTypes.ReturnType>;
    }
    interface Parameters {
        /**
         *   description: an array of strings
         */
        readonly array: ReadonlyArray<QueryParam.PrimitiveType<'string'>>;
        /**
         * (no ontology metadata)
         */
        readonly attachment: QueryParam.PrimitiveType<'attachment'>;
        /**
         * (no ontology metadata)
         */
        readonly boolean: QueryParam.PrimitiveType<'boolean'>;
        /**
         * (no ontology metadata)
         */
        readonly date: QueryParam.PrimitiveType<'datetime'>;
        /**
         *   description: a double parameter
         */
        readonly double: QueryParam.PrimitiveType<'double'>;
        /**
         * (no ontology metadata)
         */
        readonly float: QueryParam.PrimitiveType<'float'>;
        /**
         * (no ontology metadata)
         */
        readonly functionMap: Record<QueryParam.PrimitiveType<'float'>, QueryParam.PrimitiveType<'string'>>;
        /**
         * (no ontology metadata)
         */
        readonly functionMapObjectKey: Record<ObjectSpecifier<Todo>, QueryParam.PrimitiveType<'string'>>;
        /**
         * (no ontology metadata)
         */
        readonly integer: QueryParam.PrimitiveType<'integer'>;
        /**
         * (no ontology metadata)
         */
        readonly long: QueryParam.PrimitiveType<'long'>;
        /**
         * (no ontology metadata)
         */
        readonly object: QueryParam.ObjectType<Todo>;
        /**
         * (no ontology metadata)
         */
        readonly objectSet: QueryParam.ObjectSetType<Todo>;
        /**
         *   description: a set of strings
         */
        readonly set: ReadonlySet<QueryParam.PrimitiveType<'string'>>;
        /**
         * (no ontology metadata)
         */
        readonly string: QueryParam.PrimitiveType<'string'>;
        /**
         *   description: a struct with some fields
         */
        readonly struct: {
            readonly id: QueryParam.PrimitiveType<'integer'>;
            readonly name: QueryParam.PrimitiveType<'string'>;
        };
        /**
         * (no ontology metadata)
         */
        readonly threeDimensionalAggregation: QueryParam.ThreeDimensionalAggregationType<QueryParam.RangeKey<'date'>, QueryParam.RangeKey<'timestamp'>, 'date'>;
        /**
         * (no ontology metadata)
         */
        readonly timestamp: QueryParam.PrimitiveType<'timestamp'>;
        /**
         * (no ontology metadata)
         */
        readonly twoDimensionalAggregation: QueryParam.TwoDimensionalAggregationType<'string', 'double'>;
        /**
         *   description: a union of strings and integers
         */
        readonly unionNonNullable: QueryParam.PrimitiveType<'string'> | QueryParam.PrimitiveType<'integer'>;
        /**
         *   description: a union of strings and integers but its optional
         */
        readonly unionNullable?: QueryParam.PrimitiveType<'string'> | QueryParam.PrimitiveType<'integer'>;
    }
    type ReturnType = QueryResult.PrimitiveType<'string'>;
}
interface queryTakesAllParameterTypes extends QueryDefinition<queryTakesAllParameterTypes.Signature>, VersionBound<$ExpectedClientVersion> {
    __DefinitionMetadata?: {
        apiName: 'queryTakesAllParameterTypes';
        description: 'description of the query that takes all parameter types';
        displayName: 'qTAPT';
        rid: 'query.rid';
        type: 'query';
        version: 'version';
        parameters: {
            /**
             *   description: an array of strings
             */
            array: {
                description: 'an array of strings';
                multiplicity: true;
                nullable: false;
                type: 'string';
            };
            /**
             * (no ontology metadata)
             */
            attachment: {
                nullable: false;
                type: 'attachment';
            };
            /**
             * (no ontology metadata)
             */
            boolean: {
                nullable: false;
                type: 'boolean';
            };
            /**
             * (no ontology metadata)
             */
            date: {
                nullable: false;
                type: 'date';
            };
            /**
             *   description: a double parameter
             */
            double: {
                description: 'a double parameter';
                nullable: false;
                type: 'double';
            };
            /**
             * (no ontology metadata)
             */
            float: {
                nullable: false;
                type: 'float';
            };
            /**
             * (no ontology metadata)
             */
            functionMap: {
                keyType: {
                    type: 'float';
                    nullable: false;
                };
                nullable: false;
                type: 'map';
                valueType: {
                    type: 'string';
                    nullable: false;
                };
            };
            /**
             * (no ontology metadata)
             */
            functionMapObjectKey: {
                keyType: {
                    type: 'object';
                    object: 'Todo';
                    nullable: false;
                };
                nullable: false;
                type: 'map';
                valueType: {
                    type: 'string';
                    nullable: false;
                };
            };
            /**
             * (no ontology metadata)
             */
            integer: {
                nullable: false;
                type: 'integer';
            };
            /**
             * (no ontology metadata)
             */
            long: {
                nullable: false;
                type: 'long';
            };
            /**
             * (no ontology metadata)
             */
            object: {
                nullable: false;
                object: 'Todo';
                type: 'object';
                __OsdkTargetType?: Todo;
            };
            /**
             * (no ontology metadata)
             */
            objectSet: {
                nullable: false;
                objectSet: 'Todo';
                type: 'objectSet';
                __OsdkTargetType?: Todo;
            };
            /**
             *   description: a set of strings
             */
            set: {
                description: 'a set of strings';
                nullable: false;
                set: {
                    type: 'string';
                    nullable: false;
                };
                type: 'set';
            };
            /**
             * (no ontology metadata)
             */
            string: {
                nullable: false;
                type: 'string';
            };
            /**
             *   description: a struct with some fields
             */
            struct: {
                description: 'a struct with some fields';
                nullable: false;
                struct: {
                    name: {
                        type: 'string';
                        nullable: false;
                    };
                    id: {
                        type: 'integer';
                        nullable: false;
                    };
                };
                type: 'struct';
            };
            /**
             * (no ontology metadata)
             */
            threeDimensionalAggregation: {
                nullable: false;
                threeDimensionalAggregation: {
                    keyType: 'range';
                    keySubtype: 'date';
                    valueType: {
                        keyType: 'range';
                        keySubtype: 'timestamp';
                        valueType: 'date';
                    };
                };
                type: 'threeDimensionalAggregation';
            };
            /**
             * (no ontology metadata)
             */
            timestamp: {
                nullable: false;
                type: 'timestamp';
            };
            /**
             * (no ontology metadata)
             */
            twoDimensionalAggregation: {
                nullable: false;
                twoDimensionalAggregation: {
                    keyType: 'string';
                    valueType: 'double';
                };
                type: 'twoDimensionalAggregation';
            };
            /**
             *   description: a union of strings and integers
             */
            unionNonNullable: {
                description: 'a union of strings and integers';
                nullable: false;
                type: 'union';
                union: [
                    {
                        type: 'string';
                        nullable: false;
                    },
                    {
                        type: 'integer';
                        nullable: false;
                    }
                ];
            };
            /**
             *   description: a union of strings and integers but its optional
             */
            unionNullable: {
                description: 'a union of strings and integers but its optional';
                nullable: true;
                type: 'union';
                union: [
                    {
                        type: 'string';
                        nullable: false;
                    },
                    {
                        type: 'integer';
                        nullable: false;
                    }
                ];
            };
        };
        output: {
            nullable: false;
            type: 'string';
        };
        signature: queryTakesAllParameterTypes.Signature;
    };
    apiName: 'queryTakesAllParameterTypes';
    type: 'query';
    version: 'version';
    osdkMetadata: typeof $osdkMetadata;
}
declare const queryTakesAllParameterTypes: queryTakesAllParameterTypes;

declare const queries_getNamesOfCustomersFromCountry: typeof getNamesOfCustomersFromCountry;
declare const queries_getTodoCount: typeof getTodoCount;
declare const queries_queryTakesAllParameterTypes: typeof queryTakesAllParameterTypes;
declare namespace queries {
  export { queries_getNamesOfCustomersFromCountry as getNamesOfCustomersFromCountry, queries_getTodoCount as getTodoCount, queries_queryTakesAllParameterTypes as queryTakesAllParameterTypes };
}

export { actions as $Actions, interfaces as $Interfaces, objects as $Objects, queries as $Queries, $ontologyRid, $osdkMetadata, Athlete, BgaoNflPlayer, BoundariesUsState, BuilderDeploymentState, Country_1, DherlihyComplexObject, Employee, FintrafficAis, FooInterface, GtfsTripTrackObject, InterfaceNoProps, McAirportStruct, MnayanOsdkMediaObject, MtaBus, NbaPlayer, ObjectTypeWithAllPropertyTypes, OsdkTestInterface, OsdkTestObject, Person, RhemmingsObjectWithGtsrProperty2, SotSensor, StateTerritory, StructPerson, StructPersonOpisTeam, Todo, Venture, WeatherStation, actionTakesAllParameterTypes, assignEmployee1, createFooInterface, createMediaObject, createMediaViaFunction, createOsdkTestObject, createStructPerson, createStructPersonOpiTeam, createTodo, deleteFooInterface, deleteOsdkTestObject, editOsdkTestObject, getNamesOfCustomersFromCountry, getTodoCount, queryTakesAllParameterTypes };
