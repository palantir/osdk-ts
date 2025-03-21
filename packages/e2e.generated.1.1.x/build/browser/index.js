import * as legacy_client_star from '@osdk/legacy-client';
import { BaseFoundryClient } from '@osdk/legacy-client';

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget);

// src/generatedNoCheck/index.ts
var generatedNoCheck_exports = {};
__export(generatedNoCheck_exports, {
  FoundryClient: () => FoundryClient
});
__reExport(generatedNoCheck_exports, legacy_client_star);

// src/generatedNoCheck/ontology/actions/actionTakesAllParameterTypes.ts
var actionTakesAllParameterTypes = {
  type: "action",
  apiName: "actionTakesAllParameterTypes",
  parameters: {
    objectSet: {
      multiplicity: false,
      type: {
        type: "objectSet",
        objectSet: "Todo"
      },
      nullable: false
    },
    object: {
      multiplicity: false,
      type: {
        type: "object",
        object: "Person"
      },
      nullable: true,
      description: "A person Object"
    },
    string: {
      multiplicity: false,
      type: "string",
      nullable: false
    },
    "time-stamp": {
      multiplicity: false,
      type: "timestamp",
      nullable: false
    },
    dateArray: {
      multiplicity: true,
      type: "datetime",
      nullable: true
    },
    attachmentArray: {
      multiplicity: true,
      type: "attachment",
      nullable: false
    }
  },
  description: "An action which takes different types of parameters",
  modifiedEntities: {
    Todo: {
      created: true,
      modified: true
    },
    ObjectTypeWithAllPropertyTypes: {
      created: false,
      modified: true
    }
  }
};

// src/generatedNoCheck/ontology/actions/createTodo.ts
var createTodo = {
  type: "action",
  apiName: "createTodo",
  parameters: {},
  description: "Creates a new Todo",
  modifiedEntities: {
    Todo: {
      created: true,
      modified: false
    }
  }
};

// src/generatedNoCheck/ontology/objects/ObjectTypeWithAllPropertyTypes.ts
var ObjectTypeWithAllPropertyTypes = {
  apiName: "ObjectTypeWithAllPropertyTypes",
  description: "A type with all property types",
  links: {},
  primaryKeyApiName: "id",
  primaryKeyType: "integer",
  properties: {
    id: {
      multiplicity: false,
      type: "integer",
      nullable: true
    },
    string: {
      multiplicity: false,
      type: "string",
      nullable: true
    },
    boolean: {
      multiplicity: false,
      type: "boolean",
      nullable: true
    },
    date: {
      multiplicity: false,
      type: "datetime",
      nullable: true
    },
    dateTime: {
      multiplicity: false,
      type: "timestamp",
      nullable: true
    },
    decimal: {
      multiplicity: false,
      type: "decimal",
      nullable: true
    },
    integer: {
      multiplicity: false,
      type: "integer",
      nullable: true
    },
    long: {
      multiplicity: false,
      type: "long",
      nullable: true
    },
    short: {
      multiplicity: false,
      type: "short",
      nullable: true
    },
    float: {
      multiplicity: false,
      type: "float",
      nullable: true
    },
    double: {
      multiplicity: false,
      type: "double",
      nullable: true
    },
    byte: {
      multiplicity: false,
      type: "byte",
      nullable: true
    },
    attachment: {
      multiplicity: false,
      type: "attachment",
      nullable: true
    },
    geoPoint: {
      multiplicity: false,
      type: "geopoint",
      nullable: true
    },
    geoShape: {
      multiplicity: false,
      type: "geoshape",
      nullable: true
    },
    stringArray: {
      multiplicity: true,
      type: "string",
      nullable: true
    },
    booleanArray: {
      multiplicity: true,
      type: "boolean",
      nullable: true
    },
    dateArray: {
      multiplicity: true,
      type: "datetime",
      nullable: true
    },
    dateTimeArray: {
      multiplicity: true,
      type: "timestamp",
      nullable: true
    },
    decimalArray: {
      multiplicity: true,
      type: "decimal",
      nullable: true
    },
    integerArray: {
      multiplicity: true,
      type: "integer",
      nullable: true
    },
    longArray: {
      multiplicity: true,
      type: "long",
      nullable: true
    },
    shortArray: {
      multiplicity: true,
      type: "short",
      nullable: true
    },
    floatArray: {
      multiplicity: true,
      type: "float",
      nullable: true
    },
    doubleArray: {
      multiplicity: true,
      type: "double",
      nullable: true
    },
    byteArray: {
      multiplicity: true,
      type: "byte",
      nullable: true
    },
    attachmentArray: {
      multiplicity: true,
      type: "attachment",
      nullable: true
    },
    geoPointArray: {
      multiplicity: true,
      type: "geopoint",
      nullable: true
    },
    geoShapeArray: {
      multiplicity: true,
      type: "geoshape",
      nullable: true
    },
    numericTimeseries: {
      multiplicity: false,
      type: "numericTimeseries",
      nullable: true
    },
    stringTimeseries: {
      multiplicity: false,
      type: "stringTimeseries",
      nullable: true
    }
  },
  type: "object"
};

// src/generatedNoCheck/ontology/objects/Person.ts
var Person = {
  apiName: "Person",
  description: "A person",
  links: {
    Todos: {
      multiplicity: true,
      targetType: "Todo"
    },
    Friends: {
      multiplicity: true,
      targetType: "Person"
    }
  },
  primaryKeyApiName: "email",
  primaryKeyType: "string",
  properties: {
    email: {
      multiplicity: false,
      type: "string",
      nullable: true
    }
  },
  type: "object"
};

// src/generatedNoCheck/ontology/objects/Todo.ts
var Todo = {
  apiName: "Todo",
  description: "Its a todo item.",
  links: {
    Assignee: {
      multiplicity: false,
      targetType: "Person"
    }
  },
  primaryKeyApiName: "id",
  primaryKeyType: "integer",
  properties: {
    id: {
      multiplicity: false,
      type: "integer",
      nullable: true
    },
    body: {
      displayName: "Body",
      multiplicity: false,
      description: "The text of the todo",
      type: "string",
      nullable: true
    },
    complete: {
      multiplicity: false,
      type: "boolean",
      nullable: true
    }
  },
  type: "object"
};

// src/generatedNoCheck/ontology/queries/getTodoCount.ts
var getTodoCount = {
  type: "query",
  apiName: "getTodoCount",
  version: "0.1.2",
  parameters: {},
  output: {
    type: "integer",
    nullable: false
  }
};

// src/generatedNoCheck/ontology/queries/queryTakesAllParameterTypes.ts
var queryTakesAllParameterTypes = {
  type: "query",
  apiName: "queryTakesAllParameterTypes",
  description: "description of the query that takes all parameter types",
  displayName: "qTAPT",
  version: "version",
  parameters: {
    double: {
      description: "a double parameter",
      type: "double",
      nullable: false
    },
    float: {
      type: "float",
      nullable: false
    },
    integer: {
      type: "integer",
      nullable: false
    },
    long: {
      type: "long",
      nullable: false
    },
    attachment: {
      type: "attachment",
      nullable: false
    },
    boolean: {
      type: "boolean",
      nullable: false
    },
    date: {
      type: "date",
      nullable: false
    },
    string: {
      type: "string",
      nullable: false
    },
    timestamp: {
      type: "timestamp",
      nullable: false
    },
    object: {
      type: "object",
      object: "Todo",
      nullable: false
    },
    objectSet: {
      type: "objectSet",
      objectSet: "Todo",
      nullable: false
    },
    array: {
      description: "an array of strings",
      type: "string",
      nullable: false,
      multiplicity: true
    },
    set: {
      description: "a set of strings",
      type: "set",
      set: {
        type: "string",
        nullable: false
      },
      nullable: false
    },
    unionNonNullable: {
      description: "a union of strings and integers",
      type: "union",
      union: [{
        type: "string",
        nullable: false
      }, {
        type: "integer",
        nullable: false
      }],
      nullable: false
    },
    unionNullable: {
      description: "a union of strings and integers but its optional",
      type: "union",
      union: [{
        type: "string",
        nullable: false
      }, {
        type: "integer",
        nullable: false
      }],
      nullable: true
    },
    struct: {
      description: "a struct with some fields",
      type: "struct",
      struct: {
        name: {
          type: "string",
          nullable: false
        },
        id: {
          type: "integer",
          nullable: false
        }
      },
      nullable: false
    },
    twoDimensionalAggregation: {
      type: "twoDimensionalAggregation",
      twoDimensionalAggregation: {
        keyType: "string",
        valueType: "double"
      },
      nullable: false
    },
    threeDimensionalAggregation: {
      type: "threeDimensionalAggregation",
      threeDimensionalAggregation: {
        keyType: "range",
        keySubtype: "date",
        valueType: {
          keyType: "range",
          keySubtype: "timestamp",
          valueType: "date"
        }
      },
      nullable: false
    }
  },
  output: {
    type: "string",
    nullable: false
  }
};

// src/generatedNoCheck/Ontology.ts
var Ontology = {
  metadata: {
    ontologyRid: "ridHere",
    ontologyApiName: "OntologyApiName",
    userAgent: "typescript-sdk/dev osdk-cli/dev"
  },
  objects: {
    Todo,
    Person,
    ObjectTypeWithAllPropertyTypes
  },
  actions: {
    actionTakesAllParameterTypes,
    createTodo
  },
  queries: {
    queryTakesAllParameterTypes,
    getTodoCount
  }
};

// src/generatedNoCheck/FoundryClient.ts
var FoundryClient = class extends BaseFoundryClient {
  constructor(options) {
    super(options, Ontology);
  }
  get ontology() {
    return super.ontology;
  }
};
var export_PublicClientAuth = generatedNoCheck_exports.PublicClientAuth;

export { FoundryClient, export_PublicClientAuth as PublicClientAuth };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map