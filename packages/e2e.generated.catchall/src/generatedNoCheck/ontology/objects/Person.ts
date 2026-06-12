import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Todo } from './Todo.js';
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
  LinkDef as $LinkDef,
} from '@osdk/client';
import { createLinkDef as $createLinkDef } from '@osdk/client';

export namespace Person {
  export type PropertyKeys = 'email';

  export interface Links {
    readonly Friends: Person.ObjectSet;
    readonly Todos: Todo.ObjectSet;
  }

  export interface LinkTokens {
    readonly Friends: $LinkDef<Person, Person, 'many'>;
    readonly Todos: $LinkDef<Person, Todo, 'many'>;
  }

  export interface Props {
    /**
     * (no ontology metadata)
     */
    readonly email: $PropType['string'];
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Person, Person.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Person.Props = keyof Person.Props,
  > = $Osdk.Instance<Person, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Person.Props = keyof Person.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Person extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Person';
  primaryKeyApiName: 'email';
  primaryKeyType: 'string';
  links: Person.LinkTokens;
  __DefinitionMetadata?: {
    objectSet: Person.ObjectSet;
    props: Person.Props;
    linksType: Person.Links;
    strictProps: Person.StrictProps;
    apiName: 'Person';
    description: 'A person';
    displayName: 'Person';
    icon: {
      type: 'blueprint';
      name: 'person';
      color: 'color';
    };
    implements: undefined;
    interfaceLinkMap: {};
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      Friends: $ObjectMetadata.Link<Person, true>;
      Todos: $ObjectMetadata.Link<Todo, true>;
    };
    pluralDisplayName: 'People';
    primaryKeyApiName: 'email';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      email: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'rid.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'email';
    type: 'object';
    visibility: undefined;
  };
}

export const Person = {
  type: 'object',
  apiName: 'Person',
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: 'email',
  primaryKeyType: 'string',
  links: {
    Friends: $createLinkDef('Person', 'Friends', 'Person', true, false),
    Todos: $createLinkDef('Person', 'Todos', 'Todo', true, false),
  },
  internalDoNotUseMetadata: {
    rid: 'rid.a.b.c.d',
  },
} satisfies Person & { internalDoNotUseMetadata: { rid: string } } as Person;
