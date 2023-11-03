import { BaseObjectSet } from '@osdk/legacy-client';
import { Todo, Person, ObjectTypeWithAllPropertyTypes } from './objects';

export interface Objects {
  Todo: BaseObjectSet<Todo>;
  Person: BaseObjectSet<Person>;
  ObjectTypeWithAllPropertyTypes: BaseObjectSet<ObjectTypeWithAllPropertyTypes>;
}
