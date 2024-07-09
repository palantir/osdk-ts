import { QueryDefinition } from '@osdk/api';
import { Todo } from '../objects.js';
export const queryTakesAllParameterTypes = {
  apiName: 'queryTakesAllParameterTypes',
  description: 'description of the query that takes all parameter types',
  displayName: 'qTAPT',
  type: 'query',
  version: 'version',
  parameters: {
    double: { description: 'a double parameter', nullable: false, type: 'double' },
    float: { nullable: false, type: 'float' },
    integer: { nullable: false, type: 'integer' },
    long: { nullable: false, type: 'long' },
    attachment: { nullable: false, type: 'attachment' },
    boolean: { nullable: false, type: 'boolean' },
    date: { nullable: false, type: 'date' },
    string: { nullable: false, type: 'string' },
    timestamp: { nullable: false, type: 'timestamp' },
    object: { nullable: false, object: 'Todo', type: 'object', __OsdkTargetType: Todo },
    objectSet: { nullable: false, objectSet: 'Todo', type: 'objectSet', __OsdkTargetType: Todo },
    array: { description: 'an array of strings', multiplicity: true, nullable: false, type: 'string' },
    set: {
      description: 'a set of strings',
      nullable: false,
      set: {
        type: 'string',
        nullable: false,
      },
      type: 'set',
    },
    unionNonNullable: {
      description: 'a union of strings and integers',
      nullable: false,
      type: 'union',
      union: [
        {
          type: 'string',
          nullable: false,
        },
        {
          type: 'integer',
          nullable: false,
        },
      ],
    },
    unionNullable: {
      description: 'a union of strings and integers but its optional',
      nullable: true,
      type: 'union',
      union: [
        {
          type: 'string',
          nullable: false,
        },
        {
          type: 'integer',
          nullable: false,
        },
      ],
    },
    struct: {
      description: 'a struct with some fields',
      nullable: false,
      struct: {
        name: {
          type: 'string',
          nullable: false,
        },
        id: {
          type: 'integer',
          nullable: false,
        },
      },
      type: 'struct',
    },
    twoDimensionalAggregation: {
      twoDimensionalAggregation: {
        keyType: 'string',
        valueType: 'double',
      },
      type: 'twoDimensionalAggregation',
    },
    threeDimensionalAggregation: {
      threeDimensionalAggregation: {
        keyType: 'range',
        keySubtype: 'date',
        valueType: {
          keyType: 'range',
          keySubtype: 'timestamp',
          valueType: 'date',
        },
      },
      type: 'threeDimensionalAggregation',
    },
  },
  output: { nullable: false, type: 'string' },
} satisfies QueryDefinition<'queryTakesAllParameterTypes', 'Todo'>;
