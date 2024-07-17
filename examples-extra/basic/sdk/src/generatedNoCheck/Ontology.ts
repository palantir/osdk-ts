import type { OntologyDefinition } from '@osdk/api';
import * as Actions from './ontology/actions/index.js';
import * as Interfaces from './ontology/interfaces.js';
import * as Objects from './ontology/objects.js';
import { OntologyMetadata } from './OntologyMetadata.js';

export interface Ontology
  extends OntologyDefinition<
    | 'BoundariesUsState'
    | 'BuilderDeploymentState'
    | 'DherlihyComplexObject'
    | 'Employee'
    | 'ObjectTypeWithAllPropertyTypes'
    | 'Person'
    | 'Todo'
    | 'Venture'
    | 'WeatherStation'
  > {
  metadata: OntologyMetadata;
  objects: {
    BoundariesUsState: Objects.BoundariesUsState;
    BuilderDeploymentState: Objects.BuilderDeploymentState;
    DherlihyComplexObject: Objects.DherlihyComplexObject;
    Employee: Objects.Employee;
    ObjectTypeWithAllPropertyTypes: Objects.ObjectTypeWithAllPropertyTypes;
    Person: Objects.Person;
    Todo: Objects.Todo;
    Venture: Objects.Venture;
    WeatherStation: Objects.WeatherStation;
  };
  actions: {
    actionTakesAllParameterTypes: typeof Actions.actionTakesAllParameterTypes;
    assignEmployee1: typeof Actions.assignEmployee1;
    createTodo: typeof Actions.createTodo;
  };
  queries: {
    // TODO
  };
  interfaces: {
    FooInterface: Interfaces.FooInterface;
  };
}

export const Ontology: Ontology = {
  metadata: OntologyMetadata,
  objects: {
    BoundariesUsState: Objects.BoundariesUsState,
    BuilderDeploymentState: Objects.BuilderDeploymentState,
    DherlihyComplexObject: Objects.DherlihyComplexObject,
    Employee: Objects.Employee,
    ObjectTypeWithAllPropertyTypes: Objects.ObjectTypeWithAllPropertyTypes,
    Person: Objects.Person,
    Todo: Objects.Todo,
    Venture: Objects.Venture,
    WeatherStation: Objects.WeatherStation,
  },
  actions: {
    actionTakesAllParameterTypes: Actions.actionTakesAllParameterTypes,
    assignEmployee1: Actions.assignEmployee1,
    createTodo: Actions.createTodo,
  },
  queries: {
    // TODO
  },
  interfaces: {
    FooInterface: Interfaces.FooInterface,
  },
};
