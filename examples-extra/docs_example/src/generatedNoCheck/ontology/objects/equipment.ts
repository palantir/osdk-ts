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
    /*readonly*/ equipmentId: $PropType['string'] | undefined;
    /*readonly*/ type: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ equipmentId: $PropType['string'];
    /*readonly*/ type: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<equipment, equipment.ObjectSet> {
    aggregate: <AO extends $AggregateOpts<equipment>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<equipment, AO>,
    ) => Promise<$AggregationsResults<equipment, AO>>;

    pivotTo: <L extends $LinkNames<equipment>>(type: L) => $LinkedType<equipment, L>['objectSet']; // ObjectSet<LinkedType<equipment, L>>;

    fetchOne: <
      L extends equipment.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[equipment['primaryKeyType']],
      options?: $SelectArg<equipment, L, R, S>,
    ) => Promise<
      equipment.OsdkObject<L, S extends false ? false : true>
      //  SingleOsdkResult<equipment, L, R, S>
    >;

    fetchOneWithErrors: <
      L extends equipment.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[equipment['primaryKeyType']],
      options?: $SelectArg<equipment, L, R, S>,
    ) => Promise<
      $Result<
        equipment.OsdkObject<L, S extends false ? false : true>
        //  SingleOsdkResult<equipment, L, R, S>
      >
    >;

    fetchPage: <
      L extends equipment.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<equipment, L, R, A, S>,
    ) => Promise<
      $PageResult<equipment.OsdkObject<L, S extends false ? false : true>>
      // FetchPageResult<equipment, L, R, S>
    >;

    fetchPageWithErrors: <
      L extends equipment.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<equipment, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<equipment.OsdkObject<L, S extends false ? false : true>>
        //  FetchPageResult<equipment, L, R, S>
      >
    >;

    asyncIter: () => AsyncIterableIterator<equipment.OsdkObject>;
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

  export type OsdkObject<K extends keyof equipment.Props = keyof equipment.Props, S extends boolean = true> = $Osdk<
    equipment,
    K | (S extends false ? '$notStrict' : '$strict')
  > &
    Pick<
      // equipment.Props
      S extends false ? equipment.Props : equipment.StrictProps,
      K
    > & {
      $link: equipment.Links;
      $title: string | undefined; // FIXME
      $primaryKey: $OsdkObjectPropertyType<
        { multiplicity: false; description: 'The id of an equipment'; type: 'string'; nullable: false },
        true
      >;

      $as: <NEW_Q extends $ValidToFrom<equipment>>(
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
