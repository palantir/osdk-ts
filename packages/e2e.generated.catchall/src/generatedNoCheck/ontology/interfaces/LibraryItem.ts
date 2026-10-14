import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client';

export type OsdkObjectLinks$LibraryItem = {};

export namespace LibraryItem {
  export type PropertyKeys = 'id' | 'name';

  export interface Props {
    /**
     * (no ontology metadata)
     */
    readonly id: $PropType['string'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly name: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<LibraryItem, LibraryItem.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof LibraryItem.Props = keyof LibraryItem.Props,
  > = $Osdk.Instance<LibraryItem, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof LibraryItem.Props = keyof LibraryItem.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface LibraryItem extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'LibraryItem';
  __DefinitionMetadata?: {
    objectSet: LibraryItem.ObjectSet;
    props: LibraryItem.Props;
    linksType: OsdkObjectLinks$LibraryItem;
    strictProps: LibraryItem.StrictProps;
    apiName: 'LibraryItem';
    description: '';
    displayName: 'Library Item';
    implementedBy: ['Book', 'Game'];
    implements: [];
    links: {};
    properties: {
      /**
       * (no ontology metadata)
       */
      id: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.9f83383d-d264-4d58-ab5e-a879b9ec5668';
    type: 'interface';
  };
}

export const LibraryItem = {
  type: 'interface',
  apiName: 'LibraryItem',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.9f83383d-d264-4d58-ab5e-a879b9ec5668',
  },
} satisfies LibraryItem & { internalDoNotUseMetadata: { rid: string } } as LibraryItem;
