import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createPersonInterface {
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
    media: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'mediaReference';
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

    readonly media?: ActionParam.PrimitiveType<'mediaReference'> | null;

    readonly person_type: ActionParam.PrimitiveType<'objectType'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createPersonInterface.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createPersonInterface.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} email
 * @param {ActionParam.PrimitiveType<"integer">} employeeNumber
 * @param {ActionParam.PrimitiveType<"mediaReference">} [media]
 * @param {ActionParam.PrimitiveType<"objectType">} person_type
 */
export interface createPersonInterface extends ActionDefinition<createPersonInterface.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createPersonInterface';
    displayName: 'Create Person Interface';
    modifiedEntities: {};
    parameters: createPersonInterface.ParamsDefinition;
    rid: 'ri.actions.main.action-type.9e084d64-0bd4-498d-9041-5299db87e441';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createPersonInterface.Signatures;
  };
  apiName: 'createPersonInterface';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createPersonInterface: createPersonInterface = {
  apiName: 'createPersonInterface',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
