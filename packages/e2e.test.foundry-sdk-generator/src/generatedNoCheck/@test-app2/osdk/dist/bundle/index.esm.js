const $osdkMetadata = { extraUserAgent: 'typescript-sdk/0.0.1 typescript-sdk-generator/2.0.0-beta.6' };
const $ontologyRid = 'ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361';

const actionTakesObjectSet = {
    apiName: 'actionTakesObjectSet',
    description: 'An action which takes an Object Set',
    modifiedEntities: {},
    parameters: {
        employees: {
            multiplicity: false,
            type: {
                type: 'objectSet',
                objectSet: 'Employee',
            },
            nullable: false,
        },
    },
    type: 'action',
    osdkMetadata: $osdkMetadata,
};

const createOffice = {
    apiName: 'createOffice',
    description: "Create an office's",
    modifiedEntities: {
        Office: {
            created: true,
            modified: false,
        },
    },
    parameters: {
        officeId: {
            multiplicity: false,
            type: 'string',
            nullable: false,
        },
        address: {
            multiplicity: false,
            type: 'string',
            nullable: true,
            description: "The office's physical address (not necessarily shipping address)",
        },
        capacity: {
            multiplicity: false,
            type: 'integer',
            nullable: true,
            description: 'The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)',
        },
        officeNames: {
            multiplicity: true,
            type: 'string',
            nullable: true,
            description: 'A list of all office names',
        },
    },
    type: 'action',
    osdkMetadata: $osdkMetadata,
};

const createOfficeAndEmployee = {
    apiName: 'createOfficeAndEmployee',
    description: 'Create an office and employee',
    modifiedEntities: {
        Office: {
            created: true,
            modified: false,
        },
        Employee: {
            created: true,
            modified: false,
        },
    },
    parameters: {
        officeId: {
            multiplicity: false,
            type: 'string',
            nullable: false,
        },
        address: {
            multiplicity: false,
            type: 'string',
            nullable: true,
            description: "The office's physical address (not necessarily shipping address)",
        },
        capacity: {
            multiplicity: false,
            type: 'integer',
            nullable: true,
            description: 'The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)',
        },
        officeNames: {
            multiplicity: true,
            type: 'string',
            nullable: true,
            description: 'A list of all office names',
        },
        employeeId: {
            multiplicity: false,
            type: 'integer',
            nullable: false,
            description: 'New employee Id',
        },
    },
    type: 'action',
    osdkMetadata: $osdkMetadata,
};

const moveOffice = {
    apiName: 'moveOffice',
    description: "Update an office's physical location",
    modifiedEntities: {
        Office: {
            created: false,
            modified: true,
        },
    },
    parameters: {
        officeId: {
            multiplicity: false,
            type: 'string',
            nullable: false,
        },
        newAddress: {
            multiplicity: false,
            type: 'string',
            nullable: true,
            description: "The office's new physical address (not necessarily shipping address)",
        },
        newCapacity: {
            multiplicity: false,
            type: 'integer',
            nullable: true,
            description: 'The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)',
        },
        officeNames: {
            multiplicity: true,
            type: 'integer',
            nullable: true,
            description: 'A list of all office names',
        },
    },
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
    osdkMetadata: $osdkMetadata,
    objectSet: undefined,
    props: undefined,
    linksType: undefined,
    strictProps: undefined,
    apiName: 'FooInterface',
    displayName: 'Foo Interface',
    implements: [],
    links: {},
    properties: {
        fooSpt: {
            displayName: 'Foo',
            multiplicity: false,
            description: 'A foo',
            type: 'string',
            nullable: true,
        },
    },
    type: 'interface',
};

var interfaces = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FooInterface: FooInterface
});

const Employee = {
    osdkMetadata: $osdkMetadata,
    objectSet: undefined,
    props: undefined,
    linksType: undefined,
    strictProps: undefined,
    apiName: 'Employee',
    description: 'A full-time or part-time \n\n employee of our firm',
    implements: ['FooInterface'],
    interfaceMap: {
        FooInterface: {
            fooSpt: 'fullName',
        },
    },
    inverseInterfaceMap: {
        FooInterface: {
            fullName: 'fooSpt',
        },
    },
    inverseSpts: {
        fullName: 'fooSpt',
    },
    links: {
        peeps: {
            multiplicity: true,
            targetType: 'Employee',
        },
        lead: {
            multiplicity: false,
            targetType: 'Employee',
        },
        officeLink: {
            multiplicity: false,
            targetType: 'Office',
        },
    },
    primaryKeyApiName: 'employeeId',
    primaryKeyType: 'integer',
    properties: {
        employeeId: {
            multiplicity: false,
            type: 'integer',
            nullable: false,
        },
        fullName: {
            multiplicity: false,
            type: 'string',
            nullable: true,
        },
        office: {
            multiplicity: false,
            description: 'The unique "ID" of the employee\'s \\"primary\\" assigned office.\n This is some more text.',
            type: 'string',
            nullable: true,
        },
        startDate: {
            multiplicity: false,
            description: 'The date the employee was hired (most recently, if they were re-hired)',
            type: 'datetime',
            nullable: true,
        },
        employeeStatus: {
            multiplicity: false,
            description: 'TimeSeries of the status of the employee',
            type: 'stringTimeseries',
            nullable: true,
        },
    },
    spts: {
        fooSpt: 'fullName',
    },
    type: 'object',
};

const equipment = {
    osdkMetadata: $osdkMetadata,
    objectSet: undefined,
    props: undefined,
    linksType: undefined,
    strictProps: undefined,
    apiName: 'equipment',
    implements: [],
    interfaceMap: {},
    inverseInterfaceMap: {},
    inverseSpts: {},
    links: {},
    primaryKeyApiName: 'equipmentId',
    primaryKeyType: 'string',
    properties: {
        equipmentId: {
            multiplicity: false,
            description: 'The id of an equipment',
            type: 'string',
            nullable: false,
        },
        type: {
            multiplicity: false,
            type: 'string',
            nullable: true,
        },
    },
    spts: {},
    type: 'object',
};

const objectTypeWithAllPropertyTypes = {
    osdkMetadata: $osdkMetadata,
    objectSet: undefined,
    props: undefined,
    linksType: undefined,
    strictProps: undefined,
    apiName: 'objectTypeWithAllPropertyTypes',
    description: 'An object type with all property types',
    implements: [],
    interfaceMap: {},
    inverseInterfaceMap: {},
    inverseSpts: {},
    links: {},
    primaryKeyApiName: 'id',
    primaryKeyType: 'integer',
    properties: {
        id: {
            multiplicity: false,
            type: 'integer',
            nullable: false,
        },
        string: {
            multiplicity: false,
            type: 'string',
            nullable: true,
        },
        boolean: {
            multiplicity: false,
            type: 'boolean',
            nullable: true,
        },
        date: {
            multiplicity: false,
            type: 'datetime',
            nullable: true,
        },
        dateTime: {
            multiplicity: false,
            type: 'timestamp',
            nullable: true,
        },
        decimal: {
            multiplicity: false,
            type: 'decimal',
            nullable: true,
        },
        integer: {
            multiplicity: false,
            type: 'integer',
            nullable: true,
        },
        long: {
            multiplicity: false,
            type: 'long',
            nullable: true,
        },
        short: {
            multiplicity: false,
            type: 'short',
            nullable: true,
        },
        float: {
            multiplicity: false,
            type: 'float',
            nullable: true,
        },
        double: {
            multiplicity: false,
            type: 'double',
            nullable: true,
        },
        byte: {
            multiplicity: false,
            type: 'byte',
            nullable: true,
        },
        attachment: {
            multiplicity: false,
            type: 'attachment',
            nullable: true,
        },
        attachment2: {
            multiplicity: false,
            type: 'attachment',
            nullable: true,
        },
        geoPoint: {
            multiplicity: false,
            type: 'geopoint',
            nullable: true,
        },
        geoShape: {
            multiplicity: false,
            type: 'geoshape',
            nullable: true,
        },
        stringArray: {
            multiplicity: true,
            type: 'string',
            nullable: true,
        },
        booleanArray: {
            multiplicity: true,
            type: 'boolean',
            nullable: true,
        },
        dateArray: {
            multiplicity: true,
            type: 'datetime',
            nullable: true,
        },
        dateTimeArray: {
            multiplicity: true,
            type: 'timestamp',
            nullable: true,
        },
        decimalArray: {
            multiplicity: true,
            type: 'decimal',
            nullable: true,
        },
        integerArray: {
            multiplicity: true,
            type: 'integer',
            nullable: true,
        },
        longArray: {
            multiplicity: true,
            type: 'long',
            nullable: true,
        },
        shortArray: {
            multiplicity: true,
            type: 'short',
            nullable: true,
        },
        floatArray: {
            multiplicity: true,
            type: 'float',
            nullable: true,
        },
        doubleArray: {
            multiplicity: true,
            type: 'double',
            nullable: true,
        },
        byteArray: {
            multiplicity: true,
            type: 'byte',
            nullable: true,
        },
        attachmentArray: {
            multiplicity: true,
            type: 'attachment',
            nullable: true,
        },
        geoPointArray: {
            multiplicity: true,
            type: 'geopoint',
            nullable: true,
        },
        geoShapeArray: {
            multiplicity: true,
            type: 'geoshape',
            nullable: true,
        },
    },
    spts: {},
    type: 'object',
};

const ObjectWithTimestampPrimaryKey = {
    osdkMetadata: $osdkMetadata,
    objectSet: undefined,
    props: undefined,
    linksType: undefined,
    strictProps: undefined,
    apiName: 'ObjectWithTimestampPrimaryKey',
    description: 'Object Type With Timestamp Primary Key',
    implements: [],
    interfaceMap: {},
    inverseInterfaceMap: {},
    inverseSpts: {},
    links: {},
    primaryKeyApiName: 'timestamp',
    primaryKeyType: 'timestamp',
    properties: {
        timestamp: {
            multiplicity: false,
            type: 'timestamp',
            nullable: false,
        },
        value: {
            multiplicity: false,
            type: 'string',
            nullable: true,
        },
    },
    spts: {},
    type: 'object',
};

const Office = {
    osdkMetadata: $osdkMetadata,
    objectSet: undefined,
    props: undefined,
    linksType: undefined,
    strictProps: undefined,
    apiName: 'Office',
    description: 'A office in our Company',
    implements: [],
    interfaceMap: {},
    inverseInterfaceMap: {},
    inverseSpts: {},
    links: {},
    primaryKeyApiName: 'officeId',
    primaryKeyType: 'string',
    properties: {
        officeId: {
            multiplicity: false,
            type: 'string',
            nullable: false,
        },
        entrance: {
            multiplicity: false,
            type: 'geopoint',
            nullable: true,
        },
        occupiedArea: {
            multiplicity: false,
            description: 'The occupied area of the Office',
            type: 'geoshape',
            nullable: true,
        },
        name: {
            multiplicity: false,
            description: 'The Name of the Office',
            type: 'string',
            nullable: true,
        },
    },
    spts: {},
    type: 'object',
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
    displayName: 'myFunction',
    type: 'query',
    version: '0.0.9',
    parameters: {
        n: {
            type: 'integer',
            nullable: false,
        },
    },
    output: {
        nullable: false,
        type: 'integer',
    },
};

const incrementPersonAge = {
    apiName: 'incrementPersonAge',
    displayName: 'incrementAge',
    type: 'query',
    version: '0.0.9',
    parameters: {
        person: {
            type: 'struct',
            struct: {
                firstName: {
                    type: 'string',
                    nullable: false,
                },
                lastName: {
                    type: 'string',
                    nullable: false,
                },
                age: {
                    type: 'integer',
                    nullable: true,
                },
            },
            nullable: false,
        },
    },
    output: {
        nullable: false,
        struct: {
            firstName: {
                type: 'string',
                nullable: false,
            },
            lastName: {
                type: 'string',
                nullable: false,
            },
            age: {
                type: 'integer',
                nullable: true,
            },
        },
        type: 'struct',
    },
};

const returnsDate = {
    apiName: 'returnsDate',
    displayName: 'returnsDate',
    type: 'query',
    version: '0.0.9',
    parameters: {},
    output: {
        nullable: false,
        type: 'date',
    },
};

const returnsObject = {
    apiName: 'returnsObject',
    displayName: 'returnsObject',
    type: 'query',
    version: '0.0.9',
    parameters: {},
    output: {
        nullable: false,
        object: 'Employee',
        type: 'object',
    },
};

const returnsTimestamp = {
    apiName: 'returnsTimestamp',
    displayName: 'returnsTimestamp',
    type: 'query',
    version: '0.0.9',
    parameters: {},
    output: {
        nullable: false,
        type: 'timestamp',
    },
};

const threeDimensionalAggregationFunction = {
    apiName: 'threeDimensionalAggregationFunction',
    displayName: 'threeDimensionalAggregation',
    type: 'query',
    version: '0.11.0',
    parameters: {},
    output: {
        nullable: false,
        threeDimensionalAggregation: {
            keyType: 'string',
            valueType: {
                keyType: 'range',
                keySubtype: 'timestamp',
                valueType: 'double',
            },
        },
        type: 'threeDimensionalAggregation',
    },
};

const twoDimensionalAggregationFunction = {
    apiName: 'twoDimensionalAggregationFunction',
    displayName: 'twoDimensionalAggregation',
    type: 'query',
    version: '0.11.0',
    parameters: {},
    output: {
        nullable: false,
        twoDimensionalAggregation: {
            keyType: 'string',
            valueType: 'double',
        },
        type: 'twoDimensionalAggregation',
    },
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

export { actions as $Actions, interfaces as $Interfaces, objects as $Objects, queries as $Queries, $ontologyRid, Employee, FooInterface, ObjectWithTimestampPrimaryKey, Office, actionTakesObjectSet, addOne, createOffice, createOfficeAndEmployee, equipment, incrementPersonAge, moveOffice, objectTypeWithAllPropertyTypes, returnsDate, returnsObject, returnsTimestamp, threeDimensionalAggregationFunction, twoDimensionalAggregationFunction };
