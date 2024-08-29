import type {
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
  export type PropertyKeys = 'skuId' | 'date' | 'currentTimestamp';

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

  export interface ObjectSet extends $ObjectSet<BuilderDeploymentState.Definition, BuilderDeploymentState.ObjectSet> {
    readonly aggregate: <AO extends $AggregateOpts<BuilderDeploymentState.Definition>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<BuilderDeploymentState.Definition, AO>,
    ) => Promise<$AggregationsResults<BuilderDeploymentState.Definition, AO>>;

    readonly pivotTo: <L extends $LinkNames<BuilderDeploymentState.Definition>>(
      type: L,
    ) => $LinkedType<BuilderDeploymentState.Definition, L>['objectSet'];

    readonly fetchOne: <
      L extends BuilderDeploymentState.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[BuilderDeploymentState.Definition['primaryKeyType']],
      options?: $SelectArg<BuilderDeploymentState.Definition, L, R, S>,
    ) => Promise<
      BuilderDeploymentState.OsdkObject<
        (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
        L
      >
    >;

    readonly fetchOneWithErrors: <
      L extends BuilderDeploymentState.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[BuilderDeploymentState.Definition['primaryKeyType']],
      options?: $SelectArg<BuilderDeploymentState.Definition, L, R, S>,
    ) => Promise<
      $Result<
        BuilderDeploymentState.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPage: <
      L extends BuilderDeploymentState.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<BuilderDeploymentState.Definition, L, R, A, S>,
    ) => Promise<
      $PageResult<
        BuilderDeploymentState.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      L extends BuilderDeploymentState.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<BuilderDeploymentState.Definition, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          BuilderDeploymentState.OsdkObject<
            (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
            L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<BuilderDeploymentState.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'BuilderDeploymentState', BuilderDeploymentState.Definition>,
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
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof BuilderDeploymentState.Props = keyof BuilderDeploymentState.Props,
  > = $Osdk<BuilderDeploymentState.Definition, K | OPTIONS> &
    Pick<
      [OPTIONS] extends [never]
        ? BuilderDeploymentState.StrictProps
        : OPTIONS extends '$notStrict'
          ? BuilderDeploymentState.Props
          : BuilderDeploymentState.StrictProps,
      K
    > & {
      readonly $link: BuilderDeploymentState.Links;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      readonly $as: <NEW_Q extends $ValidToFrom<BuilderDeploymentState.Definition>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<BuilderDeploymentState.Definition, NEW_Q, K>>;
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
