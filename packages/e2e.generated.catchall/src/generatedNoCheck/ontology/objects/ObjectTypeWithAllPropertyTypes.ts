import type { ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export interface ObjectTypeWithAllPropertyTypes
  extends ObjectTypeDefinition<'ObjectTypeWithAllPropertyTypes', ObjectTypeWithAllPropertyTypes>,
    VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
  description: 'A type with all property types';
  links: {};
  primaryKeyApiName: 'id';
  primaryKeyType: 'integer';
  properties: {
    /**
     * (no ontology metadata)
     */
    attachment: PropertyDef<'attachment', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    attachmentArray: PropertyDef<'attachment', 'nullable', 'array'>;
    /**
     * (no ontology metadata)
     */
    boolean: PropertyDef<'boolean', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    booleanArray: PropertyDef<'boolean', 'nullable', 'array'>;
    /**
     * (no ontology metadata)
     */
    byte: PropertyDef<'byte', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    byteArray: PropertyDef<'byte', 'nullable', 'array'>;
    /**
     * (no ontology metadata)
     */
    date: PropertyDef<'datetime', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    dateArray: PropertyDef<'datetime', 'nullable', 'array'>;
    /**
     * (no ontology metadata)
     */
    dateTime: PropertyDef<'timestamp', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    dateTimeArray: PropertyDef<'timestamp', 'nullable', 'array'>;
    /**
     * (no ontology metadata)
     */
    decimal: PropertyDef<'decimal', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    decimalArray: PropertyDef<'decimal', 'nullable', 'array'>;
    /**
     * (no ontology metadata)
     */
    double: PropertyDef<'double', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    doubleArray: PropertyDef<'double', 'nullable', 'array'>;
    /**
     * (no ontology metadata)
     */
    float: PropertyDef<'float', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    floatArray: PropertyDef<'float', 'nullable', 'array'>;
    /**
     * (no ontology metadata)
     */
    geoPoint: PropertyDef<'geopoint', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    geoPointArray: PropertyDef<'geopoint', 'nullable', 'array'>;
    /**
     * (no ontology metadata)
     */
    geoShape: PropertyDef<'geoshape', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    geoShapeArray: PropertyDef<'geoshape', 'nullable', 'array'>;
    /**
     * (no ontology metadata)
     */
    id: PropertyDef<'integer', 'non-nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    integer: PropertyDef<'integer', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    integerArray: PropertyDef<'integer', 'nullable', 'array'>;
    /**
     * (no ontology metadata)
     */
    long: PropertyDef<'long', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    longArray: PropertyDef<'long', 'nullable', 'array'>;
    /**
     * (no ontology metadata)
     */
    numericTimeseries: PropertyDef<'numericTimeseries', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    short: PropertyDef<'short', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    shortArray: PropertyDef<'short', 'nullable', 'array'>;
    /**
     * (no ontology metadata)
     */
    string: PropertyDef<'string', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    stringArray: PropertyDef<'string', 'nullable', 'array'>;
    /**
     * (no ontology metadata)
     */
    stringTimeseries: PropertyDef<'stringTimeseries', 'nullable', 'single'>;
  };
}

export const ObjectTypeWithAllPropertyTypes: ObjectTypeWithAllPropertyTypes = {
  osdkMetadata: $osdkMetadata,
  apiName: 'ObjectTypeWithAllPropertyTypes',
  description: 'A type with all property types',
  links: {},
  primaryKeyApiName: 'id',
  primaryKeyType: 'integer',
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
  type: 'object',
};
