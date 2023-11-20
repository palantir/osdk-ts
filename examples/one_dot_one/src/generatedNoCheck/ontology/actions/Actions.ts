import type {
  ActionError,
  ActionExecutionOptions,
  ActionResponseFromOptions,
  Attachment,
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
   * @param {Person} params.object
   * @param {string} params.string
   * @param {Timestamp} params.time-stamp
   * @param {Array<LocalDate>} params.dateArray
   * @param {Array<Attachment>} params.attachmentArray
   */
  actionTakesAllParameterTypes<O extends ActionExecutionOptions>(
    params: {
      objectSet: ObjectSet<Todo>;
      object?: Person;
      string: string;
      'time-stamp': Timestamp;
      dateArray?: Array<LocalDate>;
      attachmentArray: Array<Attachment>;
    },
    options?: O,
  ): Promise<Result<ActionResponseFromOptions<O, Edits<Todo, Todo | ObjectTypeWithAllPropertyTypes>>, ActionError>>;

  /**
   * Creates a new Todo
   */
  createTodo<O extends ActionExecutionOptions>(
    options?: O,
  ): Promise<Result<ActionResponseFromOptions<O, Edits<Todo, void>>, ActionError>>;
}
