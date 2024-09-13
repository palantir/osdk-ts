import type {
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
  PropertyDef as $PropertyDef,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Person } from './Person.js';

export namespace Todo {
  export type PropertyKeys = 'id' | 'body' | 'text' | 'priority' | 'complete';

  export interface Links {
    readonly Assignee: $SingleLinkAccessor<Person>;
  }

  export interface Props {
    readonly body: $PropType['string'] | undefined;
    readonly complete: $PropType['boolean'] | undefined;
    readonly id: $PropType['integer'] | undefined;
    readonly priority: $PropType['integer'] | undefined;
    readonly text: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly body: $PropType['string'] | undefined;
    readonly complete: $PropType['boolean'] | undefined;
    readonly id: $PropType['integer'];
    readonly priority: $PropType['integer'] | undefined;
    readonly text: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<Todo, Todo.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Todo.Props = keyof Todo.Props,
  > = $Osdk<Todo, K | OPTIONS>;
}

export interface Todo extends $ObjectTypeDefinition<'Todo', Todo> {
  osdkMetadata: typeof $osdkMetadata;
  objectSet: Todo.ObjectSet;
  props: Todo.Props;
  linksType: Todo.Links;
  strictProps: Todo.StrictProps;
  description: 'Its a todo item.';
  links: {
    Assignee: $ObjectTypeLinkDefinition<Person, false>;
  };
  primaryKeyApiName: 'id';
  primaryKeyType: 'integer';
  properties: {
    /**
     *   display name: 'Body',
     *   description: The text of the todo
     */
    body: $PropertyDef<'string', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    complete: $PropertyDef<'boolean', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    id: $PropertyDef<'integer', 'non-nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    priority: $PropertyDef<'integer', 'nullable', 'single'>;
    /**
     *   display name: 'Text'
     */
    text: $PropertyDef<'string', 'nullable', 'single'>;
  };
}

export const Todo: Todo = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
  apiName: 'Todo',
  description: 'Its a todo item.',
  links: {
    Assignee: {
      multiplicity: false,
      targetType: 'Person',
    },
  },
  primaryKeyApiName: 'id',
  primaryKeyType: 'integer',
  properties: {
    id: {
      multiplicity: false,
      type: 'integer',
      nullable: false,
    },
    body: {
      displayName: 'Body',
      multiplicity: false,
      description: 'The text of the todo',
      type: 'string',
      nullable: true,
    },
    text: {
      displayName: 'Text',
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    priority: {
      multiplicity: false,
      type: 'integer',
      nullable: true,
    },
    complete: {
      multiplicity: false,
      type: 'boolean',
      nullable: true,
    },
  },
  type: 'object',
};
