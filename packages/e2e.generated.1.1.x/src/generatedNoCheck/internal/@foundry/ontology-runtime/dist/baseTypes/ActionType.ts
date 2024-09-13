import {
  ActionExecutionMode as OG_ActionExecutionMode,
  ActionValidationResult as OG_ActionValidationResult,
  ReturnEditsMode as OG_ReturnEditsMode,
} from '@osdk/legacy-client';
import { OntologyObject } from './OntologyObject.js';

/** @deprecated submodule imports aren't public api **/
export const ActionExecutionMode = OG_ActionExecutionMode;

/** @deprecated submodule imports aren't public api **/
export const ReturnEditsMode = OG_ReturnEditsMode;

/** @deprecated submodule imports aren't public api **/
export const ActionValidationResult = OG_ActionValidationResult;

import {
  ActionExecutionOptions as OG_ActionExecutionOptions,
  BulkEdits as OG_BulkEdits,
  ValidationResponse as OG_ValidationResponse,
} from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type ActionExecutionOptions = OG_ActionExecutionOptions;

/** @deprecated submodule imports aren't public api **/
export type ValidationResponse = OG_ValidationResponse;

/** @deprecated submodule imports aren't public api **/
export type BulkEdits = OG_BulkEdits;

import {
  CreatedObjectEdits as OG_CreatedObjectEdits,
  ModifiedObjectEdits as OG_ModifiedObjectEdits,
} from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type CreatedObjectEdits<T extends OntologyObject> = OG_CreatedObjectEdits<T>;

/** @deprecated submodule imports aren't public api **/
export type ModifiedObjectEdits<T extends OntologyObject> = OG_ModifiedObjectEdits<T>;

import { Edits as OG_Edits } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type Edits<
  TAddedObjects extends OntologyObject | void,
  TModifiedObjects extends OntologyObject | void,
> = OG_Edits<TAddedObjects, TModifiedObjects>;

import { ActionResponse as OG_ActionResponse } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type ActionResponse<TEdits extends Edits<any, any> | undefined = undefined> = OG_ActionResponse<TEdits>;

import { ActionResponseFromOptions as OG_ActionResponseFromOptions } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type ActionResponseFromOptions<
  TOptions extends ActionExecutionOptions | undefined = undefined,
  TEdits extends Edits<any, any> | undefined = undefined,
> = OG_ActionResponseFromOptions<TOptions, TEdits>;
