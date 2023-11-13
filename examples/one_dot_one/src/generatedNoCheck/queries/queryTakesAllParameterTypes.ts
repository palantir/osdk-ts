import { QueryDefinition } from '@osdk/api';

export const queryTakesAllParameterTypes = {
  apiName: 'queryTakesAllParameterTypes',
  description: 'description of the query that takes all parameter types',
  displayName: 'qTAPT',
  rid: 'query.rid',
  version: 'version',
  parameters: {
    double: { description: 'a double parameter', dataType: { type: 'double', nullable: false } },
    float: { dataType: { type: 'float', nullable: false } },
    integer: { dataType: { type: 'integer', nullable: false } },
    long: { dataType: { type: 'long', nullable: false } },
    attachment: { dataType: { type: 'attachment', nullable: false } },
    boolean: { dataType: { type: 'boolean', nullable: false } },
    date: { dataType: { type: 'date', nullable: false } },
    string: { dataType: { type: 'string', nullable: false } },
    timestamp: { dataType: { type: 'timestamp', nullable: false } },
    object: { dataType: { type: { type: 'object', object: 'Todo' }, nullable: false } },
    objectSet: { dataType: { type: { type: 'objectSet', objectSet: 'Todo' }, nullable: false } },
    array: { description: 'an array of strings', dataType: { type: 'string', nullable: false, multiplicity: true } },
    set: {
      description: 'a set of strings',
      dataType: { type: { type: 'set', set: { type: 'string', nullable: false } }, nullable: false },
    },
    unionNonNullable: {
      description: 'a union of strings and integers',
      dataType: {
        type: {
          type: 'union',
          union: [
            { type: 'string', nullable: false },
            { type: 'integer', nullable: false },
          ],
        },
        nullable: false,
      },
    },
    unionNullable: {
      description: 'a union of strings and integers but its optional',
      dataType: {
        type: {
          type: 'union',
          union: [
            { type: 'string', nullable: false },
            { type: 'integer', nullable: false },
          ],
        },
        nullable: true,
      },
    },
    struct: {
      description: 'a struct with some fields',
      dataType: {
        type: {
          type: 'struct',
          struct: { name: { type: 'string', nullable: false }, id: { type: 'integer', nullable: false } },
        },
        nullable: false,
      },
    },
    twoDimensionalAggregation: {
      dataType: {
        type: {
          type: 'twoDimensionalAggregation',
          twoDimensionalAggregation: { keyType: 'string', valueType: 'double' },
        },
      },
    },
    threeDimensionalAggregation: {
      dataType: {
        type: {
          type: 'threeDimensionalAggregation',
          threeDimensionalAggregation: {
            keyType: 'range',
            keySubtype: 'date',
            valueType: { keyType: 'range', keySubtype: 'timestamp', valueType: 'date' },
          },
        },
      },
    },
  },
  output: { type: 'string', nullable: false },
} satisfies QueryDefinition<'queryTakesAllParameterTypes', 'Todo'>;
