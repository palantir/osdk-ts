export declare const createOfficeAndEmployee: {
    apiName: "createOfficeAndEmployee";
    parameters: {
        officeId: {
            multiplicity: false;
            type: "string";
            nullable: false;
        };
        address: {
            multiplicity: false;
            type: "string";
            nullable: true;
            description: string;
        };
        capacity: {
            multiplicity: false;
            type: "integer";
            nullable: true;
            description: string;
        };
        officeNames: {
            multiplicity: true;
            type: "string";
            nullable: true;
            description: string;
        };
        employeeId: {
            multiplicity: false;
            type: "integer";
            nullable: false;
            description: string;
        };
    };
    description: string;
    modifiedEntities: {
        Office: {
            created: true;
            modified: false;
        };
        Employee: {
            created: true;
            modified: false;
        };
    };
};
