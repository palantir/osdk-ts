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

export namespace MatthewvsDevOrderEmbedding {
  export type PropertyKeys = 'orderId' | 'orderTitle' | 'embedding';

  export type Links = {};

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Embedding'
     */
    readonly embedding: $PropType['vector'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly orderId: $PropType['string'];
    /**
     * (no ontology metadata)
     */
    readonly orderTitle: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<MatthewvsDevOrderEmbedding, MatthewvsDevOrderEmbedding.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MatthewvsDevOrderEmbedding.Props = keyof MatthewvsDevOrderEmbedding.Props,
  > = $Osdk.Instance<MatthewvsDevOrderEmbedding, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MatthewvsDevOrderEmbedding.Props = keyof MatthewvsDevOrderEmbedding.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface MatthewvsDevOrderEmbedding extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'MatthewvsDevOrderEmbedding';
  __DefinitionMetadata?: {
    objectSet: MatthewvsDevOrderEmbedding.ObjectSet;
    props: MatthewvsDevOrderEmbedding.Props;
    linksType: MatthewvsDevOrderEmbedding.Links;
    strictProps: MatthewvsDevOrderEmbedding.StrictProps;
    apiName: 'MatthewvsDevOrderEmbedding';
    description: 'A venture';
    displayName: '[matthewvs-dev] Order Embedding';
    icon: {
      type: 'blueprint';
      name: 'ventureIcon';
      color: 'color';
    };
    implements: undefined;
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: '[matthewvs-dev] Order Embeddings';
    primaryKeyApiName: 'orderId';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Embedding'
       */
      embedding: $PropertyDef<'vector', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      orderId: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      orderTitle: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'rid.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'orderTitle';
    type: 'object';
    visibility: undefined;
  };
}

export const MatthewvsDevOrderEmbedding = {
  type: 'object',
  apiName: 'MatthewvsDevOrderEmbedding',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'rid.a.b.c.d',
  },
} satisfies MatthewvsDevOrderEmbedding & { internalDoNotUseMetadata: { rid: string } } as MatthewvsDevOrderEmbedding;
