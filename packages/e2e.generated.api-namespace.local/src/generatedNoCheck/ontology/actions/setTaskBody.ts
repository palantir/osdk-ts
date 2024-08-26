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

// Represents the definition of the parameters for the action
export type ActionDef$setTaskBody$Params = {
  body: {
    multiplicity: false;
    nullable: false;
    type: 'string';
  };
  task: {
    multiplicity: false;
    nullable: false;
    type: ObjectActionDataType<'com.example.dep.Task', $Imported$objectTypes$com$example$dep$Task>;
  };
};

export interface ActionParams$setTaskBody {
  readonly body: ActionParam.PrimitiveType<'string'>;

  readonly task: ActionParam.ObjectType<$Imported$objectTypes$com$example$dep$Task>;
}

/**
 * @deprecated Use `ActionParams$setTaskBody`
 */
export type setTaskBody$Params = ActionParams$setTaskBody | ReadonlyArray<ActionParams$setTaskBody>;

// Represents a fqn of the action
export interface setTaskBody {
  <
    P extends ActionParams$setTaskBody | ReadonlyArray<ActionParams$setTaskBody>,
    OP extends P extends ReadonlyArray<ActionParams$setTaskBody> ? ApplyBatchActionOptions : ApplyActionOptions,
  >(
    args: P,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$setTaskBody
  extends ActionDefinition<'setTaskBody', 'com.example.dep.Task', setTaskBody>,
    VersionBound<$ExpectedClientVersion> {
  apiName: 'setTaskBody';
  modifiedEntities: { 'com.example.dep.Task': { created: false; modified: true } };
  type: 'action';
  parameters: ActionDef$setTaskBody$Params;
  osdkMetadata: typeof $osdkMetadata;
}

export const setTaskBody: ActionDef$setTaskBody = {
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
