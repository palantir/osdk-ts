import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition as $ObjectTypeDefinition,
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

  export interface ObjectSet extends $ObjectSet<Task.Definition, Task.ObjectSet> {}

  export interface Definition extends $ObjectTypeDefinition<'com.example.dep.Task', Task.Definition> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Task.ObjectSet;
    props: Task.Props;
    linksType: Task.Links;
    strictProps: Task.StrictProps;
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
  }

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Task.Props = keyof Task.Props,
  > = $Osdk<Task.Definition, K | OPTIONS>;
}

export type Task = Task.Definition;

export const Task: Task = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
  apiName: 'com.example.dep.Task',
  implements: [],
  interfaceMap: {},
  inverseInterfaceMap: {},
  inverseSpts: {},
  links: {},
  primaryKeyApiName: 'taskId',
  primaryKeyType: 'string',
  properties: {
    taskId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    body: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
  spts: {},
  type: 'object',
};
