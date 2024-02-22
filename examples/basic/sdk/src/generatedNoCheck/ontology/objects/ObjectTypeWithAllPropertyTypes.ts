import type { ObjectTypeDefinition, PropertyDef } from '@osdk/api';

export interface ObjectTypeWithAllPropertyTypes
  extends ObjectTypeDefinition<'ObjectTypeWithAllPropertyTypes', ObjectTypeWithAllPropertyTypes> {
  description: 'A type with all property types';
  primaryKeyApiName: 'id';
  primaryKeyType: 'integer';
  links: {};
  properties: {
    id: PropertyDef<'integer', 'non-nullable', 'single'>;
    string: PropertyDef<'string', 'nullable', 'single'>;
    boolean: PropertyDef<'boolean', 'nullable', 'single'>;
    date: PropertyDef<'datetime', 'nullable', 'single'>;
    dateTime: PropertyDef<'timestamp', 'nullable', 'single'>;
    decimal: PropertyDef<'decimal', 'nullable', 'single'>;
    integer: PropertyDef<'integer', 'nullable', 'single'>;
    long: PropertyDef<'long', 'nullable', 'single'>;
    short: PropertyDef<'short', 'nullable', 'single'>;
    float: PropertyDef<'float', 'nullable', 'single'>;
    double: PropertyDef<'double', 'nullable', 'single'>;
    byte: PropertyDef<'byte', 'nullable', 'single'>;
    attachment: PropertyDef<'attachment', 'nullable', 'single'>;
    geoPoint: PropertyDef<'geopoint', 'nullable', 'single'>;
    geoShape: PropertyDef<'geoshape', 'nullable', 'single'>;
    stringArray: PropertyDef<'string', 'nullable', 'array'>;
    booleanArray: PropertyDef<'boolean', 'nullable', 'array'>;
    dateArray: PropertyDef<'datetime', 'nullable', 'array'>;
    dateTimeArray: PropertyDef<'timestamp', 'nullable', 'array'>;
    decimalArray: PropertyDef<'decimal', 'nullable', 'array'>;
    integerArray: PropertyDef<'integer', 'nullable', 'array'>;
    longArray: PropertyDef<'long', 'nullable', 'array'>;
    shortArray: PropertyDef<'short', 'nullable', 'array'>;
    floatArray: PropertyDef<'float', 'nullable', 'array'>;
    doubleArray: PropertyDef<'double', 'nullable', 'array'>;
    byteArray: PropertyDef<'byte', 'nullable', 'array'>;
    attachmentArray: PropertyDef<'attachment', 'nullable', 'array'>;
    geoPointArray: PropertyDef<'geopoint', 'nullable', 'array'>;
    geoShapeArray: PropertyDef<'geoshape', 'nullable', 'array'>;
    numericTimeseries: PropertyDef<'numericTimeseries', 'nullable', 'single'>;
    stringTimeseries: PropertyDef<'stringTimeseries', 'nullable', 'single'>;
  };
}

export const ObjectTypeWithAllPropertyTypes: ObjectTypeWithAllPropertyTypes = {
  type: 'object',
  apiName: 'ObjectTypeWithAllPropertyTypes',
  description: 'A type with all property types',
  primaryKeyApiName: 'id' as const,
  primaryKeyType: 'integer',
  links: {},
  properties: {
    id: {
      multiplicity: false,
      type: 'integer',
      nullable: false,
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
    numericTimeseries: {
      multiplicity: false,
      type: 'numericTimeseries',
      nullable: true,
    },
    stringTimeseries: {
      multiplicity: false,
      type: 'stringTimeseries',
      nullable: true,
    },
  },
};
