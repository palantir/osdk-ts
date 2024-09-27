import type { QueryDefinition, VersionBound } from '@osdk/api';
import type { QueryParam, QueryResult } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Todo } from '../objects/Todo.js';

export namespace queryTakesAllParameterTypes {
  export interface Signature {
    /**
     * description of the query that takes all parameter types
     */
    (query: queryTakesAllParameterTypes.Parameters): Promise<QueryResult.PrimitiveType<'string'>>;
  }

  export interface Parameters {
    /**
     *   description: an array of strings
     */
    readonly array: ReadonlyArray<QueryParam.PrimitiveType<'string'>>;

    /**
     * (no ontology metadata)
     */
    readonly attachment: QueryParam.PrimitiveType<'attachment'>;

    /**
     * (no ontology metadata)
     */
    readonly boolean: QueryParam.PrimitiveType<'boolean'>;

    /**
     * (no ontology metadata)
     */
    readonly date: QueryParam.PrimitiveType<'datetime'>;

    /**
     *   description: a double parameter
     */
    readonly double: QueryParam.PrimitiveType<'double'>;

    /**
     * (no ontology metadata)
     */
    readonly float: QueryParam.PrimitiveType<'float'>;

    /**
     * (no ontology metadata)
     */
    readonly integer: QueryParam.PrimitiveType<'integer'>;

    /**
     * (no ontology metadata)
     */
    readonly long: QueryParam.PrimitiveType<'long'>;

    /**
     * (no ontology metadata)
     */
    readonly object: QueryParam.ObjectType<Todo>;

    /**
     * (no ontology metadata)
     */
    readonly objectSet: QueryParam.ObjectSetType<Todo>;

    /**
     *   description: a set of strings
     */
    readonly set: ReadonlySet<QueryParam.PrimitiveType<'string'>>;

    /**
     * (no ontology metadata)
     */
    readonly string: QueryParam.PrimitiveType<'string'>;

    /**
     *   description: a struct with some fields
     */
    readonly struct: QueryParam.PrimitiveType<'struct'>;

    /**
     * (no ontology metadata)
     */
    readonly threeDimensionalAggregation: QueryParam.PrimitiveType<'threeDimensionalAggregation'>;

    /**
     * (no ontology metadata)
     */
    readonly timestamp: QueryParam.PrimitiveType<'timestamp'>;

    /**
     * (no ontology metadata)
     */
    readonly twoDimensionalAggregation: QueryParam.PrimitiveType<'twoDimensionalAggregation'>;

    /**
     *   description: a union of strings and integers
     */
    readonly unionNonNullable: QueryParam.PrimitiveType<'string'> | QueryParam.PrimitiveType<'integer'>;

    /**
     *   description: a union of strings and integers but its optional
     */
    readonly unionNullable?: QueryParam.PrimitiveType<'string'> | QueryParam.PrimitiveType<'integer'>;
  }
}

export interface queryTakesAllParameterTypes
  extends QueryDefinition<'queryTakesAllParameterTypes', 'Todo', queryTakesAllParameterTypes.Signature>,
    VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'queryTakesAllParameterTypes';
    description: 'description of the query that takes all parameter types';
    displayName: 'qTAPT';
    rid: 'query.rid';
    type: 'query';
    version: 'version';
    parameters: {
      /**
       *   description: an array of strings
       */
      array: {
        description: 'an array of strings';
        multiplicity: true;
        nullable: false;
        type: 'string';
      };
      /**
       * (no ontology metadata)
       */
      attachment: {
        nullable: false;
        type: 'attachment';
      };
      /**
       * (no ontology metadata)
       */
      boolean: {
        nullable: false;
        type: 'boolean';
      };
      /**
       * (no ontology metadata)
       */
      date: {
        nullable: false;
        type: 'date';
      };
      /**
       *   description: a double parameter
       */
      double: {
        description: 'a double parameter';
        nullable: false;
        type: 'double';
      };
      /**
       * (no ontology metadata)
       */
      float: {
        nullable: false;
        type: 'float';
      };
      /**
       * (no ontology metadata)
       */
      integer: {
        nullable: false;
        type: 'integer';
      };
      /**
       * (no ontology metadata)
       */
      long: {
        nullable: false;
        type: 'long';
      };
      /**
       * (no ontology metadata)
       */
      object: {
        nullable: false;
        object: 'Todo';
        type: 'object';
        __OsdkTargetType?: Todo;
      };
      /**
       * (no ontology metadata)
       */
      objectSet: {
        nullable: false;
        objectSet: 'Todo';
        type: 'objectSet';
        __OsdkTargetType?: Todo;
      };
      /**
       *   description: a set of strings
       */
      set: {
        description: 'a set of strings';
        nullable: false;
        set: {
          type: 'string';
          nullable: false;
        };
        type: 'set';
      };
      /**
       * (no ontology metadata)
       */
      string: {
        nullable: false;
        type: 'string';
      };
      /**
       *   description: a struct with some fields
       */
      struct: {
        description: 'a struct with some fields';
        nullable: false;
        struct: {
          name: {
            type: 'string';
            nullable: false;
          };
          id: {
            type: 'integer';
            nullable: false;
          };
        };
        type: 'struct';
      };
      /**
       * (no ontology metadata)
       */
      threeDimensionalAggregation: {
        nullable: false;
        threeDimensionalAggregation: {
          keyType: 'range';
          keySubtype: 'date';
          valueType: {
            keyType: 'range';
            keySubtype: 'timestamp';
            valueType: 'date';
          };
        };
        type: 'threeDimensionalAggregation';
      };
      /**
       * (no ontology metadata)
       */
      timestamp: {
        nullable: false;
        type: 'timestamp';
      };
      /**
       * (no ontology metadata)
       */
      twoDimensionalAggregation: {
        nullable: false;
        twoDimensionalAggregation: {
          keyType: 'string';
          valueType: 'double';
        };
        type: 'twoDimensionalAggregation';
      };
      /**
       *   description: a union of strings and integers
       */
      unionNonNullable: {
        description: 'a union of strings and integers';
        nullable: false;
        type: 'union';
        union: [
          {
            type: 'string';
            nullable: false;
          },
          {
            type: 'integer';
            nullable: false;
          },
        ];
      };
      /**
       *   description: a union of strings and integers but its optional
       */
      unionNullable: {
        description: 'a union of strings and integers but its optional';
        nullable: true;
        type: 'union';
        union: [
          {
            type: 'string';
            nullable: false;
          },
          {
            type: 'integer';
            nullable: false;
          },
        ];
      };
    };
    output: {
      nullable: false;
      type: 'string';
    };
    signature: queryTakesAllParameterTypes.Signature;
  };
  apiName: 'queryTakesAllParameterTypes';
  type: 'query';
  version: 'version';
  osdkMetadata: typeof $osdkMetadata;
}

export const queryTakesAllParameterTypes: queryTakesAllParameterTypes = {
  apiName: 'queryTakesAllParameterTypes',
  type: 'query',
  version: 'version',
  osdkMetadata: $osdkMetadata,
};
