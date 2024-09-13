import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace DherlihyComplexObject {
  export type PropertyKeys = 'id' | 'secret' | 'seriesId';

  export type Links = {};

  export interface Props {
    readonly id: $PropType['string'] | undefined;
    readonly secret: $PropType['string'] | undefined;
    readonly seriesId: $PropType['numericTimeseries'] | undefined;
  }
  export interface StrictProps {
    readonly id: $PropType['string'];
    readonly secret: $PropType['string'] | undefined;
    readonly seriesId: $PropType['numericTimeseries'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<DherlihyComplexObject, DherlihyComplexObject.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof DherlihyComplexObject.Props = keyof DherlihyComplexObject.Props,
  > = $Osdk<DherlihyComplexObject, K | OPTIONS>;
}

export interface DherlihyComplexObject extends $ObjectTypeDefinition<'DherlihyComplexObject', DherlihyComplexObject> {
  osdkMetadata: typeof $osdkMetadata;
  objectSet: DherlihyComplexObject.ObjectSet;
  props: DherlihyComplexObject.Props;
  linksType: DherlihyComplexObject.Links;
  strictProps: DherlihyComplexObject.StrictProps;
  description: 'Dherlihy Complex Object';
  links: {};
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
    secret: $PropertyDef<'string', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    seriesId: $PropertyDef<'numericTimeseries', 'nullable', 'single'>;
  };
}

export const DherlihyComplexObject: DherlihyComplexObject = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
  apiName: 'DherlihyComplexObject',
  description: 'Dherlihy Complex Object',
  links: {},
  primaryKeyApiName: 'id',
  primaryKeyType: 'string',
  properties: {
    id: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    secret: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    seriesId: {
      multiplicity: false,
      type: 'numericTimeseries',
      nullable: true,
    },
  },
  type: 'object',
};
