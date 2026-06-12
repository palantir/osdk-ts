import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Assignment } from './Assignment.js';
import type { Office } from './Office.js';
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

export namespace Floor {
  export type PropertyKeys = 'deskCapacity' | 'floorId' | 'isExcluded' | 'name' | 'officeId';

  export interface Links {
    readonly assignments: Assignment.ObjectSet;
    readonly office: $SingleLinkAccessor<Office>;
  }

  export interface LinkTokens {
    readonly assignments: $LinkDef<Floor, Assignment, 'many'>;
    readonly office: $LinkDef<Floor, Office, 'one'>;
  }

  export interface Props {
    /**
     *   property status: active
     *
     *   display name: 'Desk Capacity',
     *
     *   description: Number of desks on this floor.
     */
    readonly deskCapacity: $PropType['integer'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Floor ID',
     *
     *   description: Unique identifier for the floor.
     */
    readonly floorId: $PropType['string'];
    /**
     *   property status: active
     *
     *   display name: 'Is Excluded',
     *
     *   description: Filter-exclusion flag for the floor (enum 'Yes' | 'No').
     */
    readonly isExcluded: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Floor Name',
     *
     *   description: Human-readable name of the floor (e.g. '3rd Floor').
     */
    readonly name: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Office ID',
     *
     *   description: Foreign key to the Office this floor belongs to.
     */
    readonly officeId: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Floor, Floor.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Floor.Props = keyof Floor.Props,
  > = $Osdk.Instance<Floor, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Floor.Props = keyof Floor.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Floor extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Floor';
  primaryKeyApiName: 'floorId';
  primaryKeyType: 'string';
  links: Floor.LinkTokens;
  __DefinitionMetadata?: {
    objectSet: Floor.ObjectSet;
    props: Floor.Props;
    linksType: Floor.Links;
    strictProps: Floor.StrictProps;
    apiName: 'Floor';
    description: 'A floor (sub-location) within an Office. Reference/lookup data that Assignments point to.';
    displayName: 'Floor';
    icon: {
      type: 'blueprint';
      color: '#5C7080';
      name: 'layer';
    };
    implements: [];
    interfaceLinkMap: {};
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      assignments: $ObjectMetadata.Link<Assignment, true>;
      office: $ObjectMetadata.Link<Office, false>;
    };
    pluralDisplayName: 'Floors';
    primaryKeyApiName: 'floorId';
    primaryKeyType: 'string';
    properties: {
      /**
       *   property status: active
       *
       *   display name: 'Desk Capacity',
       *
       *   description: Number of desks on this floor.
       */
      deskCapacity: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Floor ID',
       *
       *   description: Unique identifier for the floor.
       */
      floorId: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Is Excluded',
       *
       *   description: Filter-exclusion flag for the floor (enum 'Yes' | 'No').
       */
      isExcluded: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Floor Name',
       *
       *   description: Human-readable name of the floor (e.g. '3rd Floor').
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Office ID',
       *
       *   description: Foreign key to the Office this floor belongs to.
       */
      officeId: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.eafe2bc2-26d3-4d05-a01a-a563c4b538a5';
    status: 'ACTIVE';
    titleProperty: 'name';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const Floor = {
  type: 'object',
  apiName: 'Floor',
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: 'floorId',
  primaryKeyType: 'string',
  links: {
    assignments: $createLinkDef('Floor', 'assignments', 'Assignment', true, false),
    office: $createLinkDef('Floor', 'office', 'Office', false, false),
  },
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.eafe2bc2-26d3-4d05-a01a-a563c4b538a5',
  },
} satisfies Floor & { internalDoNotUseMetadata: { rid: string } } as Floor;
