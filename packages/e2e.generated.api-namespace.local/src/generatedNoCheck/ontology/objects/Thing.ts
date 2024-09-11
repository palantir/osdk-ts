import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
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

  export interface ObjectSet extends $ObjectSet<Thing.Definition, Thing.ObjectSet> {}

  export interface Definition extends $ObjectTypeDefinition<'Thing', Thing.Definition> {
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
  > = $Osdk<Thing.Definition, K | OPTIONS>;
}

export type Thing = Thing.Definition;

export const Thing: Thing = {
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
