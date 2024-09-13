export const incrementPersonAge = {
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
