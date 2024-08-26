import type { InterfaceDefinition, PropertyDef, VersionBound } from '@osdk/api';
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
  Osdk,
  PageResult,
  Result,
  ValidToFrom,
  WhereClause,
} from '@osdk/client.api';

export type PropertyKeys$FooInterface = 'name' | 'description';

export type OsdkObjectLinks$FooInterface = never;

export namespace FooInterface {
  export interface Props {
    /*readonly*/ description: $PropType['string'] | undefined;
    /*readonly*/ name: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ description: $PropType['string'] | undefined;
    /*readonly*/ name: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<FooInterface, FooInterface.ObjectSet> {
    aggregate: <AO extends AggregateOpts<FooInterface>>(
      req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<FooInterface, AO>,
    ) => Promise<AggregationsResults<FooInterface, AO>>;

    where: (clause: WhereClause<FooInterface>) => FooInterface.ObjectSet;

    union: (...objectSets: ReadonlyArray<FooInterface.ObjectSet>) => FooInterface.ObjectSet;

    intersect: (...objectSets: ReadonlyArray<FooInterface.ObjectSet>) => FooInterface.ObjectSet;

    subtract: (...objectSets: ReadonlyArray<FooInterface.ObjectSet>) => FooInterface.ObjectSet;

    pivotTo: <L extends LinkNames<FooInterface>>(type: L) => LinkedType<FooInterface, L>['objectSet']; // ObjectSet<LinkedType<FooInterface, L>>;

    fetchPage: <
      L extends PropertyKeys$FooInterface,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<FooInterface, L, R, A, S>,
    ) => Promise<
      PageResult<FooInterface.OsdkObject<L, S extends false ? false : true>>
      // FetchPageResult<FooInterface, L, R, S>
    >;

    fetchPageWithErrors: <
      L extends PropertyKeys$FooInterface,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<FooInterface, L, R, A, S>,
    ) => Promise<
      Result<
        PageResult<FooInterface.OsdkObject<L, S extends false ? false : true>>
        //  FetchPageResult<FooInterface, L, R, S>
      >
    >;

    asyncIter: () => AsyncIterableIterator<FooInterface.OsdkObject>;
  }

  export interface Definition
    extends InterfaceDefinition<'FooInterface', FooInterface>,
      VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: FooInterface.ObjectSet;
    props: FooInterface.Props;
    strictProps: FooInterface.StrictProps;
    description: 'Its a Foo.';
    displayName: 'Foo interface';
    links: {};
    properties: {
      /**
       *   display name: 'Description',
       *   description: Description of Description
       */
      description: PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'Name',
       *   description: Name of Foo
       */
      name: PropertyDef<'string', 'nullable', 'single'>;
    };
  }

  export type OsdkObject<
    K extends keyof FooInterface.Props = keyof FooInterface.Props,
    S extends boolean = true,
  > = Osdk<FooInterface, K | (S extends false ? '$notStrict' : '$strict')> &
    Pick<
      // FooInterface.Props
      S extends false ? FooInterface.Props : FooInterface.StrictProps,
      K
    > & {
      $link: OsdkObjectLinks$FooInterface;
      $title: string | undefined; // FIXME
      $primaryKey: string | number;

      $as: <NEW_Q extends ValidToFrom<FooInterface>>(
        type: NEW_Q | string,
      ) => Osdk<NEW_Q, ConvertProps<FooInterface, NEW_Q, K>>;
    } & $OsdkObject<'FooInterface'>;
}

/** @deprecated use FooInterface.Definition **/
export type FooInterface = FooInterface.Definition;

export const FooInterface: FooInterface = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  strictProps: undefined as any,
  apiName: 'FooInterface',
  description: 'Its a Foo.',
  displayName: 'Foo interface',
  links: {},
  properties: {
    description: {
      displayName: 'Description',
      multiplicity: false,
      description: 'Description of Description',
      type: 'string',
      nullable: true,
    },
    name: {
      displayName: 'Name',
      multiplicity: false,
      description: 'Name of Foo',
      type: 'string',
      nullable: true,
    },
  },
  type: 'interface',
};
