import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/api';

export type OsdkObjectLinks$SomeInterface = {};

export namespace SomeInterface {
  export type PropertyKeys = 'spt';

  export interface Props {
    readonly spt: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly spt: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<SomeInterface, SomeInterface.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof SomeInterface.Props = keyof SomeInterface.Props,
  > = $Osdk<SomeInterface, K | OPTIONS>;
}

export interface SomeInterface extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'com.example.dep.SomeInterface';
  __DefinitionMetadata?: {
    objectSet: SomeInterface.ObjectSet;
    props: SomeInterface.Props;
    linksType: OsdkObjectLinks$SomeInterface;
    strictProps: SomeInterface.StrictProps;
    apiName: 'com.example.dep.SomeInterface';
    displayName: 'Sum Interface';
    implements: [];
    links: {};
    properties: {
      /**
       *   display name: 'Some Property'
       */
      spt: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'idk2';
    type: 'interface';
  };
}

export const SomeInterface: SomeInterface = {
  type: 'interface',
  apiName: 'com.example.dep.SomeInterface',
  osdkMetadata: $osdkMetadata,
};
