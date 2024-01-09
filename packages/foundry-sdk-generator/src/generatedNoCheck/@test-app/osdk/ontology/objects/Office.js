"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Office = void 0;
exports.Office = {
    apiName: 'Office',
    description: 'A office in our Company',
    primaryKeyType: 'string',
    links: {},
    properties: {
        officeId: {
            multiplicity: false,
            type: 'string',
            nullable: true,
        },
        entrance: {
            multiplicity: false,
            type: 'geopoint',
            nullable: true,
        },
        occupiedArea: {
            multiplicity: false,
            description: 'The occupied area of the Office',
            type: 'geoshape',
            nullable: true,
        },
        name: {
            multiplicity: false,
            description: 'The Name of the Office',
            type: 'string',
            nullable: true,
        },
    },
};
