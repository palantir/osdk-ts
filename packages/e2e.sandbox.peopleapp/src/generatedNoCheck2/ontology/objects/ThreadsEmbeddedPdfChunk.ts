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

export namespace ThreadsEmbeddedPdfChunk {
  export type PropertyKeys =
    | 'chunk'
    | 'chunkId'
    | 'chunkPosition'
    | 'embedding'
    | 'mediaItemRid'
    | 'mediaReference'
    | 'page'
    | 'path'
    | 'searchQuery'
    | 'timestamp';

  export type Links = {};

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Chunk'
     */
    readonly chunk: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Chunk Id'
     */
    readonly chunkId: $PropType['string'];
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Chunk Position'
     */
    readonly chunkPosition: $PropType['integer'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Embedding'
     */
    readonly embedding: $PropType['vector'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Media Item Rid'
     */
    readonly mediaItemRid: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Media Reference'
     */
    readonly mediaReference: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Page'
     */
    readonly page: $PropType['integer'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Path'
     */
    readonly path: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Search Query'
     */
    readonly searchQuery: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Timestamp'
     */
    readonly timestamp: $PropType['timestamp'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<ThreadsEmbeddedPdfChunk, ThreadsEmbeddedPdfChunk.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ThreadsEmbeddedPdfChunk.Props = keyof ThreadsEmbeddedPdfChunk.Props,
  > = $Osdk.Instance<ThreadsEmbeddedPdfChunk, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ThreadsEmbeddedPdfChunk.Props = keyof ThreadsEmbeddedPdfChunk.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface ThreadsEmbeddedPdfChunk extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'ThreadsEmbeddedPdfChunk';
  __DefinitionMetadata?: {
    objectSet: ThreadsEmbeddedPdfChunk.ObjectSet;
    props: ThreadsEmbeddedPdfChunk.Props;
    linksType: ThreadsEmbeddedPdfChunk.Links;
    strictProps: ThreadsEmbeddedPdfChunk.StrictProps;
    apiName: 'ThreadsEmbeddedPdfChunk';
    description: '';
    displayName: '[Threads] Embedded PDF Chunk';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'document';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: '[Threads] Embedded PDF Chunks';
    primaryKeyApiName: 'chunkId';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Chunk'
       */
      chunk: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Chunk Id'
       */
      chunkId: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Chunk Position'
       */
      chunkPosition: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Embedding'
       */
      embedding: $PropertyDef<'vector', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Media Item Rid'
       */
      mediaItemRid: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Media Reference'
       */
      mediaReference: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Page'
       */
      page: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Path'
       */
      path: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Search Query'
       */
      searchQuery: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Timestamp'
       */
      timestamp: $PropertyDef<'timestamp', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.17be51b8-9929-43a9-83c7-f105c44eb168';
    status: 'EXPERIMENTAL';
    titleProperty: 'chunk';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const ThreadsEmbeddedPdfChunk = {
  type: 'object',
  apiName: 'ThreadsEmbeddedPdfChunk',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.17be51b8-9929-43a9-83c7-f105c44eb168',
  },
} satisfies ThreadsEmbeddedPdfChunk & { internalDoNotUseMetadata: { rid: string } } as ThreadsEmbeddedPdfChunk;
