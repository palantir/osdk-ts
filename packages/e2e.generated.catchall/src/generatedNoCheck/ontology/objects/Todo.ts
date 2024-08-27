import type {
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
  PropertyDef as $PropertyDef,
  VersionBound as $VersionBound,
} from '@osdk/api';
import type {
  AggregateOpts as $AggregateOpts,
  AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
  AggregationsResults as $AggregationsResults,
  Augments as $Augments,
  ConvertProps as $ConvertProps,
  DefaultToFalse as $DefaultToFalse,
  FetchPageArgs as $FetchPageArgs,
  LinkedType as $LinkedType,
  LinkNames as $LinkNames,
  NullabilityAdherence as $NullabilityAdherence,
  NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  OsdkObjectPropertyType as $OsdkObjectPropertyType,
  PageResult as $PageResult,
  PropertyValueClientToWire as $PropertyValueClientToWire,
  PropertyValueWireToClient as $PropType,
  Result as $Result,
  SelectArg as $SelectArg,
  SingleLinkAccessor as $SingleLinkAccessor,
  ValidToFrom as $ValidToFrom,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Person } from './Person.js';

export namespace Todo {
  export type PropertyKeys = 'id' | 'body' | 'text' | 'priority' | 'complete';

  export interface Links {
    readonly Assignee: $SingleLinkAccessor<Person.Definition>;
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

  export interface ObjectSet extends $ObjectSet<Todo.Definition, Todo.ObjectSet> {
    readonly aggregate: <AO extends $AggregateOpts<Todo.Definition>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Todo.Definition, AO>,
    ) => Promise<$AggregationsResults<Todo.Definition, AO>>;

    readonly pivotTo: <L extends $LinkNames<Todo.Definition>>(type: L) => $LinkedType<Todo.Definition, L>['objectSet']; // ObjectSet<LinkedType<Todo.Definition, L>>;

    readonly fetchOne: <
      L extends Todo.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Todo.Definition['primaryKeyType']],
      options?: $SelectArg<Todo.Definition, L, R, S>,
    ) => Promise<
      Todo.OsdkObject<
        (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
        L
      >
    >;

    readonly fetchOneWithErrors: <
      L extends Todo.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Todo.Definition['primaryKeyType']],
      options?: $SelectArg<Todo.Definition, L, R, S>,
    ) => Promise<
      $Result<
        Todo.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPage: <
      L extends Todo.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Todo.Definition, L, R, A, S>,
    ) => Promise<
      $PageResult<
        Todo.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      L extends Todo.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Todo.Definition, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          Todo.OsdkObject<
            (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
            L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<Todo.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'Todo', Todo.Definition>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Todo.ObjectSet;
    props: Todo.Props;
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

  export type OsdkObject<
    OPTIONS extends '$strict' | '$notStrict' | '$rid' = '$strict',
    K extends keyof Todo.Props = keyof Todo.Props,
  > = $Osdk<Todo.Definition, K | OPTIONS> &
    Pick<OPTIONS extends '$notStrict' ? Todo.Props : Todo.StrictProps, K> & {
      readonly $link: Todo.Links;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'integer'; nullable: false }, true>;

      readonly $as: <NEW_Q extends $ValidToFrom<Todo.Definition>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<Todo.Definition, NEW_Q, K>>;
    } & $OsdkObject<'Todo'>;
}

/** @deprecated use Todo.Definition **/
export type Todo = Todo.Definition;

export const Todo: Todo & $VersionBound<$ExpectedClientVersion> = {
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
