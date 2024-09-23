import type { MinActionDef, ObjectActionDataType, ObjectSetActionDataType } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata';
import type { Employee } from '../objects/Employee';

export namespace promoteEmployeeObject {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    employee: {
      multiplicity: false;
      nullable: false;
      type: ObjectActionDataType<'Employee', Employee>;
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
    readonly employee: ActionParam.ObjectType<Employee>;

    readonly newCompensation: ActionParam.PrimitiveType<'double'>;

    readonly newTitle: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Update an employee's title and compensation
     */
    applyAction<P extends promoteEmployeeObject.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<promoteEmployeeObject.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Update an employee's title and compensation
 * @param {ActionParam.ObjectType<Employee>} employee
 * @param {ActionParam.PrimitiveType<"double">} newCompensation
 * @param {ActionParam.PrimitiveType<"string">} newTitle
 */
export interface promoteEmployeeObject
  extends MinActionDef<'promoteEmployeeObject', 'Employee', promoteEmployeeObject.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'promoteEmployeeObject';
    description: "Update an employee's title and compensation";
    modifiedEntities: {
      Employee: {
        created: false;
        modified: true;
      };
    };
    parameters: promoteEmployeeObject.ParamsDefinition;
    type: 'action';

    signatures: promoteEmployeeObject.Signatures;
  };
  apiName: 'promoteEmployeeObject';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const promoteEmployeeObject: promoteEmployeeObject = {
  apiName: 'promoteEmployeeObject',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
