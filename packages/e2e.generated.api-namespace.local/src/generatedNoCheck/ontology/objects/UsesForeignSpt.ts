import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client.api';

export namespace UsesForeignSpt {
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

  export interface ObjectSet extends $ObjectSet<UsesForeignSpt, UsesForeignSpt.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof UsesForeignSpt.Props = keyof UsesForeignSpt.Props,
  > = $Osdk<UsesForeignSpt, K | OPTIONS>;
}

export interface UsesForeignSpt extends $ObjectTypeDefinition<'UsesForeignSpt', UsesForeignSpt> {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'UsesForeignSpt';
  __DefinitionMetadata?: {
    objectSet: UsesForeignSpt.ObjectSet;
    props: UsesForeignSpt.Props;
    linksType: UsesForeignSpt.Links;
    strictProps: UsesForeignSpt.StrictProps;
    apiName: 'UsesForeignSpt';
    displayName: 'Uses Foreign Spt';
    icon: {
      type: 'blueprint';
      name: 'foreign';
      color: 'red';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Uses Foreign Spts';
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
    rid: 'theRid';
    status: 'ACTIVE';
    titleProperty: 'id';
    type: 'object';
  };
}

export const UsesForeignSpt: UsesForeignSpt = {
  type: 'object',
  apiName: 'UsesForeignSpt',
  osdkMetadata: $osdkMetadata,
};
