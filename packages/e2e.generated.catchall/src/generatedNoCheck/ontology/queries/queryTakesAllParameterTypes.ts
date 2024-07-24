import type { VersionBound } from '@osdk/api';
import { QueryDefinition } from '@osdk/api';

import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';

import { Todo } from '../objects.js';

export interface queryTakesAllParameterTypes
  extends QueryDefinition<'queryTakesAllParameterTypes', 'Todo'>,
    VersionBound<$ExpectedClientVersion> {
  apiName: 'queryTakesAllParameterTypes';
  description: 'description of the query that takes all parameter types';
  displayName: 'qTAPT';
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
}

export const queryTakesAllParameterTypes: queryTakesAllParameterTypes = {
  apiName: 'queryTakesAllParameterTypes',
  description: 'description of the query that takes all parameter types',
  displayName: 'qTAPT',
  type: 'query',
  version: 'version',
  parameters: {
    array: {
      description: 'an array of strings',
      type: 'string',
      nullable: false,
      multiplicity: true,
    },
    attachment: {
      type: 'attachment',
      nullable: false,
    },
    boolean: {
      type: 'boolean',
      nullable: false,
    },
    date: {
      type: 'date',
      nullable: false,
    },
    double: {
      description: 'a double parameter',
      type: 'double',
      nullable: false,
    },
    float: {
      type: 'float',
      nullable: false,
    },
    integer: {
      type: 'integer',
      nullable: false,
    },
    long: {
      type: 'long',
      nullable: false,
    },
    object: {
      type: 'object',
      object: 'Todo',
      nullable: false,
    },
    objectSet: {
      type: 'objectSet',
      objectSet: 'Todo',
      nullable: false,
    },
    set: {
      description: 'a set of strings',
      type: 'set',
      set: {
        type: 'string',
        nullable: false,
      },
      nullable: false,
    },
    string: {
      type: 'string',
      nullable: false,
    },
    struct: {
      description: 'a struct with some fields',
      type: 'struct',
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
      nullable: false,
    },
    threeDimensionalAggregation: {
      type: 'threeDimensionalAggregation',
      threeDimensionalAggregation: {
        keyType: 'range',
        keySubtype: 'date',
        valueType: {
          keyType: 'range',
          keySubtype: 'timestamp',
          valueType: 'date',
        },
      },
      nullable: false,
    },
    timestamp: {
      type: 'timestamp',
      nullable: false,
    },
    twoDimensionalAggregation: {
      type: 'twoDimensionalAggregation',
      twoDimensionalAggregation: {
        keyType: 'string',
        valueType: 'double',
      },
      nullable: false,
    },
    unionNonNullable: {
      description: 'a union of strings and integers',
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
      nullable: false,
    },
    unionNullable: {
      description: 'a union of strings and integers but its optional',
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
      nullable: true,
    },
  },
  output: {
    nullable: false,
    type: 'string',
  },
};
