import { $osdkMetadata } from '../../OntologyMetadata.js';
export const moveOffice = {
    apiName: 'moveOffice',
    description: "Update an office's physical location",
    modifiedEntities: {
        Office: {
            created: false,
            modified: true,
        },
    },
    parameters: {
        officeId: {
            multiplicity: false,
            type: 'string',
            nullable: false,
        },
        newAddress: {
            multiplicity: false,
            type: 'string',
            nullable: true,
            description: "The office's new physical address (not necessarily shipping address)",
        },
        newCapacity: {
            multiplicity: false,
            type: 'integer',
            nullable: true,
            description: 'The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)',
        },
        officeNames: {
            multiplicity: true,
            type: 'integer',
            nullable: true,
            description: 'A list of all office names',
        },
    },
    type: 'action',
    osdkMetadata: $osdkMetadata,
};
