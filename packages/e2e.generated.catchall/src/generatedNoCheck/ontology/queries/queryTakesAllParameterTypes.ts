import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Todo } from '../objects/Todo.js';

export namespace queryTakesAllParameterTypes {
  export interface Signature {
    /**
     * description of the query that takes all parameter types
     */
    (query: queryTakesAllParameterTypes.Parameters): Promise<queryTakesAllParameterTypes.ReturnType>;
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
    readonly functionMap: Partial<Record<QueryParam.PrimitiveType<'float'>, QueryParam.PrimitiveType<'string'>>>;

    /**
     * (no ontology metadata)
     */
    readonly functionMapObjectKey: Partial<Record<ObjectSpecifier<Todo>, QueryParam.PrimitiveType<'string'>>>;

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
    readonly struct: {
      readonly id: QueryParam.PrimitiveType<'integer'>;

      readonly name: QueryParam.PrimitiveType<'string'>;
    };

    /**
     * (no ontology metadata)
     */
    readonly threeDimensionalAggregation: QueryParam.ThreeDimensionalAggregationType<
      QueryParam.RangeKey<'date'>,
      QueryParam.RangeKey<'timestamp'>,
      'date'
    >;

    /**
     * (no ontology metadata)
     */
    readonly timestamp: QueryParam.PrimitiveType<'timestamp'>;

    /**
     * (no ontology metadata)
     */
    readonly twoDimensionalAggregation: QueryParam.TwoDimensionalAggregationType<'string', 'double'>;

    /**
     *   description: a union of strings and integers
     */
    readonly unionNonNullable: QueryParam.PrimitiveType<'string'> | QueryParam.PrimitiveType<'integer'>;

    /**
     *   description: a union of strings and integers but its optional
     */
    readonly unionNullable?: QueryParam.PrimitiveType<'string'> | QueryParam.PrimitiveType<'integer'>;

    /**
     * (no ontology metadata)
     */
    readonly 'with spaces': QueryParam.PrimitiveType<'float'>;
  }

  export type ReturnType = QueryResult.PrimitiveType<'string'>;
}

/**
 * description of the query that takes all parameter types
 */
export interface queryTakesAllParameterTypes
  extends QueryDefinition<queryTakesAllParameterTypes.Signature>,
    VersionBound<$ExpectedClientVersion> {
  __DefinitionMetadata?: {
    apiName: 'queryTakesAllParameterTypes';
    description: 'description of the query that takes all parameter types';
    displayName: 'qTAPT';
    rid: 'query.rid';
    type: 'query';
    version: 'version';
    isFixedVersion: false;
    parameters: {
      /**
       *   description: an array of strings
       */
      array: {
        array: {
          type: 'string';
          nullable: false;
        };
        description: 'an array of strings';
        nullable: false;
        type: 'array';
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
      functionMap: {
        keyType: {
          type: 'float';
          nullable: false;
        };
        nullable: false;
        type: 'map';
        valueType: {
          type: 'string';
          nullable: false;
        };
      };
      /**
       * (no ontology metadata)
       */
      functionMapObjectKey: {
        keyType: {
          type: 'object';
          object: 'Todo';
          nullable: false;
        };
        nullable: false;
        type: 'map';
        valueType: {
          type: 'string';
          nullable: false;
        };
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
      /**
       * (no ontology metadata)
       */
      'with spaces': {
        nullable: false;
        type: 'float';
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

/**
 * description of the query that takes all parameter types
 */
export const queryTakesAllParameterTypes: queryTakesAllParameterTypes = {
  apiName: 'queryTakesAllParameterTypes',
  type: 'query',
  version: 'version',
  isFixedVersion: false,
  osdkMetadata: $osdkMetadata,
};
