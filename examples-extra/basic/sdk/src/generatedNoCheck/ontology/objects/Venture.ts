import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef } from '@osdk/api';

import type { Employee } from './Employee.js';

export interface Venture extends ObjectTypeDefinition<'Venture', Venture> {
  description: 'A venture';
  primaryKeyApiName: 'ventureId';
  primaryKeyType: 'string';
  links: {
    employees: ObjectTypeLinkDefinition<Employee, true>;
  };
  properties: {
    ventureId: PropertyDef<'string', 'non-nullable', 'single'>;
    ventureName: PropertyDef<'string', 'nullable', 'single'>;
    ventureStart: PropertyDef<'datetime', 'nullable', 'single'>;
  };
}

export const Venture: Venture = {
  type: 'object',
  apiName: 'Venture',
  description: 'A venture',
  primaryKeyApiName: 'ventureId',
  primaryKeyType: 'string',
  links: {
    employees: {
      multiplicity: true,
      targetType: 'Employee',
    },
  },
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
};
