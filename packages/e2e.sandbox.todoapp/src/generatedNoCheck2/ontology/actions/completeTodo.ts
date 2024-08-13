import type { ActionDefinition, ObjectActionDataType, VersionBound } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
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
    multiplicity: false;
    nullable: false;
    type: ObjectActionDataType<'Todo', Todo>;
  };
};

/**
 * Completes Todo
 */
export interface ActionParams$completeTodo {
  readonly is_complete: ActionParam.PrimitiveType<'boolean'>;
  /**
   * A todo Object
   */
  readonly Todo: ActionParam.ObjectType<Todo>;
}

/**
 * @deprecated Use `ActionParams$completeTodo`
 */
export type completeTodo$Params = ActionParams$completeTodo | ReadonlyArray<ActionParams$completeTodo>;

// Represents a fqn of the action
export interface completeTodo {
  /**
   * Completes Todo
   */
  <
    P extends ActionParams$completeTodo | ReadonlyArray<ActionParams$completeTodo>,
    OP extends P extends ReadonlyArray<ActionParams$completeTodo> ? ApplyBatchActionOptions : ApplyActionOptions,
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
      multiplicity: false,
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
