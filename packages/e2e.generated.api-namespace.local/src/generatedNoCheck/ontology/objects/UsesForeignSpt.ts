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
  WhereClause,
} from '@osdk/client.api';

import { ObjectOrInterfacePropertyKeysFrom2, ObjectTypeDefinition } from '@osdk/api';

export type PropertyKeys$UsesForeignSpt = ObjectOrInterfacePropertyKeysFrom2<UsesForeignSpt>;

export type OsdkObjectLinks$UsesForeignSpt = never;

export namespace UsesForeignSpt {
  export interface Props {
    /*readonly*/ body: $PropType['string'] | undefined;
    /*readonly*/ id: $PropType['integer'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ body: $PropType['string'] | undefined;
    /*readonly*/ id: $PropType['integer'];
  }

  export interface ObjectSet extends $ObjectSet<UsesForeignSpt, UsesForeignSpt.ObjectSet> {
    aggregate: <AO extends AggregateOpts<UsesForeignSpt>>(
      req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<UsesForeignSpt, AO>,
    ) => Promise<AggregationsResults<UsesForeignSpt, AO>>;

    where: (clause: WhereClause<UsesForeignSpt>) => UsesForeignSpt.ObjectSet;

    union: (...objectSets: ReadonlyArray<UsesForeignSpt.ObjectSet>) => UsesForeignSpt.ObjectSet;

    intersect: (...objectSets: ReadonlyArray<UsesForeignSpt.ObjectSet>) => UsesForeignSpt.ObjectSet;

    subtract: (...objectSets: ReadonlyArray<UsesForeignSpt.ObjectSet>) => UsesForeignSpt.ObjectSet;

    pivotTo: <L extends LinkNames<UsesForeignSpt>>(type: L) => LinkedType<UsesForeignSpt, L>['objectSet']; // ObjectSet<LinkedType<UsesForeignSpt, L>>;

    fetchOne: <
      L extends PropertyKeys$UsesForeignSpt,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[UsesForeignSpt['primaryKeyType']],
      options?: SelectArg<UsesForeignSpt, L, R, S>,
    ) => Promise<
      UsesForeignSpt.OsdkObject<L, S extends false ? false : true>
      //  SingleOsdkResult<UsesForeignSpt, L, R, S>
    >;

    fetchOneWithErrors: <
      L extends PropertyKeys$UsesForeignSpt,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[UsesForeignSpt['primaryKeyType']],
      options?: SelectArg<UsesForeignSpt, L, R, S>,
    ) => Promise<
      Result<
        UsesForeignSpt.OsdkObject<L, S extends false ? false : true>
        //  SingleOsdkResult<UsesForeignSpt, L, R, S>
      >
    >;

    fetchPage: <
      L extends PropertyKeys$UsesForeignSpt,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<UsesForeignSpt, L, R, A, S>,
    ) => Promise<
      PageResult<UsesForeignSpt.OsdkObject<L, S extends false ? false : true>>
      // FetchPageResult<UsesForeignSpt, L, R, S>
    >;

    fetchPageWithErrors: <
      L extends PropertyKeys$UsesForeignSpt,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<UsesForeignSpt, L, R, A, S>,
    ) => Promise<
      Result<
        PageResult<UsesForeignSpt.OsdkObject<L, S extends false ? false : true>>
        //  FetchPageResult<UsesForeignSpt, L, R, S>
      >
    >;

    asyncIter: () => AsyncIterableIterator<UsesForeignSpt.OsdkObject>;
  }

  export interface Definition
    extends ObjectTypeDefinition<'UsesForeignSpt', UsesForeignSpt>,
      VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: UsesForeignSpt.ObjectSet;
    props: UsesForeignSpt.Props;
    strictProps: UsesForeignSpt.StrictProps;
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    inverseSpts: {
      body: 'com.example.dep.spt';
    };
    links: {};
    primaryKeyApiName: 'id';
    primaryKeyType: 'integer';
    properties: {
      /**
       * (no ontology metadata)
       */
      body: PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      id: PropertyDef<'integer', 'non-nullable', 'single'>;
    };
    spts: {
      'com.example.dep.spt': 'body';
    };
  }

  export type OsdkObject<
    K extends keyof UsesForeignSpt.Props = keyof UsesForeignSpt.Props,
    S extends boolean = true,
  > = Osdk<UsesForeignSpt, K | (S extends false ? '$notStrict' : '$strict')> &
    Pick<
      // UsesForeignSpt.Props
      S extends false ? UsesForeignSpt.Props : UsesForeignSpt.StrictProps,
      K
    > & {
      $link: OsdkObjectLinks$UsesForeignSpt;
      $title: string | undefined; // FIXME
      $primaryKey: OsdkObjectPropertyType<{ multiplicity: false; type: 'integer'; nullable: false }, true>;

      $as: <NEW_Q extends ValidToFrom<UsesForeignSpt>>(
        type: NEW_Q | string,
      ) => Osdk<NEW_Q, ConvertProps<UsesForeignSpt, NEW_Q, K>>;
    } & $OsdkObject<'UsesForeignSpt'>;
}

/** @deprecated use UsesForeignSpt.Definition **/
export type UsesForeignSpt = UsesForeignSpt.Definition;

export const UsesForeignSpt: UsesForeignSpt & VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  strictProps: undefined as any,
  apiName: 'UsesForeignSpt',
  implements: [],
  interfaceMap: {},
  inverseInterfaceMap: {},
  inverseSpts: {
    body: 'com.example.dep.spt',
  },
  links: {},
  primaryKeyApiName: 'id',
  primaryKeyType: 'integer',
  properties: {
    id: {
      multiplicity: false,
      type: 'integer',
      nullable: false,
    },
    body: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
  spts: {
    'com.example.dep.spt': 'body',
  },
  type: 'object',
};
