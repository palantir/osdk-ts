import type { InterfaceDefinition, PropertyDef } from '@osdk/api';

export interface FooInterface extends InterfaceDefinition<'FooInterface', FooInterface> {
  description: 'Its a Foo.';
  links: {};
  properties: {
    description: PropertyDef<'string', 'nullable', 'single'>;
    name: PropertyDef<'string', 'nullable', 'single'>;
  };
}

export const FooInterface: FooInterface = {
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
