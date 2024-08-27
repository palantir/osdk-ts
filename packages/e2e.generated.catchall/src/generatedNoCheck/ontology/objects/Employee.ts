import type {
  ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition,
  ObjectTypeLinkDefinition,
  PropertyDef,
  VersionBound,
} from '@osdk/api';
import type {
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
  Osdk,
  OsdkObjectPropertyType,
  PageResult,
  PropertyValueClientToWire,
  Result,
  SelectArg,
  SingleLinkAccessor,
  ValidToFrom,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Venture } from './Venture.js';

export namespace Employee {
  export type PropertyKeys = ObjectOrInterfacePropertyKeysFrom2<Employee>;

  export interface Links {
    lead: SingleLinkAccessor<Employee>;
    peeps: Employee.ObjectSet;
    ventures: Venture.ObjectSet;
  }

  export interface Props {
    /*readonly*/ adUsername: $PropType['string'] | undefined;
    /*readonly*/ businessTitle: $PropType['string'] | undefined;
    /*readonly*/ email: $PropType['string'] | undefined;
    /*readonly*/ employeeNumber: $PropType['double'] | undefined;
    /*readonly*/ favPlace: $PropType['geopoint'] | undefined;
    /*readonly*/ firstFullTimeStartDate: $PropType['datetime'] | undefined;
    /*readonly*/ firstName: $PropType['string'] | undefined;
    /*readonly*/ id: $PropType['string'] | undefined;
    /*readonly*/ jobProfile: $PropType['string'] | undefined;
    /*readonly*/ locationCity: $PropType['string'] | undefined;
    /*readonly*/ locationName: $PropType['string'] | undefined;
    /*readonly*/ locationType: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ adUsername: $PropType['string'] | undefined;
    /*readonly*/ businessTitle: $PropType['string'] | undefined;
    /*readonly*/ email: $PropType['string'] | undefined;
    /*readonly*/ employeeNumber: $PropType['double'] | undefined;
    /*readonly*/ favPlace: $PropType['geopoint'] | undefined;
    /*readonly*/ firstFullTimeStartDate: $PropType['datetime'] | undefined;
    /*readonly*/ firstName: $PropType['string'] | undefined;
    /*readonly*/ id: $PropType['string'];
    /*readonly*/ jobProfile: $PropType['string'] | undefined;
    /*readonly*/ locationCity: $PropType['string'] | undefined;
    /*readonly*/ locationName: $PropType['string'] | undefined;
    /*readonly*/ locationType: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<Employee, Employee.ObjectSet> {
    aggregate: <AO extends AggregateOpts<Employee>>(
      req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Employee, AO>,
    ) => Promise<AggregationsResults<Employee, AO>>;

    pivotTo: <L extends LinkNames<Employee>>(type: L) => LinkedType<Employee, L>['objectSet']; // ObjectSet<LinkedType<Employee, L>>;

    fetchOne: <
      L extends Employee.PropertyKeys,
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
      L extends Employee.PropertyKeys,
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
      L extends Employee.PropertyKeys,
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
      L extends Employee.PropertyKeys,
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
      lead: ObjectTypeLinkDefinition<Employee, false>;
      peeps: ObjectTypeLinkDefinition<Employee, true>;
      ventures: ObjectTypeLinkDefinition<Venture, true>;
    };
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
    spts: {
      name: 'firstName';
      description: 'email';
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
      $link: Employee.Links;
      $title: string | undefined; // FIXME
      $primaryKey: OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

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
