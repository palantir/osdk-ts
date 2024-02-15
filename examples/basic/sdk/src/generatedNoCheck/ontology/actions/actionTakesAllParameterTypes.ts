import type { ActionDefinition, ObjectActionDataType, ObjectSetActionDataType } from '@osdk/api';
import type { ActionReturnTypeForOptions, ApplyActionOptions, NOOP, OsdkActionParameters } from '@osdk/client';
import type { PersonDef, TodoDef } from '../objects.js';

// Represents the definition of the parameters for the action
export type ActionDef$actionTakesAllParameterTypes$Params = {
  objectSet: {
    type: ObjectSetActionDataType<'Todo', TodoDef>;
    multiplicity: false;
    nullable: false;
  };
  object: {
    type: ObjectActionDataType<'Person', PersonDef>;
    multiplicity: false;
    nullable: true;
    description: 'A person Object';
  };
  string: {
    type: 'string';
    multiplicity: false;
    nullable: false;
  };
  'time-stamp': {
    type: 'timestamp';
    multiplicity: false;
    nullable: false;
  };
  dateArray: {
    type: 'datetime';
    multiplicity: true;
    nullable: true;
  };
  attachmentArray: {
    type: 'attachment';
    multiplicity: true;
    nullable: false;
  };
};

// Represents the runtime arguments for the action
export type actionTakesAllParameterTypes$Params = NOOP<
  OsdkActionParameters<ActionDef$actionTakesAllParameterTypes$Params>
>;

// Represents a fqn of the action
export interface actionTakesAllParameterTypes {
  /**
   * An action which takes different types of parameters
   */
  <OP extends ApplyActionOptions>(
    args: actionTakesAllParameterTypes$Params,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$actionTakesAllParameterTypes
  extends ActionDefinition<
    'actionTakesAllParameterTypes',
    'Todo' | 'ObjectTypeWithAllPropertyTypes' | 'Person',
    actionTakesAllParameterTypes
  > {
  type: 'action';
  apiName: 'actionTakesAllParameterTypes';
  description: 'An action which takes different types of parameters';
  modifiedEntities: {
    Todo: { created: true; modified: true };
    ObjectTypeWithAllPropertyTypes: { created: false; modified: true };
  };
  parameters: ActionDef$actionTakesAllParameterTypes$Params;
}

export const actionTakesAllParameterTypes: ActionDef$actionTakesAllParameterTypes = {
  type: 'action',
  apiName: 'actionTakesAllParameterTypes',
  parameters: {
    objectSet: {
      multiplicity: false,
      type: {
        type: 'objectSet',
        objectSet: 'Todo',
      },
      nullable: false,
    },
    object: {
      multiplicity: false,
      type: {
        type: 'object',
        object: 'Person',
      },
      nullable: true,
      description: 'A person Object',
    },
    string: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    'time-stamp': {
      multiplicity: false,
      type: 'timestamp',
      nullable: false,
    },
    dateArray: {
      multiplicity: true,
      type: 'datetime',
      nullable: true,
    },
    attachmentArray: {
      multiplicity: true,
      type: 'attachment',
      nullable: false,
    },
  },
  description: 'An action which takes different types of parameters',
  modifiedEntities: {
    Todo: {
      created: true,
      modified: true,
    },
    ObjectTypeWithAllPropertyTypes: {
      created: false,
      modified: true,
    },
  },
};
