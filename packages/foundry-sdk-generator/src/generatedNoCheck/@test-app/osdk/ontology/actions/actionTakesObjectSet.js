"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionTakesObjectSet = void 0;
exports.actionTakesObjectSet = {
    apiName: 'actionTakesObjectSet',
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
    description: 'An action which takes an Object Set',
    modifiedEntities: {},
};
