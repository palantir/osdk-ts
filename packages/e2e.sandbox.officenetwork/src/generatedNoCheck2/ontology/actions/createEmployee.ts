import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createEmployee {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    ad_username: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    business_area: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    business_title: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    department: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    email_primary_work: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    employee_number: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'integer';
    };
    first_full_time_start_date: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'datetime';
    };
    first_intern_start_date: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    full_name: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    job_profile: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    job_title: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    lead_employee_number: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'integer';
    };
    location_city: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    location_country: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    location_name: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    location_region: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    location_type: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    mentor_employee_number: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'integer';
    };
    preferred_name_first: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    preferred_name_last: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    team: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    worker_type: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  export interface Params {
    readonly ad_username: ActionParam.PrimitiveType<'string'>;

    readonly business_area: ActionParam.PrimitiveType<'string'>;

    readonly business_title: ActionParam.PrimitiveType<'string'>;

    readonly department: ActionParam.PrimitiveType<'string'>;

    readonly email_primary_work: ActionParam.PrimitiveType<'string'>;

    readonly employee_number: ActionParam.PrimitiveType<'integer'>;

    readonly first_full_time_start_date: ActionParam.PrimitiveType<'datetime'>;

    readonly first_intern_start_date: ActionParam.PrimitiveType<'string'>;

    readonly full_name: ActionParam.PrimitiveType<'string'>;

    readonly job_profile: ActionParam.PrimitiveType<'string'>;

    readonly job_title: ActionParam.PrimitiveType<'string'>;

    readonly lead_employee_number: ActionParam.PrimitiveType<'integer'>;

    readonly location_city: ActionParam.PrimitiveType<'string'>;

    readonly location_country: ActionParam.PrimitiveType<'string'>;

    readonly location_name: ActionParam.PrimitiveType<'string'>;

    readonly location_region: ActionParam.PrimitiveType<'string'>;

    readonly location_type: ActionParam.PrimitiveType<'string'>;

    readonly mentor_employee_number: ActionParam.PrimitiveType<'integer'>;

    readonly preferred_name_first: ActionParam.PrimitiveType<'string'>;

    readonly preferred_name_last: ActionParam.PrimitiveType<'string'>;

    readonly team: ActionParam.PrimitiveType<'string'>;

    readonly worker_type: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createEmployee.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createEmployee.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} ad_username
 * @param {ActionParam.PrimitiveType<"string">} business_area
 * @param {ActionParam.PrimitiveType<"string">} business_title
 * @param {ActionParam.PrimitiveType<"string">} department
 * @param {ActionParam.PrimitiveType<"string">} email_primary_work
 * @param {ActionParam.PrimitiveType<"integer">} employee_number
 * @param {ActionParam.PrimitiveType<"datetime">} first_full_time_start_date
 * @param {ActionParam.PrimitiveType<"string">} first_intern_start_date
 * @param {ActionParam.PrimitiveType<"string">} full_name
 * @param {ActionParam.PrimitiveType<"string">} job_profile
 * @param {ActionParam.PrimitiveType<"string">} job_title
 * @param {ActionParam.PrimitiveType<"integer">} lead_employee_number
 * @param {ActionParam.PrimitiveType<"string">} location_city
 * @param {ActionParam.PrimitiveType<"string">} location_country
 * @param {ActionParam.PrimitiveType<"string">} location_name
 * @param {ActionParam.PrimitiveType<"string">} location_region
 * @param {ActionParam.PrimitiveType<"string">} location_type
 * @param {ActionParam.PrimitiveType<"integer">} mentor_employee_number
 * @param {ActionParam.PrimitiveType<"string">} preferred_name_first
 * @param {ActionParam.PrimitiveType<"string">} preferred_name_last
 * @param {ActionParam.PrimitiveType<"string">} team
 * @param {ActionParam.PrimitiveType<"string">} worker_type
 */
export interface createEmployee extends ActionDefinition<createEmployee.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createEmployee';
    displayName: 'createPerson';
    modifiedEntities: {
      Employee: {
        created: true;
        modified: false;
      };
    };
    parameters: createEmployee.ParamsDefinition;
    rid: 'ri.actions.main.action-type.685e6665-54a3-47c9-968e-544fa5e1107d';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createEmployee.Signatures;
  };
  apiName: 'createEmployee';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createEmployee: createEmployee = {
  apiName: 'createEmployee',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
