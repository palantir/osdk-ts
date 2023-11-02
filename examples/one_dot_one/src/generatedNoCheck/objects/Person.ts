import { ObjectDefinition } from '@osdk/api';
import type {
  OntologyObject,
  LocalDate,
  Timestamp,
  GeoShape,
  GeoPoint,
  Attachment,
  TimeSeries,
} from '@osdk/legacy-client';

/**
 * A person
 */
export interface Person extends OntologyObject {
  readonly __apiName: 'Person';
  readonly __primaryKey: string;
  readonly email: string | undefined;
}

export const Person = {
  apiName: 'Person',
  primaryKeyType: 'string',
  links: {},
  properties: {
    email: {
      type: 'string',
    },
  },
} satisfies ObjectDefinition<'Person', 'Person'>;
