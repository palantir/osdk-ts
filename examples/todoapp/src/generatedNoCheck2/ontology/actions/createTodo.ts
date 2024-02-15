import type { ActionDefinition } from '@osdk/api';
import type { ActionReturnTypeForOptions, ApplyActionOptions, NOOP, OsdkActionParameters } from '@osdk/client';

// Represents the definition of the parameters for the action
export type ActionDef$createTodo$Params = {
  Todo: {
    type: 'string';
    multiplicity: false;
    nullable: false;
  };
  is_complete: {
    type: 'boolean';
    multiplicity: false;
    nullable: false;
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
  type: 'action';
  apiName: 'createTodo';
  description: 'Creates Todo';
  modifiedEntities: { Todo: { created: true; modified: false } };
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
