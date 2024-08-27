import type {
  ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition,
  ObjectTypeLinkDefinition,
  PropertyDef,
  VersionBound,
} from '@osdk/api';
import type {
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
  Osdk,
  OsdkObjectPropertyType,
  PageResult,
  PropertyValueClientToWire,
  Result,
  SelectArg,
  SingleLinkAccessor,
  ValidToFrom,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Person } from './Person.js';

export namespace Todo {
  export type PropertyKeys = ObjectOrInterfacePropertyKeysFrom2<Todo>;

  export interface Links {
    Assignee: SingleLinkAccessor<Person>;
  }

  export interface Props {
    /*readonly*/ body: $PropType['string'] | undefined;
    /*readonly*/ complete: $PropType['boolean'] | undefined;
    /*readonly*/ id: $PropType['integer'] | undefined;
    /*readonly*/ priority: $PropType['integer'] | undefined;
    /*readonly*/ text: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ body: $PropType['string'] | undefined;
    /*readonly*/ complete: $PropType['boolean'] | undefined;
    /*readonly*/ id: $PropType['integer'];
    /*readonly*/ priority: $PropType['integer'] | undefined;
    /*readonly*/ text: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<Todo, Todo.ObjectSet> {
    aggregate: <AO extends AggregateOpts<Todo>>(
      req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Todo, AO>,
    ) => Promise<AggregationsResults<Todo, AO>>;

    pivotTo: <L extends LinkNames<Todo>>(type: L) => LinkedType<Todo, L>['objectSet']; // ObjectSet<LinkedType<Todo, L>>;

    fetchOne: <L extends Todo.PropertyKeys, R extends boolean, S extends false | 'throw' = NullabilityAdherenceDefault>(
      primaryKey: PropertyValueClientToWire[Todo['primaryKeyType']],
      options?: SelectArg<Todo, L, R, S>,
    ) => Promise<
      Todo.OsdkObject<L, S extends false ? false : true>
      //  SingleOsdkResult<Todo, L, R, S>
    >;

    fetchOneWithErrors: <
      L extends Todo.PropertyKeys,
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
      L extends Todo.PropertyKeys,
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
      L extends Todo.PropertyKeys,
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
    links: {
      Assignee: ObjectTypeLinkDefinition<Person, false>;
    };
    primaryKeyApiName: 'id';
    primaryKeyType: 'integer';
    properties: {
      /**
       *   display name: 'Body',
       *   description: The text of the todo
       */
      body: PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      complete: PropertyDef<'boolean', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      id: PropertyDef<'integer', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      priority: PropertyDef<'integer', 'nullable', 'single'>;
      /**
       *   display name: 'Text'
       */
      text: PropertyDef<'string', 'nullable', 'single'>;
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
      $link: Todo.Links;
      $title: string | undefined; // FIXME
      $primaryKey: OsdkObjectPropertyType<{ multiplicity: false; type: 'integer'; nullable: false }, true>;

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
