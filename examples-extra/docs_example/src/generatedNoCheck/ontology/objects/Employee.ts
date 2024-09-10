import type {
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
  IsAny as $IsAny,
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
  export type PropertyKeys = 'employeeId' | 'class' | 'fullName' | 'office' | 'startDate' | 'employeeStatus';

  export interface Links {
    readonly lead: $SingleLinkAccessor<Employee.Definition>;
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

  export interface ObjectSet extends $ObjectSet<Employee.Definition, Employee.ObjectSet> {
    readonly aggregate: <const AO extends $AggregateOpts<Employee.Definition>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Employee.Definition, AO>,
    ) => Promise<$AggregationsResults<Employee.Definition, AO>>;

    readonly pivotTo: <const L extends $LinkNames<Employee.Definition>>(
      type: L,
    ) => $LinkedType<Employee.Definition, L>['objectSet'];

    readonly fetchOne: <
      const L extends Employee.PropertyKeys,
      const R extends boolean,
      const S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Employee.Definition['primaryKeyType']],
      options?: $SelectArg<Employee.Definition, L, R, S>,
    ) => Promise<
      Employee.OsdkObject<
        (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
        $IsAny<L> extends true ? Employee.PropertyKeys : L
      >
    >;

    readonly fetchOneWithErrors: <
      const L extends Employee.PropertyKeys,
      const R extends boolean,
      const S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Employee.Definition['primaryKeyType']],
      options?: $SelectArg<Employee.Definition, L, R, S>,
    ) => Promise<
      $Result<
        Employee.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          $IsAny<L> extends true ? Employee.PropertyKeys : L
        >
      >
    >;

    readonly fetchPage: <
      const L extends Employee.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Employee.Definition, L, R, A, S>,
    ) => Promise<
      $PageResult<
        Employee.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          $IsAny<L> extends true ? Employee.PropertyKeys : L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      const L extends Employee.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Employee.Definition, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          Employee.OsdkObject<
            (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
            $IsAny<L> extends true ? Employee.PropertyKeys : L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<Employee.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'Employee', Employee.Definition>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Employee.ObjectSet;
    props: Employee.Props;
    linksType: Employee.Links;
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
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Employee.Props = keyof Employee.Props,
  > = $Osdk<Employee.Definition, K | OPTIONS> &
    Pick<
      [OPTIONS] extends [never]
        ? Employee.StrictProps
        : OPTIONS extends '$notStrict'
          ? Employee.Props
          : Employee.StrictProps,
      K
    > & {
      readonly $link: Employee.Links;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'integer'; nullable: false }, true>;

      readonly $as: <NEW_Q extends $ValidToFrom<Employee.Definition>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<Employee.Definition, NEW_Q, K>>;
    } & $OsdkObject<'Employee'>;
}

export type Employee = Employee.Definition;

export const Employee: Employee & $VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
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
