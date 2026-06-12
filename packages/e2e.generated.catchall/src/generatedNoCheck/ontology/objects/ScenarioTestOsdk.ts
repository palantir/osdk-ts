import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type {
  PropertyKeys as $PropertyKeys,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectMetadata as $ObjectMetadata,
} from '@osdk/client';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client';

export namespace ScenarioTestOsdk {
  export type PropertyKeys = 'primaryKey_' | 'scenarioRidCreatedOn' | 'string';

  export type Links = {};

  export type LinkTokens = {};

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Primary Key'
     */
    readonly primaryKey_: $PropType['string'];
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'ScenarioRidCreatedOn'
     */
    readonly scenarioRidCreatedOn: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'String'
     */
    readonly string: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<ScenarioTestOsdk, ScenarioTestOsdk.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ScenarioTestOsdk.Props = keyof ScenarioTestOsdk.Props,
  > = $Osdk.Instance<ScenarioTestOsdk, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ScenarioTestOsdk.Props = keyof ScenarioTestOsdk.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface ScenarioTestOsdk extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'ScenarioTestOsdk';
  primaryKeyApiName: 'primaryKey_';
  primaryKeyType: 'string';
  links: ScenarioTestOsdk.LinkTokens;
  __DefinitionMetadata?: {
    objectSet: ScenarioTestOsdk.ObjectSet;
    props: ScenarioTestOsdk.Props;
    linksType: ScenarioTestOsdk.Links;
    strictProps: ScenarioTestOsdk.StrictProps;
    apiName: 'ScenarioTestOsdk';
    description: '';
    displayName: 'Scenario Test Osdk';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: [];
    interfaceLinkMap: {};
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Scenario Test Osdks';
    primaryKeyApiName: 'primaryKey_';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Primary Key'
       */
      primaryKey_: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'ScenarioRidCreatedOn'
       */
      scenarioRidCreatedOn: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'String'
       */
      string: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.ec8dc938-1a0b-45cd-96fd-68752f1ab199';
    status: 'EXPERIMENTAL';
    titleProperty: 'primaryKey_';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const ScenarioTestOsdk = {
  type: 'object',
  apiName: 'ScenarioTestOsdk',
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: 'primaryKey_',
  primaryKeyType: 'string',
  links: {},
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.ec8dc938-1a0b-45cd-96fd-68752f1ab199',
  },
} satisfies ScenarioTestOsdk & { internalDoNotUseMetadata: { rid: string } } as ScenarioTestOsdk;
