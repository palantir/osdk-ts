import type {
  ActionError,
  Attachment,
  BatchActionExecutionOptions,
  BatchActionResponseFromOptions,
  Edits,
  LocalDate,
  ObjectSet,
  Result,
  Timestamp,
} from '@osdk/legacy-client';
import type { ObjectTypeWithAllPropertyTypes } from '../objects/ObjectTypeWithAllPropertyTypes';
import type { Person } from '../objects/Person';
import type { Todo } from '../objects/Todo';
export interface BatchActions {
  /**
   * An action which takes different types of parameters
   * @param {ObjectSet<Todo>} params.objectSet
   * @param {Person | Person["__primaryKey"]} params.object
   * @param {string} params.string
   * @param {Timestamp} params.time-stamp
   * @param {Array<LocalDate>} params.dateArray
   * @param {Array<Attachment>} params.attachmentArray
   */
  actionTakesAllParameterTypes<O extends BatchActionExecutionOptions>(
    params: {
      objectSet: ObjectSet<Todo>;
      object?: Person | Person['__primaryKey'];
      string: string;
      'time-stamp': Timestamp;
      dateArray?: Array<LocalDate>;
      attachmentArray: Array<Attachment>;
    }[],
    options?: O,
  ): Promise<
    Result<BatchActionResponseFromOptions<O, Edits<Todo, Todo | ObjectTypeWithAllPropertyTypes>>, ActionError>
  >;

  /**
   * Creates a new Todo
   */
  createTodo<O extends BatchActionExecutionOptions>(
    params: Record<string, never>[],
    options?: O,
  ): Promise<Result<BatchActionResponseFromOptions<O, Edits<Todo, void>>, ActionError>>;
}
