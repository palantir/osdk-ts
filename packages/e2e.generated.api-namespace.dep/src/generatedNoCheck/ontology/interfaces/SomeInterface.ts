import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type { InterfaceDefinition as $InterfaceDefinition } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';

export type OsdkObjectLinks$SomeInterface = {};

export namespace SomeInterface {
  export type PropertyKeys = 'spt';

  export interface Props {
    readonly spt: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly spt: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<SomeInterface.Definition, SomeInterface.ObjectSet> {}

  export interface Definition extends $InterfaceDefinition<'com.example.dep.SomeInterface', SomeInterface.Definition> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: SomeInterface.ObjectSet;
    props: SomeInterface.Props;
    linksType: OsdkObjectLinks$SomeInterface;
    strictProps: SomeInterface.StrictProps;
    displayName: 'Sum Interface';
    implements: [];
    links: {};
    properties: {
      /**
       *   display name: 'Some Property'
       */
      spt: $PropertyDef<'string', 'nullable', 'single'>;
    };
  }

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof SomeInterface.Props = keyof SomeInterface.Props,
  > = $Osdk<SomeInterface.Definition, K | OPTIONS>;
}

/** @deprecated use SomeInterface.Definition **/
export type SomeInterface = SomeInterface.Definition;

export const SomeInterface: SomeInterface.Definition = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
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
