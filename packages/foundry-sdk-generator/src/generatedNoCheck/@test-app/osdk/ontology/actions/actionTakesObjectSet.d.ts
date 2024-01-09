export declare const actionTakesObjectSet: {
    apiName: "actionTakesObjectSet";
    parameters: {
        employees: {
            multiplicity: false;
            type: {
                type: "objectSet";
                objectSet: "Employee";
            };
            nullable: false;
        };
    };
    description: string;
    modifiedEntities: {};
};
