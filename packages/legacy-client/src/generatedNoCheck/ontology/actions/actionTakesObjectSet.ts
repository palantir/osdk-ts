import { ActionDefinition } from '@osdk/api';

export const actionTakesObjectSet = {
  apiName: 'actionTakesObjectSet',
  parameters: {
    employees: {
      multiplicity: false,
      type: {
        type: 'objectSet',
        objectSet: 'Employee',
      },
      nullable: false,
    },
  },
  description: 'An action which takes an Object Set',
  modifiedEntities: {},
} satisfies ActionDefinition<'actionTakesObjectSet', 'Employee'>;
