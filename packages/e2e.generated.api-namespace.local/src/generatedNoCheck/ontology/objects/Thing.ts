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

export namespace Thing {
  export type PropertyKeys = $ObjectOrInterfacePropertyKeysFrom2<Thing>;

  export type Links = never;

  export interface Props {
    /*readonly*/ body: $PropType['string'] | undefined;
    /*readonly*/ id: $PropType['integer'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ body: $PropType['string'] | undefined;
    /*readonly*/ id: $PropType['integer'];
  }

  export interface ObjectSet extends $ObjectSet<Thing, Thing.ObjectSet> {
    aggregate: <AO extends $AggregateOpts<Thing>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Thing, AO>,
    ) => Promise<$AggregationsResults<Thing, AO>>;

    pivotTo: <L extends $LinkNames<Thing>>(type: L) => $LinkedType<Thing, L>['objectSet']; // ObjectSet<LinkedType<Thing, L>>;

    fetchOne: <
      L extends Thing.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Thing['primaryKeyType']],
      options?: $SelectArg<Thing, L, R, S>,
    ) => Promise<
      Thing.OsdkObject<L, S extends false ? false : true>
      //  SingleOsdkResult<Thing, L, R, S>
    >;

    fetchOneWithErrors: <
      L extends Thing.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Thing['primaryKeyType']],
      options?: $SelectArg<Thing, L, R, S>,
    ) => Promise<
      $Result<
        Thing.OsdkObject<L, S extends false ? false : true>
        //  SingleOsdkResult<Thing, L, R, S>
      >
    >;

    fetchPage: <
      L extends Thing.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Thing, L, R, A, S>,
    ) => Promise<
      $PageResult<Thing.OsdkObject<L, S extends false ? false : true>>
      // FetchPageResult<Thing, L, R, S>
    >;

    fetchPageWithErrors: <
      L extends Thing.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Thing, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<Thing.OsdkObject<L, S extends false ? false : true>>
        //  FetchPageResult<Thing, L, R, S>
      >
    >;

    asyncIter: () => AsyncIterableIterator<Thing.OsdkObject>;
  }

  export interface Definition extends $ObjectTypeDefinition<'Thing', Thing>, $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Thing.ObjectSet;
    props: Thing.Props;
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

  export type OsdkObject<K extends keyof Thing.Props = keyof Thing.Props, S extends boolean = true> = $Osdk<
    Thing,
    K | (S extends false ? '$notStrict' : '$strict')
  > &
    Pick<
      // Thing.Props
      S extends false ? Thing.Props : Thing.StrictProps,
      K
    > & {
      $link: Thing.Links;
      $title: string | undefined; // FIXME
      $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'integer'; nullable: false }, true>;

      $as: <NEW_Q extends $ValidToFrom<Thing>>(type: NEW_Q | string) => $Osdk<NEW_Q, $ConvertProps<Thing, NEW_Q, K>>;
    } & $OsdkObject<'Thing'>;
}

/** @deprecated use Thing.Definition **/
export type Thing = Thing.Definition;

export const Thing: Thing & $VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
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
