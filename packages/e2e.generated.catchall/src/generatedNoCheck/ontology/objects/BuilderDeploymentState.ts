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
  WhereClause,
} from '@osdk/client.api';

import { ObjectOrInterfacePropertyKeysFrom2, ObjectTypeDefinition } from '@osdk/api';

export type PropertyKeys$BuilderDeploymentState = ObjectOrInterfacePropertyKeysFrom2<BuilderDeploymentState>;

export type OsdkObjectLinks$BuilderDeploymentState = never;

export namespace BuilderDeploymentState {
  export interface Props {
    /*readonly*/ currentTimestamp: $PropType['timestamp'] | undefined;
    /*readonly*/ date: $PropType['datetime'] | undefined;
    /*readonly*/ skuId: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ currentTimestamp: $PropType['timestamp'] | undefined;
    /*readonly*/ date: $PropType['datetime'] | undefined;
    /*readonly*/ skuId: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<BuilderDeploymentState, BuilderDeploymentState.ObjectSet> {
    aggregate: <AO extends AggregateOpts<BuilderDeploymentState>>(
      req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<BuilderDeploymentState, AO>,
    ) => Promise<AggregationsResults<BuilderDeploymentState, AO>>;

    where: (clause: WhereClause<BuilderDeploymentState>) => BuilderDeploymentState.ObjectSet;

    union: (...objectSets: ReadonlyArray<BuilderDeploymentState.ObjectSet>) => BuilderDeploymentState.ObjectSet;

    intersect: (...objectSets: ReadonlyArray<BuilderDeploymentState.ObjectSet>) => BuilderDeploymentState.ObjectSet;

    subtract: (...objectSets: ReadonlyArray<BuilderDeploymentState.ObjectSet>) => BuilderDeploymentState.ObjectSet;

    pivotTo: <L extends LinkNames<BuilderDeploymentState>>(
      type: L,
    ) => LinkedType<BuilderDeploymentState, L>['objectSet']; // ObjectSet<LinkedType<BuilderDeploymentState, L>>;

    fetchOne: <
      L extends PropertyKeys$BuilderDeploymentState,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[BuilderDeploymentState['primaryKeyType']],
      options?: SelectArg<BuilderDeploymentState, L, R, S>,
    ) => Promise<
      BuilderDeploymentState.OsdkObject<L, S extends false ? false : true>
      //  SingleOsdkResult<BuilderDeploymentState, L, R, S>
    >;

    fetchOneWithErrors: <
      L extends PropertyKeys$BuilderDeploymentState,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[BuilderDeploymentState['primaryKeyType']],
      options?: SelectArg<BuilderDeploymentState, L, R, S>,
    ) => Promise<
      Result<
        BuilderDeploymentState.OsdkObject<L, S extends false ? false : true>
        //  SingleOsdkResult<BuilderDeploymentState, L, R, S>
      >
    >;

    fetchPage: <
      L extends PropertyKeys$BuilderDeploymentState,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<BuilderDeploymentState, L, R, A, S>,
    ) => Promise<
      PageResult<BuilderDeploymentState.OsdkObject<L, S extends false ? false : true>>
      // FetchPageResult<BuilderDeploymentState, L, R, S>
    >;

    fetchPageWithErrors: <
      L extends PropertyKeys$BuilderDeploymentState,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<BuilderDeploymentState, L, R, A, S>,
    ) => Promise<
      Result<
        PageResult<BuilderDeploymentState.OsdkObject<L, S extends false ? false : true>>
        //  FetchPageResult<BuilderDeploymentState, L, R, S>
      >
    >;

    asyncIter: () => AsyncIterableIterator<BuilderDeploymentState.OsdkObject>;
  }

  export interface Definition
    extends ObjectTypeDefinition<'BuilderDeploymentState', BuilderDeploymentState>,
      VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: BuilderDeploymentState.ObjectSet;
    props: BuilderDeploymentState.Props;
    strictProps: BuilderDeploymentState.StrictProps;
    description: 'Builder Deployment State';
    links: {};
    primaryKeyApiName: 'skuId';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      currentTimestamp: PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      date: PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      skuId: PropertyDef<'string', 'non-nullable', 'single'>;
    };
  }

  export type OsdkObject<
    K extends keyof BuilderDeploymentState.Props = keyof BuilderDeploymentState.Props,
    S extends boolean = true,
  > = Osdk<BuilderDeploymentState, K | (S extends false ? '$notStrict' : '$strict')> &
    Pick<
      // BuilderDeploymentState.Props
      S extends false ? BuilderDeploymentState.Props : BuilderDeploymentState.StrictProps,
      K
    > & {
      $link: OsdkObjectLinks$BuilderDeploymentState;
      $title: string | undefined; // FIXME
      $primaryKey: OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      $as: <NEW_Q extends ValidToFrom<BuilderDeploymentState>>(
        type: NEW_Q | string,
      ) => Osdk<NEW_Q, ConvertProps<BuilderDeploymentState, NEW_Q, K>>;
    } & $OsdkObject<'BuilderDeploymentState'>;
}

/** @deprecated use BuilderDeploymentState.Definition **/
export type BuilderDeploymentState = BuilderDeploymentState.Definition;

export const BuilderDeploymentState: BuilderDeploymentState & VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  strictProps: undefined as any,
  apiName: 'BuilderDeploymentState',
  description: 'Builder Deployment State',
  links: {},
  primaryKeyApiName: 'skuId',
  primaryKeyType: 'string',
  properties: {
    skuId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    date: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
    currentTimestamp: {
      multiplicity: false,
      type: 'timestamp',
      nullable: true,
    },
  },
  type: 'object',
};
