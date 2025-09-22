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

export namespace Thing {
  export type PropertyKeys = 'id' | 'body';

  export type Links = {};

  export interface Props {
    /**
     * (no ontology metadata)
     */
    readonly body: $PropType['string'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly id: $PropType['integer'];
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Thing, Thing.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Thing.Props = keyof Thing.Props,
  > = $Osdk.Instance<Thing, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Thing.Props = keyof Thing.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Thing extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Thing';
  __DefinitionMetadata?: {
    objectSet: Thing.ObjectSet;
    props: Thing.Props;
    linksType: Thing.Links;
    strictProps: Thing.StrictProps;
    manyToManyLinks: never;
    apiName: 'Thing';
    description: undefined;
    displayName: 'Thing';
    icon: {
      type: 'blueprint';
      name: 'thing';
      color: 'green';
    };
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
    links: {};
    pluralDisplayName: 'Things';
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
    rid: 'ridForThing';
    status: 'ACTIVE';
    titleProperty: 'id';
    type: 'object';
    visibility: undefined;
  };
}

export const Thing: Thing = {
  type: 'object',
  apiName: 'Thing',
  osdkMetadata: $osdkMetadata,
};
