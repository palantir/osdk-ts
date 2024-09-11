import type {
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
  PropertyDef as $PropertyDef,
} from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Todo } from './Todo.js';

export namespace Person {
  export type PropertyKeys = 'email';

  export interface Links {
    readonly Friends: Person.ObjectSet;
    readonly Todos: Todo.ObjectSet;
  }

  export interface Props {
    readonly email: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly email: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<Person.Definition, Person.ObjectSet> {}

  export interface Definition extends $ObjectTypeDefinition<'Person', Person.Definition> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Person.ObjectSet;
    props: Person.Props;
    linksType: Person.Links;
    strictProps: Person.StrictProps;
    description: 'A person';
    links: {
      Friends: $ObjectTypeLinkDefinition<Person, true>;
      Todos: $ObjectTypeLinkDefinition<Todo, true>;
    };
    primaryKeyApiName: 'email';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      email: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
  }

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Person.Props = keyof Person.Props,
  > = $Osdk<Person.Definition, K | OPTIONS>;
}

export type Person = Person.Definition;

export const Person: Person = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
  apiName: 'Person',
  description: 'A person',
  links: {
    Todos: {
      multiplicity: true,
      targetType: 'Todo',
    },
    Friends: {
      multiplicity: true,
      targetType: 'Person',
    },
  },
  primaryKeyApiName: 'email',
  primaryKeyType: 'string',
  properties: {
    email: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
  },
  type: 'object',
};
