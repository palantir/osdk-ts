import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
  MinObjectDef as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client.api';

export namespace Employee {
  export type PropertyKeys = 'employeeId' | 'class' | 'fullName' | 'office' | 'startDate' | 'employeeStatus';

  export interface Links {
    readonly lead: $SingleLinkAccessor<Employee>;
    readonly peeps: Employee.ObjectSet;
  }

  export interface Props {
    readonly class: $PropType['string'] | undefined;
    readonly employeeId: $PropType['integer'] | undefined;
    readonly employeeStatus: $PropType['numericTimeseries'] | undefined;
    readonly fullName: $PropType['string'] | undefined;
    readonly office: $PropType['integer'] | undefined;
    readonly startDate: $PropType['datetime'] | undefined;
  }
  export interface StrictProps {
    readonly class: $PropType['string'] | undefined;
    readonly employeeId: $PropType['integer'];
    readonly employeeStatus: $PropType['numericTimeseries'] | undefined;
    readonly fullName: $PropType['string'] | undefined;
    readonly office: $PropType['integer'] | undefined;
    readonly startDate: $PropType['datetime'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<Employee, Employee.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Employee.Props = keyof Employee.Props,
  > = $Osdk<Employee, K | OPTIONS>;
}

export interface Employee extends $ObjectTypeDefinition<'Employee', Employee> {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Employee';
  __DefinitionMetadata?: {
    objectSet: Employee.ObjectSet;
    props: Employee.Props;
    linksType: Employee.Links;
    strictProps: Employee.StrictProps;
    apiName: 'Employee';
    description: 'A full-time or part-time employee of our firm';
    displayName: 'Employee';
    icon: {
      type: 'blueprint';
      name: 'employee';
      color: 'blue';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      lead: $ObjectTypeLinkDefinition<Employee, false>;
      peeps: $ObjectTypeLinkDefinition<Employee, true>;
    };
    pluralDisplayName: 'Employees';
    primaryKeyApiName: 'employeeId';
    primaryKeyType: 'integer';
    properties: {
      /**
       * (no ontology metadata)
       */
      class: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      employeeId: $PropertyDef<'integer', 'non-nullable', 'single'>;
      /**
       *   description: TimeSeries of the status of the employee
       */
      employeeStatus: $PropertyDef<'numericTimeseries', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      fullName: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   description: The unique of the employee's assigned office. This is some more text.
       */
      office: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       *   description: The date the employee was hired (most recently, if they were re-hired)
       */
      startDate: $PropertyDef<'datetime', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.401ac022-89eb-4591-8b7e-0aa912b9efb44';
    status: 'ACTIVE';
    type: 'object';
  };
}

export const Employee: Employee = {
  type: 'object',
  apiName: 'Employee',
  osdkMetadata: $osdkMetadata,
};
