import type {
  ActionError,
  BulkActionExecutionOptions,
  BulkActionResponseFromOptions,
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
  createTodo<O extends BulkActionExecutionOptions>(
    params: {
      Todo: string;
      is_complete: boolean;
    }[],
    options?: O,
  ): Promise<Result<BulkActionResponseFromOptions<O, Edits<Todo, void>>, ActionError>>;

  /**
   * Completes Todo
   * @param {Todo | Todo["__primaryKey"]} params.Todo
   * @param {boolean} params.is_complete
   */
  completeTodo<O extends BulkActionExecutionOptions>(
    params: {
      Todo: Todo | Todo['__primaryKey'];
      is_complete: boolean;
    }[],
    options?: O,
  ): Promise<Result<BulkActionResponseFromOptions<O, Edits<void, Todo>>, ActionError>>;
}
