import type { ActionDefinition } from '@osdk/api';
import type { ActionReturnTypeForOptions, ApplyActionOptions, NOOP, OsdkActionParameters } from '@osdk/client';

// Represents the definition of the parameters for the action
export type ActionDef$createTodo$Params = {
  is_complete: {
    multiplicity: false;
    nullable: false;
    type: 'boolean';
  };
  Todo: {
    multiplicity: false;
    nullable: false;
    type: 'string';
  };
};

// Represents the runtime arguments for the action
export type createTodo$Params = NOOP<OsdkActionParameters<ActionDef$createTodo$Params>>;

// Represents a fqn of the action
export interface createTodo {
  /**
   * Creates Todo
   */
  <OP extends ApplyActionOptions>(args: createTodo$Params, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$createTodo extends ActionDefinition<'createTodo', 'Todo', createTodo> {
  apiName: 'createTodo';
  description: 'Creates Todo';
  modifiedEntities: { Todo: { created: true; modified: false } };
  type: 'action';
  parameters: ActionDef$createTodo$Params;
}

export const createTodo: ActionDef$createTodo = {
  type: 'action',
  apiName: 'createTodo',
  parameters: {
    Todo: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    is_complete: {
      multiplicity: false,
      type: 'boolean',
      nullable: false,
    },
  },
  description: 'Creates Todo',
  modifiedEntities: {
    Todo: {
      created: true,
      modified: false,
    },
  },
};
