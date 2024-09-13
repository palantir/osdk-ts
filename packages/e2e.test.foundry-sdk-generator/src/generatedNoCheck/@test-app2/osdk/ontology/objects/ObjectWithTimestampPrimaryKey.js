import { $osdkMetadata } from '../../OntologyMetadata.js';
export const ObjectWithTimestampPrimaryKey = {
    osdkMetadata: $osdkMetadata,
    objectSet: undefined,
    props: undefined,
    linksType: undefined,
    strictProps: undefined,
    apiName: 'ObjectWithTimestampPrimaryKey',
    description: 'Object Type With Timestamp Primary Key',
    implements: [],
    interfaceMap: {},
    inverseInterfaceMap: {},
    inverseSpts: {},
    links: {},
    primaryKeyApiName: 'timestamp',
    primaryKeyType: 'timestamp',
    properties: {
        timestamp: {
            multiplicity: false,
            type: 'timestamp',
            nullable: false,
        },
        value: {
            multiplicity: false,
            type: 'string',
            nullable: true,
        },
    },
    spts: {},
    type: 'object',
};
