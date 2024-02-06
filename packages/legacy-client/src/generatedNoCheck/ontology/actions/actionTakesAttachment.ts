import { ActionDefinition } from '@osdk/api';

export const actionTakesAttachment = {
  apiName: 'actionTakesAttachment',
  parameters: {
    attachment: {
      multiplicity: false,
      type: 'attachment',
      nullable: false,
    },
  },
  description: 'An action which takes an attachmen t',
  modifiedEntities: {},
} satisfies ActionDefinition<'actionTakesAttachment', never>;
