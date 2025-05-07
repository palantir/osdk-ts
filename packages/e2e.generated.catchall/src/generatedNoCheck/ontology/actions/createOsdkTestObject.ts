import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createOsdkTestObject {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    description: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    osdk_object_name: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    string_property: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  export interface Params {
    readonly description: ActionParam.PrimitiveType<'string'>;

    readonly osdk_object_name: ActionParam.PrimitiveType<'string'>;

    readonly string_property: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createOsdkTestObject.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createOsdkTestObject.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} description
 * @param {ActionParam.PrimitiveType<"string">} osdk_object_name
 * @param {ActionParam.PrimitiveType<"string">} string_property
 */
export interface createOsdkTestObject extends ActionDefinition<createOsdkTestObject.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createOsdkTestObject';
    displayName: 'Create Osdk Test Object';
    modifiedEntities: {
      OsdkTestObject: {
        created: true;
        modified: false;
      };
    };
    parameters: createOsdkTestObject.ParamsDefinition;
    rid: 'ri.actions.main.action-type.75c72b90-815b-48df-a3b3-314af2e9e2eb';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createOsdkTestObject.Signatures;
  };
  apiName: 'createOsdkTestObject';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createOsdkTestObject: createOsdkTestObject = {
  apiName: 'createOsdkTestObject',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
