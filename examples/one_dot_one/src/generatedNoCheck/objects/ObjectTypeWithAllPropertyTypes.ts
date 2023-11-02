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
      type: 'integer',
    },
    string: {
      type: 'string',
    },
    boolean: {
      type: 'boolean',
    },
    date: {
      type: 'datetime',
    },
    dateTime: {
      type: 'timestamp',
    },
    decimal: {
      type: 'decimal',
    },
    integer: {
      type: 'integer',
    },
    long: {
      type: 'long',
    },
    short: {
      type: 'short',
    },
    float: {
      type: 'float',
    },
    double: {
      type: 'double',
    },
    byte: {
      type: 'byte',
    },
    attachment: {
      type: 'attachment',
    },
    geoPoint: {
      type: 'geopoint',
    },
    geoShape: {
      type: 'geoshape',
    },
    stringArray: {
      type: 'stringArray',
    },
    booleanArray: {
      type: 'stringArray',
    },
    dateArray: {
      type: 'stringArray',
    },
    dateTimeArray: {
      type: 'stringArray',
    },
    decimalArray: {
      type: 'stringArray',
    },
    integerArray: {
      type: 'stringArray',
    },
    longArray: {
      type: 'stringArray',
    },
    shortArray: {
      type: 'stringArray',
    },
    floatArray: {
      type: 'stringArray',
    },
    doubleArray: {
      type: 'stringArray',
    },
    byteArray: {
      type: 'stringArray',
    },
    attachmentArray: {
      type: 'stringArray',
    },
    geoPointArray: {
      type: 'stringArray',
    },
    geoShapeArray: {
      type: 'stringArray',
    },
  },
} satisfies ObjectDefinition<'ObjectTypeWithAllPropertyTypes', 'ObjectTypeWithAllPropertyTypes'>;
