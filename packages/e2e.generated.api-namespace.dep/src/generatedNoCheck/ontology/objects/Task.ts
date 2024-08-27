import type { PropertyDef, VersionBound } from '@osdk/api';
import { Osdk } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

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

export type PropertyKeys$Task = ObjectOrInterfacePropertyKeysFrom2<Task>;

export namespace Task {
  export type Links = never;

  export interface Props {
    /*readonly*/ body: $PropType['string'] | undefined;
    /*readonly*/ taskId: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ body: $PropType['string'] | undefined;
    /*readonly*/ taskId: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<Task, Task.ObjectSet> {
    aggregate: <AO extends AggregateOpts<Task>>(
      req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Task, AO>,
    ) => Promise<AggregationsResults<Task, AO>>;

    pivotTo: <L extends LinkNames<Task>>(type: L) => LinkedType<Task, L>['objectSet']; // ObjectSet<LinkedType<Task, L>>;

    fetchOne: <L extends PropertyKeys$Task, R extends boolean, S extends false | 'throw' = NullabilityAdherenceDefault>(
      primaryKey: PropertyValueClientToWire[Task['primaryKeyType']],
      options?: SelectArg<Task, L, R, S>,
    ) => Promise<
      Task.OsdkObject<L, S extends false ? false : true>
      //  SingleOsdkResult<Task, L, R, S>
    >;

    fetchOneWithErrors: <
      L extends PropertyKeys$Task,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[Task['primaryKeyType']],
      options?: SelectArg<Task, L, R, S>,
    ) => Promise<
      Result<
        Task.OsdkObject<L, S extends false ? false : true>
        //  SingleOsdkResult<Task, L, R, S>
      >
    >;

    fetchPage: <
      L extends PropertyKeys$Task,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<Task, L, R, A, S>,
    ) => Promise<
      PageResult<Task.OsdkObject<L, S extends false ? false : true>>
      // FetchPageResult<Task, L, R, S>
    >;

    fetchPageWithErrors: <
      L extends PropertyKeys$Task,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<Task, L, R, A, S>,
    ) => Promise<
      Result<
        PageResult<Task.OsdkObject<L, S extends false ? false : true>>
        //  FetchPageResult<Task, L, R, S>
      >
    >;

    asyncIter: () => AsyncIterableIterator<Task.OsdkObject>;
  }

  export interface Definition
    extends ObjectTypeDefinition<'com.example.dep.Task', Task>,
      VersionBound<$ExpectedClientVersion> {
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
      body: PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      taskId: PropertyDef<'string', 'non-nullable', 'single'>;
    };
    spts: {};
  }

  export type OsdkObject<K extends keyof Task.Props = keyof Task.Props, S extends boolean = true> = Osdk<
    Task,
    K | (S extends false ? '$notStrict' : '$strict')
  > &
    Pick<
      // Task.Props
      S extends false ? Task.Props : Task.StrictProps,
      K
    > & {
      $link: Task.Links;
      $title: string | undefined; // FIXME
      $primaryKey: OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      $as: <NEW_Q extends ValidToFrom<Task>>(type: NEW_Q | string) => Osdk<NEW_Q, ConvertProps<Task, NEW_Q, K>>;
    } & $OsdkObject<'com.example.dep.Task'>;
}

/** @deprecated use Task.Definition **/
export type Task = Task.Definition;

export const Task: Task & VersionBound<$ExpectedClientVersion> = {
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
