import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/api';

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

  export interface ObjectSet extends $ObjectSet<FooInterface, FooInterface.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof FooInterface.Props = keyof FooInterface.Props,
  > = $Osdk<FooInterface, K | OPTIONS>;
}

export interface FooInterface extends $InterfaceDefinition<'FooInterface'> {
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
    rid: 'ri.ontology.main.interface-type.1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b';
    type: 'interface';
  };
}

export const FooInterface: FooInterface = {
  type: 'interface',
  apiName: 'FooInterface',
  osdkMetadata: $osdkMetadata,
};
