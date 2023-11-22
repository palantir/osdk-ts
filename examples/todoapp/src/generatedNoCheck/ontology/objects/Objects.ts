import { BaseObjectSet } from '@osdk/legacy-client';
import type { Todo } from './Todo';

export interface Objects {
  Todo: BaseObjectSet<Todo>;
}
