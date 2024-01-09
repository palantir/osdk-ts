"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equipment = void 0;
exports.equipment = {
    apiName: 'equipment',
    primaryKeyType: 'string',
    links: {},
    properties: {
        equipmentId: {
            multiplicity: false,
            description: 'The id of an equipment',
            type: 'string',
            nullable: true,
        },
        type: {
            multiplicity: false,
            type: 'string',
            nullable: true,
        },
    },
};
