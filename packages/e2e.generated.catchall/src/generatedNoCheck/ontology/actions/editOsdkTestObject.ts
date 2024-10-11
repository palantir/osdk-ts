import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { OsdkTestObject } from '../objects/OsdkTestObject.js';

export namespace editOsdkTestObject {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    OsdkTestObject: {
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<OsdkTestObject>;
    };
    string_property: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  export interface Params {
    readonly OsdkTestObject: ActionParam.ObjectType<OsdkTestObject>;

    readonly string_property: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<P extends editOsdkTestObject.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<editOsdkTestObject.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<OsdkTestObject>} OsdkTestObject
 * @param {ActionParam.PrimitiveType<"string">} string_property
 */
export interface editOsdkTestObject extends ActionDefinition<editOsdkTestObject.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'editOsdkTestObject';
    displayName: 'Edit Osdk Test Object';
    modifiedEntities: {
      OsdkTestObject: {
        created: false;
        modified: true;
      };
    };
    parameters: editOsdkTestObject.ParamsDefinition;
    rid: 'ri.actions.main.action-type.3d13b84a-4f85-4442-baee-34a5ceb7395e';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: editOsdkTestObject.Signatures;
  };
  apiName: 'editOsdkTestObject';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const editOsdkTestObject: editOsdkTestObject = {
  apiName: 'editOsdkTestObject',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
