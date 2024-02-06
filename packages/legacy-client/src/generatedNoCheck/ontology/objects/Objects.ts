import { BaseObjectSet } from '@osdk/legacy-client';
import type { Employee } from './Employee';
import type { ObjectWithTimestampPrimaryKey } from './ObjectWithTimestampPrimaryKey';
import type { Office } from './Office';
import type { equipment } from './equipment';
import type { objectTypeWithAllPropertyTypes } from './objectTypeWithAllPropertyTypes';

export interface Objects {
  Employee: BaseObjectSet<Employee>;
  Office: BaseObjectSet<Office>;
  objectTypeWithAllPropertyTypes: BaseObjectSet<objectTypeWithAllPropertyTypes>;
  ObjectWithTimestampPrimaryKey: BaseObjectSet<ObjectWithTimestampPrimaryKey>;
  equipment: BaseObjectSet<equipment>;
}
