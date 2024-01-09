"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
exports.Employee = {
    apiName: 'Employee',
    description: 'A full-time or part-time \n\n employee of our firm',
    primaryKeyType: 'integer',
    links: {
        peeps: {
            multiplicity: true,
            targetType: 'Employee',
        },
        lead: {
            multiplicity: false,
            targetType: 'Employee',
        },
        officeLink: {
            multiplicity: false,
            targetType: 'Office',
        },
    },
    properties: {
        employeeId: {
            multiplicity: false,
            type: 'integer',
            nullable: true,
        },
        fullName: {
            multiplicity: false,
            type: 'string',
            nullable: true,
        },
        office: {
            multiplicity: false,
            description: 'The unique "ID" of the employee\'s \\"primary\\" assigned office.\n This is some more text.',
            type: 'string',
            nullable: true,
        },
        startDate: {
            multiplicity: false,
            description: 'The date the employee was hired (most recently, if they were re-hired)',
            type: 'datetime',
            nullable: true,
        },
        employeeStatus: {
            multiplicity: false,
            description: 'TimeSeries of the status of the employee',
            type: 'stringTimeseries',
            nullable: true,
        },
    },
};
