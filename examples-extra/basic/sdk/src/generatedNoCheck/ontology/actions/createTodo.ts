import type { ActionDefinition } from '@osdk/api';
import type { ActionReturnTypeForOptions, ApplyActionOptions, NOOP, OsdkActionParameters } from '@osdk/client';

// Represents the definition of the parameters for the action
export type ActionDef$createTodo$Params = Record<string, never>;

// Represents the runtime arguments for the action
export type createTodo$Params = NOOP<OsdkActionParameters<ActionDef$createTodo$Params>>;

// Represents a fqn of the action
export interface createTodo {
  /**
   * Creates a new Todo
   */
  <OP extends ApplyActionOptions>(args: createTodo$Params, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$createTodo extends ActionDefinition<'createTodo', 'Todo', createTodo> {
  apiName: 'createTodo';
  description: 'Creates a new Todo';
  modifiedEntities: { Todo: { created: true; modified: false } };
  type: 'action';
  parameters: ActionDef$createTodo$Params;
}

export const createTodo: ActionDef$createTodo = {
  type: 'action',
  apiName: 'createTodo',
  parameters: {},
  description: 'Creates a new Todo',
  modifiedEntities: {
    Todo: {
      created: true,
      modified: false,
    },
  },
};
