"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectWithTimestampPrimaryKey = void 0;
exports.ObjectWithTimestampPrimaryKey = {
    apiName: 'ObjectWithTimestampPrimaryKey',
    description: 'Object Type With Timestamp Primary Key',
    primaryKeyType: 'timestamp',
    links: {},
    properties: {
        timestamp: {
            multiplicity: false,
            type: 'timestamp',
            nullable: true,
        },
        value: {
            multiplicity: false,
            type: 'string',
            nullable: true,
        },
    },
};
