import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Person } from '../interfaces/Person.js';

export namespace modifyPersonFafe32 {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    email: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    Person: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Interface<Person>;
    };
  };

  export interface Params {
    readonly email: ActionParam.PrimitiveType<'string'>;

    readonly Person: ActionParam.InterfaceType<Person>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: modifyPersonFafe32.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<modifyPersonFafe32.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} email
 * @param {ActionParam.InterfaceType<Person>} Person
 */
export interface modifyPersonFafe32 extends ActionDefinition<modifyPersonFafe32.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'modifyPersonFafe32';
    displayName: 'Modify Person V2';
    modifiedEntities: {};
    parameters: modifyPersonFafe32.ParamsDefinition;
    rid: 'ri.actions.main.action-type.ef6ee138-e07d-4721-8a22-b8cd2e507997';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: modifyPersonFafe32.Signatures;
  };
  apiName: 'modifyPersonFafe32';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const modifyPersonFafe32: modifyPersonFafe32 = {
  apiName: 'modifyPersonFafe32',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
