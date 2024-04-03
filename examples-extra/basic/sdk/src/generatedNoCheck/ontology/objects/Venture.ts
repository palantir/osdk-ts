import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef } from '@osdk/api';

import type { Employee } from './Employee.js';

export interface Venture extends ObjectTypeDefinition<'Venture', Venture> {
  description: 'A venture';
  links: {
    employees: ObjectTypeLinkDefinition<Employee, true>;
  };
  primaryKeyApiName: 'ventureId';
  primaryKeyType: 'string';
  properties: {
    ventureId: PropertyDef<'string', 'non-nullable', 'single'>;
    ventureName: PropertyDef<'string', 'nullable', 'single'>;
    ventureStart: PropertyDef<'datetime', 'nullable', 'single'>;
  };
}

export const Venture: Venture = {
  apiName: 'Venture',
  description: 'A venture',
  links: {
    employees: {
      multiplicity: true,
      targetType: 'Employee',
    },
  },
  primaryKeyApiName: 'ventureId',
  primaryKeyType: 'string',
  properties: {
    ventureId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    ventureName: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    ventureStart: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
  },
  type: 'object',
};
