import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export type OsdkObjectLinks$TodoLike = {};

export namespace TodoLike {
  export type PropertyKeys = 'name' | 'isComplete';

  export interface Props {
    readonly isComplete: $PropType['boolean'] | undefined;
    readonly name: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<TodoLike, TodoLike.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof TodoLike.Props = keyof TodoLike.Props,
  > = $Osdk.Instance<TodoLike, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof TodoLike.Props = keyof TodoLike.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface TodoLike extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'TodoLike';
  __DefinitionMetadata?: {
    objectSet: TodoLike.ObjectSet;
    props: TodoLike.Props;
    linksType: OsdkObjectLinks$TodoLike;
    strictProps: TodoLike.StrictProps;
    apiName: 'TodoLike';
    description: '';
    displayName: 'TodoLike';
    implementedBy: ['Todo'];
    implements: [];
    links: {};
    properties: {
      /**
       * (no ontology metadata)
       */
      isComplete: $PropertyDef<'boolean', 'nullable', 'single'>;
      /**
       *   display name: 'Name'
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.fe6b2917-915d-4952-b89d-1231dad224e0';
    type: 'interface';
  };
}

export const TodoLike: TodoLike = {
  type: 'interface',
  apiName: 'TodoLike',
  osdkMetadata: $osdkMetadata,
};
