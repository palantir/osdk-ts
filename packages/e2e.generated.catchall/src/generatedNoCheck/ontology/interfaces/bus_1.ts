import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export type OsdkObjectLinks$bus_1 = {};

export namespace bus_1 {
  export type PropertyKeys = 'vehicleId_1';

  export interface Props {
    /**
     *   display name: 'Vehicle Id'
     */
    readonly vehicleId_1: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<bus_1, bus_1.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof bus_1.Props = keyof bus_1.Props,
  > = $Osdk.Instance<bus_1, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof bus_1.Props = keyof bus_1.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface bus_1 extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'bus_1';
  __DefinitionMetadata?: {
    objectSet: bus_1.ObjectSet;
    props: bus_1.Props;
    linksType: OsdkObjectLinks$bus_1;
    strictProps: bus_1.StrictProps;
    apiName: 'bus_1';
    description: '';
    displayName: 'Bus';
    implementedBy: ['EdgeXWmataBusNoGeotime', 'KaguinaldoNycBusTrip', 'TestBus', 'WmataBus'];
    implements: [];
    links: {};
    properties: {
      /**
       *   display name: 'Vehicle Id'
       */
      vehicleId_1: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.13ac66ef-d94e-4020-ac20-3285557149dd';
    type: 'interface';
  };
}

export const bus_1 = {
  type: 'interface',
  apiName: 'bus_1',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.13ac66ef-d94e-4020-ac20-3285557149dd',
  },
} satisfies bus_1 & { internalDoNotUseMetadata: { rid: string } } as bus_1;
