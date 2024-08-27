import type { ObjectTypeLinkDefinition, PropertyDef, VersionBound } from '@osdk/api';
import { Osdk } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type { Employee } from './Employee.js';

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
  ValidToFrom,
} from '@osdk/client.api';

import { ObjectOrInterfacePropertyKeysFrom2, ObjectTypeDefinition } from '@osdk/api';

export type PropertyKeys$Venture = ObjectOrInterfacePropertyKeysFrom2<Venture>;

export namespace Venture {
  export interface Links {
    employees: Employee.ObjectSet;
  }

  export interface Props {
    /*readonly*/ ventureId: $PropType['string'] | undefined;
    /*readonly*/ ventureName: $PropType['string'] | undefined;
    /*readonly*/ ventureStart: $PropType['datetime'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ ventureId: $PropType['string'];
    /*readonly*/ ventureName: $PropType['string'] | undefined;
    /*readonly*/ ventureStart: $PropType['datetime'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<Venture, Venture.ObjectSet> {
    aggregate: <AO extends AggregateOpts<Venture>>(
      req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Venture, AO>,
    ) => Promise<AggregationsResults<Venture, AO>>;

    pivotTo: <L extends LinkNames<Venture>>(type: L) => LinkedType<Venture, L>['objectSet']; // ObjectSet<LinkedType<Venture, L>>;

    fetchOne: <
      L extends PropertyKeys$Venture,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[Venture['primaryKeyType']],
      options?: SelectArg<Venture, L, R, S>,
    ) => Promise<
      Venture.OsdkObject<L, S extends false ? false : true>
      //  SingleOsdkResult<Venture, L, R, S>
    >;

    fetchOneWithErrors: <
      L extends PropertyKeys$Venture,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[Venture['primaryKeyType']],
      options?: SelectArg<Venture, L, R, S>,
    ) => Promise<
      Result<
        Venture.OsdkObject<L, S extends false ? false : true>
        //  SingleOsdkResult<Venture, L, R, S>
      >
    >;

    fetchPage: <
      L extends PropertyKeys$Venture,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<Venture, L, R, A, S>,
    ) => Promise<
      PageResult<Venture.OsdkObject<L, S extends false ? false : true>>
      // FetchPageResult<Venture, L, R, S>
    >;

    fetchPageWithErrors: <
      L extends PropertyKeys$Venture,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<Venture, L, R, A, S>,
    ) => Promise<
      Result<
        PageResult<Venture.OsdkObject<L, S extends false ? false : true>>
        //  FetchPageResult<Venture, L, R, S>
      >
    >;

    asyncIter: () => AsyncIterableIterator<Venture.OsdkObject>;
  }

  export interface Definition extends ObjectTypeDefinition<'Venture', Venture>, VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Venture.ObjectSet;
    props: Venture.Props;
    strictProps: Venture.StrictProps;
    description: 'A venture';
    links: {
      employees: ObjectTypeLinkDefinition<Employee, true>;
    };
    primaryKeyApiName: 'ventureId';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      ventureId: PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      ventureName: PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      ventureStart: PropertyDef<'datetime', 'nullable', 'single'>;
    };
  }

  export type OsdkObject<K extends keyof Venture.Props = keyof Venture.Props, S extends boolean = true> = Osdk<
    Venture,
    K | (S extends false ? '$notStrict' : '$strict')
  > &
    Pick<
      // Venture.Props
      S extends false ? Venture.Props : Venture.StrictProps,
      K
    > & {
      $link: Venture.Links;
      $title: string | undefined; // FIXME
      $primaryKey: OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      $as: <NEW_Q extends ValidToFrom<Venture>>(type: NEW_Q | string) => Osdk<NEW_Q, ConvertProps<Venture, NEW_Q, K>>;
    } & $OsdkObject<'Venture'>;
}

/** @deprecated use Venture.Definition **/
export type Venture = Venture.Definition;

export const Venture: Venture & VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  strictProps: undefined as any,
  apiName: 'Venture',
  description: 'A venture',
  links: {
    employees: {
      multiplicity: true,
      targetType: 'Employee',
    },
  },
  primaryKeyApiName: 'ventureId',
  primaryKeyType: 'string',
  properties: {
    ventureId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    ventureName: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    ventureStart: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
  },
  type: 'object',
};
