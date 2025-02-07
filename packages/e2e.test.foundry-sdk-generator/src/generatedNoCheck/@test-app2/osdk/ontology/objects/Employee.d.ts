import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/api';
export declare namespace Employee {
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
export declare const Employee: Employee;
