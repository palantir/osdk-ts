import { BaseObjectSet } from '@osdk/legacy-client';
import type { ObjectTypeWithAllPropertyTypes } from './ObjectTypeWithAllPropertyTypes.js';
import type { Person } from './Person.js';
import type { Todo } from './Todo.js';

export interface Objects {
  Todo: BaseObjectSet<Todo>;
  Person: BaseObjectSet<Person>;
  ObjectTypeWithAllPropertyTypes: BaseObjectSet<ObjectTypeWithAllPropertyTypes>;
}
