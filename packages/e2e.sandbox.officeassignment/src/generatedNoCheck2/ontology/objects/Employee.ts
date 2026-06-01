import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Assignment } from './Assignment.js';
import type {
  PropertyKeys as $PropertyKeys,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectMetadata as $ObjectMetadata,
} from '@osdk/client';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client';

export namespace Employee {
  export type PropertyKeys = 'email' | 'employeeId' | 'fullName' | 'homeRegion' | 'joinedDate';

  export interface Links {
    readonly assignments: Assignment.ObjectSet;
  }

  export interface Props {
    /**
     *   property status: active
     *
     *   display name: 'Email',
     *
     *   description: Work email address.
     */
    readonly email: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Employee ID',
     *
     *   description: Unique identifier for the employee.
     */
    readonly employeeId: $PropType['string'];
    /**
     *   property status: active
     *
     *   display name: 'Full Name',
     *
     *   description: The employee's full display name.
     */
    readonly fullName: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Home Region',
     *
     *   description: Region the employee is based in.
     */
    readonly homeRegion: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Joined Date',
     *
     *   description: Date the employee joined the company.
     */
    readonly joinedDate: $PropType['datetime'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Employee, Employee.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Employee.Props = keyof Employee.Props,
  > = $Osdk.Instance<Employee, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Employee.Props = keyof Employee.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Employee extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Employee';
  primaryKeyApiName: 'employeeId';
  primaryKeyType: 'string';
  __DefinitionMetadata?: {
    objectSet: Employee.ObjectSet;
    props: Employee.Props;
    linksType: Employee.Links;
    strictProps: Employee.StrictProps;
    apiName: 'Employee';
    description: 'A person employed by the company. One Employee can hold many Assignments over time.';
    displayName: 'Employee';
    icon: {
      type: 'blueprint';
      color: '#2D72D2';
      name: 'person';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      assignments: $ObjectMetadata.Link<Assignment, true>;
    };
    pluralDisplayName: 'Employees';
    primaryKeyApiName: 'employeeId';
    primaryKeyType: 'string';
    properties: {
      /**
       *   property status: active
       *
       *   display name: 'Email',
       *
       *   description: Work email address.
       */
      email: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Employee ID',
       *
       *   description: Unique identifier for the employee.
       */
      employeeId: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Full Name',
       *
       *   description: The employee's full display name.
       */
      fullName: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Home Region',
       *
       *   description: Region the employee is based in.
       */
      homeRegion: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Joined Date',
       *
       *   description: Date the employee joined the company.
       */
      joinedDate: $PropertyDef<'datetime', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.679d471d-610f-4d7c-915f-c67060c5d4c0';
    status: 'ACTIVE';
    titleProperty: 'fullName';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const Employee = {
  type: 'object',
  apiName: 'Employee',
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: 'employeeId',
  primaryKeyType: 'string',
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.679d471d-610f-4d7c-915f-c67060c5d4c0',
  },
} satisfies Employee & { internalDoNotUseMetadata: { rid: string } } as Employee;
