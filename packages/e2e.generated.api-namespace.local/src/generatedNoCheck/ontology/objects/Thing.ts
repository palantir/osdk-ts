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
  ValidToFrom as $ValidToFrom,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace Thing {
  export type PropertyKeys = 'id' | 'body';

  export type Links = {};

  export interface Props {
    readonly body: $PropType['string'] | undefined;
    readonly id: $PropType['integer'] | undefined;
  }
  export interface StrictProps {
    readonly body: $PropType['string'] | undefined;
    readonly id: $PropType['integer'];
  }

  export interface ObjectSet extends $ObjectSet<Thing.Definition, Thing.ObjectSet> {
    readonly aggregate: <const AO extends $AggregateOpts<Thing.Definition>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Thing.Definition, AO>,
    ) => Promise<$AggregationsResults<Thing.Definition, AO>>;

    readonly pivotTo: <const L extends $LinkNames<Thing.Definition>>(
      type: L,
    ) => $LinkedType<Thing.Definition, L>['objectSet'];

    readonly fetchOne: <
      const L extends Thing.PropertyKeys,
      const R extends boolean,
      const S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Thing.Definition['primaryKeyType']],
      options?: $SelectArg<Thing.Definition, L, R, S>,
    ) => Promise<
      Thing.OsdkObject<
        (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
        $IsAny<L> extends true ? Thing.PropertyKeys : L
      >
    >;

    readonly fetchOneWithErrors: <
      const L extends Thing.PropertyKeys,
      const R extends boolean,
      const S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Thing.Definition['primaryKeyType']],
      options?: $SelectArg<Thing.Definition, L, R, S>,
    ) => Promise<
      $Result<
        Thing.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          $IsAny<L> extends true ? Thing.PropertyKeys : L
        >
      >
    >;

    readonly fetchPage: <
      const L extends Thing.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Thing.Definition, L, R, A, S>,
    ) => Promise<
      $PageResult<
        Thing.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          $IsAny<L> extends true ? Thing.PropertyKeys : L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      const L extends Thing.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Thing.Definition, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          Thing.OsdkObject<
            (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
            $IsAny<L> extends true ? Thing.PropertyKeys : L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<Thing.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'Thing', Thing.Definition>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Thing.ObjectSet;
    props: Thing.Props;
    linksType: Thing.Links;
    strictProps: Thing.StrictProps;
    implements: ['com.example.dep.SomeInterface'];
    interfaceMap: {
      'com.example.dep.SomeInterface': {
        'com.example.dep.spt': 'body';
      };
    };
    inverseInterfaceMap: {
      'com.example.dep.SomeInterface': {
        body: 'com.example.dep.spt';
      };
    };
    inverseSpts: {};
    links: {};
    primaryKeyApiName: 'id';
    primaryKeyType: 'integer';
    properties: {
      /**
       * (no ontology metadata)
       */
      body: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      id: $PropertyDef<'integer', 'non-nullable', 'single'>;
    };
    spts: {};
  }

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Thing.Props = keyof Thing.Props,
  > = $Osdk<Thing.Definition, K | OPTIONS> &
    Pick<
      [OPTIONS] extends [never] ? Thing.StrictProps : OPTIONS extends '$notStrict' ? Thing.Props : Thing.StrictProps,
      K
    > & {
      readonly $link: Thing.Links;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'integer'; nullable: false }, true>;

      readonly $as: <NEW_Q extends $ValidToFrom<Thing.Definition>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<Thing.Definition, NEW_Q, K>>;
    } & $OsdkObject<'Thing'>;
}

export type Thing = Thing.Definition;

export const Thing: Thing & $VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
  apiName: 'Thing',
  implements: ['com.example.dep.SomeInterface'],
  interfaceMap: {
    'com.example.dep.SomeInterface': {
      'com.example.dep.spt': 'body',
    },
  },
  inverseInterfaceMap: {
    'com.example.dep.SomeInterface': {
      body: 'com.example.dep.spt',
    },
  },
  inverseSpts: {},
  links: {},
  primaryKeyApiName: 'id',
  primaryKeyType: 'integer',
  properties: {
    id: {
      multiplicity: false,
      type: 'integer',
      nullable: false,
    },
    body: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
  spts: {},
  type: 'object',
};
