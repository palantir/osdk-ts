import type { ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export interface UsesForeignSpt
  extends ObjectTypeDefinition<'UsesForeignSpt', UsesForeignSpt>,
    VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
  implements: [];
  interfaceMap: {};
  inverseInterfaceMap: {};
  inverseSpts: {
    body: 'com.example.dep.spt';
  };
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
  spts: {
    'com.example.dep.spt': 'body';
  };
}

export const UsesForeignSpt: UsesForeignSpt = {
  osdkMetadata: $osdkMetadata,
  apiName: 'UsesForeignSpt',
  implements: [],
  interfaceMap: {},
  inverseInterfaceMap: {},
  inverseSpts: {
    body: 'com.example.dep.spt',
  },
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
  spts: {
    'com.example.dep.spt': 'body',
  },
  type: 'object',
};
