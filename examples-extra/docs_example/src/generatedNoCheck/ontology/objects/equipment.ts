import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import type {
  PropertyKeys as $PropertyKeys,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/api';

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

export interface equipment extends $ObjectTypeDefinition<'equipment'> {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'equipment';
  __DefinitionMetadata?: {
    objectSet: equipment.ObjectSet;
    props: equipment.Props;
    linksType: equipment.Links;
    strictProps: equipment.StrictProps;
    apiName: 'equipment';
    displayName: 'Equipment';
    icon: {
      type: 'blueprint';
      name: 'equipment';
      color: 'blue';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Equipment';
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
    rid: 'ri.ontology.main.object-type.808ac022-89eb-4591-8b7e-1a912b9efb45';
    status: 'ACTIVE';
    titleProperty: 'equipmentId';
    type: 'object';
  };
}

export const equipment: equipment = {
  type: 'object',
  apiName: 'equipment',
  osdkMetadata: $osdkMetadata,
};
