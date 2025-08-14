import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createStructPersonOpiTeam {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    address: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: ActionMetadata.DataType.Struct<{ city: 'string'; state: 'string'; zipcode: 'integer' }>;
    };
    age: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'integer';
    };
    id: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  /**
   * Create a struct person on the OPI team
   */
  export interface Params {
    readonly address?:
      | ActionParam.StructType<{ city: 'string'; state: 'string'; zipcode: 'integer' }>
      | ActionParam.NullValueType;

    readonly age: ActionParam.PrimitiveType<'integer'>;

    readonly id: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Create a struct person on the OPI team
     */
    applyAction<OP extends ApplyActionOptions>(
      args: createStructPersonOpiTeam.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createStructPersonOpiTeam.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Create a struct person on the OPI team
 * @param {ActionParam.StructType<{"city":"string","state":"string","zipcode":"integer"}>} [address]
 * @param {ActionParam.PrimitiveType<"integer">} age
 * @param {ActionParam.PrimitiveType<"string">} id
 */
export interface createStructPersonOpiTeam extends ActionDefinition<createStructPersonOpiTeam.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createStructPersonOpiTeam';
    description: 'Create a struct person on the OPI team';
    modifiedEntities: {
      StructPersonOpisTeam: {
        created: true;
        modified: false;
      };
    };
    parameters: createStructPersonOpiTeam.ParamsDefinition;
    rid: 'ri.a.b.c.d';
    status: 'ACTIVE';
    type: 'action';

    signatures: createStructPersonOpiTeam.Signatures;
  };
  apiName: 'createStructPersonOpiTeam';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createStructPersonOpiTeam: createStructPersonOpiTeam = {
  apiName: 'createStructPersonOpiTeam',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
