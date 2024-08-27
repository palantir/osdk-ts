import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition as $ObjectTypeDefinition,
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
  ValidToFrom as $ValidToFrom,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

export namespace Todo {
  export type PropertyKeys = $ObjectOrInterfacePropertyKeysFrom2<Todo>;

  export type Links = never;

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
    aggregate: <AO extends $AggregateOpts<Todo>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Todo, AO>,
    ) => Promise<$AggregationsResults<Todo, AO>>;

    pivotTo: <L extends $LinkNames<Todo>>(type: L) => $LinkedType<Todo, L>['objectSet']; // ObjectSet<LinkedType<Todo, L>>;

    fetchOne: <
      L extends Todo.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Todo['primaryKeyType']],
      options?: $SelectArg<Todo, L, R, S>,
    ) => Promise<
      Todo.OsdkObject<
        (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
        L
      >
    >;

    fetchOneWithErrors: <
      L extends Todo.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Todo['primaryKeyType']],
      options?: $SelectArg<Todo, L, R, S>,
    ) => Promise<
      $Result<
        Todo.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    fetchPage: <
      L extends Todo.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Todo, L, R, A, S>,
    ) => Promise<
      $PageResult<
        Todo.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    fetchPageWithErrors: <
      L extends Todo.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Todo, L, R, A, S>,
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

    asyncIter: () => AsyncIterableIterator<Todo.OsdkObject>;
  }

  export interface Definition extends $ObjectTypeDefinition<'Todo', Todo>, $VersionBound<$ExpectedClientVersion> {
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
      id: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      isComplete: $PropertyDef<'boolean', 'nullable', 'single'>;
      /**
       *   display name: 'Title',
       *   description: The text of the todo
       */
      title: $PropertyDef<'string', 'nullable', 'single'>;
    };
  }

  export type OsdkObject<
    OPTIONS extends '$strict' | '$notStrict' | '$rid' = '$strict',
    K extends keyof Todo.Props = keyof Todo.Props,
  > = $Osdk<Todo, K | OPTIONS> &
    Pick<
      // Todo.Props
      OPTIONS extends '$notStrict' ? Todo.Props : Todo.StrictProps,
      K
    > & {
      $link: Todo.Links;
      $title: string | undefined; // FIXME
      $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      $as: <NEW_Q extends $ValidToFrom<Todo>>(type: NEW_Q | string) => $Osdk<NEW_Q, $ConvertProps<Todo, NEW_Q, K>>;
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
