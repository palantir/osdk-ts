import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata';

export namespace createOfficeAndEmployee {
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
    employeeId: {
      description: 'New employee Id';
      multiplicity: false;
      nullable: false;
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
   * Create an office and employee
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
    /**
     * New employee Id
     */
    readonly employeeId: ActionParam.PrimitiveType<'integer'>;

    readonly officeId: ActionParam.PrimitiveType<'string'>;
    /**
     * A list of all office names
     */
    readonly officeNames?: ReadonlyArray<ActionParam.PrimitiveType<'string'>>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Create an office and employee
     */
    applyAction<OP extends ApplyActionOptions>(
      args: createOfficeAndEmployee.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createOfficeAndEmployee.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Create an office and employee
 * @param {ActionParam.PrimitiveType<"string">} [address] The office's physical address (not necessarily shipping address)
 * @param {ActionParam.PrimitiveType<"integer">} [capacity] The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)
 * @param {ActionParam.PrimitiveType<"integer">} employeeId New employee Id
 * @param {ActionParam.PrimitiveType<"string">} officeId
 * @param {ActionParam.PrimitiveType<"string">} [officeNames] A list of all office names
 */
export interface createOfficeAndEmployee extends ActionDefinition<createOfficeAndEmployee.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createOfficeAndEmployee';
    description: 'Create an office and employee';
    modifiedEntities: {
      Office: {
        created: true;
        modified: false;
      };
      Employee: {
        created: true;
        modified: false;
      };
    };
    parameters: createOfficeAndEmployee.ParamsDefinition;
    rid: 'ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2';
    status: 'ACTIVE';
    type: 'action';

    signatures: createOfficeAndEmployee.Signatures;
  };
  apiName: 'createOfficeAndEmployee';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createOfficeAndEmployee: createOfficeAndEmployee = {
  apiName: 'createOfficeAndEmployee',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
