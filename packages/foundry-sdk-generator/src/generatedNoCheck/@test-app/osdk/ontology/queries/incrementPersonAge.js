"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementPersonAge = void 0;
exports.incrementPersonAge = {
    apiName: 'incrementPersonAge',
    displayName: 'incrementAge',
    version: '0.0.9',
    parameters: {
        person: {
            type: 'struct',
            struct: {
                firstName: { type: 'string', nullable: false },
                lastName: { type: 'string', nullable: false },
                age: { type: 'integer', nullable: true },
            },
            nullable: false,
        },
    },
    output: {
        type: 'struct',
        struct: {
            firstName: { type: 'string', nullable: false },
            lastName: { type: 'string', nullable: false },
            age: { type: 'integer', nullable: true },
        },
        nullable: false,
    },
};
