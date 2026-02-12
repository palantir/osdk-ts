import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export type OsdkObjectLinks$Person = {};

export namespace Person {
  export type PropertyKeys = 'email' | 'employeeNumber';

  export interface Props {
    /**
     *   display name: 'Email'
     */
    readonly email: $PropType['string'] | undefined;
    /**
     *   display name: 'Employee Number'
     */
    readonly employeeNumber: $PropType['integer'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Person, Person.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Person.Props = keyof Person.Props,
  > = $Osdk.Instance<Person, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Person.Props = keyof Person.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Person extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'Person';
  __DefinitionMetadata?: {
    objectSet: Person.ObjectSet;
    props: Person.Props;
    linksType: OsdkObjectLinks$Person;
    strictProps: Person.StrictProps;
    apiName: 'Person';
    description: '';
    displayName: 'Person';
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
    };
    rid: 'ri.ontology.main.interface.353734ce-ae2d-4e49-8070-163b2126af5a';
    type: 'interface';
  };
}

export const Person = {
  type: 'interface',
  apiName: 'Person',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.353734ce-ae2d-4e49-8070-163b2126af5a',
  },
} satisfies Person & { internalDoNotUseMetadata: { rid: string } } as Person;
