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
import type { Person } from './objects/Person';
export interface Actions {
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
  ): Promise<Result<ActionResponseFromOptions<O, Edits<void, void>>, ActionError>>;
}
