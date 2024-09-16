import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client.api';

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

  export interface ObjectSet extends $ObjectSet<equipment.Definition, equipment.ObjectSet> {}

  export interface Definition extends $ObjectTypeDefinition<'equipment', equipment.Definition> {
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

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof equipment.Props = keyof equipment.Props,
  > = $Osdk<equipment.Definition, K | OPTIONS>;
}

export type equipment = equipment.Definition;

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
