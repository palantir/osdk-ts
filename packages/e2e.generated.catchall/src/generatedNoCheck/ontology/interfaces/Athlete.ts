import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export type OsdkObjectLinks$Athlete = {};

export namespace Athlete {
  export type PropertyKeys = 'jerseyNumber' | 'athleteId' | 'name22';

  export interface Props {
    /**
     *   display name: 'Athlete ID',
     *   description: Athlete ID
     */
    readonly athleteId: $PropType['string'] | undefined;
    /**
     *   display name: 'Jersey Number',
     *   description: Jersey Number
     */
    readonly jerseyNumber: $PropType['integer'] | undefined;
    /**
     *   display name: 'Name',
     *   description: Name
     */
    readonly name22: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Athlete, Athlete.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Athlete.Props = keyof Athlete.Props,
  > = $Osdk.Instance<Athlete, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Athlete.Props = keyof Athlete.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Athlete extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'Athlete';
  __DefinitionMetadata?: {
    objectSet: Athlete.ObjectSet;
    props: Athlete.Props;
    linksType: OsdkObjectLinks$Athlete;
    strictProps: Athlete.StrictProps;
    apiName: 'Athlete';
    description: 'Its an athlete.';
    displayName: 'Athlete interface';
    links: {};
    properties: {
      /**
       *   display name: 'Athlete ID',
       *   description: Athlete ID
       */
      athleteId: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'Jersey Number',
       *   description: Jersey Number
       */
      jerseyNumber: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       *   display name: 'Name',
       *   description: Name
       */
      name22: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface-type.1b1b1b1b-1b1b-1b1b-1b1b-1b1b1b1b1b1b';
    type: 'interface';
  };
}

export const Athlete: Athlete = {
  type: 'interface',
  apiName: 'Athlete',
  osdkMetadata: $osdkMetadata,
};
