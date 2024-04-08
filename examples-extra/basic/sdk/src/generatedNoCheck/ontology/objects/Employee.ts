import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef, VersionBound } from '@osdk/api';

import type { Venture } from './Venture.js';

export interface Employee extends ObjectTypeDefinition<'Employee', Employee>, VersionBound<'0.15.0'> {
  description: 'An employee';
  implements: ['FooInterface'];
  inverseSpts: {
    firstName: 'name';
    email: 'description';
  };
  links: {
    lead: ObjectTypeLinkDefinition<Employee, false>;
    peeps: ObjectTypeLinkDefinition<Employee, true>;
    ventures: ObjectTypeLinkDefinition<Venture, true>;
  };
  primaryKeyApiName: 'id';
  primaryKeyType: 'string';
  properties: {
    adUsername: PropertyDef<'string', 'nullable', 'single'>;
    businessTitle: PropertyDef<'string', 'nullable', 'single'>;
    email: PropertyDef<'string', 'nullable', 'single'>;
    employeeNumber: PropertyDef<'double', 'nullable', 'single'>;
    favPlace: PropertyDef<'geopoint', 'nullable', 'single'>;
    firstFullTimeStartDate: PropertyDef<'datetime', 'nullable', 'single'>;
    firstName: PropertyDef<'string', 'nullable', 'single'>;
    id: PropertyDef<'string', 'non-nullable', 'single'>;
    jobProfile: PropertyDef<'string', 'nullable', 'single'>;
    locationCity: PropertyDef<'string', 'nullable', 'single'>;
    locationName: PropertyDef<'string', 'nullable', 'single'>;
    locationType: PropertyDef<'string', 'nullable', 'single'>;
  };
  spts: {
    name: 'firstName';
    description: 'email';
  };
}

export const Employee: Employee = {
  apiName: 'Employee',
  description: 'An employee',
  implements: ['FooInterface'],
  inverseSpts: {
    firstName: 'name',
    email: 'description',
  },
  links: {
    lead: {
      multiplicity: false,
      targetType: 'Employee',
    },
    peeps: {
      multiplicity: true,
      targetType: 'Employee',
    },
    ventures: {
      multiplicity: true,
      targetType: 'Venture',
    },
  },
  primaryKeyApiName: 'id',
  primaryKeyType: 'string',
  properties: {
    id: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    firstName: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    email: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    adUsername: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    locationName: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    locationCity: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    firstFullTimeStartDate: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
    businessTitle: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    employeeNumber: {
      multiplicity: false,
      type: 'double',
      nullable: true,
    },
    jobProfile: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    locationType: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    favPlace: {
      multiplicity: false,
      type: 'geopoint',
      nullable: true,
    },
  },
  spts: {
    name: 'firstName',
    description: 'email',
  },
  type: 'object',
};
