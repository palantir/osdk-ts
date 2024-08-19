import type { ActionDefinition, VersionBound } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
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

/**
 * Creates Todo
 */
export interface ActionParams$createTodo {
  readonly is_complete: ActionParam.PrimitiveType<'boolean'>;

  readonly Todo: ActionParam.PrimitiveType<'string'>;
}

/**
 * @deprecated Use `ActionParams$createTodo`
 */
export type createTodo$Params = ActionParams$createTodo | ReadonlyArray<ActionParams$createTodo>;

// Represents a fqn of the action
export interface createTodo {
  /**
   * Creates Todo
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
