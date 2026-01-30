import type { ObjectTypeDefinition, OsdkObject } from "@osdk/api";

export interface Employee extends OsdkObject<"Employee"> {
  readonly __apiName: "Employee";
  readonly __primaryKey: string;
  readonly employeeId: string;
  readonly fullName: string;
  readonly email: string;
  readonly jobTitle?: string;
  readonly department?: string;
  readonly officeId?: string;
  readonly firstFullTimeStartDate?: string;
  readonly lead?: Employee;
}

export const Employee: ObjectTypeDefinition = {
  type: "object",
  apiName: "Employee",
} as const;
