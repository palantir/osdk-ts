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

export namespace Task {
  export type PropertyKeys = 'taskId' | 'body';

  export type Links = {};

  export interface Props {
    readonly body: $PropType['string'] | undefined;
    readonly taskId: $PropType['string'];
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Task, Task.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Task.Props = keyof Task.Props,
  > = $Osdk.Instance<Task, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Task.Props = keyof Task.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Task extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'com.example.dep.Task';
  __DefinitionMetadata?: {
    objectSet: Task.ObjectSet;
    props: Task.Props;
    linksType: Task.Links;
    strictProps: Task.StrictProps;
    apiName: 'com.example.dep.Task';
    description: 'Task description';
    displayName: 'Task';
    icon: {
      type: 'blueprint';
      name: 'task';
      color: '#000000';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Tasks';
    primaryKeyApiName: 'taskId';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      body: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      taskId: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ridForTask';
    status: 'ACTIVE';
    titleProperty: 'taskId';
    type: 'object';
  };
}

export const Task: Task = {
  type: 'object',
  apiName: 'com.example.dep.Task',
  osdkMetadata: $osdkMetadata,
};
