import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Assignment } from './Assignment.js';
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

export namespace StatusUpdate {
  export type PropertyKeys =
    | 'assignmentId'
    | 'comment'
    | 'isExcluded'
    | 'recordedBy'
    | 'statusUpdateId'
    | 'timestamp'
    | 'timestampEpochMs'
    | 'type'
    | 'typeValue'
    | 'value';

  export interface Links {
    readonly assignment: $SingleLinkAccessor<Assignment>;
  }

  export interface LinkTokens {
    readonly assignment: $LinkDef<StatusUpdate, Assignment, 'one'>;
  }

  export interface Props {
    /**
     *   property status: active
     *
     *   display name: 'Assignment ID',
     *
     *   description: Foreign key to the owning Assignment (StatusUpdate is the many side of the one-to-many).
     */
    readonly assignmentId: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Comment',
     *
     *   description: Optional free-text note.
     */
    readonly comment: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Is Excluded',
     *
     *   description: Whether this status row is excluded by the metrics layer. Orthogonal to the latest-value derivation; defaults to false.
     */
    readonly isExcluded: $PropType['boolean'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Recorded By',
     *
     *   description: User who recorded the status.
     */
    readonly recordedBy: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Status Update ID',
     *
     *   description: Unique identifier for the status update row.
     */
    readonly statusUpdateId: $PropType['string'];
    /**
     *   property status: active
     *
     *   display name: 'Timestamp',
     *
     *   description: When the status was recorded (display).
     */
    readonly timestamp: $PropType['timestamp'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Timestamp Epoch Ms',
     *
     *   description: Millisecond epoch of the timestamp. Numeric (Long) so it can be max-aggregated and subtracted to derive the latest value per type.
     */
    readonly timestampEpochMs: $PropType['long'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Type',
     *
     *   description: Status category, e.g. WorkMode, RemoteEligible, AccessLevel.
     */
    readonly type: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Type Value',
     *
     *   description: Combined '{type} - {value}' string used for filter dropdowns. Separator is ' - ' (space-hyphen-space); split on the last separator.
     */
    readonly typeValue: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Value',
     *
     *   description: Status value within the type, e.g. Remote, Yes, Elevated.
     */
    readonly value: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<StatusUpdate, StatusUpdate.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof StatusUpdate.Props = keyof StatusUpdate.Props,
  > = $Osdk.Instance<StatusUpdate, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof StatusUpdate.Props = keyof StatusUpdate.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface StatusUpdate extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'StatusUpdate';
  primaryKeyApiName: 'statusUpdateId';
  primaryKeyType: 'string';
  links: StatusUpdate.LinkTokens;
  __DefinitionMetadata?: {
    objectSet: StatusUpdate.ObjectSet;
    props: StatusUpdate.Props;
    linksType: StatusUpdate.Links;
    strictProps: StatusUpdate.StrictProps;
    apiName: 'StatusUpdate';
    description: 'A typed, timestamped status row hung off an Assignment (the one-to-many timeline being stress-tested). The latest value per type is derived by max-aggregating timestampEpochMs over this link.';
    displayName: 'Status Update';
    icon: {
      type: 'blueprint';
      color: '#2D72D2';
      name: 'timeline-events';
    };
    implements: [];
    interfaceLinkMap: {};
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      assignment: $ObjectMetadata.Link<Assignment, false>;
    };
    pluralDisplayName: 'Status Updates';
    primaryKeyApiName: 'statusUpdateId';
    primaryKeyType: 'string';
    properties: {
      /**
       *   property status: active
       *
       *   display name: 'Assignment ID',
       *
       *   description: Foreign key to the owning Assignment (StatusUpdate is the many side of the one-to-many).
       */
      assignmentId: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Comment',
       *
       *   description: Optional free-text note.
       */
      comment: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Is Excluded',
       *
       *   description: Whether this status row is excluded by the metrics layer. Orthogonal to the latest-value derivation; defaults to false.
       */
      isExcluded: $PropertyDef<'boolean', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Recorded By',
       *
       *   description: User who recorded the status.
       */
      recordedBy: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Status Update ID',
       *
       *   description: Unique identifier for the status update row.
       */
      statusUpdateId: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Timestamp',
       *
       *   description: When the status was recorded (display).
       */
      timestamp: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Timestamp Epoch Ms',
       *
       *   description: Millisecond epoch of the timestamp. Numeric (Long) so it can be max-aggregated and subtracted to derive the latest value per type.
       */
      timestampEpochMs: $PropertyDef<'long', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Type',
       *
       *   description: Status category, e.g. WorkMode, RemoteEligible, AccessLevel.
       */
      type: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Type Value',
       *
       *   description: Combined '{type} - {value}' string used for filter dropdowns. Separator is ' - ' (space-hyphen-space); split on the last separator.
       */
      typeValue: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Value',
       *
       *   description: Status value within the type, e.g. Remote, Yes, Elevated.
       */
      value: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.586dc2cc-44d2-4a82-8831-bd529c6f2042';
    status: 'ACTIVE';
    titleProperty: 'typeValue';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const StatusUpdate = {
  type: 'object',
  apiName: 'StatusUpdate',
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: 'statusUpdateId',
  primaryKeyType: 'string',
  links: {
    assignment: $createLinkDef('StatusUpdate', 'assignment', 'Assignment', false, false),
  },
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.586dc2cc-44d2-4a82-8831-bd529c6f2042',
  },
} satisfies StatusUpdate & { internalDoNotUseMetadata: { rid: string } } as StatusUpdate;
