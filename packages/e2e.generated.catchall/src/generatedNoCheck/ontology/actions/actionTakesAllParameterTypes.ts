import type { ActionDefinition, ObjectActionDataType, ObjectSetActionDataType, VersionBound } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Person } from '../objects/Person.js';
import type { Todo } from '../objects/Todo.js';

// Represents the definition of the parameters for the action
export type ActionDef$actionTakesAllParameterTypes$Params = {
  attachmentArray: {
    multiplicity: true;
    nullable: false;
    type: 'attachment';
  };
  dateArray: {
    multiplicity: true;
    nullable: true;
    type: 'datetime';
  };
  object: {
    description: 'A person Object';
    multiplicity: false;
    nullable: true;
    type: ObjectActionDataType<'Person', Person>;
  };
  objectSet: {
    multiplicity: false;
    nullable: false;
    type: ObjectSetActionDataType<'Todo', Todo>;
  };
  string: {
    multiplicity: false;
    nullable: false;
    type: 'string';
  };
  'time-stamp': {
    multiplicity: false;
    nullable: false;
    type: 'timestamp';
  };
};

/**
 * An action which takes different types of parameters
 */
export interface ActionParams$actionTakesAllParameterTypes {
  readonly attachmentArray: ReadonlyArray<ActionParam.PrimitiveType<'attachment'>>;

  readonly dateArray?: ReadonlyArray<ActionParam.PrimitiveType<'datetime'>>;
  /**
   * A person Object
   */
  readonly object?: ActionParam.ObjectType<Person>;

  readonly objectSet: ActionParam.ObjectSetType<Todo>;

  readonly string: ActionParam.PrimitiveType<'string'>;

  readonly 'time-stamp': ActionParam.PrimitiveType<'timestamp'>;
}

/**
 * @deprecated Use `ActionParams$actionTakesAllParameterTypes`
 */
export type actionTakesAllParameterTypes$Params =
  | ActionParams$actionTakesAllParameterTypes
  | ReadonlyArray<ActionParams$actionTakesAllParameterTypes>;

// Represents a fqn of the action
export interface actionTakesAllParameterTypes {
  /**
   * An action which takes different types of parameters
   */
  <
    P extends ActionParams$actionTakesAllParameterTypes | ReadonlyArray<ActionParams$actionTakesAllParameterTypes>,
    OP extends P extends ReadonlyArray<ActionParams$actionTakesAllParameterTypes>
      ? ApplyBatchActionOptions
      : ApplyActionOptions,
  >(
    args: P,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$actionTakesAllParameterTypes
  extends ActionDefinition<
      'actionTakesAllParameterTypes',
      'Todo' | 'ObjectTypeWithAllPropertyTypes' | 'Person',
      actionTakesAllParameterTypes
    >,
    VersionBound<$ExpectedClientVersion> {
  apiName: 'actionTakesAllParameterTypes';
  description: 'An action which takes different types of parameters';
  modifiedEntities: {
    Todo: { created: true; modified: true };
    ObjectTypeWithAllPropertyTypes: { created: false; modified: true };
  };
  type: 'action';
  parameters: ActionDef$actionTakesAllParameterTypes$Params;
  osdkMetadata: typeof $osdkMetadata;
}

export const actionTakesAllParameterTypes: ActionDef$actionTakesAllParameterTypes = {
  apiName: 'actionTakesAllParameterTypes',
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
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
