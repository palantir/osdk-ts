import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/api';

export type OsdkObjectLinks$InterfaceNoProps = {};

export namespace InterfaceNoProps {
  export type PropertyKeys = never;

  export interface Props {}
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<InterfaceNoProps, InterfaceNoProps.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof InterfaceNoProps.Props = keyof InterfaceNoProps.Props,
  > = $Osdk.Instance<InterfaceNoProps, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof InterfaceNoProps.Props = keyof InterfaceNoProps.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface InterfaceNoProps extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'InterfaceNoProps';
  __DefinitionMetadata?: {
    objectSet: InterfaceNoProps.ObjectSet;
    props: InterfaceNoProps.Props;
    linksType: OsdkObjectLinks$InterfaceNoProps;
    strictProps: InterfaceNoProps.StrictProps;
    apiName: 'InterfaceNoProps';
    description: 'Its a Foo.';
    displayName: 'FInterfaceNoProps';
    links: {};
    properties: {};
    rid: 'ri.ontology.main.interface-type.1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b';
    type: 'interface';
  };
}

export const InterfaceNoProps: InterfaceNoProps = {
  type: 'interface',
  apiName: 'InterfaceNoProps',
  osdkMetadata: $osdkMetadata,
};
