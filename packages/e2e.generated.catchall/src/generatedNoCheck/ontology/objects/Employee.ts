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
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Venture } from './Venture.js';

export namespace Employee {
  export type PropertyKeys =
    | 'id'
    | 'firstName'
    | 'email'
    | 'adUsername'
    | 'locationName'
    | 'locationCity'
    | 'firstFullTimeStartDate'
    | 'businessTitle'
    | 'employeeNumber'
    | 'jobProfile'
    | 'locationType'
    | 'favPlace';

  export interface Links {
    readonly lead: $SingleLinkAccessor<Employee.Definition>;
    readonly peeps: Employee.ObjectSet;
    readonly ventures: Venture.ObjectSet;
  }

  export interface Props {
    readonly adUsername: $PropType['string'] | undefined;
    readonly businessTitle: $PropType['string'] | undefined;
    readonly email: $PropType['string'] | undefined;
    readonly employeeNumber: $PropType['double'] | undefined;
    readonly favPlace: $PropType['geopoint'] | undefined;
    readonly firstFullTimeStartDate: $PropType['datetime'] | undefined;
    readonly firstName: $PropType['string'] | undefined;
    readonly id: $PropType['string'] | undefined;
    readonly jobProfile: $PropType['string'] | undefined;
    readonly locationCity: $PropType['string'] | undefined;
    readonly locationName: $PropType['string'] | undefined;
    readonly locationType: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly adUsername: $PropType['string'] | undefined;
    readonly businessTitle: $PropType['string'] | undefined;
    readonly email: $PropType['string'] | undefined;
    readonly employeeNumber: $PropType['double'] | undefined;
    readonly favPlace: $PropType['geopoint'] | undefined;
    readonly firstFullTimeStartDate: $PropType['datetime'] | undefined;
    readonly firstName: $PropType['string'] | undefined;
    readonly id: $PropType['string'];
    readonly jobProfile: $PropType['string'] | undefined;
    readonly locationCity: $PropType['string'] | undefined;
    readonly locationName: $PropType['string'] | undefined;
    readonly locationType: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<Employee.Definition, Employee.ObjectSet> {
    readonly aggregate: <AO extends $AggregateOpts<Employee.Definition>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Employee.Definition, AO>,
    ) => Promise<$AggregationsResults<Employee.Definition, AO>>;

    readonly pivotTo: <L extends $LinkNames<Employee.Definition>>(
      type: L,
    ) => $LinkedType<Employee.Definition, L>['objectSet']; // ObjectSet<LinkedType<Employee.Definition, L>>;

    readonly fetchOne: <
      L extends Employee.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Employee.Definition['primaryKeyType']],
      options?: $SelectArg<Employee.Definition, L, R, S>,
    ) => Promise<
      Employee.OsdkObject<
        (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
        L
      >
    >;

    readonly fetchOneWithErrors: <
      L extends Employee.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Employee.Definition['primaryKeyType']],
      options?: $SelectArg<Employee.Definition, L, R, S>,
    ) => Promise<
      $Result<
        Employee.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPage: <
      L extends Employee.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Employee.Definition, L, R, A, S>,
    ) => Promise<
      $PageResult<
        Employee.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      L extends Employee.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Employee.Definition, L, R, A, S>,
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

    readonly asyncIter: () => AsyncIterableIterator<Employee.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'Employee', Employee.Definition>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Employee.ObjectSet;
    props: Employee.Props;
    strictProps: Employee.StrictProps;
    description: 'An employee';
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
    inverseSpts: {
      firstName: 'name';
      email: 'description';
    };
    links: {
      lead: $ObjectTypeLinkDefinition<Employee, false>;
      peeps: $ObjectTypeLinkDefinition<Employee, true>;
      ventures: $ObjectTypeLinkDefinition<Venture, true>;
    };
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      adUsername: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      businessTitle: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      email: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      employeeNumber: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      favPlace: $PropertyDef<'geopoint', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      firstFullTimeStartDate: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      firstName: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      id: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      jobProfile: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      locationCity: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      locationName: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      locationType: $PropertyDef<'string', 'nullable', 'single'>;
    };
    spts: {
      name: 'firstName';
      description: 'email';
    };
  }

  export type OsdkObject<
    OPTIONS extends '$strict' | '$notStrict' | '$rid' = '$strict',
    K extends keyof Employee.Props = keyof Employee.Props,
  > = $Osdk<Employee.Definition, K | OPTIONS> &
    Pick<OPTIONS extends '$notStrict' ? Employee.Props : Employee.StrictProps, K> & {
      readonly $link: Employee.Links;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      readonly $as: <NEW_Q extends $ValidToFrom<Employee.Definition>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<Employee.Definition, NEW_Q, K>>;
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
  description: 'An employee',
  implements: ['FooInterface'],
  interfaceMap: {
    FooInterface: {
      name: 'firstName',
      description: 'email',
    },
  },
  inverseInterfaceMap: {
    FooInterface: {
      firstName: 'name',
      email: 'description',
    },
  },
  inverseSpts: {
    firstName: 'name',
    email: 'description',
  },
  links: {
    lead: {
      multiplicity: false,
      targetType: 'Employee',
    },
    peeps: {
      multiplicity: true,
      targetType: 'Employee',
    },
    ventures: {
      multiplicity: true,
      targetType: 'Venture',
    },
  },
  primaryKeyApiName: 'id',
  primaryKeyType: 'string',
  properties: {
    id: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    firstName: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    email: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    adUsername: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    locationName: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    locationCity: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    firstFullTimeStartDate: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
    businessTitle: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    employeeNumber: {
      multiplicity: false,
      type: 'double',
      nullable: true,
    },
    jobProfile: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    locationType: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    favPlace: {
      multiplicity: false,
      type: 'geopoint',
      nullable: true,
    },
  },
  spts: {
    name: 'firstName',
    description: 'email',
  },
  type: 'object',
};
