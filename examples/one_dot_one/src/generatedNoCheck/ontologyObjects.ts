import { BaseObjectSet } from '@osdk/legacy-client';
import { ObjectTypeWithAllPropertyTypes, Person, Todo } from './objects';

export interface Objects {
  Todo: BaseObjectSet<Todo>;
  Person: BaseObjectSet<Person>;
  ObjectTypeWithAllPropertyTypes: BaseObjectSet<ObjectTypeWithAllPropertyTypes>;
}
