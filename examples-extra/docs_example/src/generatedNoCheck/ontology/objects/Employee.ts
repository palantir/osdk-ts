import type { ObjectTypeLinkDefinition, PropertyDef, VersionBound } from '@osdk/api';
import { Osdk } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

import {
  ObjectSet as $ObjectSet,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  AggregateOpts,
  AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
  AggregationsResults,
  Augments,
  ConvertProps,
  FetchPageArgs,
  LinkedType,
  LinkNames,
  NullabilityAdherence,
  NullabilityAdherenceDefault,
  OsdkObjectPropertyType,
  PageResult,
  PropertyValueClientToWire,
  Result,
  SelectArg,
  SingleLinkAccessor,
  ValidToFrom,
  WhereClause,
} from '@osdk/client.api';

import { ObjectOrInterfacePropertyKeysFrom2, ObjectTypeDefinition } from '@osdk/api';

export type PropertyKeys$Employee = ObjectOrInterfacePropertyKeysFrom2<Employee>;

export interface OsdkObjectLinks$Employee {
  lead: SingleLinkAccessor<Employee>;
  peeps: Employee['objectSet'];
}

export namespace Employee {
  export interface Props {
    /*readonly*/ class: $PropType['string'] | undefined;
    /*readonly*/ employeeId: $PropType['integer'] | undefined;
    /*readonly*/ employeeStatus: $PropType['numericTimeseries'] | undefined;
    /*readonly*/ fullName: $PropType['string'] | undefined;
    /*readonly*/ office: $PropType['integer'] | undefined;
    /*readonly*/ startDate: $PropType['datetime'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ class: $PropType['string'] | undefined;
    /*readonly*/ employeeId: $PropType['integer'];
    /*readonly*/ employeeStatus: $PropType['numericTimeseries'] | undefined;
    /*readonly*/ fullName: $PropType['string'] | undefined;
    /*readonly*/ office: $PropType['integer'] | undefined;
    /*readonly*/ startDate: $PropType['datetime'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<Employee, Employee.ObjectSet> {
    aggregate: <AO extends AggregateOpts<Employee>>(
      req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Employee, AO>,
    ) => Promise<AggregationsResults<Employee, AO>>;

    where: (clause: WhereClause<Employee>) => Employee.ObjectSet;

    union: (...objectSets: ReadonlyArray<Employee.ObjectSet>) => Employee.ObjectSet;

    intersect: (...objectSets: ReadonlyArray<Employee.ObjectSet>) => Employee.ObjectSet;

    subtract: (...objectSets: ReadonlyArray<Employee.ObjectSet>) => Employee.ObjectSet;

    pivotTo: <L extends LinkNames<Employee>>(type: L) => LinkedType<Employee, L>['objectSet']; // ObjectSet<LinkedType<Employee, L>>;

    fetchOne: <
      L extends PropertyKeys$Employee,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[Employee['primaryKeyType']],
      options?: SelectArg<Employee, L, R, S>,
    ) => Promise<
      Employee.OsdkObject<L, S extends false ? false : true>
      //  SingleOsdkResult<Employee, L, R, S>
    >;

    fetchOneWithErrors: <
      L extends PropertyKeys$Employee,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[Employee['primaryKeyType']],
      options?: SelectArg<Employee, L, R, S>,
    ) => Promise<
      Result<
        Employee.OsdkObject<L, S extends false ? false : true>
        //  SingleOsdkResult<Employee, L, R, S>
      >
    >;

    fetchPage: <
      L extends PropertyKeys$Employee,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<Employee, L, R, A, S>,
    ) => Promise<
      PageResult<Employee.OsdkObject<L, S extends false ? false : true>>
      // FetchPageResult<Employee, L, R, S>
    >;

    fetchPageWithErrors: <
      L extends PropertyKeys$Employee,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<Employee, L, R, A, S>,
    ) => Promise<
      Result<
        PageResult<Employee.OsdkObject<L, S extends false ? false : true>>
        //  FetchPageResult<Employee, L, R, S>
      >
    >;

    asyncIter: () => AsyncIterableIterator<Employee.OsdkObject>;
  }

  export interface Definition extends ObjectTypeDefinition<'Employee', Employee>, VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Employee.ObjectSet;
    props: Employee.Props;
    strictProps: Employee.StrictProps;
    description: 'A full-time or part-time employee of our firm';
    links: {
      lead: ObjectTypeLinkDefinition<Employee, false>;
      peeps: ObjectTypeLinkDefinition<Employee, true>;
    };
    primaryKeyApiName: 'employeeId';
    primaryKeyType: 'integer';
    properties: {
      /**
       * (no ontology metadata)
       */
      class: PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      employeeId: PropertyDef<'integer', 'non-nullable', 'single'>;
      /**
       *   description: TimeSeries of the status of the employee
       */
      employeeStatus: PropertyDef<'numericTimeseries', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      fullName: PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   description: The unique of the employee's assigned office. This is some more text.
       */
      office: PropertyDef<'integer', 'nullable', 'single'>;
      /**
       *   description: The date the employee was hired (most recently, if they were re-hired)
       */
      startDate: PropertyDef<'datetime', 'nullable', 'single'>;
    };
  }

  export type OsdkObject<K extends keyof Employee.Props = keyof Employee.Props, S extends boolean = true> = Osdk<
    Employee,
    K | (S extends false ? '$notStrict' : '$strict')
  > &
    Pick<
      // Employee.Props
      S extends false ? Employee.Props : Employee.StrictProps,
      K
    > & {
      $link: OsdkObjectLinks$Employee;
      $title: string | undefined; // FIXME
      $primaryKey: OsdkObjectPropertyType<{ multiplicity: false; type: 'integer'; nullable: false }, true>;

      $as: <NEW_Q extends ValidToFrom<Employee>>(type: NEW_Q | string) => Osdk<NEW_Q, ConvertProps<Employee, NEW_Q, K>>;
    } & $OsdkObject<'Employee'>;
}

/** @deprecated use Employee.Definition **/
export type Employee = Employee.Definition;

export const Employee: Employee & VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  strictProps: undefined as any,
  apiName: 'Employee',
  description: 'A full-time or part-time employee of our firm',
  links: {
    lead: {
      multiplicity: false,
      targetType: 'Employee',
    },
    peeps: {
      multiplicity: true,
      targetType: 'Employee',
    },
  },
  primaryKeyApiName: 'employeeId',
  primaryKeyType: 'integer',
  properties: {
    employeeId: {
      multiplicity: false,
      type: 'integer',
      nullable: false,
    },
    class: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    fullName: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    office: {
      multiplicity: false,
      description: "The unique of the employee's assigned office. This is some more text.",
      type: 'integer',
      nullable: true,
    },
    startDate: {
      multiplicity: false,
      description: 'The date the employee was hired (most recently, if they were re-hired)',
      type: 'datetime',
      nullable: true,
    },
    employeeStatus: {
      multiplicity: false,
      description: 'TimeSeries of the status of the employee',
      type: 'numericTimeseries',
      nullable: true,
    },
  },
  type: 'object',
};
