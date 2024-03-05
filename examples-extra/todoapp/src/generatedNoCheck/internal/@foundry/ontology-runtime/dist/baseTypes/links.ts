import type { MultiLink as OG_MultiLink, SingleLink as OG_SingleLink } from '@osdk/legacy-client';
import { OntologyObject } from './OntologyObject';

/** @deprecated submodule imports arent public api **/
export type SingleLink<T extends OntologyObject = OntologyObject> = OG_SingleLink<T>;

/** @deprecated submodule imports arent public api **/
export type MultiLink<T extends OntologyObject = OntologyObject> = OG_MultiLink<T>;
