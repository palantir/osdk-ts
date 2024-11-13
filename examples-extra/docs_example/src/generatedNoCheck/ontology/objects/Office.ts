import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
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

export namespace Office {
  export type PropertyKeys =
    | 'officeId'
    | 'entrance'
    | 'occupiedArea'
    | 'name'
    | 'meetingRooms'
    | 'meetingRoomCapacities';

  export type Links = {};

  export interface Props {
    readonly entrance: $PropType['geopoint'] | undefined;
    readonly meetingRoomCapacities: $PropType['integer'][] | undefined;
    readonly meetingRooms: $PropType['string'][] | undefined;
    readonly name: $PropType['string'] | undefined;
    readonly occupiedArea: $PropType['geoshape'] | undefined;
    readonly officeId: $PropType['string'];
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Office, Office.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Office.Props = keyof Office.Props,
  > = $Osdk.Instance<Office, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Office.Props = keyof Office.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Office extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Office';
  __DefinitionMetadata?: {
    objectSet: Office.ObjectSet;
    props: Office.Props;
    linksType: Office.Links;
    strictProps: Office.StrictProps;
    apiName: 'Office';
    description: 'A office in our Company';
    displayName: 'Office';
    icon: {
      type: 'blueprint';
      name: 'office';
      color: 'blue';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Offices';
    primaryKeyApiName: 'officeId';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      entrance: $PropertyDef<'geopoint', 'nullable', 'single'>;
      /**
       *   description: The individual capacities of meetings rooms in the office
       */
      meetingRoomCapacities: $PropertyDef<'integer', 'nullable', 'array'>;
      /**
       *   description: The Names of meetings rooms in the office
       */
      meetingRooms: $PropertyDef<'string', 'nullable', 'array'>;
      /**
       *   description: The Name of the Office
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   description: The occupied area of the Office
       */
      occupiedArea: $PropertyDef<'geoshape', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      officeId: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.404ac022-89eb-4591-8b7e-1a912b9efb45';
    status: 'ACTIVE';
    titleProperty: 'officeId';
    type: 'object';
  };
}

export const Office: Office = {
  type: 'object',
  apiName: 'Office',
  osdkMetadata: $osdkMetadata,
};
