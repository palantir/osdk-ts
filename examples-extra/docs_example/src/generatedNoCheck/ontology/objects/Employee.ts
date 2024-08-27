import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
  PropertyDef as $PropertyDef,
  VersionBound as $VersionBound,
} from '@osdk/api';
import type {
  AggregateOpts as $AggregateOpts,
  AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
  AggregationsResults as $AggregationsResults,
  Augments as $Augments,
  ConvertProps as $ConvertProps,
  DefaultToFalse as $DefaultToFalse,
  FetchPageArgs as $FetchPageArgs,
  LinkedType as $LinkedType,
  LinkNames as $LinkNames,
  NullabilityAdherence as $NullabilityAdherence,
  NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  OsdkObjectPropertyType as $OsdkObjectPropertyType,
  PageResult as $PageResult,
  PropertyValueClientToWire as $PropertyValueClientToWire,
  PropertyValueWireToClient as $PropType,
  Result as $Result,
  SelectArg as $SelectArg,
  SingleLinkAccessor as $SingleLinkAccessor,
  ValidToFrom as $ValidToFrom,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

export namespace Employee {
  export type PropertyKeys = $ObjectOrInterfacePropertyKeysFrom2<Employee>;

  export interface Links {
    lead: $SingleLinkAccessor<Employee>;
    peeps: Employee.ObjectSet;
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

  export interface ObjectSet extends $ObjectSet<Employee, Employee.ObjectSet> {
    aggregate: <AO extends $AggregateOpts<Employee>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Employee, AO>,
    ) => Promise<$AggregationsResults<Employee, AO>>;

    pivotTo: <L extends $LinkNames<Employee>>(type: L) => $LinkedType<Employee, L>['objectSet']; // ObjectSet<LinkedType<Employee, L>>;

    fetchOne: <
      L extends Employee.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Employee['primaryKeyType']],
      options?: $SelectArg<Employee, L, R, S>,
    ) => Promise<
      Employee.OsdkObject<
        (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
        L
      >
    >;

    fetchOneWithErrors: <
      L extends Employee.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Employee['primaryKeyType']],
      options?: $SelectArg<Employee, L, R, S>,
    ) => Promise<
      $Result<
        Employee.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    fetchPage: <
      L extends Employee.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Employee, L, R, A, S>,
    ) => Promise<
      $PageResult<
        Employee.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    fetchPageWithErrors: <
      L extends Employee.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Employee, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          Employee.OsdkObject<
            (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
            L
          >
        >
      >
    >;

    asyncIter: () => AsyncIterableIterator<Employee.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'Employee', Employee>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Employee.ObjectSet;
    props: Employee.Props;
    strictProps: Employee.StrictProps;
    description: 'A full-time or part-time employee of our firm';
    links: {
      lead: $ObjectTypeLinkDefinition<Employee, false>;
      peeps: $ObjectTypeLinkDefinition<Employee, true>;
    };
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
  }

  export type OsdkObject<
    OPTIONS extends '$strict' | '$notStrict' | '$rid' = '$strict',
    K extends keyof Employee.Props = keyof Employee.Props,
  > = $Osdk<Employee, K | OPTIONS> &
    Pick<
      // Employee.Props
      OPTIONS extends '$notStrict' ? Employee.Props : Employee.StrictProps,
      K
    > & {
      $link: Employee.Links;
      $title: string | undefined; // FIXME
      $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'integer'; nullable: false }, true>;

      $as: <NEW_Q extends $ValidToFrom<Employee>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<Employee, NEW_Q, K>>;
    } & $OsdkObject<'Employee'>;
}

/** @deprecated use Employee.Definition **/
export type Employee = Employee.Definition;

export const Employee: Employee & $VersionBound<$ExpectedClientVersion> = {
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
