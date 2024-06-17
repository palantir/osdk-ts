import type { OntologyDefinition } from '@osdk/api';
import type { Ontology as ClientOntology } from '@osdk/legacy-client';
import type { Actions } from './ontology/actions/Actions';
import type { BatchActions } from './ontology/actions/BatchActions';
import type { BulkActions } from './ontology/actions/BulkActions';
import { actionTakesAllParameterTypes } from './ontology/actions/actionTakesAllParameterTypes';
import { createTodo } from './ontology/actions/createTodo';
import { ObjectTypeWithAllPropertyTypes } from './ontology/objects/ObjectTypeWithAllPropertyTypes';
import type { Objects } from './ontology/objects/Objects';
import { Person } from './ontology/objects/Person';
import { Todo } from './ontology/objects/Todo';
import type { Queries } from './ontology/queries/Queries';
import { getTodoCount } from './ontology/queries/getTodoCount';
import { queryTakesAllParameterTypes } from './ontology/queries/queryTakesAllParameterTypes';

export const Ontology: {
  metadata: {
    ontologyRid: 'ridHere';
    ontologyApiName: 'OntologyApiName';
    userAgent: 'typescript-osdk/dev osdk-cli/dev';
  };
  objects: {
    Todo: typeof Todo;
    Person: typeof Person;
    ObjectTypeWithAllPropertyTypes: typeof ObjectTypeWithAllPropertyTypes;
  };
  actions: {
    actionTakesAllParameterTypes: typeof actionTakesAllParameterTypes;
    createTodo: typeof createTodo;
  };
  queries: {
    queryTakesAllParameterTypes: typeof queryTakesAllParameterTypes;
    getTodoCount: typeof getTodoCount;
  };
} = {
  metadata: {
    ontologyRid: 'ridHere' as const,
    ontologyApiName: 'OntologyApiName' as const,
    userAgent: 'typescript-osdk/dev osdk-cli/dev' as const,
  },
  objects: {
    Todo,
    Person,
    ObjectTypeWithAllPropertyTypes,
  },
  actions: {
    actionTakesAllParameterTypes,
    createTodo,
  },
  queries: {
    queryTakesAllParameterTypes,
    getTodoCount,
  },
} satisfies OntologyDefinition<
  'Todo' | 'Person' | 'ObjectTypeWithAllPropertyTypes',
  'actionTakesAllParameterTypes' | 'createTodo',
  'queryTakesAllParameterTypes' | 'getTodoCount'
>;

export interface Ontology extends ClientOntology<typeof Ontology> {
  objects: Objects;
  actions: Actions;
  /** @deprecated use batchActions */
  bulkActions: BulkActions;
  batchActions: BatchActions;
  queries: Queries;
}
