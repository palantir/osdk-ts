import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export type OsdkObjectLinks$Worker = {};

export namespace Worker {
  export type PropertyKeys = 'email' | 'name' | 'employeeNumber';

  export interface Props {
    /**
     *   display name: 'Email'
     */
    readonly email: $PropType['string'] | undefined;
    /**
     *   display name: 'Employee Number'
     */
    readonly employeeNumber: $PropType['integer'] | undefined;
    /**
     *   display name: 'Name'
     */
    readonly name: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Worker, Worker.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Worker.Props = keyof Worker.Props,
  > = $Osdk.Instance<Worker, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Worker.Props = keyof Worker.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Worker extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'Worker';
  __DefinitionMetadata?: {
    objectSet: Worker.ObjectSet;
    props: Worker.Props;
    linksType: OsdkObjectLinks$Worker;
    strictProps: Worker.StrictProps;
    apiName: 'Worker';
    description: '';
    displayName: 'Worker';
    implementedBy: ['Employee'];
    implements: [];
    links: {};
    properties: {
      /**
       *   display name: 'Email'
       */
      email: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'Employee Number'
       */
      employeeNumber: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       *   display name: 'Name'
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.777ffb22-9b3c-4fb6-908f-56d23c3a5198';
    type: 'interface';
  };
}

export const Worker = {
  type: 'interface',
  apiName: 'Worker',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.777ffb22-9b3c-4fb6-908f-56d23c3a5198',
  },
} satisfies Worker & { internalDoNotUseMetadata: { rid: string } } as Worker;
