import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type {
  PropertyKeys as $PropertyKeys,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectMetadata as $ObjectMetadata,
} from '@osdk/client';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client';

export namespace BgaoNflPlayer {
  export type PropertyKeys = 'id' | 'gamesPlayed' | 'name' | 'number' | 'wikiUrl' | 'address';

  export type Links = {};

  export interface Props {
    /**
     * (no ontology metadata)
     */
    readonly address:
      | {
          addressLine1: $PropType['string'] | undefined;
          addressLine2: $PropType['string'] | undefined;
          city: $PropType['string'] | undefined;
          state: $PropType['string'] | undefined;
          zipCode: $PropType['integer'] | undefined;
        }
      | undefined;
    /**
     * (no ontology metadata)
     */
    readonly gamesPlayed: $PropType['integer'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly id: $PropType['string'];
    /**
     * (no ontology metadata)
     */
    readonly name: $PropType['string'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly number: $PropType['integer'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly wikiUrl: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<BgaoNflPlayer, BgaoNflPlayer.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof BgaoNflPlayer.Props = keyof BgaoNflPlayer.Props,
  > = $Osdk.Instance<BgaoNflPlayer, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof BgaoNflPlayer.Props = keyof BgaoNflPlayer.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface BgaoNflPlayer extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'BgaoNflPlayer';
  __DefinitionMetadata?: {
    objectSet: BgaoNflPlayer.ObjectSet;
    props: BgaoNflPlayer.Props;
    linksType: BgaoNflPlayer.Links;
    strictProps: BgaoNflPlayer.StrictProps;
    apiName: 'BgaoNflPlayer';
    description: 'BgaoNflPlayer';
    displayName: 'BgaoNflPlayer';
    icon: {
      type: 'blueprint';
      name: 'traffic';
      color: 'color';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'GtfsTripTrackObject';
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      address: $PropertyDef<
        { addressLine1: 'string'; addressLine2: 'string'; city: 'string'; state: 'string'; zipCode: 'integer' },
        'nullable',
        'single'
      >;
      /**
       * (no ontology metadata)
       */
      gamesPlayed: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      id: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      number: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      wikiUrl: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'entityId';
    type: 'object';
  };
}

export const BgaoNflPlayer: BgaoNflPlayer = {
  type: 'object',
  apiName: 'BgaoNflPlayer',
  osdkMetadata: $osdkMetadata,
};
