import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata.js';

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

  export interface ObjectSet extends $ObjectSet<UsesForeignSpt.Definition, UsesForeignSpt.ObjectSet> {}

  export interface Definition extends $ObjectTypeDefinition<'UsesForeignSpt', UsesForeignSpt.Definition> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: UsesForeignSpt.ObjectSet;
    props: UsesForeignSpt.Props;
    linksType: UsesForeignSpt.Links;
    strictProps: UsesForeignSpt.StrictProps;
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    inverseSpts: {
      body: 'com.example.dep.spt';
    };
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
    spts: {
      'com.example.dep.spt': 'body';
    };
  }

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof UsesForeignSpt.Props = keyof UsesForeignSpt.Props,
  > = $Osdk<UsesForeignSpt.Definition, K | OPTIONS>;
}

export type UsesForeignSpt = UsesForeignSpt.Definition;

export const UsesForeignSpt: UsesForeignSpt = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
  apiName: 'UsesForeignSpt',
  implements: [],
  interfaceMap: {},
  inverseInterfaceMap: {},
  inverseSpts: {
    body: 'com.example.dep.spt',
  },
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
  spts: {
    'com.example.dep.spt': 'body',
  },
  type: 'object',
};
