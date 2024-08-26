import type { InterfaceDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export interface SomeInterface
  extends InterfaceDefinition<'com.example.dep.SomeInterface', SomeInterface>,
    VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
  displayName: 'Sum Interface';
  implements: [];
  links: {};
  properties: {
    /**
     *   display name: 'Some Property'
     */
    spt: PropertyDef<'string', 'nullable', 'single'>;
  };
}

export const SomeInterface: SomeInterface = {
  osdkMetadata: $osdkMetadata,
  apiName: 'com.example.dep.SomeInterface',
  displayName: 'Sum Interface',
  implements: [],
  links: {},
  properties: {
    spt: {
      displayName: 'Some Property',
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
  type: 'interface',
};
