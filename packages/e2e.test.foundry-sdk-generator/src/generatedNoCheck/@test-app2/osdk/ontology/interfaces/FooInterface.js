import { $osdkMetadata } from '../../OntologyMetadata.js';
export const FooInterface = {
    osdkMetadata: $osdkMetadata,
    objectSet: undefined,
    props: undefined,
    linksType: undefined,
    strictProps: undefined,
    apiName: 'FooInterface',
    displayName: 'Foo Interface',
    implements: [],
    links: {},
    properties: {
        fooSpt: {
            displayName: 'Foo',
            multiplicity: false,
            description: 'A foo',
            type: 'string',
            nullable: true,
        },
    },
    type: 'interface',
};
