import { $osdkMetadata } from '../../OntologyMetadata.js';
export const equipment = {
    osdkMetadata: $osdkMetadata,
    objectSet: undefined,
    props: undefined,
    linksType: undefined,
    strictProps: undefined,
    apiName: 'equipment',
    implements: [],
    interfaceMap: {},
    inverseInterfaceMap: {},
    inverseSpts: {},
    links: {},
    primaryKeyApiName: 'equipmentId',
    primaryKeyType: 'string',
    properties: {
        equipmentId: {
            multiplicity: false,
            description: 'The id of an equipment',
            type: 'string',
            nullable: false,
        },
        type: {
            multiplicity: false,
            type: 'string',
            nullable: true,
        },
    },
    spts: {},
    type: 'object',
};
