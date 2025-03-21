import { BaseObjectSet } from '@osdk/legacy-client';
import type { ObjectTypeWithAllPropertyTypes } from './ObjectTypeWithAllPropertyTypes.cjs';
import type { Person } from './Person.cjs';
import type { Todo } from './Todo.cjs';
export interface Objects {
    Todo: BaseObjectSet<Todo>;
    Person: BaseObjectSet<Person>;
    ObjectTypeWithAllPropertyTypes: BaseObjectSet<ObjectTypeWithAllPropertyTypes>;
}
//# sourceMappingURL=Objects.d.ts.map