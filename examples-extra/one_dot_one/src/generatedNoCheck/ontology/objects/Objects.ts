import { BaseObjectSet } from '@osdk/legacy-client';
import type { ObjectTypeWithAllPropertyTypes } from './ObjectTypeWithAllPropertyTypes';
import type { OsdkTodoProject } from './OsdkTodoProject';
import type { OsdkTodoTask } from './OsdkTodoTask';
import type { Person } from './Person';
import type { Todo } from './Todo';

export interface Objects {
  OsdkTodoProject: BaseObjectSet<OsdkTodoProject>;
  OsdkTodoTask: BaseObjectSet<OsdkTodoTask>;
  Todo: BaseObjectSet<Todo>;
  Person: BaseObjectSet<Person>;
  ObjectTypeWithAllPropertyTypes: BaseObjectSet<ObjectTypeWithAllPropertyTypes>;
}
