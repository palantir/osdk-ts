import type {
  ObjectSet,
  LocalDate,
  Timestamp,
  Attachment,
  Edits,
  ActionExecutionOptions,
  ActionError,
  Result,
  ActionResponseFromOptions,
} from '@osdk/legacy-client';
import type { Todo } from './objects/Todo';
import type { ObjectTypeWithAllPropertyTypes } from './objects/ObjectTypeWithAllPropertyTypes';
import type { Person } from './objects/Person';
export interface Actions {
  /**
   * An action which takes an Object Set
   * @param {ObjectSet<Todo>} params.objectSet
   * @param {Person} params.object
   * @param {string} params.string
   * @param {Timestamp} params.time-stamp
   * @param {LocalDate[]} params.dateArray
   * @param {Attachment[]} params.attachmentArray
   */
  actionTakesAllParameterTypes<O extends ActionExecutionOptions>(
    params: {
      objectSet: ObjectSet<Todo>;
      object?: Person;
      string: string;
      'time-stamp': Timestamp;
      dateArray?: LocalDate[];
      attachmentArray: Attachment[];
    },
    options?: O,
  ): Promise<Result<ActionResponseFromOptions<O, Edits<Todo, Todo | ObjectTypeWithAllPropertyTypes>>, ActionError>>;
}
