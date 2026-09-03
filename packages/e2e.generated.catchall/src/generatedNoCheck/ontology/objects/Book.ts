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

export namespace Book {
  export type PropertyKeys = 'author' | 'id' | 'isbn' | 'title';

  export type Links = {};

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly author: $PropType['string'] | undefined;
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
    readonly isbn: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly title: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Book, Book.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Book.Props = keyof Book.Props,
  > = $Osdk.Instance<Book, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Book.Props = keyof Book.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Book extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Book';
  primaryKeyApiName: 'id';
  primaryKeyType: 'string';
  __DefinitionMetadata?: {
    objectSet: Book.ObjectSet;
    props: Book.Props;
    linksType: Book.Links;
    strictProps: Book.StrictProps;
    apiName: 'Book';
    description: '';
    displayName: 'Book';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: ['LibraryItem'];
    interfaceImplementations: {
      LibraryItem: {
        name: {
          type: 'localProperty';
          propertyApiName: 'title';
        };
        id: {
          type: 'localProperty';
          propertyApiName: 'id';
        };
      };
    };
    interfaceMap: {
      LibraryItem: {
        name: 'title';
        id: 'id';
      };
    };
    inverseInterfaceMap: {
      LibraryItem: {
        title: 'name';
        id: 'id';
      };
    };
    links: {};
    pluralDisplayName: 'Books';
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       */
      author: $PropertyDef<'string', 'nullable', 'single'>;
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
      isbn: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       */
      title: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.909cb811-27c5-5194-8b16-dc5944ade59f';
    status: 'EXPERIMENTAL';
    titleProperty: 'title';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const Book = {
  type: 'object',
  apiName: 'Book',
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: 'id',
  primaryKeyType: 'string',
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.909cb811-27c5-5194-8b16-dc5944ade59f',
  },
} satisfies Book & { internalDoNotUseMetadata: { rid: string } } as Book;
