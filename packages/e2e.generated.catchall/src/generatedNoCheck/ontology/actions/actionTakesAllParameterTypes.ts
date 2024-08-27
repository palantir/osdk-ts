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

export namespace actionTakesAllParameterTypes {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
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
  export interface Parameters {
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

  // Represents the definition of the action
  export interface Definition
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
    parameters: actionTakesAllParameterTypes.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
  }

  // Represents a fqn of the action
  export interface Signature {
    /**
     * An action which takes different types of parameters
     */
    <
      P extends actionTakesAllParameterTypes.Parameters | ReadonlyArray<actionTakesAllParameterTypes.Parameters>,
      OP extends P extends ReadonlyArray<actionTakesAllParameterTypes.Parameters>
        ? ApplyBatchActionOptions
        : ApplyActionOptions,
    >(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @deprecated Use `actionTakesAllParameterTypes.Parameters`
 */
export type actionTakesAllParameterTypes$Params =
  | actionTakesAllParameterTypes.Parameters
  | ReadonlyArray<actionTakesAllParameterTypes.Parameters>;

/** @deprecated Use `actionTakesAllParameterTypes.Definition` **/
export type actionTakesAllParameterTypes = actionTakesAllParameterTypes.Signature;

export const actionTakesAllParameterTypes: actionTakesAllParameterTypes.Definition = {
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
