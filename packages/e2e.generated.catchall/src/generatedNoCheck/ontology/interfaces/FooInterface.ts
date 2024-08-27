import type { PropertyDef as $PropertyDef, VersionBound as $VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type { InterfaceDefinition as $InterfaceDefinition } from '@osdk/api';
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
  PageResult as $PageResult,
  PropertyValueWireToClient as $PropType,
  Result as $Result,
  ValidToFrom as $ValidToFrom,
} from '@osdk/client.api';

export type OsdkObjectLinks$FooInterface = never;

export namespace FooInterface {
  export type PropertyKeys = 'name' | 'description';

  export interface Props {
    /*readonly*/ description: $PropType['string'] | undefined;
    /*readonly*/ name: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ description: $PropType['string'] | undefined;
    /*readonly*/ name: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<FooInterface, FooInterface.ObjectSet> {
    aggregate: <AO extends $AggregateOpts<FooInterface>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<FooInterface, AO>,
    ) => Promise<$AggregationsResults<FooInterface, AO>>;

    pivotTo: <L extends $LinkNames<FooInterface>>(type: L) => $LinkedType<FooInterface, L>['objectSet']; // ObjectSet<LinkedType<FooInterface, L>>;

    fetchPage: <
      L extends FooInterface.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<FooInterface, L, R, A, S>,
    ) => Promise<
      $PageResult<
        FooInterface.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    fetchPageWithErrors: <
      L extends FooInterface.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<FooInterface, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          FooInterface.OsdkObject<
            (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
            L
          >
        >
      >
    >;

    asyncIter: () => AsyncIterableIterator<FooInterface.OsdkObject>;
  }

  export interface Definition
    extends $InterfaceDefinition<'FooInterface', FooInterface>,
      $VersionBound<$ExpectedClientVersion> {
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
      description: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'Name',
       *   description: Name of Foo
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
    };
  }

  export type OsdkObject<
    OPTIONS extends '$strict' | '$notStrict' | '$rid' = '$strict',
    K extends keyof FooInterface.Props = keyof FooInterface.Props,
  > = $Osdk<FooInterface, K | OPTIONS> &
    Pick<
      // FooInterface.Props
      OPTIONS extends '$notStrict' ? FooInterface.Props : FooInterface.StrictProps,
      K
    > & {
      $link: OsdkObjectLinks$FooInterface;
      $title: string | undefined; // FIXME
      $primaryKey: string | number;

      $as: <NEW_Q extends $ValidToFrom<FooInterface>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<FooInterface, NEW_Q, K>>;
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
