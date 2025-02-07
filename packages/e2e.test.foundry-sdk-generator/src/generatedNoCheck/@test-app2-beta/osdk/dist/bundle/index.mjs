const $osdkMetadata = { extraUserAgent: 'typescript-sdk/0.0.1 typescript-sdk-generator/2.1.0-beta.25' };
const $ontologyRid = 'ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361';

const actionTakesObjectSet = {
    apiName: 'actionTakesObjectSet',
    type: 'action',
    osdkMetadata: $osdkMetadata,
};

const createOffice = {
    apiName: 'createOffice',
    type: 'action',
    osdkMetadata: $osdkMetadata,
};

const createOfficeAndEmployee = {
    apiName: 'createOfficeAndEmployee',
    type: 'action',
    osdkMetadata: $osdkMetadata,
};

const moveOffice = {
    apiName: 'moveOffice',
    type: 'action',
    osdkMetadata: $osdkMetadata,
};

var actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    actionTakesObjectSet: actionTakesObjectSet,
    createOffice: createOffice,
    createOfficeAndEmployee: createOfficeAndEmployee,
    moveOffice: moveOffice
});

const FooInterface = {
    type: 'interface',
    apiName: 'FooInterface',
    osdkMetadata: $osdkMetadata,
};

var interfaces = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FooInterface: FooInterface
});

const Employee = {
    type: 'object',
    apiName: 'Employee',
    osdkMetadata: $osdkMetadata,
};

const equipment = {
    type: 'object',
    apiName: 'equipment',
    osdkMetadata: $osdkMetadata,
};

const objectTypeWithAllPropertyTypes = {
    type: 'object',
    apiName: 'objectTypeWithAllPropertyTypes',
    osdkMetadata: $osdkMetadata,
};

const ObjectWithTimestampPrimaryKey = {
    type: 'object',
    apiName: 'ObjectWithTimestampPrimaryKey',
    osdkMetadata: $osdkMetadata,
};

const Office = {
    type: 'object',
    apiName: 'Office',
    osdkMetadata: $osdkMetadata,
};

var objects = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Employee: Employee,
    ObjectWithTimestampPrimaryKey: ObjectWithTimestampPrimaryKey,
    Office: Office,
    equipment: equipment,
    objectTypeWithAllPropertyTypes: objectTypeWithAllPropertyTypes
});

const addOne = {
    apiName: 'addOne',
    type: 'query',
    version: '0.0.9',
    osdkMetadata: $osdkMetadata,
};

const incrementPersonAge = {
    apiName: 'incrementPersonAge',
    type: 'query',
    version: '0.0.9',
    osdkMetadata: $osdkMetadata,
};

const returnsDate = {
    apiName: 'returnsDate',
    type: 'query',
    version: '0.0.9',
    osdkMetadata: $osdkMetadata,
};

const returnsObject = {
    apiName: 'returnsObject',
    type: 'query',
    version: '0.0.9',
    osdkMetadata: $osdkMetadata,
};

const returnsTimestamp = {
    apiName: 'returnsTimestamp',
    type: 'query',
    version: '0.0.9',
    osdkMetadata: $osdkMetadata,
};

const threeDimensionalAggregationFunction = {
    apiName: 'threeDimensionalAggregationFunction',
    type: 'query',
    version: '0.11.0',
    osdkMetadata: $osdkMetadata,
};

const twoDimensionalAggregationFunction = {
    apiName: 'twoDimensionalAggregationFunction',
    type: 'query',
    version: '0.11.0',
    osdkMetadata: $osdkMetadata,
};

var queries = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addOne: addOne,
    incrementPersonAge: incrementPersonAge,
    returnsDate: returnsDate,
    returnsObject: returnsObject,
    returnsTimestamp: returnsTimestamp,
    threeDimensionalAggregationFunction: threeDimensionalAggregationFunction,
    twoDimensionalAggregationFunction: twoDimensionalAggregationFunction
});

export { actions as $Actions, interfaces as $Interfaces, objects as $Objects, queries as $Queries, $ontologyRid, $osdkMetadata, Employee, FooInterface, ObjectWithTimestampPrimaryKey, Office, actionTakesObjectSet, addOne, createOffice, createOfficeAndEmployee, equipment, incrementPersonAge, moveOffice, objectTypeWithAllPropertyTypes, returnsDate, returnsObject, returnsTimestamp, threeDimensionalAggregationFunction, twoDimensionalAggregationFunction };
