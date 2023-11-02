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
 * A type with all property types
 */
export interface ObjectTypeWithAllPropertyTypes extends OntologyObject {
  readonly __apiName: 'ObjectTypeWithAllPropertyTypes';
  readonly __primaryKey: number;
  readonly id: number | undefined;
  readonly string: string | undefined;
  readonly boolean: boolean | undefined;
  readonly date: LocalDate | undefined;
  readonly dateTime: Timestamp | undefined;
  readonly decimal: number | undefined;
  readonly integer: number | undefined;
  readonly long: number | undefined;
  readonly short: number | undefined;
  readonly float: number | undefined;
  readonly double: number | undefined;
  readonly byte: number | undefined;
  readonly attachment: Attachment | undefined;
  readonly geoPoint: GeoPoint | undefined;
  readonly geoShape: GeoShape | undefined;
  readonly stringArray: string[] | undefined;
  readonly booleanArray: boolean[] | undefined;
  readonly dateArray: LocalDate[] | undefined;
  readonly dateTimeArray: Timestamp[] | undefined;
  readonly decimalArray: number[] | undefined;
  readonly integerArray: number[] | undefined;
  readonly longArray: number[] | undefined;
  readonly shortArray: number[] | undefined;
  readonly floatArray: number[] | undefined;
  readonly doubleArray: number[] | undefined;
  readonly byteArray: number[] | undefined;
  readonly attachmentArray: Attachment[] | undefined;
  readonly geoPointArray: GeoPoint[] | undefined;
  readonly geoShapeArray: GeoShape[] | undefined;
}

export const ObjectTypeWithAllPropertyTypes = {
  apiName: 'ObjectTypeWithAllPropertyTypes',
  primaryKeyType: 'integer',
  links: {},
  properties: {
    id: {
      multiplicity: false,
      type: 'integer',
    },
    string: {
      multiplicity: false,
      type: 'string',
    },
    boolean: {
      multiplicity: false,
      type: 'boolean',
    },
    date: {
      multiplicity: false,
      type: 'datetime',
    },
    dateTime: {
      multiplicity: false,
      type: 'timestamp',
    },
    decimal: {
      multiplicity: false,
      type: 'decimal',
    },
    integer: {
      multiplicity: false,
      type: 'integer',
    },
    long: {
      multiplicity: false,
      type: 'long',
    },
    short: {
      multiplicity: false,
      type: 'short',
    },
    float: {
      multiplicity: false,
      type: 'float',
    },
    double: {
      multiplicity: false,
      type: 'double',
    },
    byte: {
      multiplicity: false,
      type: 'byte',
    },
    attachment: {
      multiplicity: false,
      type: 'attachment',
    },
    geoPoint: {
      multiplicity: false,
      type: 'geopoint',
    },
    geoShape: {
      multiplicity: false,
      type: 'geoshape',
    },
    stringArray: {
      multiplicity: true,
      type: 'string',
    },
    booleanArray: {
      multiplicity: true,
      type: 'boolean',
    },
    dateArray: {
      multiplicity: true,
      type: 'datetime',
    },
    dateTimeArray: {
      multiplicity: true,
      type: 'timestamp',
    },
    decimalArray: {
      multiplicity: true,
      type: 'decimal',
    },
    integerArray: {
      multiplicity: true,
      type: 'integer',
    },
    longArray: {
      multiplicity: true,
      type: 'long',
    },
    shortArray: {
      multiplicity: true,
      type: 'short',
    },
    floatArray: {
      multiplicity: true,
      type: 'float',
    },
    doubleArray: {
      multiplicity: true,
      type: 'double',
    },
    byteArray: {
      multiplicity: true,
      type: 'byte',
    },
    attachmentArray: {
      multiplicity: true,
      type: 'attachment',
    },
    geoPointArray: {
      multiplicity: true,
      type: 'geopoint',
    },
    geoShapeArray: {
      multiplicity: true,
      type: 'geoshape',
    },
  },
} satisfies ObjectDefinition<'ObjectTypeWithAllPropertyTypes', 'ObjectTypeWithAllPropertyTypes'>;
