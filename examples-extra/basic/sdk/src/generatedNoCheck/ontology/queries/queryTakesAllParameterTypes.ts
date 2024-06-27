import { QueryDefinition } from '@osdk/api';
import { Todo } from '../objects.js';
export const queryTakesAllParameterTypes = {
  apiName: 'queryTakesAllParameterTypes',
  description: 'description of the query that takes all parameter types',
  displayName: 'qTAPT',
  type: 'query',
  version: 'version',
  parameters: {
    double: { description: 'a double parameter', type: 'double', nullable: false },
    float: { type: 'float', nullable: false },
    integer: { type: 'integer', nullable: false },
    long: { type: 'long', nullable: false },
    attachment: { type: 'attachment', nullable: false },
    boolean: { type: 'boolean', nullable: false },
    date: { type: 'date', nullable: false },
    string: { type: 'string', nullable: false },
    timestamp: { type: 'timestamp', nullable: false },
    object: {
      description: 'undefined',
      type: 'object',
      object: 'Todo',
      nullable: false,
      __OsdkTargetType: Todo,
    },
    objectSet: {
      description: 'undefined',
      type: 'objectSet',
      objectSet: 'Todo',
      nullable: false,
      __OsdkTargetType: Todo,
    },
    array: { description: 'an array of strings', type: 'string', nullable: false, multiplicity: true },
    set: { description: 'a set of strings', type: 'set', set: { type: 'string', nullable: false }, nullable: false },
    unionNonNullable: {
      description: 'a union of strings and integers',
      type: 'union',
      union: [
        { type: 'string', nullable: false },
        { type: 'integer', nullable: false },
      ],
      nullable: false,
    },
    unionNullable: {
      description: 'a union of strings and integers but its optional',
      type: 'union',
      union: [
        { type: 'string', nullable: false },
        { type: 'integer', nullable: false },
      ],
      nullable: true,
    },
    struct: {
      description: 'a struct with some fields',
      type: 'struct',
      struct: { name: { type: 'string', nullable: false }, id: { type: 'integer', nullable: false } },
      nullable: false,
    },
    twoDimensionalAggregation: {
      type: 'twoDimensionalAggregation',
      twoDimensionalAggregation: { keyType: 'string', valueType: 'double' },
    },
    threeDimensionalAggregation: {
      type: 'threeDimensionalAggregation',
      threeDimensionalAggregation: {
        keyType: 'range',
        keySubtype: 'date',
        valueType: { keyType: 'range', keySubtype: 'timestamp', valueType: 'date' },
      },
    },
  },
  output: { type: 'string', nullable: false },
} satisfies QueryDefinition<'queryTakesAllParameterTypes', 'Todo'>;
