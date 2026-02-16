import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Employee } from '../objects/Employee.js';

export namespace modifyTeam {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    department: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    Employee: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Employee>;
    };
    team: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  export interface Params {
    readonly department?: ActionParam.PrimitiveType<'string'> | null;

    readonly Employee: ActionParam.ObjectType<Employee>;

    readonly team: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: modifyTeam.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<modifyTeam.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} [department]
 * @param {ActionParam.ObjectType<Employee>} Employee
 * @param {ActionParam.PrimitiveType<"string">} team
 */
export interface modifyTeam extends ActionDefinition<modifyTeam.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'modifyTeam';
    displayName: 'modifyTeam';
    modifiedEntities: {
      Employee: {
        created: false;
        modified: true;
      };
    };
    parameters: modifyTeam.ParamsDefinition;
    rid: 'ri.actions.main.action-type.3558f5f6-74d4-4d9d-8925-c002b13258f2';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: modifyTeam.Signatures;
  };
  apiName: 'modifyTeam';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const modifyTeam: modifyTeam = {
  apiName: 'modifyTeam',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
