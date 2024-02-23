import type { ActionDefinition, ObjectActionDataType } from '@osdk/api';
import type { ActionReturnTypeForOptions, ApplyActionOptions, NOOP, OsdkActionParameters } from '@osdk/client';
import type { Todo } from '../objects';

// Represents the definition of the parameters for the action
export type ActionDef$completeTodo$Params = {
  Todo: {
    multiplicity: false;
    type: ObjectActionDataType<'Todo', Todo>;
    nullable: false;
    description: 'A todo Object';
  };
  is_complete: {
    multiplicity: false;
    type: 'boolean';
    nullable: false;
  };
};

// Represents the runtime arguments for the action
export type completeTodo$Params = NOOP<OsdkActionParameters<ActionDef$completeTodo$Params>>;

// Represents a fqn of the action
export interface completeTodo {
  /**
   * Completes Todo
   */
  <OP extends ApplyActionOptions>(args: completeTodo$Params, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$completeTodo extends ActionDefinition<'completeTodo', 'Todo', completeTodo> {
  type: 'action';
  apiName: 'completeTodo';
  description: 'Completes Todo';
  modifiedEntities: { Todo: { created: false; modified: true } };
  parameters: ActionDef$completeTodo$Params;
}

export const completeTodo: ActionDef$completeTodo = {
  type: 'action',
  apiName: 'completeTodo',
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
  description: 'Completes Todo',
  modifiedEntities: {
    Todo: {
      created: false,
      modified: true,
    },
  },
};
