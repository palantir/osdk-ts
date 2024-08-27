import type { PropertyDef, VersionBound } from '@osdk/api';
import { Osdk } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

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

export type PropertyKeys$BoundariesUsState = ObjectOrInterfacePropertyKeysFrom2<BoundariesUsState>;

export namespace BoundariesUsState {
  export type Links = never;

  export interface Props {
    /*readonly*/ geometry10M: $PropType['geoshape'] | undefined;
    /*readonly*/ latitude: $PropType['double'] | undefined;
    /*readonly*/ longitude: $PropType['double'] | undefined;
    /*readonly*/ usState: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ geometry10M: $PropType['geoshape'] | undefined;
    /*readonly*/ latitude: $PropType['double'] | undefined;
    /*readonly*/ longitude: $PropType['double'] | undefined;
    /*readonly*/ usState: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<BoundariesUsState, BoundariesUsState.ObjectSet> {
    aggregate: <AO extends AggregateOpts<BoundariesUsState>>(
      req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<BoundariesUsState, AO>,
    ) => Promise<AggregationsResults<BoundariesUsState, AO>>;

    pivotTo: <L extends LinkNames<BoundariesUsState>>(type: L) => LinkedType<BoundariesUsState, L>['objectSet']; // ObjectSet<LinkedType<BoundariesUsState, L>>;

    fetchOne: <
      L extends PropertyKeys$BoundariesUsState,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[BoundariesUsState['primaryKeyType']],
      options?: SelectArg<BoundariesUsState, L, R, S>,
    ) => Promise<
      BoundariesUsState.OsdkObject<L, S extends false ? false : true>
      //  SingleOsdkResult<BoundariesUsState, L, R, S>
    >;

    fetchOneWithErrors: <
      L extends PropertyKeys$BoundariesUsState,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[BoundariesUsState['primaryKeyType']],
      options?: SelectArg<BoundariesUsState, L, R, S>,
    ) => Promise<
      Result<
        BoundariesUsState.OsdkObject<L, S extends false ? false : true>
        //  SingleOsdkResult<BoundariesUsState, L, R, S>
      >
    >;

    fetchPage: <
      L extends PropertyKeys$BoundariesUsState,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<BoundariesUsState, L, R, A, S>,
    ) => Promise<
      PageResult<BoundariesUsState.OsdkObject<L, S extends false ? false : true>>
      // FetchPageResult<BoundariesUsState, L, R, S>
    >;

    fetchPageWithErrors: <
      L extends PropertyKeys$BoundariesUsState,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<BoundariesUsState, L, R, A, S>,
    ) => Promise<
      Result<
        PageResult<BoundariesUsState.OsdkObject<L, S extends false ? false : true>>
        //  FetchPageResult<BoundariesUsState, L, R, S>
      >
    >;

    asyncIter: () => AsyncIterableIterator<BoundariesUsState.OsdkObject>;
  }

  export interface Definition
    extends ObjectTypeDefinition<'BoundariesUsState', BoundariesUsState>,
      VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: BoundariesUsState.ObjectSet;
    props: BoundariesUsState.Props;
    strictProps: BoundariesUsState.StrictProps;
    description: 'Boundaries US State';
    links: {};
    primaryKeyApiName: 'usState';
    primaryKeyType: 'string';
    properties: {
      /**
       *   display name: 'Geometry10M',
       *   description: geoshape
       */
      geometry10M: PropertyDef<'geoshape', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      latitude: PropertyDef<'double', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      longitude: PropertyDef<'double', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      usState: PropertyDef<'string', 'non-nullable', 'single'>;
    };
  }

  export type OsdkObject<
    K extends keyof BoundariesUsState.Props = keyof BoundariesUsState.Props,
    S extends boolean = true,
  > = Osdk<BoundariesUsState, K | (S extends false ? '$notStrict' : '$strict')> &
    Pick<
      // BoundariesUsState.Props
      S extends false ? BoundariesUsState.Props : BoundariesUsState.StrictProps,
      K
    > & {
      $link: BoundariesUsState.Links;
      $title: string | undefined; // FIXME
      $primaryKey: OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      $as: <NEW_Q extends ValidToFrom<BoundariesUsState>>(
        type: NEW_Q | string,
      ) => Osdk<NEW_Q, ConvertProps<BoundariesUsState, NEW_Q, K>>;
    } & $OsdkObject<'BoundariesUsState'>;
}

/** @deprecated use BoundariesUsState.Definition **/
export type BoundariesUsState = BoundariesUsState.Definition;

export const BoundariesUsState: BoundariesUsState & VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  strictProps: undefined as any,
  apiName: 'BoundariesUsState',
  description: 'Boundaries US State',
  links: {},
  primaryKeyApiName: 'usState',
  primaryKeyType: 'string',
  properties: {
    usState: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    latitude: {
      multiplicity: false,
      type: 'double',
      nullable: true,
    },
    longitude: {
      multiplicity: false,
      type: 'double',
      nullable: true,
    },
    geometry10M: {
      displayName: 'Geometry10M',
      multiplicity: false,
      description: 'geoshape',
      type: 'geoshape',
      nullable: true,
    },
  },
  type: 'object',
};
