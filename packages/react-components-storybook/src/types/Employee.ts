import type {
  ObjectMetadata as $ObjectMetadata,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  PropertyDef as $PropertyDef,
} from "@osdk/api";
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from "@osdk/api";

export namespace Employee {
  export type PropertyKeys =
    | "jobProfile"
    | "mentorEmployeeNumber"
    | "locationName"
    | "fullName"
    | "favoritePlaceArea"
    | "employeeDocuments"
    | "leadEmployeeNumber"
    | "employeeFile"
    | "firstFullTimeStartDate"
    | "preferredNameLast"
    | "jobTitle"
    | "preferredNameFirst"
    | "firstInternStartDate"
    | "locationCity"
    | "workerType"
    | "department"
    | "employeeNumber"
    | "primaryOfficeId"
    | "adUsername"
    | "businessTitle"
    | "employeeMedia"
    | "locationCountry"
    | "businessArea"
    | "newProperty1"
    | "emailPrimaryWork"
    | "locationRegion"
    | "team"
    | "favPlace"
    | "locationType";

  export interface Links {
    readonly lead: $SingleLinkAccessor<Employee>;
    readonly peeps: $ObjectSet<Employee>;
  }

  export interface Props {
    readonly jobProfile: $PropType["string"] | undefined;
    readonly mentorEmployeeNumber: $PropType["integer"] | undefined;
    readonly locationName: $PropType["string"] | undefined;
    readonly fullName: $PropType["string"];
    readonly favoritePlaceArea: $PropType["geoshape"] | undefined;
    readonly employeeDocuments: $PropType["mediaReference"] | undefined;
    readonly leadEmployeeNumber: $PropType["integer"] | undefined;
    readonly employeeFile: $PropType["attachment"] | undefined;
    readonly firstFullTimeStartDate: $PropType["datetime"] | undefined;
    readonly preferredNameLast: $PropType["string"] | undefined;
    readonly latestVenture: { venture?: string; days?: number } | undefined;
    readonly jobTitle: $PropType["string"] | undefined;
    readonly preferredNameFirst: $PropType["string"] | undefined;
    readonly firstInternStartDate: $PropType["datetime"] | undefined;
    readonly locationCity: $PropType["string"] | undefined;
    readonly workerType: $PropType["string"] | undefined;
    readonly department: $PropType["string"] | undefined;
    readonly employeeNumber: $PropType["integer"];
    readonly primaryOfficeId: $PropType["string"] | undefined;
    readonly adUsername: $PropType["string"] | undefined;
    readonly businessTitle: $PropType["string"] | undefined;
    readonly employeeMedia: $PropType["mediaReference"] | undefined;
    readonly locationCountry: $PropType["string"] | undefined;
    readonly businessArea: $PropType["string"] | undefined;
    readonly newProperty1: $PropType["string"] | undefined;
    readonly emailPrimaryWork: $PropType["string"] | undefined;
    readonly locationRegion: $PropType["string"] | undefined;
    readonly team: $PropType["string"] | undefined;
    readonly favPlace: $PropType["geopoint"] | undefined;
    readonly locationType: $PropType["string"] | undefined;
  }

  export interface StrictProps {
    readonly jobProfile: $PropType["string"] | undefined;
    readonly mentorEmployeeNumber: $PropType["integer"] | undefined;
    readonly locationName: $PropType["string"] | undefined;
    readonly fullName: $PropType["string"];
    readonly favoritePlaceArea: $PropType["geoshape"] | undefined;
    readonly employeeDocuments: $PropType["mediaReference"] | undefined;
    readonly leadEmployeeNumber: $PropType["integer"] | undefined;
    readonly employeeFile: $PropType["attachment"] | undefined;
    readonly firstFullTimeStartDate: $PropType["datetime"] | undefined;
    readonly preferredNameLast: $PropType["string"] | undefined;
    readonly latestVenture: { venture?: string; days?: number } | undefined;
    readonly jobTitle: $PropType["string"] | undefined;
    readonly preferredNameFirst: $PropType["string"] | undefined;
    readonly firstInternStartDate: $PropType["datetime"] | undefined;
    readonly locationCity: $PropType["string"] | undefined;
    readonly workerType: $PropType["string"] | undefined;
    readonly department: $PropType["string"] | undefined;
    readonly employeeNumber: $PropType["integer"];
    readonly primaryOfficeId: $PropType["string"] | undefined;
    readonly adUsername: $PropType["string"] | undefined;
    readonly businessTitle: $PropType["string"] | undefined;
    readonly employeeMedia: $PropType["mediaReference"] | undefined;
    readonly locationCountry: $PropType["string"] | undefined;
    readonly businessArea: $PropType["string"] | undefined;
    readonly newProperty1: $PropType["string"] | undefined;
    readonly emailPrimaryWork: $PropType["string"] | undefined;
    readonly locationRegion: $PropType["string"] | undefined;
    readonly team: $PropType["string"] | undefined;
    readonly favPlace: $PropType["geopoint"] | undefined;
    readonly locationType: $PropType["string"] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<Employee, Employee.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | "$rid" = never,
    K extends PropertyKeys = PropertyKeys,
  > = $Osdk.Instance<Employee, OPTIONS, K>;
}

export interface Employee extends $ObjectTypeDefinition {
  type: "object";
  apiName: "Employee";
  __DefinitionMetadata?: {
    objectSet: Employee.ObjectSet;
    props: Employee.Props;
    linksType: Employee.Links;
    strictProps: Employee.StrictProps;
    apiName: "Employee";
    description: "";
    displayName: "Employee";
    primaryKeyApiName: "employeeNumber";
    primaryKeyType: "integer";
    properties: {
      jobProfile: $PropertyDef<"string", "nullable", "single">;
      mentorEmployeeNumber: $PropertyDef<"integer", "nullable", "single">;
      locationName: $PropertyDef<"string", "nullable", "single">;
      fullName: $PropertyDef<"string", "nullable", "single">;
      favoritePlaceArea: $PropertyDef<"geoshape", "nullable", "single">;
      employeeDocuments: $PropertyDef<"mediaReference", "nullable", "single">;
      leadEmployeeNumber: $PropertyDef<"integer", "nullable", "single">;
      employeeFile: $PropertyDef<"attachment", "nullable", "single">;
      firstFullTimeStartDate: $PropertyDef<"datetime", "nullable", "single">;
      preferredNameLast: $PropertyDef<"string", "nullable", "single">;
      // latestVenture is a complex type, not mapped as PropertyDef
      jobTitle: $PropertyDef<"string", "nullable", "single">;
      preferredNameFirst: $PropertyDef<"string", "nullable", "single">;
      firstInternStartDate: $PropertyDef<"datetime", "nullable", "single">;
      locationCity: $PropertyDef<"string", "nullable", "single">;
      workerType: $PropertyDef<"string", "nullable", "single">;
      department: $PropertyDef<"string", "nullable", "single">;
      employeeNumber: $PropertyDef<"integer", "nullable", "single">;
      primaryOfficeId: $PropertyDef<"string", "nullable", "single">;
      adUsername: $PropertyDef<"string", "nullable", "single">;
      businessTitle: $PropertyDef<"string", "nullable", "single">;
      employeeMedia: $PropertyDef<"mediaReference", "nullable", "single">;
      locationCountry: $PropertyDef<"string", "nullable", "single">;
      businessArea: $PropertyDef<"string", "nullable", "single">;
      newProperty1: $PropertyDef<"string", "nullable", "single">;
      emailPrimaryWork: $PropertyDef<"string", "nullable", "single">;
      locationRegion: $PropertyDef<"string", "nullable", "single">;
      team: $PropertyDef<"string", "nullable", "single">;
      favPlace: $PropertyDef<"geopoint", "nullable", "single">;
      locationType: $PropertyDef<"string", "nullable", "single">;
    };
    links: {
      lead: $ObjectMetadata.Link<Employee, false>;
      peeps: $ObjectMetadata.Link<Employee, true>;
    };
    implements: ["Worker", "Person"];
    interfaceMap: {
      Worker: {
        email: "emailPrimaryWork";
        name: "fullName";
        employeeNumber: "employeeNumber";
      };
      Person: {
        email: "emailPrimaryWork";
        employeeNumber: "employeeNumber";
      };
    };
    inverseInterfaceMap: {};
    pluralDisplayName: "Employees";
    titleProperty: "fullName";
    status: "EXPERIMENTAL";
    type: "object";
    typeClasses: [];
    visibility: "NORMAL";
    rid: "ri.ontology.main.object-type.ade16a88-ecc4-4f96-9751-ca1799247d64";
    icon: {
      type: "blueprint";
      color: "#EC9A3C";
      name: "person";
    };
  };
}

export const Employee = {
  type: "object",
  apiName: "Employee",
} satisfies Employee as Employee;