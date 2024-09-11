import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata';

export namespace Office {
  export type PropertyKeys =
    | 'officeId'
    | 'entrance'
    | 'occupiedArea'
    | 'name'
    | 'meetingRooms'
    | 'meetingRoomCapacities';

  export type Links = {};

  export interface Props {
    readonly entrance: $PropType['geopoint'] | undefined;
    readonly meetingRoomCapacities: $PropType['integer'][] | undefined;
    readonly meetingRooms: $PropType['string'][] | undefined;
    readonly name: $PropType['string'] | undefined;
    readonly occupiedArea: $PropType['geoshape'] | undefined;
    readonly officeId: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly entrance: $PropType['geopoint'] | undefined;
    readonly meetingRoomCapacities: $PropType['integer'][] | undefined;
    readonly meetingRooms: $PropType['string'][] | undefined;
    readonly name: $PropType['string'] | undefined;
    readonly occupiedArea: $PropType['geoshape'] | undefined;
    readonly officeId: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<Office.Definition, Office.ObjectSet> {}

  export interface Definition extends $ObjectTypeDefinition<'Office', Office.Definition> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Office.ObjectSet;
    props: Office.Props;
    linksType: Office.Links;
    strictProps: Office.StrictProps;
    description: 'A office in our Company';
    links: {};
    primaryKeyApiName: 'officeId';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      entrance: $PropertyDef<'geopoint', 'nullable', 'single'>;
      /**
       *   description: The individual capacities of meetings rooms in the office
       */
      meetingRoomCapacities: $PropertyDef<'integer', 'nullable', 'array'>;
      /**
       *   description: The Names of meetings rooms in the office
       */
      meetingRooms: $PropertyDef<'string', 'nullable', 'array'>;
      /**
       *   description: The Name of the Office
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   description: The occupied area of the Office
       */
      occupiedArea: $PropertyDef<'geoshape', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      officeId: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
  }

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Office.Props = keyof Office.Props,
  > = $Osdk<Office.Definition, K | OPTIONS>;
}

export type Office = Office.Definition;

export const Office: Office = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
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
