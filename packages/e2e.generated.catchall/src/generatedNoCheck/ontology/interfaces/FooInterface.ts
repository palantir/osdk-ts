import type { InterfaceDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export interface FooInterface
  extends InterfaceDefinition<'FooInterface', FooInterface>,
    VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
  description: 'Its a Foo.';
  displayName: 'Foo interface';
  links: {};
  properties: {
    /**
     *   display name: 'Description',
     *   description: Description of Description
     */
    description: PropertyDef<'string', 'nullable', 'single'>;
    /**
     *   display name: 'Name',
     *   description: Name of Foo
     */
    name: PropertyDef<'string', 'nullable', 'single'>;
  };
}

export const FooInterface: FooInterface = {
  osdkMetadata: $osdkMetadata,
  apiName: 'FooInterface',
  description: 'Its a Foo.',
  displayName: 'Foo interface',
  links: {},
  properties: {
    description: {
      displayName: 'Description',
      multiplicity: false,
      description: 'Description of Description',
      type: 'string',
      nullable: true,
    },
    name: {
      displayName: 'Name',
      multiplicity: false,
      description: 'Name of Foo',
      type: 'string',
      nullable: true,
    },
  },
  type: 'interface',
};
