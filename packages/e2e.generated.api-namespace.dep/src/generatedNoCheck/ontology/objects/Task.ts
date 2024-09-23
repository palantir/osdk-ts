import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
  MinObjectDef as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client.api';

export namespace Task {
  export type PropertyKeys = 'taskId' | 'body';

  export type Links = {};

  export interface Props {
    readonly body: $PropType['string'] | undefined;
    readonly taskId: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly body: $PropType['string'] | undefined;
    readonly taskId: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<Task, Task.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Task.Props = keyof Task.Props,
  > = $Osdk<Task, K | OPTIONS>;
}

export interface Task extends $ObjectTypeDefinition<'com.example.dep.Task', Task> {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'com.example.dep.Task';
  __DefinitionMetadata?: {
    objectSet: Task.ObjectSet;
    props: Task.Props;
    linksType: Task.Links;
    strictProps: Task.StrictProps;
    apiName: 'com.example.dep.Task';
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    inverseSpts: {};
    links: {};
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
    spts: {};
    type: 'object';
  };
}

export const Task: Task = {
  type: 'object',
  apiName: 'com.example.dep.Task',
  osdkMetadata: $osdkMetadata,
};
