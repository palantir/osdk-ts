import type { ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export interface Thing extends ObjectTypeDefinition<'Thing', Thing>, VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
  implements: ['com.example.dep.SomeInterface'];
  interfaceMap: {
    'com.example.dep.SomeInterface': {
      'com.example.dep.spt': 'body';
    };
  };
  inverseInterfaceMap: {
    'com.example.dep.SomeInterface': {
      body: 'com.example.dep.spt';
    };
  };
  inverseSpts: {};
  links: {};
  primaryKeyApiName: 'id';
  primaryKeyType: 'integer';
  properties: {
    /**
     * (no ontology metadata)
     */
    body: PropertyDef<'string', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    id: PropertyDef<'integer', 'non-nullable', 'single'>;
  };
  spts: {};
}

export const Thing: Thing = {
  osdkMetadata: $osdkMetadata,
  apiName: 'Thing',
  implements: ['com.example.dep.SomeInterface'],
  interfaceMap: {
    'com.example.dep.SomeInterface': {
      'com.example.dep.spt': 'body',
    },
  },
  inverseInterfaceMap: {
    'com.example.dep.SomeInterface': {
      body: 'com.example.dep.spt',
    },
  },
  inverseSpts: {},
  links: {},
  primaryKeyApiName: 'id',
  primaryKeyType: 'integer',
  properties: {
    id: {
      multiplicity: false,
      type: 'integer',
      nullable: false,
    },
    body: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
  spts: {},
  type: 'object',
};
