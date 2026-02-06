import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createWorker {
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
    name: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    worker_type: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'objectType';
    };
  };

  export interface Params {
    readonly email: ActionParam.PrimitiveType<'string'>;

    readonly employeeNumber: ActionParam.PrimitiveType<'integer'>;

    readonly name?: ActionParam.PrimitiveType<'string'> | null;

    readonly worker_type: ActionParam.PrimitiveType<'objectType'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createWorker.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createWorker.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} email
 * @param {ActionParam.PrimitiveType<"integer">} employeeNumber
 * @param {ActionParam.PrimitiveType<"string">} [name]
 * @param {ActionParam.PrimitiveType<"objectType">} worker_type
 */
export interface createWorker extends ActionDefinition<createWorker.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createWorker';
    displayName: 'Create Worker';
    modifiedEntities: {};
    parameters: createWorker.ParamsDefinition;
    rid: 'ri.actions.main.action-type.e4c1ab71-a36a-44b4-9334-392604a81438';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createWorker.Signatures;
  };
  apiName: 'createWorker';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createWorker: createWorker = {
  apiName: 'createWorker',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
