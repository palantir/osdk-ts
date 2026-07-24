import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { StatusUpdate } from '../objects/StatusUpdate.js';

export namespace toggleStatusExclusion {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    isExcluded: {
      description: 'The new exclusion state. Pre-filled with the current value; flip it to toggle.';
      displayName: 'Is Excluded';
      multiplicity: false;
      nullable: false;
      type: 'boolean';
    };
    statusUpdate: {
      description: 'The status update row to toggle.';
      displayName: 'Status Update';
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<StatusUpdate>;
    };
  };

  /**
   * Flip the isExcluded flag on a Status Update row. The flag is pre-filled with the current value; flipping it toggles the exclusion. Orthogonal to the latest-value derivation.
   */
  export interface Params {
    /**
     * The new exclusion state. Pre-filled with the current value; flip it to toggle.
     */
    readonly isExcluded: ActionParam.PrimitiveType<'boolean'>;
    /**
     * The status update row to toggle.
     */
    readonly statusUpdate: ActionParam.ObjectType<StatusUpdate>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Flip the isExcluded flag on a Status Update row. The flag is pre-filled with the current value; flipping it toggles the exclusion. Orthogonal to the latest-value derivation.
     */
    applyAction<OP extends ApplyActionOptions>(
      args: toggleStatusExclusion.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<toggleStatusExclusion.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Flip the isExcluded flag on a Status Update row. The flag is pre-filled with the current value; flipping it toggles the exclusion. Orthogonal to the latest-value derivation.
 * @param {ActionParam.PrimitiveType<"boolean">} isExcluded The new exclusion state. Pre-filled with the current value; flip it to toggle.
 * @param {ActionParam.ObjectType<StatusUpdate>} statusUpdate The status update row to toggle.
 */
export interface toggleStatusExclusion extends ActionDefinition<toggleStatusExclusion.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'toggleStatusExclusion';
    description: 'Flip the isExcluded flag on a Status Update row. The flag is pre-filled with the current value; flipping it toggles the exclusion. Orthogonal to the latest-value derivation.';
    displayName: 'Toggle Status Exclusion';
    modifiedEntities: {
      StatusUpdate: {
        created: false;
        modified: true;
      };
    };
    parameters: toggleStatusExclusion.ParamsDefinition;
    rid: 'ri.actions.main.action-type.f577dd07-fada-4ada-bb57-d240c13e1dbb';
    status: 'ACTIVE';
    type: 'action';
    unsanitizedApiName: 'toggle-status-exclusion';

    signatures: toggleStatusExclusion.Signatures;
  };
  apiName: 'toggleStatusExclusion';
  type: 'action';
  unsanitizedApiName: 'toggle-status-exclusion';
  osdkMetadata: typeof $osdkMetadata;
}

export const toggleStatusExclusion: toggleStatusExclusion = {
  apiName: 'toggleStatusExclusion',
  type: 'action',
  unsanitizedApiName: 'toggle-status-exclusion',
  osdkMetadata: $osdkMetadata,
};
