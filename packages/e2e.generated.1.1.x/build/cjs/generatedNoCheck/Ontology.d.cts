import type { Ontology as ClientOntology } from '@osdk/legacy-client';
import type { Actions } from './ontology/actions/Actions.cjs';
import { actionTakesAllParameterTypes } from './ontology/actions/actionTakesAllParameterTypes.cjs';
import type { BatchActions } from './ontology/actions/BatchActions.cjs';
import type { BulkActions } from './ontology/actions/BulkActions.cjs';
import { createTodo } from './ontology/actions/createTodo.cjs';
import type { Objects } from './ontology/objects/Objects.cjs';
import { ObjectTypeWithAllPropertyTypes } from './ontology/objects/ObjectTypeWithAllPropertyTypes.cjs';
import { Person } from './ontology/objects/Person.cjs';
import { Todo } from './ontology/objects/Todo.cjs';
import { getTodoCount } from './ontology/queries/getTodoCount.cjs';
import type { Queries } from './ontology/queries/Queries.cjs';
import { queryTakesAllParameterTypes } from './ontology/queries/queryTakesAllParameterTypes.cjs';
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