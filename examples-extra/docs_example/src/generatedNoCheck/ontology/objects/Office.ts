import type { ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

export interface Office extends ObjectTypeDefinition<'Office', Office>, VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
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

export const Office: Office = {
  osdkMetadata: $osdkMetadata,
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
