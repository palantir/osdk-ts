import type {
  FilteredPropertiesTerminalOperations as OG_FilteredPropertiesTerminalOperations,
  FilteredPropertiesTerminalOperationsWithGet as OG_FilteredPropertiesTerminalOperationsWithGet,
} from '@osdk/legacy-client';
import { OntologyObject } from '../OntologyObject.js';

/** @deprecated submodule imports aren't public api **/
export type FilteredPropertiesTerminalOperations<
  T extends OntologyObject,
  V extends Array<keyof T>,
> = OG_FilteredPropertiesTerminalOperations<T, V>;

/** @deprecated submodule imports aren't public api **/
export type FilteredPropertiesTerminalOperationsWithGet<
  T extends OntologyObject,
  V extends Array<keyof T>,
> = OG_FilteredPropertiesTerminalOperationsWithGet<T, V>;
