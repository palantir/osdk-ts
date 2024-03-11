import type { OntologyDefinition } from '@osdk/api';
import { OntologyMetadata } from './OntologyMetadata.js';
import * as Actions from './ontology/actions/index.js';
import * as Interfaces from './ontology/interfaces.js';
import * as Objects from './ontology/objects.js';

const _Ontology = {
  metadata: OntologyMetadata,
  objects: {
    BoundariesUsState: Objects.BoundariesUsState,
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
} satisfies OntologyDefinition<
  'BoundariesUsState' | 'Employee' | 'ObjectTypeWithAllPropertyTypes' | 'Person' | 'Todo' | 'Venture' | 'WeatherStation'
>;

type _Ontology = typeof _Ontology;
export interface Ontology extends _Ontology {}
export const Ontology = _Ontology as Ontology;
