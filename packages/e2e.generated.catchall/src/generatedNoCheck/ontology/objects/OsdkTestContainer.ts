import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { OsdkTestObject } from './OsdkTestObject.js';
import type {
  PropertyKeys as $PropertyKeys,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectMetadata as $ObjectMetadata,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/api';

export namespace OsdkTestContainer {
  export type PropertyKeys = 'id' | 'name' | 'time';

  export interface Links {
    readonly osdkTestObjectLink: OsdkTestObject.ObjectSet;
  }

  export interface Props {
    readonly id: $PropType['string'] | undefined;
    readonly name: $PropType['string'] | undefined;
    readonly time: $PropType['timestamp'] | undefined;
  }
  export interface StrictProps {
    readonly id: $PropType['string'];
    readonly name: $PropType['string'] | undefined;
    readonly time: $PropType['timestamp'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<OsdkTestContainer, OsdkTestContainer.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof OsdkTestContainer.Props = keyof OsdkTestContainer.Props,
  > = $Osdk.Instance<OsdkTestContainer, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof OsdkTestContainer.Props = keyof OsdkTestContainer.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface OsdkTestContainer extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'OsdkTestContainer';
  __DefinitionMetadata?: {
    objectSet: OsdkTestContainer.ObjectSet;
    props: OsdkTestContainer.Props;
    linksType: OsdkTestContainer.Links;
    strictProps: OsdkTestContainer.StrictProps;
    apiName: 'OsdkTestContainer';
    description: '';
    displayName: 'Osdk Test Container';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      osdkTestObjectLink: $ObjectMetadata.Link<OsdkTestObject, true>;
    };
    pluralDisplayName: 'Osdk Test Containers';
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      id: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      time: $PropertyDef<'timestamp', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.f755237b-d1da-4c42-933f-23641662d818';
    status: 'ACTIVE';
    titleProperty: 'id';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const OsdkTestContainer: OsdkTestContainer = {
  type: 'object',
  apiName: 'OsdkTestContainer',
  osdkMetadata: $osdkMetadata,
};
