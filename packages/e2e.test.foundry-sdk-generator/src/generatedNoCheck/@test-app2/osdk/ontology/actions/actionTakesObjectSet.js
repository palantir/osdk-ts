import { $osdkMetadata } from '../../OntologyMetadata.js';
export const actionTakesObjectSet = {
    apiName: 'actionTakesObjectSet',
    description: 'An action which takes an Object Set',
    modifiedEntities: {},
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
    type: 'action',
    osdkMetadata: $osdkMetadata,
};
