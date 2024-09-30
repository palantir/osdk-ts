import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Task as $Imported$objectTypes$com$example$dep$Task } from '@osdk/e2e.generated.api-namespace.dep';

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
      type: ActionMetadata.DataType.Object<$Imported$objectTypes$com$example$dep$Task>;
    };
  };

  export interface Params {
    readonly body: ActionParam.PrimitiveType<'string'>;

    readonly task: ActionParam.ObjectType<$Imported$objectTypes$com$example$dep$Task>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<P extends setTaskBody.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<setTaskBody.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} body
 * @param {ActionParam.ObjectType<$Imported$objectTypes$com$example$dep$Task>} task
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
