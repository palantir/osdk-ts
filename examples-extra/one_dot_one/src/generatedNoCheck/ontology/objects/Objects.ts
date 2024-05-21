import { BaseObjectSet } from '@osdk/legacy-client';
import type { ObjectTypeWithAllPropertyTypes } from './ObjectTypeWithAllPropertyTypes';
import type { Person } from './Person';
import type { Todo } from './Todo';

export interface Objects {
  Todo: BaseObjectSet<Todo>;
  Person: BaseObjectSet<Person>;
  ObjectTypeWithAllPropertyTypes: BaseObjectSet<ObjectTypeWithAllPropertyTypes>;
}
