import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { ExampleEw03osdkTodoTask } from './ExampleEw03osdkTodoTask.js';
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

export namespace ExampleEw03osdkTodoProject {
  export type PropertyKeys = 'budget' | 'description' | 'name' | 'pk';

  export interface Links {
    readonly exampleEw03OsdkTodoTasks: ExampleEw03osdkTodoTask.ObjectSet;
  }

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Budget'
     */
    readonly budget: $PropType['integer'] | undefined;
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
     *   display name: 'Name'
     */
    readonly name: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Pk'
     */
    readonly pk: $PropType['string'];
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<ExampleEw03osdkTodoProject, ExampleEw03osdkTodoProject.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ExampleEw03osdkTodoProject.Props = keyof ExampleEw03osdkTodoProject.Props,
  > = $Osdk.Instance<ExampleEw03osdkTodoProject, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ExampleEw03osdkTodoProject.Props = keyof ExampleEw03osdkTodoProject.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface ExampleEw03osdkTodoProject extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'ExampleEw03osdkTodoProject';
  __DefinitionMetadata?: {
    objectSet: ExampleEw03osdkTodoProject.ObjectSet;
    props: ExampleEw03osdkTodoProject.Props;
    linksType: ExampleEw03osdkTodoProject.Links;
    strictProps: ExampleEw03osdkTodoProject.StrictProps;
    apiName: 'ExampleEw03osdkTodoProject';
    description: 'Osdk Project is a collection of tasks which are managed together';
    displayName: '[Example ew03] Osdk Todo Project';
    icon: {
      type: 'blueprint';
      color: '#EC9A3C';
      name: 'gantt-chart';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      exampleEw03OsdkTodoTasks: $ObjectMetadata.Link<ExampleEw03osdkTodoTask, true>;
    };
    pluralDisplayName: '[Example ew03] Osdk Todo Projects';
    primaryKeyApiName: 'pk';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Budget'
       */
      budget: $PropertyDef<'integer', 'nullable', 'single'>;
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
       *   display name: 'Name'
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Pk'
       */
      pk: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.fd5bdc1a-eef1-47ab-8b14-c8155d2890a8';
    status: 'EXPERIMENTAL';
    titleProperty: 'name';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const ExampleEw03osdkTodoProject = {
  type: 'object',
  apiName: 'ExampleEw03osdkTodoProject',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.fd5bdc1a-eef1-47ab-8b14-c8155d2890a8',
  },
} satisfies ExampleEw03osdkTodoProject & { internalDoNotUseMetadata: { rid: string } } as ExampleEw03osdkTodoProject;
