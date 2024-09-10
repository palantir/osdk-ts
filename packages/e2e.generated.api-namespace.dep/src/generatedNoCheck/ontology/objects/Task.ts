import type {
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
  export type PropertyKeys = 'taskId' | 'body';

  export type Links = never;

  export interface Props {
    readonly body: $PropType['string'] | undefined;
    readonly taskId: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly body: $PropType['string'] | undefined;
    readonly taskId: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<Task.Definition, Task.ObjectSet> {
    readonly aggregate: <const AO extends $AggregateOpts<Task.Definition>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Task.Definition, AO>,
    ) => Promise<$AggregationsResults<Task.Definition, AO>>;

    readonly pivotTo: <const L extends $LinkNames<Task.Definition>>(
      type: L,
    ) => $LinkedType<Task.Definition, L>['objectSet'];

    readonly fetchOne: <
      const L extends Task.PropertyKeys,
      const R extends boolean,
      const S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Task.Definition['primaryKeyType']],
      options?: $SelectArg<Task.Definition, L, R, S>,
    ) => Promise<
      Task.OsdkObject<(S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'), L>
    >;

    readonly fetchOneWithErrors: <
      const L extends Task.PropertyKeys,
      const R extends boolean,
      const S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[Task.Definition['primaryKeyType']],
      options?: $SelectArg<Task.Definition, L, R, S>,
    ) => Promise<
      $Result<
        Task.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPage: <
      const L extends Task.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Task.Definition, L, R, A, S>,
    ) => Promise<
      $PageResult<
        Task.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      const L extends Task.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<Task.Definition, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          Task.OsdkObject<
            (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
            L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<Task.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'com.example.dep.Task', Task.Definition>,
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
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Task.Props = keyof Task.Props,
  > = $Osdk<Task.Definition, K | OPTIONS> &
    Pick<
      [OPTIONS] extends [never] ? Task.StrictProps : OPTIONS extends '$notStrict' ? Task.Props : Task.StrictProps,
      K
    > & {
      readonly $link: Task.Links;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      readonly $as: <NEW_Q extends $ValidToFrom<Task.Definition>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<Task.Definition, NEW_Q, K>>;
    } & $OsdkObject<'com.example.dep.Task'>;
}

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
