import type { InterfaceDefinition, PropertyDef } from '@osdk/api';

export interface FooInterface extends InterfaceDefinition<'FooInterface', FooInterface> {
  description: 'Its a Foo.';
  properties: {
    name: PropertyDef<'string', 'nullable', 'single'>;
  };
  links: {};
}

export const FooInterface: FooInterface = {
  type: 'interface',
  apiName: 'FooInterface',
  description: 'Its a Foo.',
  properties: {
    name: {
      multiplicity: false,
      description: 'Name of Foo',
      type: 'string',
      nullable: true,
    },
  },
  links: {},
};
