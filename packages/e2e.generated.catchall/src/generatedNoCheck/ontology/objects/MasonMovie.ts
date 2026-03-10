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

export namespace MasonMovie {
  export type PropertyKeys = 'classAlt' | 'movie' | 'class' | 'rating' | 'topic' | 'class2';

  export type Links = {};

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Class'
     */
    readonly class: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Class 2'
     */
    readonly class2: $PropType['string'][] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Class alt'
     */
    readonly classAlt: $PropType['string'][] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Movie'
     */
    readonly movie: $PropType['string'];
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Rating'
     */
    readonly rating: $PropType['decimal'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Topic'
     */
    readonly topic: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<MasonMovie, MasonMovie.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MasonMovie.Props = keyof MasonMovie.Props,
  > = $Osdk.Instance<MasonMovie, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MasonMovie.Props = keyof MasonMovie.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface MasonMovie extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'MasonMovie';
  __DefinitionMetadata?: {
    objectSet: MasonMovie.ObjectSet;
    props: MasonMovie.Props;
    linksType: MasonMovie.Links;
    strictProps: MasonMovie.StrictProps;
    apiName: 'MasonMovie';
    description: '';
    displayName: '[mason] movie';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: '[mason] movies';
    primaryKeyApiName: 'movie';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Class'
       */
      class: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Class 2'
       */
      class2: $PropertyDef<'string', 'nullable', 'array'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Class alt'
       */
      classAlt: $PropertyDef<'string', 'nullable', 'array'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Movie'
       */
      movie: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Rating'
       */
      rating: $PropertyDef<'decimal', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Topic'
       */
      topic: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.65a5444c-452e-450e-ac28-04f0028a243d';
    status: 'EXPERIMENTAL';
    titleProperty: 'movie';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const MasonMovie = {
  type: 'object',
  apiName: 'MasonMovie',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.65a5444c-452e-450e-ac28-04f0028a243d',
  },
} satisfies MasonMovie & { internalDoNotUseMetadata: { rid: string } } as MasonMovie;
