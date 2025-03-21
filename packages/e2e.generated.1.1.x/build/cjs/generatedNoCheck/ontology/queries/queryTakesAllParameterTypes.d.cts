export declare const queryTakesAllParameterTypes: {
    type: "query";
    apiName: "queryTakesAllParameterTypes";
    description: string;
    displayName: string;
    version: string;
    parameters: {
        double: {
            description: string;
            type: "double";
            nullable: false;
        };
        float: {
            type: "float";
            nullable: false;
        };
        integer: {
            type: "integer";
            nullable: false;
        };
        long: {
            type: "long";
            nullable: false;
        };
        attachment: {
            type: "attachment";
            nullable: false;
        };
        boolean: {
            type: "boolean";
            nullable: false;
        };
        date: {
            type: "date";
            nullable: false;
        };
        string: {
            type: "string";
            nullable: false;
        };
        timestamp: {
            type: "timestamp";
            nullable: false;
        };
        object: {
            type: "object";
            object: "Todo";
            nullable: false;
        };
        objectSet: {
            type: "objectSet";
            objectSet: "Todo";
            nullable: false;
        };
        array: {
            description: string;
            type: "string";
            nullable: false;
            multiplicity: true;
        };
        set: {
            description: string;
            type: "set";
            set: {
                type: "string";
                nullable: false;
            };
            nullable: false;
        };
        unionNonNullable: {
            description: string;
            type: "union";
            union: ({
                type: "string";
                nullable: false;
            } | {
                type: "integer";
                nullable: false;
            })[];
            nullable: false;
        };
        unionNullable: {
            description: string;
            type: "union";
            union: ({
                type: "string";
                nullable: false;
            } | {
                type: "integer";
                nullable: false;
            })[];
            nullable: true;
        };
        struct: {
            description: string;
            type: "struct";
            struct: {
                name: {
                    type: "string";
                    nullable: false;
                };
                id: {
                    type: "integer";
                    nullable: false;
                };
            };
            nullable: false;
        };
        twoDimensionalAggregation: {
            type: "twoDimensionalAggregation";
            twoDimensionalAggregation: {
                keyType: "string";
                valueType: "double";
            };
            nullable: false;
        };
        threeDimensionalAggregation: {
            type: "threeDimensionalAggregation";
            threeDimensionalAggregation: {
                keyType: "range";
                keySubtype: "date";
                valueType: {
                    keyType: "range";
                    keySubtype: "timestamp";
                    valueType: "date";
                };
            };
            nullable: false;
        };
    };
    output: {
        type: "string";
        nullable: false;
    };
};
//# sourceMappingURL=queryTakesAllParameterTypes.d.ts.map