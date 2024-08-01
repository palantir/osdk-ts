import type { ActionDefinition, ObjectActionDataType, VersionBound } from '@osdk/api';
import type {
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
  NOOP,
  OsdkActionParameters,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';
import type { Todo } from '../objects/Todo';

// Represents the definition of the parameters for the action
export type ActionDef$completeTodo$Params = {
  is_complete: {
    multiplicity: false;
    nullable: false;
    type: 'boolean';
  };
  Todo: {
    description: 'A todo Object';
    multiplicity: true;
    nullable: false;
    type: ObjectActionDataType<'Todo', Todo>;
  };
};

// Represents the runtime arguments for the action
export type completeTodo$Params =
  | NOOP<OsdkActionParameters<ActionDef$completeTodo$Params>>
  | NOOP<OsdkActionParameters<ActionDef$completeTodo$Params>>[];

// Represents a fqn of the action
export interface completeTodo {
  /**
   * Completes Todo
   */
  <
    P extends completeTodo$Params,
    OP extends P extends NOOP<OsdkActionParameters<ActionDef$completeTodo$Params>>[]
      ? ApplyBatchActionOptions
      : ApplyActionOptions,
  >(
    args: P,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$completeTodo
  extends ActionDefinition<'completeTodo', 'Todo', completeTodo>,
    VersionBound<$ExpectedClientVersion> {
  apiName: 'completeTodo';
  description: 'Completes Todo';
  modifiedEntities: { Todo: { created: false; modified: true } };
  type: 'action';
  parameters: ActionDef$completeTodo$Params;
  osdkMetadata: typeof $osdkMetadata;
}

export const completeTodo: ActionDef$completeTodo = {
  apiName: 'completeTodo',
  description: 'Completes Todo',
  modifiedEntities: {
    Todo: {
      created: false,
      modified: true,
    },
  },
  parameters: {
    Todo: {
      multiplicity: true,
      type: {
        type: 'object',
        object: 'Todo',
      },
      nullable: false,
      description: 'A todo Object',
    },
    is_complete: {
      multiplicity: false,
      type: 'boolean',
      nullable: false,
    },
  },
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
