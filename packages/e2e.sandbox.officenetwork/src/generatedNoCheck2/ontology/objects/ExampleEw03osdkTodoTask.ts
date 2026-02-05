import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { ExampleEw03osdkTodoProject } from './ExampleEw03osdkTodoProject.js';
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

export namespace ExampleEw03osdkTodoTask {
  export type PropertyKeys =
    | 'assignedTo'
    | 'createdAt'
    | 'createdBy'
    | 'description'
    | 'dueDate'
    | 'pk'
    | 'projectId'
    | 'startDate'
    | 'status'
    | 'title';

  export interface Links {
    readonly exampleEw03OsdkTodoProject: $SingleLinkAccessor<ExampleEw03osdkTodoProject>;
  }

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Assigned To'
     */
    readonly assignedTo: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Created At'
     */
    readonly createdAt: $PropType['timestamp'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Created By'
     */
    readonly createdBy: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Description'
     */
    readonly description: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Due Date'
     */
    readonly dueDate: $PropType['datetime'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Pk'
     */
    readonly pk: $PropType['string'];
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Project Id'
     */
    readonly projectId: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Start Date'
     */
    readonly startDate: $PropType['datetime'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Status'
     */
    readonly status: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Title'
     */
    readonly title: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<ExampleEw03osdkTodoTask, ExampleEw03osdkTodoTask.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ExampleEw03osdkTodoTask.Props = keyof ExampleEw03osdkTodoTask.Props,
  > = $Osdk.Instance<ExampleEw03osdkTodoTask, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ExampleEw03osdkTodoTask.Props = keyof ExampleEw03osdkTodoTask.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface ExampleEw03osdkTodoTask extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'ExampleEw03osdkTodoTask';
  __DefinitionMetadata?: {
    objectSet: ExampleEw03osdkTodoTask.ObjectSet;
    props: ExampleEw03osdkTodoTask.Props;
    linksType: ExampleEw03osdkTodoTask.Links;
    strictProps: ExampleEw03osdkTodoTask.StrictProps;
    apiName: 'ExampleEw03osdkTodoTask';
    description: 'Osdk task is an activity I have to complete in the given timeframe';
    displayName: '[Example ew03] Osdk Todo Task';
    icon: {
      type: 'blueprint';
      color: '#EC9A3C';
      name: 'form';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      exampleEw03OsdkTodoProject: $ObjectMetadata.Link<ExampleEw03osdkTodoProject, false>;
    };
    pluralDisplayName: '[Example ew03] Osdk Todo Tasks';
    primaryKeyApiName: 'pk';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Assigned To'
       */
      assignedTo: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Created At'
       */
      createdAt: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Created By'
       */
      createdBy: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Description'
       */
      description: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Due Date'
       */
      dueDate: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Pk'
       */
      pk: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Project Id'
       */
      projectId: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Start Date'
       */
      startDate: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Status'
       */
      status: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Title'
       */
      title: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.b1e19a30-7f1b-43d9-889c-496d281f5510';
    status: 'EXPERIMENTAL';
    titleProperty: 'title';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const ExampleEw03osdkTodoTask = {
  type: 'object',
  apiName: 'ExampleEw03osdkTodoTask',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.b1e19a30-7f1b-43d9-889c-496d281f5510',
  },
} satisfies ExampleEw03osdkTodoTask & { internalDoNotUseMetadata: { rid: string } } as ExampleEw03osdkTodoTask;
