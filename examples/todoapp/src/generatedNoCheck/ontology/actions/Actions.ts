import type {
  ActionError,
  ActionExecutionOptions,
  ActionResponseFromOptions,
  Edits,
  Result,
} from '@osdk/legacy-client';
import type { Todo } from '../objects/Todo';
export interface Actions {
  /**
   * Creates Todo
   * @param {string} params.Todo
   * @param {boolean} params.is_complete
   */
  createTodo<O extends ActionExecutionOptions>(
    params: {
      Todo: string;
      is_complete: boolean;
    },
    options?: O,
  ): Promise<Result<ActionResponseFromOptions<O, Edits<Todo, void>>, ActionError>>;

  /**
   * Completes Todo
   * @param {Todo} params.Todo
   * @param {boolean} params.is_complete
   */
  completeTodo<O extends ActionExecutionOptions>(
    params: {
      Todo: Todo;
      is_complete: boolean;
    },
    options?: O,
  ): Promise<Result<ActionResponseFromOptions<O, Edits<void, Todo>>, ActionError>>;
}
