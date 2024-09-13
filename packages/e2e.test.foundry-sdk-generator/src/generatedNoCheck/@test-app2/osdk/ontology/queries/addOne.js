export const addOne = {
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
