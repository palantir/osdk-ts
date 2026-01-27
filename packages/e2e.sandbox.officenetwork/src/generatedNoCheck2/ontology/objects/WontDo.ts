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

export namespace WontDo {
  export type PropertyKeys = 'isComplete' | 'wontDoName';

  export type Links = {};

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly isComplete: $PropType['boolean'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly wontDoName: $PropType['string'];
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<WontDo, WontDo.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof WontDo.Props = keyof WontDo.Props,
  > = $Osdk.Instance<WontDo, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof WontDo.Props = keyof WontDo.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface WontDo extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'WontDo';
  __DefinitionMetadata?: {
    objectSet: WontDo.ObjectSet;
    props: WontDo.Props;
    linksType: WontDo.Links;
    strictProps: WontDo.StrictProps;
    apiName: 'WontDo';
    description: '';
    displayName: 'Wont Do';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: ['TodoLike'];
    interfaceMap: {
      TodoLike: {
        name: 'wontDoName';
        isComplete: 'isComplete';
      };
    };
    inverseInterfaceMap: {
      TodoLike: {
        wontDoName: 'name';
        isComplete: 'isComplete';
      };
    };
    links: {};
    pluralDisplayName: 'Wont Dos';
    primaryKeyApiName: 'wontDoName';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       */
      isComplete: $PropertyDef<'boolean', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       */
      wontDoName: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.0f6f78a8-c31c-43d3-8de9-b7df7a98d232';
    status: 'EXPERIMENTAL';
    titleProperty: 'wontDoName';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const WontDo = {
  type: 'object',
  apiName: 'WontDo',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.0f6f78a8-c31c-43d3-8de9-b7df7a98d232',
  },
} satisfies WontDo & { internalDoNotUseMetadata: { rid: string } } as WontDo;
