import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type { InterfaceDefinition as $InterfaceDefinition } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';

export type OsdkObjectLinks$FooInterface = {};

export namespace FooInterface {
  export type PropertyKeys = 'name' | 'description';

  export interface Props {
    readonly description: $PropType['string'] | undefined;
    readonly name: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly description: $PropType['string'] | undefined;
    readonly name: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<FooInterface.Definition, FooInterface.ObjectSet> {}

  export interface Definition extends $InterfaceDefinition<'FooInterface', FooInterface.Definition> {
    osdkMetadata: typeof $osdkMetadata;
    type: 'interface';
    apiName: 'FooInterface';
    __DefinitionMetadata?: {
      objectSet: FooInterface.ObjectSet;
      props: FooInterface.Props;
      linksType: OsdkObjectLinks$FooInterface;
      strictProps: FooInterface.StrictProps;
      apiName: 'FooInterface';
      description: 'Its a Foo.';
      displayName: 'Foo interface';
      links: {};
      properties: {
        /**
         *   display name: 'Description',
         *   description: Description of Description
         */
        description: $PropertyDef<'string', 'nullable', 'single'>;
        /**
         *   display name: 'Name',
         *   description: Name of Foo
         */
        name: $PropertyDef<'string', 'nullable', 'single'>;
      };
      type: 'interface';
    };
  }

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof FooInterface.Props = keyof FooInterface.Props,
  > = $Osdk<FooInterface.Definition, K | OPTIONS>;
}

/** @deprecated use FooInterface.Definition **/
export type FooInterface = FooInterface.Definition;

export const FooInterface: FooInterface.Definition = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
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
