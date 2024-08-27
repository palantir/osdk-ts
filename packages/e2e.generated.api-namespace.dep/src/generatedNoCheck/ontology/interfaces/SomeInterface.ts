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
} from '@osdk/client.api';

export type OsdkObjectLinks$SomeInterface = never;

export namespace SomeInterface {
  export type PropertyKeys = 'spt';

  export interface Props {
    /*readonly*/ spt: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ spt: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<SomeInterface, SomeInterface.ObjectSet> {
    aggregate: <AO extends AggregateOpts<SomeInterface>>(
      req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<SomeInterface, AO>,
    ) => Promise<AggregationsResults<SomeInterface, AO>>;

    pivotTo: <L extends LinkNames<SomeInterface>>(type: L) => LinkedType<SomeInterface, L>['objectSet']; // ObjectSet<LinkedType<SomeInterface, L>>;

    fetchPage: <
      L extends SomeInterface.PropertyKeys,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<SomeInterface, L, R, A, S>,
    ) => Promise<
      PageResult<SomeInterface.OsdkObject<L, S extends false ? false : true>>
      // FetchPageResult<SomeInterface, L, R, S>
    >;

    fetchPageWithErrors: <
      L extends SomeInterface.PropertyKeys,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<SomeInterface, L, R, A, S>,
    ) => Promise<
      Result<
        PageResult<SomeInterface.OsdkObject<L, S extends false ? false : true>>
        //  FetchPageResult<SomeInterface, L, R, S>
      >
    >;

    asyncIter: () => AsyncIterableIterator<SomeInterface.OsdkObject>;
  }

  export interface Definition
    extends InterfaceDefinition<'com.example.dep.SomeInterface', SomeInterface>,
      VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: SomeInterface.ObjectSet;
    props: SomeInterface.Props;
    strictProps: SomeInterface.StrictProps;
    displayName: 'Sum Interface';
    implements: [];
    links: {};
    properties: {
      /**
       *   display name: 'Some Property'
       */
      spt: PropertyDef<'string', 'nullable', 'single'>;
    };
  }

  export type OsdkObject<
    K extends keyof SomeInterface.Props = keyof SomeInterface.Props,
    S extends boolean = true,
  > = Osdk<SomeInterface, K | (S extends false ? '$notStrict' : '$strict')> &
    Pick<
      // SomeInterface.Props
      S extends false ? SomeInterface.Props : SomeInterface.StrictProps,
      K
    > & {
      $link: OsdkObjectLinks$SomeInterface;
      $title: string | undefined; // FIXME
      $primaryKey: string | number;

      $as: <NEW_Q extends ValidToFrom<SomeInterface>>(
        type: NEW_Q | string,
      ) => Osdk<NEW_Q, ConvertProps<SomeInterface, NEW_Q, K>>;
    } & $OsdkObject<'com.example.dep.SomeInterface'>;
}

/** @deprecated use SomeInterface.Definition **/
export type SomeInterface = SomeInterface.Definition;

export const SomeInterface: SomeInterface = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  strictProps: undefined as any,
  apiName: 'com.example.dep.SomeInterface',
  displayName: 'Sum Interface',
  implements: [],
  links: {},
  properties: {
    spt: {
      displayName: 'Some Property',
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
  type: 'interface',
};
