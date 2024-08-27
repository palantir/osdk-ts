import type { ActionDefinition, VersionBound } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

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
  export interface Parameters {
    readonly employeeId: ActionParam.PrimitiveType<'integer'>;

    readonly newCompensation: ActionParam.PrimitiveType<'double'>;

    readonly newTitle: ActionParam.PrimitiveType<'string'>;
  }

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'promoteEmployee', 'Employee', promoteEmployee>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'promoteEmployee';
    description: "Update an employee's title and compensation";
    modifiedEntities: { Employee: { created: false; modified: true } };
    type: 'action';
    parameters: promoteEmployee.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
  }

  // Represents a fqn of the action
  export interface Signature {
    /**
     * Update an employee's title and compensation
     */
    <
      P extends promoteEmployee.Parameters | ReadonlyArray<promoteEmployee.Parameters>,
      OP extends P extends ReadonlyArray<promoteEmployee.Parameters> ? ApplyBatchActionOptions : ApplyActionOptions,
    >(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @deprecated Use `promoteEmployee.Parameters`
 */
export type promoteEmployee$Params = promoteEmployee.Parameters | ReadonlyArray<promoteEmployee.Parameters>;

/** @deprecated Use `promoteEmployee.Definition` **/
export type promoteEmployee = promoteEmployee.Signature;

export const promoteEmployee: promoteEmployee.Definition = {
  apiName: 'promoteEmployee',
  description: "Update an employee's title and compensation",
  modifiedEntities: {
    Employee: {
      created: false,
      modified: true,
    },
  },
  parameters: {
    employeeId: {
      multiplicity: false,
      type: 'integer',
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
