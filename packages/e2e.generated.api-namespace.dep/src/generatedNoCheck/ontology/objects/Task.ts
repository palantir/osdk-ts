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
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace Task {
  export type PropertyKeys = $ObjectOrInterfacePropertyKeysFrom2<Task>;

  export type Links = never;

  export interface Props {
    readonly body: $PropType['string'] | undefined;
    readonly taskId: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly body: $PropType['string'] | undefined;
    readonly taskId: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<Task, Task.ObjectSet> {
    aggregate: <AO extends $AggregateOpts<Task>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Task, AO>,
    ) => Promise<$AggregationsResults<Task, AO>>;

    pivotTo: <L extends $LinkNames<Task>>(type: L) => $LinkedType<Task, L>['objectSet']; // ObjectSet<LinkedType<Task, L>>;

    fetchOne: <
      L extends Task.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Task['primaryKeyType']],
      options?: $SelectArg<Task, L, R, S>,
    ) => Promise<
      Task.OsdkObject<
        (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
        L
      >
    >;

    fetchOneWithErrors: <
      L extends Task.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Task['primaryKeyType']],
      options?: $SelectArg<Task, L, R, S>,
    ) => Promise<
      $Result<
        Task.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    fetchPage: <
      L extends Task.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Task, L, R, A, S>,
    ) => Promise<
      $PageResult<
        Task.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    fetchPageWithErrors: <
      L extends Task.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Task, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          Task.OsdkObject<
            (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
            L
          >
        >
      >
    >;

    asyncIter: () => AsyncIterableIterator<Task.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'com.example.dep.Task', Task>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Task.ObjectSet;
    props: Task.Props;
    strictProps: Task.StrictProps;
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    inverseSpts: {};
    links: {};
    primaryKeyApiName: 'taskId';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      body: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      taskId: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    spts: {};
  }

  export type OsdkObject<
    OPTIONS extends '$strict' | '$notStrict' | '$rid' = '$strict',
    K extends keyof Task.Props = keyof Task.Props,
  > = $Osdk<Task, K | OPTIONS> &
    Pick<
      // Task.Props
      OPTIONS extends '$notStrict' ? Task.Props : Task.StrictProps,
      K
    > & {
      $link: Task.Links;
      $title: string | undefined; // FIXME
      $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      $as: <NEW_Q extends $ValidToFrom<Task>>(type: NEW_Q | string) => $Osdk<NEW_Q, $ConvertProps<Task, NEW_Q, K>>;
    } & $OsdkObject<'com.example.dep.Task'>;
}

/** @deprecated use Task.Definition **/
export type Task = Task.Definition;

export const Task: Task & $VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  strictProps: undefined as any,
  apiName: 'com.example.dep.Task',
  implements: [],
  interfaceMap: {},
  inverseInterfaceMap: {},
  inverseSpts: {},
  links: {},
  primaryKeyApiName: 'taskId',
  primaryKeyType: 'string',
  properties: {
    taskId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    body: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
  spts: {},
  type: 'object',
};
