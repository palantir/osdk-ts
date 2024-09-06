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
  export interface Params {
    readonly employeeId: ActionParam.PrimitiveType<'integer'>;

    readonly newCompensation: ActionParam.PrimitiveType<'double'>;

    readonly newTitle: ActionParam.PrimitiveType<'string'>;
  }
  /** @deprecated **/
  export type Parameters = Params;

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'promoteEmployee', 'Employee', promoteEmployee.Signatures>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'promoteEmployee';
    description: "Update an employee's title and compensation";
    modifiedEntities: { Employee: { created: false; modified: true } };
    type: 'action';
    parameters: promoteEmployee.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
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
 * @deprecated Use `promoteEmployee.Params`
 */
export type promoteEmployee$Params = promoteEmployee.Params | ReadonlyArray<promoteEmployee.Params>;

/** @deprecated Use `promoteEmployee.Definition` **/
export type promoteEmployee = promoteEmployee.Signatures;

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
