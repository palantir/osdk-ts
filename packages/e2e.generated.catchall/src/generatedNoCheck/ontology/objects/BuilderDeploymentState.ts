import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata.js';

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
  objectSet: BuilderDeploymentState.ObjectSet;
  props: BuilderDeploymentState.Props;
  linksType: BuilderDeploymentState.Links;
  strictProps: BuilderDeploymentState.StrictProps;
  description: 'Builder Deployment State';
  links: {};
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
}

export const BuilderDeploymentState: BuilderDeploymentState = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
  apiName: 'BuilderDeploymentState',
  description: 'Builder Deployment State',
  links: {},
  primaryKeyApiName: 'skuId',
  primaryKeyType: 'string',
  properties: {
    skuId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    date: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
    currentTimestamp: {
      multiplicity: false,
      type: 'timestamp',
      nullable: true,
    },
  },
  type: 'object',
};
