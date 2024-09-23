import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
  MinObjectDef as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client.api';

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

  export interface ObjectSet extends $ObjectSet<Thing, Thing.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Thing.Props = keyof Thing.Props,
  > = $Osdk<Thing, K | OPTIONS>;
}

export interface Thing extends $ObjectTypeDefinition<'Thing', Thing> {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Thing';
  __DefinitionMetadata?: {
    objectSet: Thing.ObjectSet;
    props: Thing.Props;
    linksType: Thing.Links;
    strictProps: Thing.StrictProps;
    apiName: 'Thing';
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
    type: 'object';
  };
}

export const Thing: Thing = {
  type: 'object',
  apiName: 'Thing',
  osdkMetadata: $osdkMetadata,
};
