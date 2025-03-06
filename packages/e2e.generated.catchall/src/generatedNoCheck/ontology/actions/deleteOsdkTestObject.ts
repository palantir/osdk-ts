import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { OsdkTestObject } from '../objects/OsdkTestObject.js';

export namespace deleteOsdkTestObject {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    OsdkTestObject: {
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<OsdkTestObject>;
    };
  };

  export interface Params {
    readonly OsdkTestObject: ActionParam.ObjectType<OsdkTestObject>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: deleteOsdkTestObject.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<deleteOsdkTestObject.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<OsdkTestObject>} OsdkTestObject
 */
export interface deleteOsdkTestObject extends ActionDefinition<deleteOsdkTestObject.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'deleteOsdkTestObject';
    displayName: 'Delete Osdk Test Object';
    modifiedEntities: {};
    parameters: deleteOsdkTestObject.ParamsDefinition;
    rid: 'ri.actions.main.action-type.3858bab4-49c7-4fdf-a780-6ccbc359d817';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: deleteOsdkTestObject.Signatures;
  };
  apiName: 'deleteOsdkTestObject';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const deleteOsdkTestObject: deleteOsdkTestObject = {
  apiName: 'deleteOsdkTestObject',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
