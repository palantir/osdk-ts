export declare const incrementPersonAge: {
    apiName: "incrementPersonAge";
    displayName: string;
    version: string;
    parameters: {
        person: {
            type: "struct";
            struct: {
                firstName: {
                    type: "string";
                    nullable: false;
                };
                lastName: {
                    type: "string";
                    nullable: false;
                };
                age: {
                    type: "integer";
                    nullable: true;
                };
            };
            nullable: false;
        };
    };
    output: {
        type: "struct";
        struct: {
            firstName: {
                type: "string";
                nullable: false;
            };
            lastName: {
                type: "string";
                nullable: false;
            };
            age: {
                type: "integer";
                nullable: true;
            };
        };
        nullable: false;
    };
};
