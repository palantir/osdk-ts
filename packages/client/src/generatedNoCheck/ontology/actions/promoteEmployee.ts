import { ActionDefinition } from '@osdk/api';

export const promoteEmployee = {
  apiName: 'promoteEmployee',
  parameters: {
    employeeId: {
      multiplicity: false,
      type: 'integer',
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
} satisfies ActionDefinition<'promoteEmployee', 'Employee'>;
