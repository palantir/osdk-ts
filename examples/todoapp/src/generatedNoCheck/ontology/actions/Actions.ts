import type {
  ActionError,
  ActionExecutionOptions,
  ActionResponseFromOptions,
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
  createTodo<
    P extends
      | {
          Todo: string;
          is_complete: boolean;
        }
      | {
          Todo: string;
          is_complete: boolean;
        }[],
    O extends P extends {
      Todo: string;
      is_complete: boolean;
    }[]
      ? BulkActionExecutionOptions
      : ActionExecutionOptions,
  >(
    params: P,
    options?: O,
  ): Promise<
    Result<
      P extends {
        Todo: string;
        is_complete: boolean;
      }[]
        ? BulkActionResponseFromOptions<O, Edits<Todo, void>>
        : ActionResponseFromOptions<O, Edits<Todo, void>>,
      ActionError
    >
  >;

  /**
   * Completes Todo
   * @param {Todo | Todo["__primaryKey"]} params.Todo
   * @param {boolean} params.is_complete
   */
  completeTodo<
    P extends
      | {
          Todo: Todo | Todo['__primaryKey'];
          is_complete: boolean;
        }
      | {
          Todo: Todo | Todo['__primaryKey'];
          is_complete: boolean;
        }[],
    O extends P extends {
      Todo: Todo | Todo['__primaryKey'];
      is_complete: boolean;
    }[]
      ? BulkActionExecutionOptions
      : ActionExecutionOptions,
  >(
    params: P,
    options?: O,
  ): Promise<
    Result<
      P extends {
        Todo: Todo | Todo['__primaryKey'];
        is_complete: boolean;
      }[]
        ? BulkActionResponseFromOptions<O, Edits<void, Todo>>
        : ActionResponseFromOptions<O, Edits<void, Todo>>,
      ActionError
    >
  >;
}
