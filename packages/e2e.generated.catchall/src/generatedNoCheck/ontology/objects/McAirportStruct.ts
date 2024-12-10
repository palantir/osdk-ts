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

export namespace McAirportStruct {
  export type PropertyKeys = 'airportName' | 'city' | 'airportStruct' | 'state' | 'originDate';

  export type Links = {};

  export interface Props {
    readonly airportName: $PropType['string'];
    readonly airportStruct:
      | {
          code: $PropType['string'] | undefined;
          geoHash: $PropType['string'] | undefined;
          timestamp: $PropType['string'] | undefined;
        }
      | undefined;
    readonly city: $PropType['string'] | undefined;
    readonly originDate: $PropType['timestamp'] | undefined;
    readonly state: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<McAirportStruct, McAirportStruct.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof McAirportStruct.Props = keyof McAirportStruct.Props,
  > = $Osdk.Instance<McAirportStruct, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof McAirportStruct.Props = keyof McAirportStruct.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface McAirportStruct extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'McAirportStruct';
  __DefinitionMetadata?: {
    objectSet: McAirportStruct.ObjectSet;
    props: McAirportStruct.Props;
    linksType: McAirportStruct.Links;
    strictProps: McAirportStruct.StrictProps;
    apiName: 'McAirportStruct';
    description: 'McAirportStruct';
    displayName: 'McAirportStruct';
    icon: {
      type: 'blueprint';
      name: 'mcAirportStruct';
      color: 'color';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'McAirportStructs';
    primaryKeyApiName: 'airportName';
    primaryKeyType: 'string';
    properties: {
      /**
       *   display name: 'Airport Name'
       */
      airportName: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       *   display name: 'Airport Struct'
       */
      airportStruct: $PropertyDef<{ code: 'string'; geoHash: 'string'; timestamp: 'string' }, 'nullable', 'single'>;
      /**
       *   display name: 'City'
       */
      city: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'Origin Date'
       */
      originDate: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       *   display name: 'State'
       */
      state: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'rid.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'airportName';
    type: 'object';
  };
}

export const McAirportStruct: McAirportStruct = {
  type: 'object',
  apiName: 'McAirportStruct',
  osdkMetadata: $osdkMetadata,
};
