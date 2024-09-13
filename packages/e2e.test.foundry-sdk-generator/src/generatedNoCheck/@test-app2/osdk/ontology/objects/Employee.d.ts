import type { ObjectTypeDefinition as $ObjectTypeDefinition, ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition, PropertyDef as $PropertyDef } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType, SingleLinkAccessor as $SingleLinkAccessor } from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Office } from './Office.js';
export declare namespace Employee {
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
export declare const Employee: Employee;
