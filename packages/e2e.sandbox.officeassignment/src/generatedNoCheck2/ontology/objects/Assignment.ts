import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Employee } from './Employee.js';
import type { Floor } from './Floor.js';
import type { Manager } from './Manager.js';
import type { Office } from './Office.js';
import type { StatusUpdate } from './StatusUpdate.js';
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
  LinkDef as $LinkDef,
} from '@osdk/client';
import { createLinkDef as $createLinkDef } from '@osdk/client';

export namespace Assignment {
  export type PropertyKeys =
    | 'assignmentId'
    | 'assignmentStatus'
    | 'assignmentType'
    | 'employeeId'
    | 'endDate'
    | 'floorId'
    | 'function'
    | 'managerId'
    | 'officeId'
    | 'startDate'
    | 'tenureDays'
    | 'title';

  export interface Links {
    readonly employee: $SingleLinkAccessor<Employee>;
    readonly floor: $SingleLinkAccessor<Floor>;
    readonly manager: $SingleLinkAccessor<Manager>;
    readonly office: $SingleLinkAccessor<Office>;
    readonly statusUpdate: StatusUpdate.ObjectSet;
  }

  export interface LinkTokens {
    readonly employee: $LinkDef<Assignment, Employee, 'one'>;
    readonly floor: $LinkDef<Assignment, Floor, 'one'>;
    readonly manager: $LinkDef<Assignment, Manager, 'one'>;
    readonly office: $LinkDef<Assignment, Office, 'one'>;
    readonly statusUpdate: $LinkDef<Assignment, StatusUpdate, 'many'>;
  }

  export interface Props {
    /**
     *   property status: active
     *
     *   display name: 'Assignment ID',
     *
     *   description: Unique identifier for the assignment.
     */
    readonly assignmentId: $PropType['string'];
    /**
     *   property status: active
     *
     *   display name: 'Assignment Status',
     *
     *   description: Active | Ended.
     */
    readonly assignmentStatus: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Assignment Type',
     *
     *   description: Permanent | Contract | Secondment.
     */
    readonly assignmentType: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Employee ID',
     *
     *   description: Foreign key to the Employee holding this assignment.
     */
    readonly employeeId: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'End Date',
     *
     *   description: Date the assignment ended; null while active.
     */
    readonly endDate: $PropType['datetime'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Floor ID',
     *
     *   description: Foreign key to the Floor.
     */
    readonly floorId: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Function',
     *
     *   description: Team / function for the assignment.
     */
    readonly function: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Manager ID',
     *
     *   description: Foreign key to the Manager.
     */
    readonly managerId: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Office ID',
     *
     *   description: Foreign key to the Office.
     */
    readonly officeId: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Start Date',
     *
     *   description: Date the assignment started.
     */
    readonly startDate: $PropType['datetime'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Tenure Days',
     *
     *   description: Length of the assignment in days.
     */
    readonly tenureDays: $PropType['double'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Title',
     *
     *   description: Role title for the assignment.
     */
    readonly title: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Assignment, Assignment.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Assignment.Props = keyof Assignment.Props,
  > = $Osdk.Instance<Assignment, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Assignment.Props = keyof Assignment.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Assignment extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Assignment';
  primaryKeyApiName: 'assignmentId';
  primaryKeyType: 'string';
  links: Assignment.LinkTokens;
  __DefinitionMetadata?: {
    objectSet: Assignment.ObjectSet;
    props: Assignment.Props;
    linksType: Assignment.Links;
    strictProps: Assignment.StrictProps;
    apiName: 'Assignment';
    description: 'The central hub object: a placement of an Employee into an Office/Floor under a Manager. Owns the one-to-many timeline of Status Updates that drives the latest-value-of-type derivation. Base app filter: assignmentType == Permanent AND assignmentStatus == Active.';
    displayName: 'Assignment';
    icon: {
      type: 'blueprint';
      color: '#2D72D2';
      name: 'briefcase';
    };
    implements: [];
    interfaceLinkMap: {};
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      employee: $ObjectMetadata.Link<Employee, false>;
      floor: $ObjectMetadata.Link<Floor, false>;
      manager: $ObjectMetadata.Link<Manager, false>;
      office: $ObjectMetadata.Link<Office, false>;
      statusUpdate: $ObjectMetadata.Link<StatusUpdate, true>;
    };
    pluralDisplayName: 'Assignments';
    primaryKeyApiName: 'assignmentId';
    primaryKeyType: 'string';
    properties: {
      /**
       *   property status: active
       *
       *   display name: 'Assignment ID',
       *
       *   description: Unique identifier for the assignment.
       */
      assignmentId: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Assignment Status',
       *
       *   description: Active | Ended.
       */
      assignmentStatus: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Assignment Type',
       *
       *   description: Permanent | Contract | Secondment.
       */
      assignmentType: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Employee ID',
       *
       *   description: Foreign key to the Employee holding this assignment.
       */
      employeeId: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'End Date',
       *
       *   description: Date the assignment ended; null while active.
       */
      endDate: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Floor ID',
       *
       *   description: Foreign key to the Floor.
       */
      floorId: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Function',
       *
       *   description: Team / function for the assignment.
       */
      function: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Manager ID',
       *
       *   description: Foreign key to the Manager.
       */
      managerId: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Office ID',
       *
       *   description: Foreign key to the Office.
       */
      officeId: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Start Date',
       *
       *   description: Date the assignment started.
       */
      startDate: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Tenure Days',
       *
       *   description: Length of the assignment in days.
       */
      tenureDays: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Title',
       *
       *   description: Role title for the assignment.
       */
      title: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.6720b526-a510-456d-b328-73bfeb8471d7';
    status: 'ACTIVE';
    titleProperty: 'assignmentId';
    type: 'object';
    visibility: 'PROMINENT';
  };
}

export const Assignment = {
  type: 'object',
  apiName: 'Assignment',
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: 'assignmentId',
  primaryKeyType: 'string',
  links: {
    employee: $createLinkDef('Assignment', 'employee', 'Employee', false, false),
    floor: $createLinkDef('Assignment', 'floor', 'Floor', false, false),
    manager: $createLinkDef('Assignment', 'manager', 'Manager', false, false),
    office: $createLinkDef('Assignment', 'office', 'Office', false, false),
    statusUpdate: $createLinkDef('Assignment', 'statusUpdate', 'StatusUpdate', true, false),
  },
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.6720b526-a510-456d-b328-73bfeb8471d7',
  },
} satisfies Assignment & { internalDoNotUseMetadata: { rid: string } } as Assignment;
