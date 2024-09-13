import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata';

export namespace equipment {
  export type PropertyKeys = 'equipmentId' | 'type';

  export type Links = {};

  export interface Props {
    readonly equipmentId: $PropType['string'] | undefined;
    readonly type: $PropType['string'] | undefined;
  }
  export interface StrictProps {
    readonly equipmentId: $PropType['string'];
    readonly type: $PropType['string'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<equipment, equipment.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof equipment.Props = keyof equipment.Props,
  > = $Osdk<equipment, K | OPTIONS>;
}

export interface equipment extends $ObjectTypeDefinition<'equipment', equipment> {
  osdkMetadata: typeof $osdkMetadata;
  objectSet: equipment.ObjectSet;
  props: equipment.Props;
  linksType: equipment.Links;
  strictProps: equipment.StrictProps;
  links: {};
  primaryKeyApiName: 'equipmentId';
  primaryKeyType: 'string';
  properties: {
    /**
     *   description: The id of an equipment
     */
    equipmentId: $PropertyDef<'string', 'non-nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    type: $PropertyDef<'string', 'nullable', 'single'>;
  };
}

export const equipment: equipment = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
  apiName: 'equipment',
  links: {},
  primaryKeyApiName: 'equipmentId',
  primaryKeyType: 'string',
  properties: {
    equipmentId: {
      multiplicity: false,
      description: 'The id of an equipment',
      type: 'string',
      nullable: false,
    },
    type: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
  type: 'object',
};
