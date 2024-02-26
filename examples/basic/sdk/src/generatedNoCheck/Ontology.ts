import type { OntologyDefinition } from '@osdk/api';
import { OntologyMetadata } from './OntologyMetadata.js';
import * as Actions from './ontology/actions/index.js';
import * as Interfaces from './ontology/interfaces.js';
import * as Objects from './ontology/objects.js';

const _Ontology = {
  metadata: OntologyMetadata,
  objects: {
    WeatherStation: Objects.WeatherStation,
    BoundariesUsState: Objects.BoundariesUsState,
    Todo: Objects.Todo,
    Person: Objects.Person,
    Employee: Objects.Employee,
    Venture: Objects.Venture,
    ObjectTypeWithAllPropertyTypes: Objects.ObjectTypeWithAllPropertyTypes,
  },
  actions: {
    actionTakesAllParameterTypes: Actions.actionTakesAllParameterTypes,
    createTodo: Actions.createTodo,
    assignEmployee1: Actions.assignEmployee1,
  },
  queries: {
    // TODO
  },
  interfaces: {
    SimpleInterface: Interfaces.SimpleInterface,
  },
} satisfies OntologyDefinition<
  'WeatherStation' | 'BoundariesUsState' | 'Todo' | 'Person' | 'Employee' | 'Venture' | 'ObjectTypeWithAllPropertyTypes'
>;

type _Ontology = typeof _Ontology;
export interface Ontology extends _Ontology {}
export const Ontology = _Ontology as Ontology;
