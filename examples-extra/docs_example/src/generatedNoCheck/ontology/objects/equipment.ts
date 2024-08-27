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

export namespace equipment {
  export type PropertyKeys = $ObjectOrInterfacePropertyKeysFrom2<equipment>;

  export type Links = never;

  export interface Props {
    readonly equipmentId: $PropType['string'] | undefined;
    readonly type: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly equipmentId: $PropType['string'];
    readonly type: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<equipment, equipment.ObjectSet> {
    readonly aggregate: <AO extends $AggregateOpts<equipment>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<equipment, AO>,
    ) => Promise<$AggregationsResults<equipment, AO>>;

    readonly pivotTo: <L extends $LinkNames<equipment>>(type: L) => $LinkedType<equipment, L>['objectSet']; // ObjectSet<LinkedType<equipment, L>>;

    readonly fetchOne: <
      L extends equipment.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[equipment['primaryKeyType']],
      options?: $SelectArg<equipment, L, R, S>,
    ) => Promise<
      equipment.OsdkObject<
        (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
        L
      >
    >;

    readonly fetchOneWithErrors: <
      L extends equipment.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[equipment['primaryKeyType']],
      options?: $SelectArg<equipment, L, R, S>,
    ) => Promise<
      $Result<
        equipment.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPage: <
      L extends equipment.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<equipment, L, R, A, S>,
    ) => Promise<
      $PageResult<
        equipment.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      L extends equipment.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<equipment, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          equipment.OsdkObject<
            (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
            L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<equipment.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'equipment', equipment>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: equipment.ObjectSet;
    props: equipment.Props;
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
    OPTIONS extends '$strict' | '$notStrict' | '$rid' = '$strict',
    K extends keyof equipment.Props = keyof equipment.Props,
  > = $Osdk<equipment, K | OPTIONS> &
    Pick<
      // equipment.Props
      OPTIONS extends '$notStrict' ? equipment.Props : equipment.StrictProps,
      K
    > & {
      readonly $link: equipment.Links;
      readonly $title: string | undefined; // FIXME
      readonly $primaryKey: $OsdkObjectPropertyType<
        { multiplicity: false; description: 'The id of an equipment'; type: 'string'; nullable: false },
        true
      >;

      readonly $as: <NEW_Q extends $ValidToFrom<equipment>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<equipment, NEW_Q, K>>;
    } & $OsdkObject<'equipment'>;
}

/** @deprecated use equipment.Definition **/
export type equipment = equipment.Definition;

export const equipment: equipment & $VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
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
