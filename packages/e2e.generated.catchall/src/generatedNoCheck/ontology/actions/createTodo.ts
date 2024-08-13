import type { ActionDefinition, VersionBound } from '@osdk/api';
import type { ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

// Represents the definition of the parameters for the action
export type ActionDef$createTodo$Params = Record<string, never>;

/**
 * Creates a new Todo
 */
export interface ActionParams$createTodo {}

/**
 * @deprecated Use `ActionParams$createTodo`
 */
export type createTodo$Params = ActionParams$createTodo | ReadonlyArray<ActionParams$createTodo>;

// Represents a fqn of the action
export interface createTodo {
  /**
   * Creates a new Todo
   */
  <
    P extends ActionParams$createTodo | ReadonlyArray<ActionParams$createTodo>,
    OP extends P extends ReadonlyArray<ActionParams$createTodo> ? ApplyBatchActionOptions : ApplyActionOptions,
  >(
    args: P,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$createTodo
  extends ActionDefinition<'createTodo', 'Todo', createTodo>,
    VersionBound<$ExpectedClientVersion> {
  apiName: 'createTodo';
  description: 'Creates a new Todo';
  modifiedEntities: { Todo: { created: true; modified: false } };
  type: 'action';
  parameters: ActionDef$createTodo$Params;
  osdkMetadata: typeof $osdkMetadata;
}

export const createTodo: ActionDef$createTodo = {
  apiName: 'createTodo',
  description: 'Creates a new Todo',
  modifiedEntities: {
    Todo: {
      created: true,
      modified: false,
    },
  },
  parameters: {},
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
