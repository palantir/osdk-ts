import type { ObjectTypeLinkDefinition, PropertyDef, VersionBound } from '@osdk/api';
import { Osdk } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type { Todo } from './Todo.js';

import {
  ObjectSet as $ObjectSet,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  AggregateOpts,
  AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
  AggregationsResults,
  Augments,
  ConvertProps,
  FetchPageArgs,
  LinkedType,
  LinkNames,
  NullabilityAdherence,
  NullabilityAdherenceDefault,
  OsdkObjectPropertyType,
  PageResult,
  PropertyValueClientToWire,
  Result,
  SelectArg,
  ValidToFrom,
} from '@osdk/client.api';

import { ObjectOrInterfacePropertyKeysFrom2, ObjectTypeDefinition } from '@osdk/api';

export type PropertyKeys$Person = ObjectOrInterfacePropertyKeysFrom2<Person>;

export namespace Person {
  export interface Links {
    Friends: Person.ObjectSet;
    Todos: Todo.ObjectSet;
  }

  export interface Props {
    /*readonly*/ email: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ email: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<Person, Person.ObjectSet> {
    aggregate: <AO extends AggregateOpts<Person>>(
      req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Person, AO>,
    ) => Promise<AggregationsResults<Person, AO>>;

    pivotTo: <L extends LinkNames<Person>>(type: L) => LinkedType<Person, L>['objectSet']; // ObjectSet<LinkedType<Person, L>>;

    fetchOne: <
      L extends PropertyKeys$Person,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[Person['primaryKeyType']],
      options?: SelectArg<Person, L, R, S>,
    ) => Promise<
      Person.OsdkObject<L, S extends false ? false : true>
      //  SingleOsdkResult<Person, L, R, S>
    >;

    fetchOneWithErrors: <
      L extends PropertyKeys$Person,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[Person['primaryKeyType']],
      options?: SelectArg<Person, L, R, S>,
    ) => Promise<
      Result<
        Person.OsdkObject<L, S extends false ? false : true>
        //  SingleOsdkResult<Person, L, R, S>
      >
    >;

    fetchPage: <
      L extends PropertyKeys$Person,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<Person, L, R, A, S>,
    ) => Promise<
      PageResult<Person.OsdkObject<L, S extends false ? false : true>>
      // FetchPageResult<Person, L, R, S>
    >;

    fetchPageWithErrors: <
      L extends PropertyKeys$Person,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<Person, L, R, A, S>,
    ) => Promise<
      Result<
        PageResult<Person.OsdkObject<L, S extends false ? false : true>>
        //  FetchPageResult<Person, L, R, S>
      >
    >;

    asyncIter: () => AsyncIterableIterator<Person.OsdkObject>;
  }

  export interface Definition extends ObjectTypeDefinition<'Person', Person>, VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Person.ObjectSet;
    props: Person.Props;
    strictProps: Person.StrictProps;
    description: 'A person';
    links: {
      Friends: ObjectTypeLinkDefinition<Person, true>;
      Todos: ObjectTypeLinkDefinition<Todo, true>;
    };
    primaryKeyApiName: 'email';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      email: PropertyDef<'string', 'non-nullable', 'single'>;
    };
  }

  export type OsdkObject<K extends keyof Person.Props = keyof Person.Props, S extends boolean = true> = Osdk<
    Person,
    K | (S extends false ? '$notStrict' : '$strict')
  > &
    Pick<
      // Person.Props
      S extends false ? Person.Props : Person.StrictProps,
      K
    > & {
      $link: Person.Links;
      $title: string | undefined; // FIXME
      $primaryKey: OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      $as: <NEW_Q extends ValidToFrom<Person>>(type: NEW_Q | string) => Osdk<NEW_Q, ConvertProps<Person, NEW_Q, K>>;
    } & $OsdkObject<'Person'>;
}

/** @deprecated use Person.Definition **/
export type Person = Person.Definition;

export const Person: Person & VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
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
