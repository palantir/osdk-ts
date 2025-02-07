import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace promoteEmployee {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    employeeId: {
      multiplicity: false;
      nullable: false;
      type: 'integer';
    };
    newCompensation: {
      multiplicity: false;
      nullable: false;
      type: 'double';
    };
    newTitle: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  /**
   * Update an employee's title and compensation
   */
  export interface Params {
    readonly employeeId: ActionParam.PrimitiveType<'integer'>;

    readonly newCompensation: ActionParam.PrimitiveType<'double'>;

    readonly newTitle: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Update an employee's title and compensation
     */
    applyAction<P extends promoteEmployee.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<promoteEmployee.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Update an employee's title and compensation
 * @param {ActionParam.PrimitiveType<"integer">} employeeId
 * @param {ActionParam.PrimitiveType<"double">} newCompensation
 * @param {ActionParam.PrimitiveType<"string">} newTitle
 */
export interface promoteEmployee extends ActionDefinition<promoteEmployee.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'promoteEmployee';
    description: "Update an employee's title and compensation";
    modifiedEntities: {
      Employee: {
        created: false;
        modified: true;
      };
    };
    parameters: promoteEmployee.ParamsDefinition;
    rid: 'ri.ontology.main.action-type.7ed72754-7491-428a-bb18-4d7296eb2167';
    status: 'ACTIVE';
    type: 'action';

    signatures: promoteEmployee.Signatures;
  };
  apiName: 'promoteEmployee';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const promoteEmployee: promoteEmployee = {
  apiName: 'promoteEmployee',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
