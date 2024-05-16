import { BaseObjectSet } from '@osdk/legacy-client';
import type { ObjectTypeWithAllPropertyTypes } from './ObjectTypeWithAllPropertyTypes.js';
import type { OsdkTodoProject } from './OsdkTodoProject.js';
import type { OsdkTodoTask } from './OsdkTodoTask.js';
import type { Person } from './Person.js';
import type { Todo } from './Todo.js';

export interface Objects {
  OsdkTodoProject: BaseObjectSet<OsdkTodoProject>;
  OsdkTodoTask: BaseObjectSet<OsdkTodoTask>;
  Todo: BaseObjectSet<Todo>;
  Person: BaseObjectSet<Person>;
  ObjectTypeWithAllPropertyTypes: BaseObjectSet<ObjectTypeWithAllPropertyTypes>;
}
