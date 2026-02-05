import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Employee } from '../objects/Employee.js';

export namespace modifyEmployee {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    adUsername: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    businessArea: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    businessTitle: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    department: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    emailPrimaryWork: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    employee: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Employee>;
    };
    employeeDocuments: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'mediaReference';
    };
    employeeFile: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'attachment';
    };
    employeeMedia: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'mediaReference';
    };
    favoritePlaceArea: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'geoshape';
    };
    favPlace: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'geohash';
    };
    firstFullTimeStartDate: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'datetime';
    };
    firstInternStartDate: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'datetime';
    };
    fullName: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    jobProfile: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    jobTitle: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    latestVenture: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: ActionMetadata.DataType.Struct<{ days: 'integer'; venture: 'string' }>;
    };
    leadEmployeeNumber: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'integer';
    };
    locationCity: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    locationCountry: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    locationName: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    locationRegion: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    locationType: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    mentorEmployeeNumber: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'integer';
    };
    newProperty1: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    preferredNameFirst: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    preferredNameLast: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    primary_office_id: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    team: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    workerType: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
  };

  export interface Params {
    readonly adUsername?: ActionParam.PrimitiveType<'string'> | null;

    readonly businessArea?: ActionParam.PrimitiveType<'string'> | null;

    readonly businessTitle?: ActionParam.PrimitiveType<'string'> | null;

    readonly department?: ActionParam.PrimitiveType<'string'> | null;

    readonly emailPrimaryWork: ActionParam.PrimitiveType<'string'>;

    readonly employee: ActionParam.ObjectType<Employee>;

    readonly employeeDocuments?: ActionParam.PrimitiveType<'mediaReference'> | null;

    readonly employeeFile?: ActionParam.PrimitiveType<'attachment'> | null;

    readonly employeeMedia?: ActionParam.PrimitiveType<'mediaReference'> | null;

    readonly favoritePlaceArea?: ActionParam.PrimitiveType<'geoshape'> | null;

    readonly favPlace?: ActionParam.PrimitiveType<'geohash'> | null;

    readonly firstFullTimeStartDate?: ActionParam.PrimitiveType<'datetime'> | null;

    readonly firstInternStartDate?: ActionParam.PrimitiveType<'datetime'> | null;

    readonly fullName?: ActionParam.PrimitiveType<'string'> | null;

    readonly jobProfile?: ActionParam.PrimitiveType<'string'> | null;

    readonly jobTitle?: ActionParam.PrimitiveType<'string'> | null;

    readonly latestVenture?: ActionParam.StructType<{ days: 'integer'; venture: 'string' }> | null;

    readonly leadEmployeeNumber?: ActionParam.PrimitiveType<'integer'> | null;

    readonly locationCity?: ActionParam.PrimitiveType<'string'> | null;

    readonly locationCountry?: ActionParam.PrimitiveType<'string'> | null;

    readonly locationName?: ActionParam.PrimitiveType<'string'> | null;

    readonly locationRegion?: ActionParam.PrimitiveType<'string'> | null;

    readonly locationType?: ActionParam.PrimitiveType<'string'> | null;

    readonly mentorEmployeeNumber?: ActionParam.PrimitiveType<'integer'> | null;

    readonly newProperty1?: ActionParam.PrimitiveType<'string'> | null;

    readonly preferredNameFirst?: ActionParam.PrimitiveType<'string'> | null;

    readonly preferredNameLast?: ActionParam.PrimitiveType<'string'> | null;

    readonly primary_office_id?: ActionParam.PrimitiveType<'string'> | null;

    readonly team?: ActionParam.PrimitiveType<'string'> | null;

    readonly workerType?: ActionParam.PrimitiveType<'string'> | null;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: modifyEmployee.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<modifyEmployee.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} [adUsername]
 * @param {ActionParam.PrimitiveType<"string">} [businessArea]
 * @param {ActionParam.PrimitiveType<"string">} [businessTitle]
 * @param {ActionParam.PrimitiveType<"string">} [department]
 * @param {ActionParam.PrimitiveType<"string">} emailPrimaryWork
 * @param {ActionParam.ObjectType<Employee>} employee
 * @param {ActionParam.PrimitiveType<"mediaReference">} [employeeDocuments]
 * @param {ActionParam.PrimitiveType<"attachment">} [employeeFile]
 * @param {ActionParam.PrimitiveType<"mediaReference">} [employeeMedia]
 * @param {ActionParam.PrimitiveType<"geoshape">} [favoritePlaceArea]
 * @param {ActionParam.PrimitiveType<"geohash">} [favPlace]
 * @param {ActionParam.PrimitiveType<"datetime">} [firstFullTimeStartDate]
 * @param {ActionParam.PrimitiveType<"datetime">} [firstInternStartDate]
 * @param {ActionParam.PrimitiveType<"string">} [fullName]
 * @param {ActionParam.PrimitiveType<"string">} [jobProfile]
 * @param {ActionParam.PrimitiveType<"string">} [jobTitle]
 * @param {ActionParam.StructType<{"days":"integer","venture":"string"}>} [latestVenture]
 * @param {ActionParam.PrimitiveType<"integer">} [leadEmployeeNumber]
 * @param {ActionParam.PrimitiveType<"string">} [locationCity]
 * @param {ActionParam.PrimitiveType<"string">} [locationCountry]
 * @param {ActionParam.PrimitiveType<"string">} [locationName]
 * @param {ActionParam.PrimitiveType<"string">} [locationRegion]
 * @param {ActionParam.PrimitiveType<"string">} [locationType]
 * @param {ActionParam.PrimitiveType<"integer">} [mentorEmployeeNumber]
 * @param {ActionParam.PrimitiveType<"string">} [newProperty1]
 * @param {ActionParam.PrimitiveType<"string">} [preferredNameFirst]
 * @param {ActionParam.PrimitiveType<"string">} [preferredNameLast]
 * @param {ActionParam.PrimitiveType<"string">} [primary_office_id]
 * @param {ActionParam.PrimitiveType<"string">} [team]
 * @param {ActionParam.PrimitiveType<"string">} [workerType]
 */
export interface modifyEmployee extends ActionDefinition<modifyEmployee.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'modifyEmployee';
    displayName: 'Modify Employee';
    modifiedEntities: {
      Employee: {
        created: false;
        modified: true;
      };
    };
    parameters: modifyEmployee.ParamsDefinition;
    rid: 'ri.actions.main.action-type.1e59bc2b-4f3a-47d1-82d2-7d0516c7c4ee';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: modifyEmployee.Signatures;
  };
  apiName: 'modifyEmployee';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const modifyEmployee: modifyEmployee = {
  apiName: 'modifyEmployee',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
