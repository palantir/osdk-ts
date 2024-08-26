import type { PropertyDef, VersionBound } from '@osdk/api';
import { Osdk } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

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
  WhereClause,
} from '@osdk/client.api';

import { ObjectOrInterfacePropertyKeysFrom2, ObjectTypeDefinition } from '@osdk/api';

export type PropertyKeys$Todo = ObjectOrInterfacePropertyKeysFrom2<Todo>;

export type OsdkObjectLinks$Todo = never;

export namespace Todo {
  export interface Props {
    /*readonly*/ id: $PropType['string'] | undefined;
    /*readonly*/ isComplete: $PropType['boolean'] | undefined;
    /*readonly*/ title: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ id: $PropType['string'];
    /*readonly*/ isComplete: $PropType['boolean'] | undefined;
    /*readonly*/ title: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<Todo, Todo.ObjectSet> {
    aggregate: <AO extends AggregateOpts<Todo>>(
      req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Todo, AO>,
    ) => Promise<AggregationsResults<Todo, AO>>;

    where: (clause: WhereClause<Todo>) => Todo.ObjectSet;

    union: (...objectSets: ReadonlyArray<Todo.ObjectSet>) => Todo.ObjectSet;

    intersect: (...objectSets: ReadonlyArray<Todo.ObjectSet>) => Todo.ObjectSet;

    subtract: (...objectSets: ReadonlyArray<Todo.ObjectSet>) => Todo.ObjectSet;

    pivotTo: <L extends LinkNames<Todo>>(type: L) => LinkedType<Todo, L>['objectSet']; // ObjectSet<LinkedType<Todo, L>>;

    fetchOne: <L extends PropertyKeys$Todo, R extends boolean, S extends false | 'throw' = NullabilityAdherenceDefault>(
      primaryKey: PropertyValueClientToWire[Todo['primaryKeyType']],
      options?: SelectArg<Todo, L, R, S>,
    ) => Promise<
      Todo.OsdkObject<L, S extends false ? false : true>
      //  SingleOsdkResult<Todo, L, R, S>
    >;

    fetchOneWithErrors: <
      L extends PropertyKeys$Todo,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[Todo['primaryKeyType']],
      options?: SelectArg<Todo, L, R, S>,
    ) => Promise<
      Result<
        Todo.OsdkObject<L, S extends false ? false : true>
        //  SingleOsdkResult<Todo, L, R, S>
      >
    >;

    fetchPage: <
      L extends PropertyKeys$Todo,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<Todo, L, R, A, S>,
    ) => Promise<
      PageResult<Todo.OsdkObject<L, S extends false ? false : true>>
      // FetchPageResult<Todo, L, R, S>
    >;

    fetchPageWithErrors: <
      L extends PropertyKeys$Todo,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<Todo, L, R, A, S>,
    ) => Promise<
      Result<
        PageResult<Todo.OsdkObject<L, S extends false ? false : true>>
        //  FetchPageResult<Todo, L, R, S>
      >
    >;

    asyncIter: () => AsyncIterableIterator<Todo.OsdkObject>;
  }

  export interface Definition extends ObjectTypeDefinition<'Todo', Todo>, VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Todo.ObjectSet;
    props: Todo.Props;
    strictProps: Todo.StrictProps;
    description: 'Its a todo item.';
    links: {};
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      id: PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      isComplete: PropertyDef<'boolean', 'nullable', 'single'>;
      /**
       *   display name: 'Title',
       *   description: The text of the todo
       */
      title: PropertyDef<'string', 'nullable', 'single'>;
    };
  }

  export type OsdkObject<K extends keyof Todo.Props = keyof Todo.Props, S extends boolean = true> = Osdk<
    Todo,
    K | (S extends false ? '$notStrict' : '$strict')
  > &
    Pick<
      // Todo.Props
      S extends false ? Todo.Props : Todo.StrictProps,
      K
    > & {
      $link: OsdkObjectLinks$Todo;
      $title: string | undefined; // FIXME
      $primaryKey: OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      $as: <NEW_Q extends ValidToFrom<Todo>>(type: NEW_Q | string) => Osdk<NEW_Q, ConvertProps<Todo, NEW_Q, K>>;
    } & $OsdkObject<'Todo'>;
}

/** @deprecated use Todo.Definition **/
export type Todo = Todo.Definition;

export const Todo: Todo & VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  strictProps: undefined as any,
  apiName: 'Todo',
  description: 'Its a todo item.',
  links: {},
  primaryKeyApiName: 'id',
  primaryKeyType: 'string',
  properties: {
    id: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    title: {
      displayName: 'Title',
      multiplicity: false,
      description: 'The text of the todo',
      type: 'string',
      nullable: true,
    },
    isComplete: {
      multiplicity: false,
      type: 'boolean',
      nullable: true,
    },
  },
  type: 'object',
};
