import { ActionDefinition } from '@osdk/api';

export const promoteEmployeeObject = {
  apiName: 'promoteEmployeeObject',
  parameters: {
    employee: {
      multiplicity: false,
      type: {
        type: 'object',
        object: 'Employee',
      },
      nullable: false,
    },
    newTitle: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    newCompensation: {
      multiplicity: false,
      type: 'double',
      nullable: false,
    },
  },
  description: "Update an employee's title and compensation",
  modifiedEntities: {
    Employee: {
      created: false,
      modified: true,
    },
  },
} satisfies ActionDefinition<'promoteEmployeeObject', 'Employee'>;
