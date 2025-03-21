import type { Ontology as ClientOntology } from '@osdk/legacy-client';
import type { Actions } from './ontology/actions/Actions.js';
import { actionTakesAllParameterTypes } from './ontology/actions/actionTakesAllParameterTypes.js';
import type { BatchActions } from './ontology/actions/BatchActions.js';
import type { BulkActions } from './ontology/actions/BulkActions.js';
import { createTodo } from './ontology/actions/createTodo.js';
import type { Objects } from './ontology/objects/Objects.js';
import { ObjectTypeWithAllPropertyTypes } from './ontology/objects/ObjectTypeWithAllPropertyTypes.js';
import { Person } from './ontology/objects/Person.js';
import { Todo } from './ontology/objects/Todo.js';
import { getTodoCount } from './ontology/queries/getTodoCount.js';
import type { Queries } from './ontology/queries/Queries.js';
import { queryTakesAllParameterTypes } from './ontology/queries/queryTakesAllParameterTypes.js';
export declare const Ontology: {
    metadata: {
        ontologyRid: 'ridHere';
        ontologyApiName: 'OntologyApiName';
        userAgent: 'typescript-sdk/dev osdk-cli/dev';
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
};
export interface Ontology extends ClientOntology<typeof Ontology> {
    objects: Objects;
    actions: Actions;
    /** @deprecated use batchActions */
    bulkActions: BulkActions;
    batchActions: BatchActions;
    queries: Queries;
}
//# sourceMappingURL=Ontology.d.ts.map