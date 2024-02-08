import type {
  ActionError,
  ActionExecutionOptions,
  ActionResponseFromOptions,
  Attachment,
  BulkActionExecutionOptions,
  BulkActionResponseFromOptions,
  Edits,
  LocalDate,
  ObjectSet,
  Result,
  Timestamp,
} from '@osdk/legacy-client';
import type { ObjectTypeWithAllPropertyTypes } from '../objects/ObjectTypeWithAllPropertyTypes';
import type { Person } from '../objects/Person';
import type { Todo } from '../objects/Todo';
export interface Actions {
  /**
   * An action which takes different types of parameters
   * @param {ObjectSet<Todo>} params.objectSet
   * @param {Person | Person["__primaryKey"]} params.object
   * @param {string} params.string
   * @param {Timestamp} params.time-stamp
   * @param {Array<LocalDate>} params.dateArray
   * @param {Array<Attachment>} params.attachmentArray
   */
  actionTakesAllParameterTypes<
    P extends
      | {
          objectSet: ObjectSet<Todo>;
          object?: Person | Person['__primaryKey'];
          string: string;
          'time-stamp': Timestamp;
          dateArray?: Array<LocalDate>;
          attachmentArray: Array<Attachment>;
        }
      | {
          objectSet: ObjectSet<Todo>;
          object?: Person | Person['__primaryKey'];
          string: string;
          'time-stamp': Timestamp;
          dateArray?: Array<LocalDate>;
          attachmentArray: Array<Attachment>;
        }[],
    O extends P extends {
      objectSet: ObjectSet<Todo>;
      object?: Person | Person['__primaryKey'];
      string: string;
      'time-stamp': Timestamp;
      dateArray?: Array<LocalDate>;
      attachmentArray: Array<Attachment>;
    }[]
      ? BulkActionExecutionOptions
      : ActionExecutionOptions,
  >(
    params: P,
    options?: O,
  ): Promise<
    Result<
      P extends {
        objectSet: ObjectSet<Todo>;
        object?: Person | Person['__primaryKey'];
        string: string;
        'time-stamp': Timestamp;
        dateArray?: Array<LocalDate>;
        attachmentArray: Array<Attachment>;
      }[]
        ? BulkActionResponseFromOptions<O, Edits<Todo, Todo | ObjectTypeWithAllPropertyTypes>>
        : ActionResponseFromOptions<O, Edits<Todo, Todo | ObjectTypeWithAllPropertyTypes>>,
      ActionError
    >
  >;

  /**
   * Creates a new Todo
   */
  createTodo<O extends ActionExecutionOptions>(
    options?: O,
  ): Promise<Result<ActionResponseFromOptions<O, Edits<Todo, void>>, ActionError>>;
}
