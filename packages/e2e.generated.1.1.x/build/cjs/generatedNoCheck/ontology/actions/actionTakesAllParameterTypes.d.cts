export declare const actionTakesAllParameterTypes: {
    type: "action";
    apiName: "actionTakesAllParameterTypes";
    parameters: {
        objectSet: {
            multiplicity: false;
            type: {
                type: "objectSet";
                objectSet: "Todo";
            };
            nullable: false;
        };
        object: {
            multiplicity: false;
            type: {
                type: "object";
                object: "Person";
            };
            nullable: true;
            description: string;
        };
        string: {
            multiplicity: false;
            type: "string";
            nullable: false;
        };
        'time-stamp': {
            multiplicity: false;
            type: "timestamp";
            nullable: false;
        };
        dateArray: {
            multiplicity: true;
            type: "datetime";
            nullable: true;
        };
        attachmentArray: {
            multiplicity: true;
            type: "attachment";
            nullable: false;
        };
    };
    description: string;
    modifiedEntities: {
        Todo: {
            created: true;
            modified: true;
        };
        ObjectTypeWithAllPropertyTypes: {
            created: false;
            modified: true;
        };
    };
};
//# sourceMappingURL=actionTakesAllParameterTypes.d.ts.map