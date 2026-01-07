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
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: ActionMetadata.DataType.Struct<{ city: 'string'; state: 'string' }>;
    };
    name: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  /**
   * Create a struct
   */
  export interface Params {
    readonly address?: ActionParam.StructType<{ city: 'string'; state: 'string' }> | null;

    readonly name: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Create a struct
     */
    applyAction<OP extends ApplyActionOptions>(
      args: createStructPerson.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createStructPerson.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Create a struct
 *
 * **Note on null values:** _For optional parameters, explicitly providing a null value instead of undefined
 * can change the behavior of the applied action. If prefills are configured, null prevents them
 * from being applied. If a parameter modifies an object's property, null will clear the data from
 * the object, whereas undefined would not modify that property._
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
