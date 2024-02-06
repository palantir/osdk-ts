import type { ObjectTypeDefinition } from '@osdk/api';
import type { Attachment, GeoPoint, GeoShape, LocalDate, OntologyObject, Timestamp } from '@osdk/legacy-client';

/**
 * An object type with all property types
 */
export interface objectTypeWithAllPropertyTypes extends OntologyObject {
  readonly __apiName: 'objectTypeWithAllPropertyTypes';
  readonly __primaryKey: number;
  readonly attachment: Attachment | undefined;
  readonly attachment2: Attachment | undefined;
  readonly attachmentArray: Attachment[] | undefined;
  readonly boolean: boolean | undefined;
  readonly booleanArray: boolean[] | undefined;
  readonly byte: number | undefined;
  readonly byteArray: number[] | undefined;
  readonly date: LocalDate | undefined;
  readonly dateArray: LocalDate[] | undefined;
  readonly dateTime: Timestamp | undefined;
  readonly dateTimeArray: Timestamp[] | undefined;
  readonly decimal: number | undefined;
  readonly decimalArray: number[] | undefined;
  readonly double: number | undefined;
  readonly doubleArray: number[] | undefined;
  readonly float: number | undefined;
  readonly floatArray: number[] | undefined;
  readonly geoPoint: GeoPoint | undefined;
  readonly geoPointArray: GeoPoint[] | undefined;
  readonly geoShape: GeoShape | undefined;
  readonly geoShapeArray: GeoShape[] | undefined;
  readonly id: number | undefined;
  readonly integer: number | undefined;
  readonly integerArray: number[] | undefined;
  readonly long: number | undefined;
  readonly longArray: number[] | undefined;
  readonly short: number | undefined;
  readonly shortArray: number[] | undefined;
  readonly string: string | undefined;
  readonly stringArray: string[] | undefined;
}

export const objectTypeWithAllPropertyTypes = {
  apiName: 'objectTypeWithAllPropertyTypes',
  description: 'An object type with all property types',
  primaryKeyType: 'integer',
  links: {},
  properties: {
    id: {
      multiplicity: false,
      type: 'integer',
      nullable: true,
    },
    string: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    boolean: {
      multiplicity: false,
      type: 'boolean',
      nullable: true,
    },
    date: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
    dateTime: {
      multiplicity: false,
      type: 'timestamp',
      nullable: true,
    },
    decimal: {
      multiplicity: false,
      type: 'decimal',
      nullable: true,
    },
    integer: {
      multiplicity: false,
      type: 'integer',
      nullable: true,
    },
    long: {
      multiplicity: false,
      type: 'long',
      nullable: true,
    },
    short: {
      multiplicity: false,
      type: 'short',
      nullable: true,
    },
    float: {
      multiplicity: false,
      type: 'float',
      nullable: true,
    },
    double: {
      multiplicity: false,
      type: 'double',
      nullable: true,
    },
    byte: {
      multiplicity: false,
      type: 'byte',
      nullable: true,
    },
    attachment: {
      multiplicity: false,
      type: 'attachment',
      nullable: true,
    },
    attachment2: {
      multiplicity: false,
      type: 'attachment',
      nullable: true,
    },
    geoPoint: {
      multiplicity: false,
      type: 'geopoint',
      nullable: true,
    },
    geoShape: {
      multiplicity: false,
      type: 'geoshape',
      nullable: true,
    },
    stringArray: {
      multiplicity: true,
      type: 'string',
      nullable: true,
    },
    booleanArray: {
      multiplicity: true,
      type: 'boolean',
      nullable: true,
    },
    dateArray: {
      multiplicity: true,
      type: 'datetime',
      nullable: true,
    },
    dateTimeArray: {
      multiplicity: true,
      type: 'timestamp',
      nullable: true,
    },
    decimalArray: {
      multiplicity: true,
      type: 'decimal',
      nullable: true,
    },
    integerArray: {
      multiplicity: true,
      type: 'integer',
      nullable: true,
    },
    longArray: {
      multiplicity: true,
      type: 'long',
      nullable: true,
    },
    shortArray: {
      multiplicity: true,
      type: 'short',
      nullable: true,
    },
    floatArray: {
      multiplicity: true,
      type: 'float',
      nullable: true,
    },
    doubleArray: {
      multiplicity: true,
      type: 'double',
      nullable: true,
    },
    byteArray: {
      multiplicity: true,
      type: 'byte',
      nullable: true,
    },
    attachmentArray: {
      multiplicity: true,
      type: 'attachment',
      nullable: true,
    },
    geoPointArray: {
      multiplicity: true,
      type: 'geopoint',
      nullable: true,
    },
    geoShapeArray: {
      multiplicity: true,
      type: 'geoshape',
      nullable: true,
    },
  },
} satisfies ObjectTypeDefinition<'objectTypeWithAllPropertyTypes', never>;
