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

export namespace UnstructuredImageExample {
  export type PropertyKeys = 'mediaItemRid' | 'path' | 'mediaReference';

  export type Links = {};

  export interface Props {
    /**
     * (no ontology metadata)
     */
    readonly mediaItemRid: $PropType['string'];
    /**
     * (no ontology metadata)
     */
    readonly mediaReference: $PropType['mediaReference'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly path: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<UnstructuredImageExample, UnstructuredImageExample.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof UnstructuredImageExample.Props = keyof UnstructuredImageExample.Props,
  > = $Osdk.Instance<UnstructuredImageExample, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof UnstructuredImageExample.Props = keyof UnstructuredImageExample.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface UnstructuredImageExample extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'UnstructuredImageExample';
  __DefinitionMetadata?: {
    objectSet: UnstructuredImageExample.ObjectSet;
    props: UnstructuredImageExample.Props;
    linksType: UnstructuredImageExample.Links;
    strictProps: UnstructuredImageExample.StrictProps;
    apiName: 'UnstructuredImageExample';
    description: 'Media OT for OSDK e2e testing';
    displayName: 'Unstructured Image Example';
    icon: {
      type: 'blueprint';
      name: 'object';
      color: 'color';
    };
    implements: undefined;
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Unstructured Image Examples';
    primaryKeyApiName: 'mediaItemRid';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      mediaItemRid: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      mediaReference: $PropertyDef<'mediaReference', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      path: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'rid.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'path';
    type: 'object';
    visibility: undefined;
  };
}

export const UnstructuredImageExample: UnstructuredImageExample = {
  type: 'object',
  apiName: 'UnstructuredImageExample',
  osdkMetadata: $osdkMetadata,
};

(UnstructuredImageExample as any).__experimental_do_not_use__rid = 'rid.a.b.c.d';
