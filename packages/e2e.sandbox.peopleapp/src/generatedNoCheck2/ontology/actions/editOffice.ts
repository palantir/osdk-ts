import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Office } from '../objects/Office.js';

export namespace editOffice {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    location: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'geohash';
    };
    name: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    Office: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Office>;
    };
  };

  export interface Params {
    readonly location: ActionParam.PrimitiveType<'geohash'>;

    readonly name: ActionParam.PrimitiveType<'string'>;

    readonly Office: ActionParam.ObjectType<Office>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: editOffice.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<editOffice.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"geohash">} location
 * @param {ActionParam.PrimitiveType<"string">} name
 * @param {ActionParam.ObjectType<Office>} Office
 */
export interface editOffice extends ActionDefinition<editOffice.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'editOffice';
    displayName: 'Edit Office';
    modifiedEntities: {
      Office: {
        created: false;
        modified: true;
      };
    };
    parameters: editOffice.ParamsDefinition;
    rid: 'ri.actions.main.action-type.ae41d87b-933d-4983-ad91-fce7f4ff9f59';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: editOffice.Signatures;
  };
  apiName: 'editOffice';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const editOffice: editOffice = {
  apiName: 'editOffice',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
