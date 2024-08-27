import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
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
  ValidToFrom as $ValidToFrom,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Todo } from './Todo.js';

export namespace Person {
  export type PropertyKeys = $ObjectOrInterfacePropertyKeysFrom2<Person>;

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

  export interface ObjectSet extends $ObjectSet<Person, Person.ObjectSet> {
    aggregate: <AO extends $AggregateOpts<Person>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Person, AO>,
    ) => Promise<$AggregationsResults<Person, AO>>;

    pivotTo: <L extends $LinkNames<Person>>(type: L) => $LinkedType<Person, L>['objectSet']; // ObjectSet<LinkedType<Person, L>>;

    fetchOne: <
      L extends Person.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Person['primaryKeyType']],
      options?: $SelectArg<Person, L, R, S>,
    ) => Promise<
      Person.OsdkObject<
        (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
        L
      >
    >;

    fetchOneWithErrors: <
      L extends Person.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Person['primaryKeyType']],
      options?: $SelectArg<Person, L, R, S>,
    ) => Promise<
      $Result<
        Person.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    fetchPage: <
      L extends Person.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Person, L, R, A, S>,
    ) => Promise<
      $PageResult<
        Person.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    fetchPageWithErrors: <
      L extends Person.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Person, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          Person.OsdkObject<
            (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
            L
          >
        >
      >
    >;

    asyncIter: () => AsyncIterableIterator<Person.OsdkObject>;
  }

  export interface Definition extends $ObjectTypeDefinition<'Person', Person>, $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Person.ObjectSet;
    props: Person.Props;
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
    OPTIONS extends '$strict' | '$notStrict' | '$rid' = '$strict',
    K extends keyof Person.Props = keyof Person.Props,
  > = $Osdk<Person, K | OPTIONS> &
    Pick<
      // Person.Props
      OPTIONS extends '$notStrict' ? Person.Props : Person.StrictProps,
      K
    > & {
      $link: Person.Links;
      $title: string | undefined; // FIXME
      $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      $as: <NEW_Q extends $ValidToFrom<Person>>(type: NEW_Q | string) => $Osdk<NEW_Q, $ConvertProps<Person, NEW_Q, K>>;
    } & $OsdkObject<'Person'>;
}

/** @deprecated use Person.Definition **/
export type Person = Person.Definition;

export const Person: Person & $VersionBound<$ExpectedClientVersion> = {
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
