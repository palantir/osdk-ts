import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition as $ObjectTypeDefinition,
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
  ValidToFrom as $ValidToFrom,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace BuilderDeploymentState {
  export type PropertyKeys = $ObjectOrInterfacePropertyKeysFrom2<BuilderDeploymentState>;

  export type Links = never;

  export interface Props {
    readonly currentTimestamp: $PropType['timestamp'] | undefined;
    readonly date: $PropType['datetime'] | undefined;
    readonly skuId: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly currentTimestamp: $PropType['timestamp'] | undefined;
    readonly date: $PropType['datetime'] | undefined;
    readonly skuId: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<BuilderDeploymentState, BuilderDeploymentState.ObjectSet> {
    aggregate: <AO extends $AggregateOpts<BuilderDeploymentState>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<BuilderDeploymentState, AO>,
    ) => Promise<$AggregationsResults<BuilderDeploymentState, AO>>;

    pivotTo: <L extends $LinkNames<BuilderDeploymentState>>(
      type: L,
    ) => $LinkedType<BuilderDeploymentState, L>['objectSet']; // ObjectSet<LinkedType<BuilderDeploymentState, L>>;

    fetchOne: <
      L extends BuilderDeploymentState.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[BuilderDeploymentState['primaryKeyType']],
      options?: $SelectArg<BuilderDeploymentState, L, R, S>,
    ) => Promise<
      BuilderDeploymentState.OsdkObject<
        (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
        L
      >
    >;

    fetchOneWithErrors: <
      L extends BuilderDeploymentState.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[BuilderDeploymentState['primaryKeyType']],
      options?: $SelectArg<BuilderDeploymentState, L, R, S>,
    ) => Promise<
      $Result<
        BuilderDeploymentState.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    fetchPage: <
      L extends BuilderDeploymentState.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<BuilderDeploymentState, L, R, A, S>,
    ) => Promise<
      $PageResult<
        BuilderDeploymentState.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    fetchPageWithErrors: <
      L extends BuilderDeploymentState.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<BuilderDeploymentState, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          BuilderDeploymentState.OsdkObject<
            (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
            L
          >
        >
      >
    >;

    asyncIter: () => AsyncIterableIterator<BuilderDeploymentState.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'BuilderDeploymentState', BuilderDeploymentState>,
      $VersionBound<$ExpectedClientVersion> {
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
      currentTimestamp: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      date: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      skuId: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
  }

  export type OsdkObject<
    OPTIONS extends '$strict' | '$notStrict' | '$rid' = '$strict',
    K extends keyof BuilderDeploymentState.Props = keyof BuilderDeploymentState.Props,
  > = $Osdk<BuilderDeploymentState, K | OPTIONS> &
    Pick<
      // BuilderDeploymentState.Props
      OPTIONS extends '$notStrict' ? BuilderDeploymentState.Props : BuilderDeploymentState.StrictProps,
      K
    > & {
      $link: BuilderDeploymentState.Links;
      $title: string | undefined; // FIXME
      $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      $as: <NEW_Q extends $ValidToFrom<BuilderDeploymentState>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<BuilderDeploymentState, NEW_Q, K>>;
    } & $OsdkObject<'BuilderDeploymentState'>;
}

/** @deprecated use BuilderDeploymentState.Definition **/
export type BuilderDeploymentState = BuilderDeploymentState.Definition;

export const BuilderDeploymentState: BuilderDeploymentState & $VersionBound<$ExpectedClientVersion> = {
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
