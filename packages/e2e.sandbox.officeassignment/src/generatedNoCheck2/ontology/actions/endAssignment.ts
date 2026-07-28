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

export namespace endAssignment {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    assignment: {
      description: 'The assignment to end.';
      displayName: 'Assignment';
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Assignment>;
    };
    endDate: {
      description: 'Date the assignment ended.';
      displayName: 'End Date';
      multiplicity: false;
      nullable: false;
      type: 'datetime';
    };
  };

  /**
   * End an assignment: set assignmentStatus to Ended and record the endDate. Blocked if the assignment is already Ended.
   */
  export interface Params {
    /**
     * The assignment to end.
     */
    readonly assignment: ActionParam.ObjectType<Assignment>;
    /**
     * Date the assignment ended.
     */
    readonly endDate: ActionParam.PrimitiveType<'datetime'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * End an assignment: set assignmentStatus to Ended and record the endDate. Blocked if the assignment is already Ended.
     */
    applyAction<OP extends ApplyActionOptions>(
      args: endAssignment.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<endAssignment.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * End an assignment: set assignmentStatus to Ended and record the endDate. Blocked if the assignment is already Ended.
 * @param {ActionParam.ObjectType<Assignment>} assignment The assignment to end.
 * @param {ActionParam.PrimitiveType<"datetime">} endDate Date the assignment ended.
 */
export interface endAssignment extends ActionDefinition<endAssignment.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'endAssignment';
    description: 'End an assignment: set assignmentStatus to Ended and record the endDate. Blocked if the assignment is already Ended.';
    displayName: 'End Assignment';
    modifiedEntities: {
      Assignment: {
        created: false;
        modified: true;
      };
    };
    parameters: endAssignment.ParamsDefinition;
    rid: 'ri.actions.main.action-type.c48066c1-30e5-443d-824c-7ae4631c87c1';
    status: 'ACTIVE';
    type: 'action';
    unsanitizedApiName: 'end-assignment';

    signatures: endAssignment.Signatures;
  };
  apiName: 'endAssignment';
  type: 'action';
  unsanitizedApiName: 'end-assignment';
  osdkMetadata: typeof $osdkMetadata;
}

export const endAssignment: endAssignment = {
  apiName: 'endAssignment',
  type: 'action',
  unsanitizedApiName: 'end-assignment',
  osdkMetadata: $osdkMetadata,
};
