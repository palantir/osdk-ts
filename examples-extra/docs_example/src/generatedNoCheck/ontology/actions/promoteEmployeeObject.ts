import type { ActionDefinition, ObjectActionDataType, ObjectSetActionDataType, VersionBound } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
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

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'promoteEmployeeObject', 'Employee', promoteEmployeeObject.Signatures>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'promoteEmployeeObject';
    description: "Update an employee's title and compensation";
    modifiedEntities: { Employee: { created: false; modified: true } };
    type: 'action';
    parameters: promoteEmployeeObject.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
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

/** @deprecated Use `promoteEmployeeObject.Definition` **/
export type promoteEmployeeObject = promoteEmployeeObject.Signatures;

export const promoteEmployeeObject: promoteEmployeeObject.Definition = {
  apiName: 'promoteEmployeeObject',
  description: "Update an employee's title and compensation",
  modifiedEntities: {
    Employee: {
      created: false,
      modified: true,
    },
  },
  parameters: {
    employee: {
      multiplicity: false,
      type: {
        type: 'object',
        object: 'Employee',
      },
      nullable: false,
    },
    newTitle: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    newCompensation: {
      multiplicity: false,
      type: 'double',
      nullable: false,
    },
  },
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
