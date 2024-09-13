import { $osdkMetadata } from '../../OntologyMetadata.js';
export const Office = {
    osdkMetadata: $osdkMetadata,
    objectSet: undefined,
    props: undefined,
    linksType: undefined,
    strictProps: undefined,
    apiName: 'Office',
    description: 'A office in our Company',
    implements: [],
    interfaceMap: {},
    inverseInterfaceMap: {},
    inverseSpts: {},
    links: {},
    primaryKeyApiName: 'officeId',
    primaryKeyType: 'string',
    properties: {
        officeId: {
            multiplicity: false,
            type: 'string',
            nullable: false,
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
    spts: {},
    type: 'object',
};
