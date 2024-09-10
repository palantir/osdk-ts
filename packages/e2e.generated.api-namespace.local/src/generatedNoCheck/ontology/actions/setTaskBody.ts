import type { ActionDefinition, ObjectActionDataType, VersionBound } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import type { Task as $Imported$objectTypes$com$example$dep$Task } from '@osdk/e2e.generated.api-namespace.dep';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

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
      type: ObjectActionDataType<'com.example.dep.Task', $Imported$objectTypes$com$example$dep$Task.Definition>;
    };
  };

  export interface Params {
    readonly body: ActionParam.PrimitiveType<'string'>;

    readonly task: ActionParam.ObjectType<$Imported$objectTypes$com$example$dep$Task.Definition>;
  }
  /** @deprecated **/
  export type Parameters = Params;

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'setTaskBody', 'com.example.dep.Task', setTaskBody.Signatures>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'setTaskBody';
    modifiedEntities: { 'com.example.dep.Task': { created: false; modified: true } };
    type: 'action';
    parameters: setTaskBody.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
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
 * @deprecated Use `setTaskBody.Params`
 */
export type setTaskBody$Params = setTaskBody.Params | ReadonlyArray<setTaskBody.Params>;

/** @deprecated Use `setTaskBody.Definition` **/
export type setTaskBody = setTaskBody.Signatures;

export const setTaskBody: setTaskBody.Definition = {
  apiName: 'setTaskBody',
  modifiedEntities: {
    'com.example.dep.Task': {
      created: false,
      modified: true,
    },
  },
  parameters: {
    task: {
      multiplicity: false,
      type: {
        type: 'object',
        object: 'com.example.dep.Task',
      },
      nullable: false,
    },
    body: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
  },
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
