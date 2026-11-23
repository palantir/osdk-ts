import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace modifyTestEschwartz {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    age: {
      description: undefined;
      displayName: 'Age';
      multiplicity: false;
      nullable: true;
      type: 'integer';
    };
    favFood: {
      description: undefined;
      displayName: 'Fav Food';
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    gpa: {
      description: undefined;
      displayName: 'Gpa';
      multiplicity: false;
      nullable: false;
      type: 'double';
    };
    graduated: {
      description: undefined;
      displayName: 'Graduated';
      multiplicity: false;
      nullable: true;
      type: 'boolean';
    };
  };

  export interface Params {
    readonly age?: ActionParam.PrimitiveType<'integer'> | null;

    readonly favFood?: ActionParam.PrimitiveType<'string'> | null;

    readonly gpa: ActionParam.PrimitiveType<'double'>;

    readonly graduated?: ActionParam.PrimitiveType<'boolean'> | null;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: modifyTestEschwartz.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<modifyTestEschwartz.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"integer">} [age]
 * @param {ActionParam.PrimitiveType<"string">} [favFood]
 * @param {ActionParam.PrimitiveType<"double">} gpa
 * @param {ActionParam.PrimitiveType<"boolean">} [graduated]
 */
export interface modifyTestEschwartz extends ActionDefinition<modifyTestEschwartz.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'modifyTestEschwartz';
    displayName: 'Modify TestESchwartz';
    modifiedEntities: {};
    parameters: modifyTestEschwartz.ParamsDefinition;
    returnType: {
      type: 'double';
      nullable: false;
    };
    rid: 'ri.actions.main.action-type.9b1748d2-4fe5-4638-b281-a73a151c8e6f';
    status: 'EXPERIMENTAL';
    type: 'action';
    unsanitizedApiName: 'modify-test-eschwartz';

    signatures: modifyTestEschwartz.Signatures;
  };
  apiName: 'modifyTestEschwartz';
  type: 'action';
  unsanitizedApiName: 'modify-test-eschwartz';
  osdkMetadata: typeof $osdkMetadata;
}

export const modifyTestEschwartz: modifyTestEschwartz = {
  apiName: 'modifyTestEschwartz',
  type: 'action',
  unsanitizedApiName: 'modify-test-eschwartz',
  osdkMetadata: $osdkMetadata,
};
