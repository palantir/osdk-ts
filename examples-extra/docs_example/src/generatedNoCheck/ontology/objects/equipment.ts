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
  IsAny as $IsAny,
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

export namespace equipment {
  export type PropertyKeys = 'equipmentId' | 'type';

  export type Links = {};

  export interface Props {
    readonly equipmentId: $PropType['string'] | undefined;
    readonly type: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly equipmentId: $PropType['string'];
    readonly type: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<equipment.Definition, equipment.ObjectSet> {
    readonly aggregate: <const AO extends $AggregateOpts<equipment.Definition>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<equipment.Definition, AO>,
    ) => Promise<$AggregationsResults<equipment.Definition, AO>>;

    readonly pivotTo: <const L extends $LinkNames<equipment.Definition>>(
      type: L,
    ) => $LinkedType<equipment.Definition, L>['objectSet'];

    readonly fetchOne: <
      const L extends equipment.PropertyKeys,
      const R extends boolean,
      const S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[equipment.Definition['primaryKeyType']],
      options?: $SelectArg<equipment.Definition, L, R, S>,
    ) => Promise<
      equipment.OsdkObject<
        (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
        $IsAny<L> extends true ? equipment.PropertyKeys : L
      >
    >;

    readonly fetchOneWithErrors: <
      const L extends equipment.PropertyKeys,
      const R extends boolean,
      const S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[equipment.Definition['primaryKeyType']],
      options?: $SelectArg<equipment.Definition, L, R, S>,
    ) => Promise<
      $Result<
        equipment.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          $IsAny<L> extends true ? equipment.PropertyKeys : L
        >
      >
    >;

    readonly fetchPage: <
      const L extends equipment.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<equipment.Definition, L, R, A, S>,
    ) => Promise<
      $PageResult<
        equipment.OsdkObject<
          (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
          $IsAny<L> extends true ? equipment.PropertyKeys : L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      const L extends equipment.PropertyKeys,
      const R extends boolean,
      const A extends $Augments,
      const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<equipment.Definition, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          equipment.OsdkObject<
            (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
            $IsAny<L> extends true ? equipment.PropertyKeys : L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<equipment.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'equipment', equipment.Definition>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: equipment.ObjectSet;
    props: equipment.Props;
    linksType: equipment.Links;
    strictProps: equipment.StrictProps;
    links: {};
    primaryKeyApiName: 'equipmentId';
    primaryKeyType: 'string';
    properties: {
      /**
       *   description: The id of an equipment
       */
      equipmentId: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      type: $PropertyDef<'string', 'nullable', 'single'>;
    };
  }

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof equipment.Props = keyof equipment.Props,
  > = $Osdk<equipment.Definition, K | OPTIONS> &
    Pick<
      [OPTIONS] extends [never]
        ? equipment.StrictProps
        : OPTIONS extends '$notStrict'
          ? equipment.Props
          : equipment.StrictProps,
      K
    > & {
      readonly $link: equipment.Links;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: $OsdkObjectPropertyType<
        { multiplicity: false; description: 'The id of an equipment'; type: 'string'; nullable: false },
        true
      >;

      readonly $as: <NEW_Q extends $ValidToFrom<equipment.Definition>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<equipment.Definition, NEW_Q, K>>;
    } & $OsdkObject<'equipment'>;
}

export type equipment = equipment.Definition;

export const equipment: equipment & $VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
  apiName: 'equipment',
  links: {},
  primaryKeyApiName: 'equipmentId',
  primaryKeyType: 'string',
  properties: {
    equipmentId: {
      multiplicity: false,
      description: 'The id of an equipment',
      type: 'string',
      nullable: false,
    },
    type: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
  type: 'object',
};
