import type { ActionDefinition, ObjectActionDataType, ObjectSetActionDataType } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Todo } from '../objects/Todo.js';
import type { Person } from '../objects/Person.js';

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
  export interface Params {
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

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * An action which takes different types of parameters
     */
    applyAction<P extends actionTakesAllParameterTypes.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<actionTakesAllParameterTypes.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * An action which takes different types of parameters
 * @param {ActionParam.PrimitiveType<"attachment">} attachmentArray
 * @param {ActionParam.PrimitiveType<"datetime">} [dateArray]
 * @param {ActionParam.ObjectType<Person>} [object] A person Object
 * @param {ActionParam.ObjectSetType<Todo>} objectSet
 * @param {ActionParam.PrimitiveType<"string">} string
 * @param {ActionParam.PrimitiveType<"timestamp">} time-stamp
 */
export interface actionTakesAllParameterTypes
  extends ActionDefinition<
    'actionTakesAllParameterTypes',
    'Todo' | 'ObjectTypeWithAllPropertyTypes' | 'Person',
    actionTakesAllParameterTypes.Signatures
  > {
  __DefinitionMetadata?: {
    apiName: 'actionTakesAllParameterTypes';
    description: 'An action which takes different types of parameters';
    modifiedEntities: {
      Todo: {
        created: true;
        modified: true;
      };
      ObjectTypeWithAllPropertyTypes: {
        created: false;
        modified: true;
      };
    };
    parameters: actionTakesAllParameterTypes.ParamsDefinition;
    rid: 'ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2';
    status: 'ACTIVE';
    type: 'action';

    signatures: actionTakesAllParameterTypes.Signatures;
  };
  apiName: 'actionTakesAllParameterTypes';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const actionTakesAllParameterTypes: actionTakesAllParameterTypes = {
  apiName: 'actionTakesAllParameterTypes',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
