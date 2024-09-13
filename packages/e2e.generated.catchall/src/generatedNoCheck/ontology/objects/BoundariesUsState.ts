import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace BoundariesUsState {
  export type PropertyKeys = 'usState' | 'latitude' | 'longitude' | 'geometry10M';

  export type Links = {};

  export interface Props {
    readonly geometry10M: $PropType['geoshape'] | undefined;
    readonly latitude: $PropType['double'] | undefined;
    readonly longitude: $PropType['double'] | undefined;
    readonly usState: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly geometry10M: $PropType['geoshape'] | undefined;
    readonly latitude: $PropType['double'] | undefined;
    readonly longitude: $PropType['double'] | undefined;
    readonly usState: $PropType['string'];
  }

  export interface ObjectSet extends $ObjectSet<BoundariesUsState, BoundariesUsState.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof BoundariesUsState.Props = keyof BoundariesUsState.Props,
  > = $Osdk<BoundariesUsState, K | OPTIONS>;
}

export interface BoundariesUsState extends $ObjectTypeDefinition<'BoundariesUsState', BoundariesUsState> {
  osdkMetadata: typeof $osdkMetadata;
  objectSet: BoundariesUsState.ObjectSet;
  props: BoundariesUsState.Props;
  linksType: BoundariesUsState.Links;
  strictProps: BoundariesUsState.StrictProps;
  description: 'Boundaries US State';
  links: {};
  primaryKeyApiName: 'usState';
  primaryKeyType: 'string';
  properties: {
    /**
     *   display name: 'Geometry10M',
     *   description: geoshape
     */
    geometry10M: $PropertyDef<'geoshape', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    latitude: $PropertyDef<'double', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    longitude: $PropertyDef<'double', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    usState: $PropertyDef<'string', 'non-nullable', 'single'>;
  };
}

export const BoundariesUsState: BoundariesUsState = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
  apiName: 'BoundariesUsState',
  description: 'Boundaries US State',
  links: {},
  primaryKeyApiName: 'usState',
  primaryKeyType: 'string',
  properties: {
    usState: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    latitude: {
      multiplicity: false,
      type: 'double',
      nullable: true,
    },
    longitude: {
      multiplicity: false,
      type: 'double',
      nullable: true,
    },
    geometry10M: {
      displayName: 'Geometry10M',
      multiplicity: false,
      description: 'geoshape',
      type: 'geoshape',
      nullable: true,
    },
  },
  type: 'object',
};
