import type { Ontology as ClientOntology } from '@osdk/legacy-client';
import type { Actions } from './ontology/actions/Actions';
import { actionTakesObjectSet } from './ontology/actions/actionTakesObjectSet';
import { createOffice } from './ontology/actions/createOffice';
import { createOfficeAndEmployee } from './ontology/actions/createOfficeAndEmployee';
import { moveOffice } from './ontology/actions/moveOffice';
import { Employee } from './ontology/objects/Employee';
import { ObjectWithTimestampPrimaryKey } from './ontology/objects/ObjectWithTimestampPrimaryKey';
import type { Objects } from './ontology/objects/Objects';
import { Office } from './ontology/objects/Office';
import { equipment } from './ontology/objects/equipment';
import { objectTypeWithAllPropertyTypes } from './ontology/objects/objectTypeWithAllPropertyTypes';
import type { Queries } from './ontology/queries/Queries';
import { addOne } from './ontology/queries/addOne';
import { incrementPersonAge } from './ontology/queries/incrementPersonAge';
import { returnsDate } from './ontology/queries/returnsDate';
import { returnsObject } from './ontology/queries/returnsObject';
import { returnsTimestamp } from './ontology/queries/returnsTimestamp';
import { threeDimensionalAggregationFunction } from './ontology/queries/threeDimensionalAggregationFunction';
import { twoDimensionalAggregationFunction } from './ontology/queries/twoDimensionalAggregationFunction';
export declare const Ontology: {
    metadata: {
        ontologyRid: 'ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361';
        ontologyApiName: 'default-ontology';
        userAgent: 'foundry-typescript-osdk/0.0.1';
    };
    objects: {
        Employee: typeof Employee;
        Office: typeof Office;
        objectTypeWithAllPropertyTypes: typeof objectTypeWithAllPropertyTypes;
        ObjectWithTimestampPrimaryKey: typeof ObjectWithTimestampPrimaryKey;
        equipment: typeof equipment;
    };
    actions: {
        createOffice: typeof createOffice;
        createOfficeAndEmployee: typeof createOfficeAndEmployee;
        moveOffice: typeof moveOffice;
        actionTakesObjectSet: typeof actionTakesObjectSet;
    };
    queries: {
        addOne: typeof addOne;
        incrementPersonAge: typeof incrementPersonAge;
        returnsDate: typeof returnsDate;
        returnsObject: typeof returnsObject;
        returnsTimestamp: typeof returnsTimestamp;
        twoDimensionalAggregationFunction: typeof twoDimensionalAggregationFunction;
        threeDimensionalAggregationFunction: typeof threeDimensionalAggregationFunction;
    };
};
export interface Ontology extends ClientOntology<typeof Ontology> {
    objects: Objects;
    actions: Actions;
    queries: Queries;
}
