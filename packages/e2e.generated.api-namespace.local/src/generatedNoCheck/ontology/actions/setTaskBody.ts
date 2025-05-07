import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Task as $Imported$com$example$dep$Task } from '@osdk/e2e.generated.api-namespace.dep';

export namespace setTaskBody {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    body: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    task: {
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<$Imported$com$example$dep$Task>;
    };
  };

  export interface Params {
    readonly body: ActionParam.PrimitiveType<'string'>;

    readonly task: ActionParam.ObjectType<$Imported$com$example$dep$Task>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: setTaskBody.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<setTaskBody.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} body
 * @param {ActionParam.ObjectType<$Imported$com$example$dep$Task>} task
 */
export interface setTaskBody extends ActionDefinition<setTaskBody.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'setTaskBody';
    modifiedEntities: {
      'com.example.dep.Task': {
        created: false;
        modified: true;
      };
    };
    parameters: setTaskBody.ParamsDefinition;
    rid: 'ri.a.b.c.d';
    status: 'ACTIVE';
    type: 'action';

    signatures: setTaskBody.Signatures;
  };
  apiName: 'setTaskBody';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const setTaskBody: setTaskBody = {
  apiName: 'setTaskBody',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
