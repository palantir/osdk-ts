import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
  MinObjectDef as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client.api';

export namespace BuilderDeploymentState {
  export type PropertyKeys = 'skuId' | 'date' | 'currentTimestamp';

  export type Links = {};

  export interface Props {
    readonly currentTimestamp: $PropType['timestamp'] | undefined;
    readonly date: $PropType['datetime'] | undefined;
    readonly skuId: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly currentTimestamp: $PropType['timestamp'] | undefined;
    readonly date: $PropType['datetime'] | undefined;
    readonly skuId: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<BuilderDeploymentState, BuilderDeploymentState.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof BuilderDeploymentState.Props = keyof BuilderDeploymentState.Props,
  > = $Osdk<BuilderDeploymentState, K | OPTIONS>;
}

export interface BuilderDeploymentState
  extends $ObjectTypeDefinition<'BuilderDeploymentState', BuilderDeploymentState> {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'BuilderDeploymentState';
  __DefinitionMetadata?: {
    objectSet: BuilderDeploymentState.ObjectSet;
    props: BuilderDeploymentState.Props;
    linksType: BuilderDeploymentState.Links;
    strictProps: BuilderDeploymentState.StrictProps;
    apiName: 'BuilderDeploymentState';
    description: 'Builder Deployment State';
    displayName: 'BuilderDeploymentState';
    icon: {
      type: 'blueprint';
      name: 'builder';
      color: 'color';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Builder Deployment States';
    primaryKeyApiName: 'skuId';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      currentTimestamp: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      date: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      skuId: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'rid.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'skuId';
    type: 'object';
  };
}

export const BuilderDeploymentState: BuilderDeploymentState = {
  type: 'object',
  apiName: 'BuilderDeploymentState',
  osdkMetadata: $osdkMetadata,
};
