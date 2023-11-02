import { BaseObjectSet } from '@osdk/legacy-client';
import { Todo, Person } from './objects';

export interface Objects {
  Todo: BaseObjectSet<Todo>;
  Person: BaseObjectSet<Person>;
}
