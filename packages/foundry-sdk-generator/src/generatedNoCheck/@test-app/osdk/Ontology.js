"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ontology = void 0;
const actionTakesObjectSet_1 = require("./ontology/actions/actionTakesObjectSet");
const createOffice_1 = require("./ontology/actions/createOffice");
const createOfficeAndEmployee_1 = require("./ontology/actions/createOfficeAndEmployee");
const moveOffice_1 = require("./ontology/actions/moveOffice");
const Employee_1 = require("./ontology/objects/Employee");
const ObjectWithTimestampPrimaryKey_1 = require("./ontology/objects/ObjectWithTimestampPrimaryKey");
const Office_1 = require("./ontology/objects/Office");
const equipment_1 = require("./ontology/objects/equipment");
const objectTypeWithAllPropertyTypes_1 = require("./ontology/objects/objectTypeWithAllPropertyTypes");
const addOne_1 = require("./ontology/queries/addOne");
const incrementPersonAge_1 = require("./ontology/queries/incrementPersonAge");
const returnsDate_1 = require("./ontology/queries/returnsDate");
const returnsObject_1 = require("./ontology/queries/returnsObject");
const returnsTimestamp_1 = require("./ontology/queries/returnsTimestamp");
const threeDimensionalAggregationFunction_1 = require("./ontology/queries/threeDimensionalAggregationFunction");
const twoDimensionalAggregationFunction_1 = require("./ontology/queries/twoDimensionalAggregationFunction");
exports.Ontology = {
    metadata: {
        ontologyRid: 'ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361',
        ontologyApiName: 'default-ontology',
        userAgent: 'foundry-typescript-osdk/0.0.1',
    },
    objects: {
        Employee: Employee_1.Employee,
        Office: Office_1.Office,
        objectTypeWithAllPropertyTypes: objectTypeWithAllPropertyTypes_1.objectTypeWithAllPropertyTypes,
        ObjectWithTimestampPrimaryKey: ObjectWithTimestampPrimaryKey_1.ObjectWithTimestampPrimaryKey,
        equipment: equipment_1.equipment,
    },
    actions: {
        createOffice: createOffice_1.createOffice,
        createOfficeAndEmployee: createOfficeAndEmployee_1.createOfficeAndEmployee,
        moveOffice: moveOffice_1.moveOffice,
        actionTakesObjectSet: actionTakesObjectSet_1.actionTakesObjectSet,
    },
    queries: {
        addOne: addOne_1.addOne,
        incrementPersonAge: incrementPersonAge_1.incrementPersonAge,
        returnsDate: returnsDate_1.returnsDate,
        returnsObject: returnsObject_1.returnsObject,
        returnsTimestamp: returnsTimestamp_1.returnsTimestamp,
        twoDimensionalAggregationFunction: twoDimensionalAggregationFunction_1.twoDimensionalAggregationFunction,
        threeDimensionalAggregationFunction: threeDimensionalAggregationFunction_1.threeDimensionalAggregationFunction,
    },
};
