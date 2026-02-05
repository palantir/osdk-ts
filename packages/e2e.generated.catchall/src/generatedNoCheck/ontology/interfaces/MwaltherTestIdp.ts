import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export type OsdkObjectLinks$MwaltherTestIdp = {};

export namespace MwaltherTestIdp {
  export type PropertyKeys = 'newProperty1' | 'mwaltherNam' | 'idpAge' | 'mwaltherName';

  export interface Props {
    /**
     *   display name: 'Details - Details',
     *
     *   description: Additional details explaining this entity
     */
    readonly mwaltherName: $PropType['string'] | undefined;
    /**
     *   display name: 'Age'
     */
    readonly idpAge: $PropType['integer'] | undefined;
    /**
     *   display name: 'prop1'
     */
    readonly mwaltherNam: $PropType['string'] | undefined;
    /**
     *   display name: 'New property 1'
     */
    readonly newProperty1: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<MwaltherTestIdp, MwaltherTestIdp.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MwaltherTestIdp.Props = keyof MwaltherTestIdp.Props,
  > = $Osdk.Instance<MwaltherTestIdp, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MwaltherTestIdp.Props = keyof MwaltherTestIdp.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface MwaltherTestIdp extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'com.palantirfoundry.swirl.esong.MwaltherTestIdp';
  __DefinitionMetadata?: {
    objectSet: MwaltherTestIdp.ObjectSet;
    props: MwaltherTestIdp.Props;
    linksType: OsdkObjectLinks$MwaltherTestIdp;
    strictProps: MwaltherTestIdp.StrictProps;
    apiName: 'com.palantirfoundry.swirl.esong.MwaltherTestIdp';
    description: '';
    displayName: '[mwalther] test IDP';
    implementedBy: ['MwaltherPersonOt'];
    implements: ['MwaltherPersonV2'];
    links: {};
    properties: {
      /**
       *   display name: 'Details - Details',
       *
       *   description: Additional details explaining this entity
       */
      mwaltherName: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'Age'
       */
      idpAge: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       *   display name: 'prop1'
       */
      mwaltherNam: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'New property 1'
       */
      newProperty1: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.19fcaed0-457d-4e4c-82b1-7e3933a61df3';
    type: 'interface';
  };
}

export const MwaltherTestIdp = {
  type: 'interface',
  apiName: 'com.palantirfoundry.swirl.esong.MwaltherTestIdp',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.19fcaed0-457d-4e4c-82b1-7e3933a61df3',
  },
} satisfies MwaltherTestIdp & { internalDoNotUseMetadata: { rid: string } } as MwaltherTestIdp;
