import type { ActionDefinition, ObjectActionDataType, VersionBound } from '@osdk/api';
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
  export interface Parameters {
    readonly employee: ActionParam.ObjectType<Employee>;

    readonly newCompensation: ActionParam.PrimitiveType<'double'>;

    readonly newTitle: ActionParam.PrimitiveType<'string'>;
  }

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'promoteEmployeeObject', 'Employee', promoteEmployeeObject>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'promoteEmployeeObject';
    description: "Update an employee's title and compensation";
    modifiedEntities: { Employee: { created: false; modified: true } };
    type: 'action';
    parameters: promoteEmployeeObject.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
  }

  // Represents a fqn of the action
  export interface Signature {
    /**
     * Update an employee's title and compensation
     */
    <
      P extends promoteEmployeeObject.Parameters | ReadonlyArray<promoteEmployeeObject.Parameters>,
      OP extends P extends ReadonlyArray<promoteEmployeeObject.Parameters>
        ? ApplyBatchActionOptions
        : ApplyActionOptions,
    >(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @deprecated Use `promoteEmployeeObject.Parameters`
 */
export type promoteEmployeeObject$Params =
  | promoteEmployeeObject.Parameters
  | ReadonlyArray<promoteEmployeeObject.Parameters>;

/** @deprecated Use `promoteEmployeeObject.Definition` **/
export type promoteEmployeeObject = promoteEmployeeObject.Signature;

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
