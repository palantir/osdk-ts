import type { ObjectOrInterfacePropertyKeysFrom2, ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type {
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
  OsdkObjectPropertyType,
  PageResult,
  PropertyValueClientToWire,
  Result,
  SelectArg,
  ValidToFrom,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

export namespace Office {
  export type PropertyKeys = ObjectOrInterfacePropertyKeysFrom2<Office>;

  export type Links = never;

  export interface Props {
    /*readonly*/ entrance: $PropType['geopoint'] | undefined;
    /*readonly*/ meetingRoomCapacities: $PropType['integer'][] | undefined;
    /*readonly*/ meetingRooms: $PropType['string'][] | undefined;
    /*readonly*/ name: $PropType['string'] | undefined;
    /*readonly*/ occupiedArea: $PropType['geoshape'] | undefined;
    /*readonly*/ officeId: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ entrance: $PropType['geopoint'] | undefined;
    /*readonly*/ meetingRoomCapacities: $PropType['integer'][] | undefined;
    /*readonly*/ meetingRooms: $PropType['string'][] | undefined;
    /*readonly*/ name: $PropType['string'] | undefined;
    /*readonly*/ occupiedArea: $PropType['geoshape'] | undefined;
    /*readonly*/ officeId: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<Office, Office.ObjectSet> {
    aggregate: <AO extends AggregateOpts<Office>>(
      req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Office, AO>,
    ) => Promise<AggregationsResults<Office, AO>>;

    pivotTo: <L extends LinkNames<Office>>(type: L) => LinkedType<Office, L>['objectSet']; // ObjectSet<LinkedType<Office, L>>;

    fetchOne: <
      L extends Office.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[Office['primaryKeyType']],
      options?: SelectArg<Office, L, R, S>,
    ) => Promise<
      Office.OsdkObject<L, S extends false ? false : true>
      //  SingleOsdkResult<Office, L, R, S>
    >;

    fetchOneWithErrors: <
      L extends Office.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[Office['primaryKeyType']],
      options?: SelectArg<Office, L, R, S>,
    ) => Promise<
      Result<
        Office.OsdkObject<L, S extends false ? false : true>
        //  SingleOsdkResult<Office, L, R, S>
      >
    >;

    fetchPage: <
      L extends Office.PropertyKeys,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<Office, L, R, A, S>,
    ) => Promise<
      PageResult<Office.OsdkObject<L, S extends false ? false : true>>
      // FetchPageResult<Office, L, R, S>
    >;

    fetchPageWithErrors: <
      L extends Office.PropertyKeys,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<Office, L, R, A, S>,
    ) => Promise<
      Result<
        PageResult<Office.OsdkObject<L, S extends false ? false : true>>
        //  FetchPageResult<Office, L, R, S>
      >
    >;

    asyncIter: () => AsyncIterableIterator<Office.OsdkObject>;
  }

  export interface Definition extends ObjectTypeDefinition<'Office', Office>, VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Office.ObjectSet;
    props: Office.Props;
    strictProps: Office.StrictProps;
    description: 'A office in our Company';
    links: {};
    primaryKeyApiName: 'officeId';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      entrance: PropertyDef<'geopoint', 'nullable', 'single'>;
      /**
       *   description: The individual capacities of meetings rooms in the office
       */
      meetingRoomCapacities: PropertyDef<'integer', 'nullable', 'array'>;
      /**
       *   description: The Names of meetings rooms in the office
       */
      meetingRooms: PropertyDef<'string', 'nullable', 'array'>;
      /**
       *   description: The Name of the Office
       */
      name: PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   description: The occupied area of the Office
       */
      occupiedArea: PropertyDef<'geoshape', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      officeId: PropertyDef<'string', 'non-nullable', 'single'>;
    };
  }

  export type OsdkObject<K extends keyof Office.Props = keyof Office.Props, S extends boolean = true> = Osdk<
    Office,
    K | (S extends false ? '$notStrict' : '$strict')
  > &
    Pick<
      // Office.Props
      S extends false ? Office.Props : Office.StrictProps,
      K
    > & {
      $link: Office.Links;
      $title: string | undefined; // FIXME
      $primaryKey: OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      $as: <NEW_Q extends ValidToFrom<Office>>(type: NEW_Q | string) => Osdk<NEW_Q, ConvertProps<Office, NEW_Q, K>>;
    } & $OsdkObject<'Office'>;
}

/** @deprecated use Office.Definition **/
export type Office = Office.Definition;

export const Office: Office & VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  strictProps: undefined as any,
  apiName: 'Office',
  description: 'A office in our Company',
  links: {},
  primaryKeyApiName: 'officeId',
  primaryKeyType: 'string',
  properties: {
    officeId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    entrance: {
      multiplicity: false,
      type: 'geopoint',
      nullable: true,
    },
    occupiedArea: {
      multiplicity: false,
      description: 'The occupied area of the Office',
      type: 'geoshape',
      nullable: true,
    },
    name: {
      multiplicity: false,
      description: 'The Name of the Office',
      type: 'string',
      nullable: true,
    },
    meetingRooms: {
      multiplicity: true,
      description: 'The Names of meetings rooms in the office',
      type: 'string',
      nullable: true,
    },
    meetingRoomCapacities: {
      multiplicity: true,
      description: 'The individual capacities of meetings rooms in the office',
      type: 'integer',
      nullable: true,
    },
  },
  type: 'object',
};
