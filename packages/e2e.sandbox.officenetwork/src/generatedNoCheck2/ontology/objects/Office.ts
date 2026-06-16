import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Employee } from './Employee.js';
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
  export type PropertyKeys = 'location' | 'name' | 'primaryKey_';

  export interface Links {
    readonly occupants: Employee.ObjectSet;
  }

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Location'
     */
    readonly location: $PropType['geopoint'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Name'
     */
    readonly name: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Primary Key'
     */
    readonly primaryKey_: $PropType['string'];
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
    description: '';
    displayName: 'Office';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      occupants: $ObjectMetadata.Link<Employee, true>;
    };
    pluralDisplayName: 'Offices';
    primaryKeyApiName: 'primaryKey_';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Location'
       */
      location: $PropertyDef<'geopoint', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Name'
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Primary Key'
       */
      primaryKey_: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.bbca9c02-5c6a-4d3a-8bf1-e4db0177ab5f';
    status: 'EXPERIMENTAL';
    titleProperty: 'name';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const Office = {
  type: 'object',
  apiName: 'Office',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.bbca9c02-5c6a-4d3a-8bf1-e4db0177ab5f',
  },
} satisfies Office & { internalDoNotUseMetadata: { rid: string } } as Office;
