import type { ActionDefinition } from '@osdk/api';
import type {
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
  NOOP,
  OsdkActionParameters,
} from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata';

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
export type createTodo$Params =
  | NOOP<OsdkActionParameters<ActionDef$createTodo$Params>>
  | NOOP<OsdkActionParameters<ActionDef$createTodo$Params>>[];

// Represents a fqn of the action
export interface createTodo {
  /**
   * Creates Todo
   */
  <
    P extends createTodo$Params,
    OP extends P extends NOOP<OsdkActionParameters<ActionDef$createTodo$Params>>[]
      ? ApplyBatchActionOptions
      : ApplyActionOptions,
  >(
    args: P,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$createTodo extends ActionDefinition<'createTodo', 'Todo', createTodo> {
  apiName: 'createTodo';
  description: 'Creates Todo';
  modifiedEntities: { Todo: { created: true; modified: false } };
  type: 'action';
  parameters: ActionDef$createTodo$Params;
  osdkMetadata: typeof $osdkMetadata;
}

export const createTodo: ActionDef$createTodo = {
  apiName: 'createTodo',
  description: 'Creates Todo',
  modifiedEntities: {
    Todo: {
      created: true,
      modified: false,
    },
  },
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
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
