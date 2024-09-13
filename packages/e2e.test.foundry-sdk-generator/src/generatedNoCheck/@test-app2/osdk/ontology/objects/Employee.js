import { $osdkMetadata } from '../../OntologyMetadata.js';
export const Employee = {
    osdkMetadata: $osdkMetadata,
    objectSet: undefined,
    props: undefined,
    linksType: undefined,
    strictProps: undefined,
    apiName: 'Employee',
    description: 'A full-time or part-time \n\n employee of our firm',
    implements: ['FooInterface'],
    interfaceMap: {
        FooInterface: {
            fooSpt: 'fullName',
        },
    },
    inverseInterfaceMap: {
        FooInterface: {
            fullName: 'fooSpt',
        },
    },
    inverseSpts: {
        fullName: 'fooSpt',
    },
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
    primaryKeyApiName: 'employeeId',
    primaryKeyType: 'integer',
    properties: {
        employeeId: {
            multiplicity: false,
            type: 'integer',
            nullable: false,
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
    spts: {
        fooSpt: 'fullName',
    },
    type: 'object',
};
