import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export type OsdkObjectLinks$mwaltherPerson = {};

export namespace mwaltherPerson {
  export type PropertyKeys = 'age' | 'mwaltherName';

  export interface Props {
    /**
     *   display name: 'Age (IDP)'
     */
    readonly age: $PropType['integer'] | undefined;
    /**
     *   display name: '[mwalther] Name'
     */
    readonly mwaltherName: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<mwaltherPerson, mwaltherPerson.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof mwaltherPerson.Props = keyof mwaltherPerson.Props,
  > = $Osdk.Instance<mwaltherPerson, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof mwaltherPerson.Props = keyof mwaltherPerson.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface mwaltherPerson extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'mwaltherPerson';
  __DefinitionMetadata?: {
    objectSet: mwaltherPerson.ObjectSet;
    props: mwaltherPerson.Props;
    linksType: OsdkObjectLinks$mwaltherPerson;
    strictProps: mwaltherPerson.StrictProps;
    apiName: 'mwaltherPerson';
    description: '';
    displayName: '[mwalther] Person (has IDP)';
    implementedBy: ['MwaltherPersonOt'];
    implements: [];
    links: {};
    properties: {
      /**
       *   display name: 'Age (IDP)'
       */
      age: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       *   display name: '[mwalther] Name'
       */
      mwaltherName: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.2bf99935-b656-4c38-87ff-5970ccb3f2a7';
    type: 'interface';
  };
}

export const mwaltherPerson = {
  type: 'interface',
  apiName: 'mwaltherPerson',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.2bf99935-b656-4c38-87ff-5970ccb3f2a7',
  },
} satisfies mwaltherPerson & { internalDoNotUseMetadata: { rid: string } } as mwaltherPerson;
