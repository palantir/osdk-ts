import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Todo } from './Todo.js';
import type {
  PropertyKeys as $PropertyKeys,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectMetadata as $ObjectMetadata,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/api';

export namespace Person {
  export type PropertyKeys = 'email';

  export interface Links {
    readonly Friends: Person.ObjectSet;
    readonly Todos: Todo.ObjectSet;
  }

  export interface Props {
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
  };
}

export const Person: Person = {
  type: 'object',
  apiName: 'Person',
  osdkMetadata: $osdkMetadata,
};
