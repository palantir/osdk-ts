import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Todo } from '../objects/Todo.js';
import type { Person } from '../objects/Person.js';

export namespace actionTakesAllParameterTypes {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    attachmentArray: {
      description: undefined;
      multiplicity: true;
      nullable: false;
      type: 'attachment';
    };
    dateArray: {
      description: undefined;
      multiplicity: true;
      nullable: true;
      type: 'datetime';
    };
    object: {
      description: 'A person Object';
      multiplicity: false;
      nullable: true;
      type: ActionMetadata.DataType.Object<Person>;
    };
    objectSet: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.ObjectSet<Todo>;
    };
    string: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    'time-stamp': {
      description: undefined;
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

    readonly dateArray?: ReadonlyArray<ActionParam.PrimitiveType<'datetime'>> | null;
    /**
     * A person Object
     */
    readonly object?: ActionParam.ObjectType<Person> | null;

    readonly objectSet: ActionParam.ObjectSetType<Todo>;

    readonly string: ActionParam.PrimitiveType<'string'>;

    readonly 'time-stamp': ActionParam.PrimitiveType<'timestamp'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * An action which takes different types of parameters
     */
    applyAction<OP extends ApplyActionOptions>(
      args: actionTakesAllParameterTypes.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<actionTakesAllParameterTypes.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * An action which takes different types of parameters
 *
 * **Note on null values:** _For optional parameters, explicitly providing a null value instead of undefined
 * can change the behavior of the applied action. If prefills are configured, null prevents them
 * from being applied. If a parameter modifies an object's property, null will clear the data from
 * the object, whereas undefined would not modify that property._
 * @param {ActionParam.PrimitiveType<"attachment">} attachmentArray
 * @param {ActionParam.PrimitiveType<"datetime">} [dateArray]
 * @param {ActionParam.ObjectType<Person>} [object] A person Object
 * @param {ActionParam.ObjectSetType<Todo>} objectSet
 * @param {ActionParam.PrimitiveType<"string">} string
 * @param {ActionParam.PrimitiveType<"timestamp">} time-stamp
 */
export interface actionTakesAllParameterTypes extends ActionDefinition<actionTakesAllParameterTypes.Signatures> {
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
