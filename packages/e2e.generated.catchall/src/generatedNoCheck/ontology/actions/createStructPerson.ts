import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createStructPerson {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    address: {
      multiplicity: false;
      nullable: true;
      type: ActionMetadata.DataType.Struct<{ city: 'string'; state: 'string' }>;
    };
    name: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  /**
   * Create a struct
   */
  export interface Params {
    readonly address?: ActionParam.StructType<{ city: 'string'; state: 'string' }>;

    readonly name: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Create a struct
     */
    applyAction<P extends createStructPerson.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<createStructPerson.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Create a struct
 * @param {ActionParam.StructType<{"city":"string","state":"string"}>} [address]
 * @param {ActionParam.PrimitiveType<"string">} name
 */
export interface createStructPerson extends ActionDefinition<createStructPerson.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createStructPerson';
    description: 'Create a struct';
    modifiedEntities: {
      Employee: {
        created: false;
        modified: true;
      };
    };
    parameters: createStructPerson.ParamsDefinition;
    rid: 'ri.a.b.c.d';
    status: 'ACTIVE';
    type: 'action';

    signatures: createStructPerson.Signatures;
  };
  apiName: 'createStructPerson';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createStructPerson: createStructPerson = {
  apiName: 'createStructPerson',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
