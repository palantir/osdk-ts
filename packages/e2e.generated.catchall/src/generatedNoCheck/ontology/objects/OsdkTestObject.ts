import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
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

export namespace OsdkTestObject {
  export type PropertyKeys = 'primaryKey_' | 'stringProperty';

  export type Links = {};

  export interface Props {
    readonly primaryKey_: $PropType['string'] | undefined;
    readonly stringProperty: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly primaryKey_: $PropType['string'];
    readonly stringProperty: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<OsdkTestObject, OsdkTestObject.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof OsdkTestObject.Props = keyof OsdkTestObject.Props,
  > = $Osdk.Instance<OsdkTestObject, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof OsdkTestObject.Props = keyof OsdkTestObject.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface OsdkTestObject extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'OsdkTestObject';
  __DefinitionMetadata?: {
    objectSet: OsdkTestObject.ObjectSet;
    props: OsdkTestObject.Props;
    linksType: OsdkTestObject.Links;
    strictProps: OsdkTestObject.StrictProps;
    apiName: 'OsdkTestObject';
    description: '';
    displayName: 'Osdk Test Object';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Osdk Test Objects';
    primaryKeyApiName: 'primaryKey_';
    primaryKeyType: 'string';
    properties: {
      /**
       *   display name: 'Primary Key'
       */
      primaryKey_: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       *   display name: 'String Property'
       */
      stringProperty: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.0ff2c340-6d2f-4ff4-9fca-f1a085d4b349';
    status: 'EXPERIMENTAL';
    titleProperty: 'primaryKey_';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const OsdkTestObject: OsdkTestObject = {
  type: 'object',
  apiName: 'OsdkTestObject',
  osdkMetadata: $osdkMetadata,
};
