import type { InterfaceDefinition, PropertyDef, VersionBound } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export interface FooInterface extends InterfaceDefinition<'FooInterface', FooInterface>, VersionBound<'0.15.0'> {
  osdkMetadata: typeof $osdkMetadata;
  description: 'Its a Foo.';
  links: {};
  properties: {
    description: PropertyDef<'string', 'nullable', 'single'>;
    name: PropertyDef<'string', 'nullable', 'single'>;
  };
}

export const FooInterface: FooInterface = {
  osdkMetadata: $osdkMetadata,
  apiName: 'FooInterface',
  description: 'Its a Foo.',
  links: {},
  properties: {
    name: {
      multiplicity: false,
      description: 'Name of Foo',
      type: 'string',
      nullable: true,
    },
    description: {
      multiplicity: false,
      description: 'Description of Description',
      type: 'string',
      nullable: true,
    },
  },
  type: 'interface',
};
