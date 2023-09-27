import type { ObjectDefinition } from "@osdk/api";

export const Employee = {
  apiName: "Employee",

  properties: {
    /** Username as stored in active directory */
    adUsername: {
      type: "string",
      nullable: false,
    },
    locationName: {
      type: "string",
      nullable: false,
    },
    locationCity: {
      type: "string",
      nullable: false,
    },
    startDate: {
      type: "datetime",
      nullable: true,
    },
    businessTitle: {
      type: "string",
    },
    employeeNumber: {
      type: "double",
    },
    jobProfile: {
      type: "string",
    },
    locationType: {
      type: "string",
    },
  },

  links: {
    lead: {
      targetType: "Employee",
      multiplicity: false,
    },
    peeps: {
      targetType: "Employee",
      multiplicity: true,
    },
  },
} satisfies ObjectDefinition<"Employee", "Employee">;
