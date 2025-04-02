/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type {
  ObjectMetadata as $ObjectMetadata,
  ObjectSet as $ObjectSet,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  PropertyDef as $PropertyDef,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from "../index.js";

export namespace EmployeeApiTest {
  export type PropertyKeys =
    | "employeeId"
    | "fullName"
    | "class"
    | "attachment"
    | "geopoint"
    | "timeseries"
    | "mediaReference"
    | "geotimeSeriesReference"
    | "isActive"
    | "yearsOfExperience"
    | "rank"
    | "performanceScore"
    | "hourlyRate"
    | "dateOfJoining"
    | "lastUpdated";

  export interface Links {
    readonly lead: $SingleLinkAccessor<EmployeeApiTest>;
    readonly peeps: EmployeeApiTest.ObjectSet;
  }

  export interface Props {
    readonly class: $PropType["string"] | undefined;
    readonly fullName: $PropType["string"] | undefined;
    readonly employeeId: $PropType["integer"] | undefined;
    readonly attachment: $PropType["attachment"] | undefined;
    readonly geopoint: $PropType["long"] | undefined;
    readonly timeseries: $PropType["numericTimeseries"] | undefined;
    readonly mediaReference: $PropType["mediaReference"] | undefined;
    readonly geotimeSeriesReference:
      | $PropType["geotimeSeriesReference"]
      | undefined;
    readonly isActive: $PropType["boolean"] | undefined;
    readonly yearsOfExperience: $PropType["long"] | undefined;
    readonly rank: $PropType["short"] | undefined;
    readonly performanceScore: $PropType["double"] | undefined;
    readonly hourlyRate: $PropType["float"] | undefined;
    readonly dateOfJoining: $PropType["datetime"] | undefined;
    readonly lastUpdated: $PropType["timestamp"] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet
    extends $ObjectSet<EmployeeApiTest, EmployeeApiTest.ObjectSet>
  {}
}

export interface EmployeeApiTest extends $ObjectTypeDefinition {
  type: "object";
  apiName: "Employee";
  __DefinitionMetadata?: {
    objectSet: EmployeeApiTest.ObjectSet;
    props: EmployeeApiTest.Props;
    linksType: EmployeeApiTest.Links;
    strictProps: EmployeeApiTest.StrictProps;
    apiName: "Employee";
    description: "A full-time or part-time \n\n employee of our firm";
    displayName: "Employee";
    icon: {
      type: "blueprint";
      color: "blue";
      name: "person";
    };
    implements: ["FooInterface"];
    interfaceMap: {
      FooInterface: {
        fooSpt: "fullName";
      };
    };
    inverseInterfaceMap: {
      FooInterface: {
        fullName: "fooSpt";
      };
    };
    links: {
      lead: $ObjectMetadata.Link<EmployeeApiTest, false>;
      peeps: $ObjectMetadata.Link<EmployeeApiTest, true>;
    };
    pluralDisplayName: "Employees";
    primaryKeyApiName: "employeeId";
    primaryKeyType: "integer";
    properties: {
      class: $PropertyDef<"string", "nullable", "single">;
      fullName: $PropertyDef<"string", "nullable", "single">;
      employeeId: $PropertyDef<"integer", "nullable", "single">;
      attachment: $PropertyDef<"attachment", "nullable", "single">;
      geopoint: $PropertyDef<"long", "nullable", "single">;
      timeseries: $PropertyDef<"numericTimeseries", "nullable", "single">;
      mediaReference: $PropertyDef<"mediaReference", "nullable", "single">;
      geotimeSeriesReference: $PropertyDef<
        "geotimeSeriesReference",
        "nullable",
        "single"
      >;
      isActive: $PropertyDef<"boolean", "nullable", "single">;
      yearsOfExperience: $PropertyDef<"long", "nullable", "single">;
      rank: $PropertyDef<"short", "nullable", "single">;
      performanceScore: $PropertyDef<"double", "nullable", "single">;
      hourlyRate: $PropertyDef<"float", "nullable", "single">;
      dateOfJoining: $PropertyDef<"datetime", "nullable", "single">;
      lastUpdated: $PropertyDef<"timestamp", "nullable", "single">;
    };
    rid: "ri.ontology.main.object-type.401ac022-89eb-4591-8b7e-0a912b9efb44";
    status: "ACTIVE";
    titleProperty: "fullName";
    type: "object";
    visibility: "NORMAL";
  };
}

export const EmployeeApiTest: EmployeeApiTest = {
  type: "object",
  apiName: "Employee",
};
