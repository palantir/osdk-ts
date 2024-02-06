import type { ObjectTypeDefinition } from '@osdk/api';
import type { GeoPoint, GeoShape, MultiLink, OntologyObject } from '@osdk/legacy-client';
import type { Employee } from './Employee';

/**
 * A office in our Company
 */
export interface Office extends OntologyObject {
  readonly __apiName: 'Office';
  readonly __primaryKey: string;
  readonly entrance: GeoPoint | undefined;
  /**
   * The Name of the Office
   */
  readonly name: string | undefined;
  /**
   * The occupied area of the Office
   */
  readonly occupiedArea: GeoShape | undefined;
  readonly officeId: string | undefined;
  readonly occupants: MultiLink<Employee>;
}

export const Office = {
  apiName: 'Office',
  description: 'A office in our Company',
  primaryKeyType: 'string',
  links: {
    occupants: {
      multiplicity: true,
      targetType: 'Employee',
    },
  },
  properties: {
    officeId: {
      multiplicity: false,
      type: 'string',
      nullable: true,
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
  },
} satisfies ObjectTypeDefinition<'Office', 'Employee'>;
