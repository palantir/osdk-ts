import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Todo } from './Todo.js';
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

  export interface ObjectSet extends $ObjectSet<Person, Person.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Person.Props = keyof Person.Props,
  > = $Osdk<Person, K | OPTIONS>;
}

export interface Person extends $ObjectTypeDefinition<'Person', Person> {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Person';
  __DefinitionMetadata?: {
    objectSet: Person.ObjectSet;
    props: Person.Props;
    linksType: Person.Links;
    strictProps: Person.StrictProps;
    apiName: 'Person';
    description: 'A person';
    interfaceMap: {};
    inverseInterfaceMap: {};
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
    type: 'object';
  };
}

export const Person: Person = {
  type: 'object',
  apiName: 'Person',
  osdkMetadata: $osdkMetadata,
};
