import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Assignment } from '../objects/Assignment.js';

export namespace recordStatusUpdate {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    assignment: {
      description: 'The assignment this status update belongs to.';
      displayName: 'Assignment';
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Assignment>;
    };
    comment: {
      description: 'Optional free-text note.';
      displayName: 'Comment';
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    isExcluded: {
      description: 'Whether the row is excluded by the metrics layer. Defaults to false.';
      displayName: 'Is Excluded';
      multiplicity: false;
      nullable: true;
      type: 'boolean';
    };
    recordedBy: {
      description: 'User who recorded the status.';
      displayName: 'Recorded By';
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    statusUpdateId: {
      description: 'Primary key for the new status update row.';
      displayName: 'Status Update ID';
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    timestamp: {
      description: 'When the status was recorded (display).';
      displayName: 'Timestamp';
      multiplicity: false;
      nullable: false;
      type: 'timestamp';
    };
    timestampEpochMs: {
      description: 'Millisecond epoch matching the timestamp. Must equal the timestamp in epoch ms.';
      displayName: 'Timestamp Epoch Ms';
      multiplicity: false;
      nullable: false;
      type: 'long';
    };
    type: {
      description: 'Status category.';
      displayName: 'Type';
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    typeValue: {
      description: "Combined '{type} - {value}' string (space-hyphen-space separator).";
      displayName: 'Type Value';
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    value: {
      description: 'Status value within the type (e.g. Remote, Yes, Elevated).';
      displayName: 'Value';
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  /**
   * Create a new Status Update row on an Assignment. The caller must pass timestamp, timestampEpochMs and typeValue consistently, since declarative actions cannot convert Timestamp<->Long or concatenate strings.
   */
  export interface Params {
    /**
     * The assignment this status update belongs to.
     */
    readonly assignment: ActionParam.ObjectType<Assignment>;
    /**
     * Optional free-text note.
     */
    readonly comment?: ActionParam.PrimitiveType<'string'> | null;
    /**
     * Whether the row is excluded by the metrics layer. Defaults to false.
     */
    readonly isExcluded?: ActionParam.PrimitiveType<'boolean'> | null;
    /**
     * User who recorded the status.
     */
    readonly recordedBy?: ActionParam.PrimitiveType<'string'> | null;
    /**
     * Primary key for the new status update row.
     */
    readonly statusUpdateId: ActionParam.PrimitiveType<'string'>;
    /**
     * When the status was recorded (display).
     */
    readonly timestamp: ActionParam.PrimitiveType<'timestamp'>;
    /**
     * Millisecond epoch matching the timestamp. Must equal the timestamp in epoch ms.
     */
    readonly timestampEpochMs: ActionParam.PrimitiveType<'long'>;
    /**
     * Status category.
     */
    readonly type: ActionParam.PrimitiveType<'string'>;
    /**
     * Combined '{type} - {value}' string (space-hyphen-space separator).
     */
    readonly typeValue: ActionParam.PrimitiveType<'string'>;
    /**
     * Status value within the type (e.g. Remote, Yes, Elevated).
     */
    readonly value: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Create a new Status Update row on an Assignment. The caller must pass timestamp, timestampEpochMs and typeValue consistently, since declarative actions cannot convert Timestamp<->Long or concatenate strings.
     */
    applyAction<OP extends ApplyActionOptions>(
      args: recordStatusUpdate.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<recordStatusUpdate.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Create a new Status Update row on an Assignment. The caller must pass timestamp, timestampEpochMs and typeValue consistently, since declarative actions cannot convert Timestamp<->Long or concatenate strings.
 *
 * **Note on null values:** _For optional parameters, explicitly providing a null value instead of undefined
 * can change the behavior of the applied action. If prefills are configured, null prevents them
 * from being applied. If a parameter modifies an object's property, null will clear the data from
 * the object, whereas undefined would not modify that property._
 * @param {ActionParam.ObjectType<Assignment>} assignment The assignment this status update belongs to.
 * @param {ActionParam.PrimitiveType<"string">} [comment] Optional free-text note.
 * @param {ActionParam.PrimitiveType<"boolean">} [isExcluded] Whether the row is excluded by the metrics layer. Defaults to false.
 * @param {ActionParam.PrimitiveType<"string">} [recordedBy] User who recorded the status.
 * @param {ActionParam.PrimitiveType<"string">} statusUpdateId Primary key for the new status update row.
 * @param {ActionParam.PrimitiveType<"timestamp">} timestamp When the status was recorded (display).
 * @param {ActionParam.PrimitiveType<"long">} timestampEpochMs Millisecond epoch matching the timestamp. Must equal the timestamp in epoch ms.
 * @param {ActionParam.PrimitiveType<"string">} type Status category.
 * @param {ActionParam.PrimitiveType<"string">} typeValue Combined '{type} - {value}' string (space-hyphen-space separator).
 * @param {ActionParam.PrimitiveType<"string">} value Status value within the type (e.g. Remote, Yes, Elevated).
 */
export interface recordStatusUpdate extends ActionDefinition<recordStatusUpdate.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'recordStatusUpdate';
    description: 'Create a new Status Update row on an Assignment. The caller must pass timestamp, timestampEpochMs and typeValue consistently, since declarative actions cannot convert Timestamp<->Long or concatenate strings.';
    displayName: 'Record Status Update';
    modifiedEntities: {
      StatusUpdate: {
        created: true;
        modified: false;
      };
    };
    parameters: recordStatusUpdate.ParamsDefinition;
    rid: 'ri.actions.main.action-type.603fc1ee-9432-41c3-9249-8b192dc5f2c3';
    status: 'ACTIVE';
    type: 'action';
    unsanitizedApiName: 'record-status-update';

    signatures: recordStatusUpdate.Signatures;
  };
  apiName: 'recordStatusUpdate';
  type: 'action';
  unsanitizedApiName: 'record-status-update';
  osdkMetadata: typeof $osdkMetadata;
}

export const recordStatusUpdate: recordStatusUpdate = {
  apiName: 'recordStatusUpdate',
  type: 'action',
  unsanitizedApiName: 'record-status-update',
  osdkMetadata: $osdkMetadata,
};
