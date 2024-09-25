import type { ActionDefinition, ObjectActionDataType, ObjectSetActionDataType } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata';

export namespace createOffice {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    address: {
      description: "The office's physical address (not necessarily shipping address)";
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    capacity: {
      description: 'The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)';
      multiplicity: false;
      nullable: true;
      type: 'integer';
    };
    officeId: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    officeNames: {
      description: 'A list of all office names';
      multiplicity: true;
      nullable: true;
      type: 'string';
    };
  };

  /**
   * Create an office's
   */
  export interface Params {
    /**
     * The office's physical address (not necessarily shipping address)
     */
    readonly address?: ActionParam.PrimitiveType<'string'>;
    /**
     * The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)
     */
    readonly capacity?: ActionParam.PrimitiveType<'integer'>;

    readonly officeId: ActionParam.PrimitiveType<'string'>;
    /**
     * A list of all office names
     */
    readonly officeNames?: ReadonlyArray<ActionParam.PrimitiveType<'string'>>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Create an office's
     */
    applyAction<P extends createOffice.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<createOffice.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Create an office's
 * @param {ActionParam.PrimitiveType<"string">} [address] The office's physical address (not necessarily shipping address)
 * @param {ActionParam.PrimitiveType<"integer">} [capacity] The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)
 * @param {ActionParam.PrimitiveType<"string">} officeId
 * @param {ActionParam.PrimitiveType<"string">} [officeNames] A list of all office names
 */
export interface createOffice extends ActionDefinition<'createOffice', 'Office', createOffice.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createOffice';
    description: "Create an office's";
    modifiedEntities: {
      Office: {
        created: true;
        modified: false;
      };
    };
    parameters: createOffice.ParamsDefinition;
    rid: 'ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f1';
    status: 'ACTIVE';
    type: 'action';

    signatures: createOffice.Signatures;
  };
  apiName: 'createOffice';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createOffice: createOffice = {
  apiName: 'createOffice',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
