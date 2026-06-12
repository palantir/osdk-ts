import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Assignment } from './Assignment.js';
import type { Floor } from './Floor.js';
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
  LinkDef as $LinkDef,
} from '@osdk/client';
import { createLinkDef as $createLinkDef } from '@osdk/client';

export namespace Office {
  export type PropertyKeys = 'city' | 'name' | 'officeId' | 'region';

  export interface Links {
    readonly assignments: Assignment.ObjectSet;
    readonly floors: Floor.ObjectSet;
  }

  export interface LinkTokens {
    readonly assignments: $LinkDef<Office, Assignment, 'many'>;
    readonly floors: $LinkDef<Office, Floor, 'many'>;
  }

  export interface Props {
    /**
     *   property status: active
     *
     *   display name: 'City',
     *
     *   description: City where the office is located.
     */
    readonly city: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Office Name',
     *
     *   description: Human-readable name of the office.
     */
    readonly name: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Office ID',
     *
     *   description: Unique identifier for the office.
     */
    readonly officeId: $PropType['string'];
    /**
     *   property status: active
     *
     *   display name: 'Region',
     *
     *   description: Region the office belongs to.
     */
    readonly region: $PropType['string'] | undefined;
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
  primaryKeyApiName: 'officeId';
  primaryKeyType: 'string';
  links: Office.LinkTokens;
  __DefinitionMetadata?: {
    objectSet: Office.ObjectSet;
    props: Office.Props;
    linksType: Office.Links;
    strictProps: Office.StrictProps;
    apiName: 'Office';
    description: 'A top-level company location (building/campus). Contains Floors and hosts Assignments.';
    displayName: 'Office';
    icon: {
      type: 'blueprint';
      color: '#5C7080';
      name: 'office';
    };
    implements: [];
    interfaceLinkMap: {};
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      assignments: $ObjectMetadata.Link<Assignment, true>;
      floors: $ObjectMetadata.Link<Floor, true>;
    };
    pluralDisplayName: 'Offices';
    primaryKeyApiName: 'officeId';
    primaryKeyType: 'string';
    properties: {
      /**
       *   property status: active
       *
       *   display name: 'City',
       *
       *   description: City where the office is located.
       */
      city: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Office Name',
       *
       *   description: Human-readable name of the office.
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Office ID',
       *
       *   description: Unique identifier for the office.
       */
      officeId: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Region',
       *
       *   description: Region the office belongs to.
       */
      region: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.a8feaba1-2c21-4aaa-9533-f76eac796c55';
    status: 'ACTIVE';
    titleProperty: 'name';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const Office = {
  type: 'object',
  apiName: 'Office',
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: 'officeId',
  primaryKeyType: 'string',
  links: {
    assignments: $createLinkDef('Office', 'assignments', 'Assignment', true, false),
    floors: $createLinkDef('Office', 'floors', 'Floor', true, false),
  },
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.a8feaba1-2c21-4aaa-9533-f76eac796c55',
  },
} satisfies Office & { internalDoNotUseMetadata: { rid: string } } as Office;
