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

export namespace WeatherStation {
  export type PropertyKeys = 'stationId' | 'geohash';

  export type Links = {};

  export interface Props {
    readonly geohash: $PropType['geopoint'] | undefined;
    readonly stationId: $PropType['string'];
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<WeatherStation, WeatherStation.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof WeatherStation.Props = keyof WeatherStation.Props,
  > = $Osdk.Instance<WeatherStation, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof WeatherStation.Props = keyof WeatherStation.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface WeatherStation extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'WeatherStation';
  __DefinitionMetadata?: {
    objectSet: WeatherStation.ObjectSet;
    props: WeatherStation.Props;
    linksType: WeatherStation.Links;
    strictProps: WeatherStation.StrictProps;
    apiName: 'WeatherStation';
    description: 'Weather Station';
    displayName: 'Weather Station';
    icon: {
      type: 'blueprint';
      name: 'weather';
      color: 'color';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Weather Stations';
    primaryKeyApiName: 'stationId';
    primaryKeyType: 'string';
    properties: {
      /**
       *   display name: 'Geohash',
       *   description: geopoint
       */
      geohash: $PropertyDef<'geopoint', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      stationId: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ri.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'stationId';
    type: 'object';
  };
}

export const WeatherStation: WeatherStation = {
  type: 'object',
  apiName: 'WeatherStation',
  osdkMetadata: $osdkMetadata,
};
