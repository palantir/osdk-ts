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

export namespace NbaPlayer {
  export type PropertyKeys = 'id' | 'gamesPlayed' | 'name' | 'jerseyNumber' | 'wikiUrl';

  export type Links = {};

  export interface Props {
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
    readonly jerseyNumber: $PropType['integer'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly name: $PropType['string'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly wikiUrl: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<NbaPlayer, NbaPlayer.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NbaPlayer.Props = keyof NbaPlayer.Props,
  > = $Osdk.Instance<NbaPlayer, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NbaPlayer.Props = keyof NbaPlayer.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface NbaPlayer extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'NbaPlayer';
  __DefinitionMetadata?: {
    objectSet: NbaPlayer.ObjectSet;
    props: NbaPlayer.Props;
    linksType: NbaPlayer.Links;
    strictProps: NbaPlayer.StrictProps;
    apiName: 'NbaPlayer';
    description: 'NbaPlayer';
    displayName: 'NbaPlayer';
    icon: {
      type: 'blueprint';
      name: 'traffic';
      color: 'color';
    };
    implements: ['Athlete'];
    interfaceMap: {
      Athlete: {
        jerseyNumber: 'jerseyNumber';
        athleteId: 'id';
        name22: 'name';
      };
    };
    inverseInterfaceMap: {
      Athlete: {
        jerseyNumber: 'jerseyNumber';
        id: 'athleteId';
        name: 'name22';
      };
    };
    links: {};
    pluralDisplayName: 'names';
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
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
      jerseyNumber: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      wikiUrl: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'name';
    type: 'object';
    visibility: undefined;
  };
}

export const NbaPlayer: NbaPlayer = {
  type: 'object',
  apiName: 'NbaPlayer',
  osdkMetadata: $osdkMetadata,
};
