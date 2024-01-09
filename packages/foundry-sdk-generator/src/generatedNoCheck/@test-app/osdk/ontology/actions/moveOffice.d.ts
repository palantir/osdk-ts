export declare const moveOffice: {
    apiName: "moveOffice";
    parameters: {
        officeId: {
            multiplicity: false;
            type: "string";
            nullable: false;
        };
        newAddress: {
            multiplicity: false;
            type: "string";
            nullable: true;
            description: string;
        };
        newCapacity: {
            multiplicity: false;
            type: "integer";
            nullable: true;
            description: string;
        };
        officeNames: {
            multiplicity: true;
            type: "integer";
            nullable: true;
            description: string;
        };
    };
    description: string;
    modifiedEntities: {
        Office: {
            created: false;
            modified: true;
        };
    };
};
