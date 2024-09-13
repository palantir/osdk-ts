import { $osdkMetadata } from '../../OntologyMetadata.js';
export const createOffice = {
    apiName: 'createOffice',
    description: "Create an office's",
    modifiedEntities: {
        Office: {
            created: true,
            modified: false,
        },
    },
    parameters: {
        officeId: {
            multiplicity: false,
            type: 'string',
            nullable: false,
        },
        address: {
            multiplicity: false,
            type: 'string',
            nullable: true,
            description: "The office's physical address (not necessarily shipping address)",
        },
        capacity: {
            multiplicity: false,
            type: 'integer',
            nullable: true,
            description: 'The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)',
        },
        officeNames: {
            multiplicity: true,
            type: 'string',
            nullable: true,
            description: 'A list of all office names',
        },
    },
    type: 'action',
    osdkMetadata: $osdkMetadata,
};
