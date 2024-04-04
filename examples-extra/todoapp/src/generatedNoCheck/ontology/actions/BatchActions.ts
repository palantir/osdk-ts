import type {
  ActionError,
  BatchActionExecutionOptions,
  BatchActionResponseFromOptions,
  Edits,
  Result,
} from '@osdk/legacy-client';
import type { Todo } from '../objects/Todo';
export interface BatchActions {
  /**
   * Creates Todo
   * @param {string} params.Todo
   * @param {boolean} params.is_complete
   */
  createTodo<O extends BatchActionExecutionOptions>(
    params: {
      Todo: string;
      is_complete: boolean;
    }[],
    options?: O,
  ): Promise<Result<BatchActionResponseFromOptions<O, Edits<Todo, void>>, ActionError>>;

  /**
   * Completes Todo
   * @param {Todo | Todo["__primaryKey"]} params.Todo
   * @param {boolean} params.is_complete
   */
  completeTodo<O extends BatchActionExecutionOptions>(
    params: {
      Todo: Todo | Todo['__primaryKey'];
      is_complete: boolean;
    }[],
    options?: O,
  ): Promise<Result<BatchActionResponseFromOptions<O, Edits<void, Todo>>, ActionError>>;
}
