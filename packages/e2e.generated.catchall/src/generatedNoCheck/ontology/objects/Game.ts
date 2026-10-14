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

export namespace Game {
  export type PropertyKeys = 'id' | 'title';

  export type Links = {};

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly id: $PropType['string'];
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly title: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Game, Game.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Game.Props = keyof Game.Props,
  > = $Osdk.Instance<Game, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Game.Props = keyof Game.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Game extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Game';
  primaryKeyApiName: 'id';
  primaryKeyType: 'string';
  __DefinitionMetadata?: {
    objectSet: Game.ObjectSet;
    props: Game.Props;
    linksType: Game.Links;
    strictProps: Game.StrictProps;
    apiName: 'Game';
    description: '';
    displayName: 'Game';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: ['LibraryItem'];
    interfaceImplementations: {
      LibraryItem: {
        id: {
          type: 'localProperty';
          propertyApiName: 'id';
        };
        name: {
          type: 'localProperty';
          propertyApiName: 'title';
        };
      };
    };
    interfaceMap: {
      LibraryItem: {
        id: 'id';
        name: 'title';
      };
    };
    inverseInterfaceMap: {
      LibraryItem: {
        id: 'id';
        title: 'name';
      };
    };
    links: {};
    pluralDisplayName: 'Games';
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       */
      id: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       */
      title: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.154bc90c-d163-4dc5-b6c5-673a12723787';
    status: 'EXPERIMENTAL';
    titleProperty: 'title';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const Game = {
  type: 'object',
  apiName: 'Game',
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: 'id',
  primaryKeyType: 'string',
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.154bc90c-d163-4dc5-b6c5-673a12723787',
  },
} satisfies Game & { internalDoNotUseMetadata: { rid: string } } as Game;
