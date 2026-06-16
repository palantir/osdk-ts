import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace modifyPerson {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    email: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    employeeNumber: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'integer';
    };
    person_type: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'objectType';
    };
  };

  export interface Params {
    readonly email: ActionParam.PrimitiveType<'string'>;

    readonly employeeNumber: ActionParam.PrimitiveType<'integer'>;

    readonly person_type: ActionParam.PrimitiveType<'objectType'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: modifyPerson.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<modifyPerson.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} email
 * @param {ActionParam.PrimitiveType<"integer">} employeeNumber
 * @param {ActionParam.PrimitiveType<"objectType">} person_type
 */
export interface modifyPerson extends ActionDefinition<modifyPerson.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'modifyPerson';
    displayName: 'Create Person V2';
    modifiedEntities: {};
    parameters: modifyPerson.ParamsDefinition;
    rid: 'ri.actions.main.action-type.76528413-40a3-4718-98d4-aba385a815a2';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: modifyPerson.Signatures;
  };
  apiName: 'modifyPerson';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const modifyPerson: modifyPerson = {
  apiName: 'modifyPerson',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
