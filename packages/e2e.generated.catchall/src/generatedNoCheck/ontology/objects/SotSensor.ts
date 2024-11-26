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

export namespace SotSensor {
  export type PropertyKeys = 'isEnum' | 'timeSeriesProperty' | 'sensorName' | 'seriesId' | 'wellId';

  export type Links = {};

  export interface Props {
    readonly isEnum: $PropType['boolean'] | undefined;
    readonly sensorName: $PropType['string'] | undefined;
    readonly seriesId: $PropType['string'];
    readonly timeSeriesProperty: $PropType['sensorTimeseries'] | undefined;
    readonly wellId: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<SotSensor, SotSensor.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof SotSensor.Props = keyof SotSensor.Props,
  > = $Osdk.Instance<SotSensor, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof SotSensor.Props = keyof SotSensor.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface SotSensor extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'SotSensor';
  __DefinitionMetadata?: {
    objectSet: SotSensor.ObjectSet;
    props: SotSensor.Props;
    linksType: SotSensor.Links;
    strictProps: SotSensor.StrictProps;
    apiName: 'SotSensor';
    description: 'SOT-Sensor';
    displayName: 'SOT-Sensor';
    icon: {
      type: 'blueprint';
      name: 'sotsensor';
      color: 'color';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'SOT-Sensors';
    primaryKeyApiName: 'seriesId';
    primaryKeyType: 'string';
    properties: {
      /**
       *   display name: 'Is Enum'
       */
      isEnum: $PropertyDef<'boolean', 'nullable', 'single'>;
      /**
       *   display name: 'Sensor Name'
       */
      sensorName: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'Series Id'
       */
      seriesId: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       *   display name: 'Time Series Property'
       */
      timeSeriesProperty: $PropertyDef<'sensorTimeseries', 'nullable', 'single'>;
      /**
       *   display name: 'Well Id'
       */
      wellId: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'rid.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'seriesId';
    type: 'object';
  };
}

export const SotSensor: SotSensor = {
  type: 'object',
  apiName: 'SotSensor',
  osdkMetadata: $osdkMetadata,
};
