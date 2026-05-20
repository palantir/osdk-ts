/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { describe, expectTypeOf, it } from "vitest";
import type { NullabilityAdherence } from "./object/FetchPageArgs.js";
import { createMockObjectSet } from "./objectSet/ObjectSet.test.js";
import type { PropertyKeys } from "./ontology/ObjectOrInterface.js";
import type {
  ApplyModifiersToProps,
  MainValueTypeOf,
  ReducedTypeOf,
} from "./ontology/PropertyModifiers.js";
import type {
  ConvertProps,
  ExtractOptions,
  MapPropNamesToInterface,
  Osdk,
} from "./OsdkObjectFrom.js";
import type { EmployeeApiTest } from "./test/EmployeeApiTest.js";
import type { FooInterfaceApiTest } from "./test/FooInterfaceApiTest.js";
import type { ReducerInterfaceApiTest } from "./test/ReducerInterfaceApiTest.js";

describe("ExtractOptions", () => {
  describe("NullabilityAdherence Generic", () => {
    it("does not add $notStrict for any", () => {
      expectTypeOf<ExtractOptions<any, any>>()
        .toEqualTypeOf<never>();
    });

    it("does not add $notStrict for never", () => {
      expectTypeOf<ExtractOptions<any, never>>()
        .toEqualTypeOf<never>();
    });

    it("does not add $notStrict for false", () => {
      expectTypeOf<ExtractOptions<any, false>>()
        .toEqualTypeOf<never>();
    });

    it("does not add $notStrict for throw", () => {
      expectTypeOf<ExtractOptions<any, "throw">>()
        .toEqualTypeOf<never>();
    });

    it("does not add $notStrict for drop", () => {
      expectTypeOf<ExtractOptions<any, "drop">>()
        .toEqualTypeOf<never>();
    });

    it("does not add $notStrict for drop | throw", () => {
      expectTypeOf<ExtractOptions<any, "drop" | "throw">>()
        .toEqualTypeOf<never>();
    });

    it("does not add $notStrict for drop | false", () => {
      expectTypeOf<ExtractOptions<any, "drop" | false>>()
        .toEqualTypeOf<never>();
    });
    it("does not add $notStrict for false | throw", () => {
      expectTypeOf<ExtractOptions<any, false | "throw">>()
        .toEqualTypeOf<never>();
    });

    it("does not add $notStrict for drop | throw | false", () => {
      expectTypeOf<ExtractOptions<any, "drop" | "throw" | false>>()
        .toEqualTypeOf<never>();
    });

    it("does not add $notStrict for NullabilityAdherence", () => {
      expectTypeOf<ExtractOptions<any, NullabilityAdherence>>()
        .toEqualTypeOf<never>();
    });
  });

  describe("Rid Generic", () => {
    it("does not add $rid for false", () => {
      expectTypeOf<ExtractOptions<false, any>>().toEqualTypeOf<never>();
    });

    it("does add $rid for true", () => {
      expectTypeOf<ExtractOptions<true, any>>().toEqualTypeOf<"$rid">();
    });

    it("does not add $rid for any", () => {
      expectTypeOf<ExtractOptions<any, any>>().toEqualTypeOf<never>();
    });

    it("does not add $rid for never", () => {
      expectTypeOf<ExtractOptions<never, any>>().toEqualTypeOf<never>();
    });

    it("does not add $rid for boolean", () => {
      expectTypeOf<ExtractOptions<boolean, any>>().toEqualTypeOf<never>();
    });

    it("does not add $rid for true | false", () => {
      expectTypeOf<ExtractOptions<true | false, any>>().toEqualTypeOf<never>();
    });
  });

  type quickAndDirty = {
    apiName: "Foo";
    type: "object";
    primaryKeyApiName: "";
    primaryKeyType: "string";
    __DefinitionMetadata: {
      props: {
        name: string;
        foo: number | undefined;
      };
      strictProps: {
        name: string;
        foo: number;
      };
      apiName: "Foo";
      displayName: "";
      interfaceMap: {};
      inverseInterfaceMap: {};
      links: {};
      pluralDisplayName: "";
      primaryKeyApiName: "";
      primaryKeyType: "string";
      properties: {
        name: {
          type: "string";
        };
        foo: {
          type: "integer";
        };
      };
      rid: "";
      status: "ACTIVE";
      titleProperty: "name";
      type: "object";
      icon: undefined;
      visibility: undefined;
      description: undefined;
    };
  };

  type quickerAndDirtier = {
    apiName: "Bar";
    type: "object";
    primaryKeyApiName: "";
    primaryKeyType: "string";
    __DefinitionMetadata: {
      props: {
        name: string;
        foo: number | undefined;
        birthday: string;
      };
      strictProps: {
        name: string;
        foo: number;
        birthday: string;
      };
      apiName: "Foo";
      displayName: "";
      interfaceMap: {
        "com.my.obscure.namespace.FooBarInterface": {
          "com.my.obscure.namespace.fooInterface": "foo";
          "com.my.obscure.namespace.id": "name";
          "com.my.even.more.obscure.namespace.originDate": "birthday";
        };
      };
      inverseInterfaceMap: {
        "com.my.obscure.namespace.FooBarInterface": {
          "foo": "com.my.obscure.namespace.fooInterface";
          "name": "com.my.obscure.namespace.id";
          "birthday": "com.my.even.more.obscure.namespace.originDate";
        };
      };
      links: {};
      pluralDisplayName: "";
      primaryKeyApiName: "";
      primaryKeyType: "string";
      properties: {
        name: {
          type: "string";
          description: "";
        };
        foo: {
          type: "integer";
          description: "";
        };
        birthday: {
          type: "string";
          description: "";
        };
      };
      rid: "";
      status: "ACTIVE";
      titleProperty: "name";
      type: "object";
      icon: undefined;
      visibility: undefined;
      description: "";
    };
  };

  type quickerAndDirtierInterface = {
    apiName: "com.my.obscure.namespace.FooBarInterface";
    type: "interface";
    __DefinitionMetadata: {
      props: {
        id: string;
        "com.my.even.more.obscure.namespace.originDate": string | undefined;
        fooInterface: number;
      };
      strictProps: {
        id: string;
        "com.my.even.more.obscure.namespace.originDate": string;
        fooInterface: number;
      };
      apiName: "com.my.obscure.namespace.FooBarInterface";
      displayName: "";
      implements: [];
      implementedBy: ["Bar"];
      links: {};
      pluralDisplayName: "";
      primaryKeyApiName: "";
      properties: {
        id: {
          type: "string";
          description: "";
        };
        "com.my.even.more.obscure.namespace.originDate": {
          type: "string";
          description: "";
        };
        fooInterface: {
          type: "integer";
          description: "";
        };
      };
      rid: "";
      status: "ACTIVE";
      titleProperty: "name";
      type: "interface";
      icon: undefined;
      visibility: undefined;
      description: "";
    };
  };
  describe("Osdk.Instance", () => {
    it("defaults to second argument never if omitted", () => {
      type toCheck = Osdk.Instance<quickAndDirty>;
      expectTypeOf<toCheck>().toEqualTypeOf<
        Osdk.Instance<quickAndDirty, never>
      >();

      // ensure its the normal props
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["props"]
      >();
    });

    it("defaults to second argument never if never", () => {
      type toCheck = Osdk.Instance<quickAndDirty, never>;
      expectTypeOf<toCheck>().toEqualTypeOf<
        Osdk.Instance<quickAndDirty, never>
      >();
      // ensure its the normal props
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["props"]
      >();
    });

    it("defaults to second argument never if any", () => {
      type toCheck = Osdk.Instance<quickAndDirty, any>;
      expectTypeOf<toCheck>().branded.toEqualTypeOf<
        Osdk.Instance<quickAndDirty, never>
      >();
      // ensure its the normal props
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["props"]
      >();
    });

    it("Cannot use $notStrict", () => {
      // @ts-expect-error
      type toCheck = Osdk.Instance<quickAndDirty, "$notStrict">;

      expectTypeOf<toCheck>().branded
        // @ts-expect-error
        .toEqualTypeOf<Osdk.Instance<quickAndDirty, "$notStrict">>();
      // ensure its not the strict type
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["props"]
      >();
    });

    it("defaults to last argument all props if never", () => {
      expectTypeOf<Osdk.Instance<quickAndDirty, never, never>>().branded
        .toEqualTypeOf<
          Osdk.Instance<quickAndDirty, never, "name" | "foo">
        >();
    });

    it("defaults to last argument all props if any", () => {
      expectTypeOf<Osdk.Instance<quickAndDirty, never, any>>().branded
        .toEqualTypeOf<
          Osdk.Instance<quickAndDirty, never, "foo" | "name">
        >();
    });

    it("defaults to last argument exactly if specified", () => {
      expectTypeOf<Osdk.Instance<quickAndDirty, never, "name">>().branded
        .toEqualTypeOf<
          Osdk.Instance<quickAndDirty, never, "name">
        >();
    });

    it("Is assignable to Record<string, unknown>", () => {
      // We encountered a break where this stopped being assignable. We need to continue to support this assignment.
      const a = {} as Osdk.Instance<quickAndDirty>;
      a as Record<string, unknown>;
    });
  });

  describe("Osdk<>", () => {
    it("defaults to second argument never if omitted", () => {
      type toCheck = Osdk<quickAndDirty>;
      expectTypeOf<toCheck>().toEqualTypeOf<
        Osdk.Instance<quickAndDirty, never>
      >();

      // expect no rid
      expectTypeOf<keyof toCheck & "$rid">().toEqualTypeOf<never>();

      // ensure its the normal props
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["props"]
      >();
    });

    it("returns $rid if only thing specified", () => {
      type toCheck = Osdk<quickAndDirty, "$rid">;
      expectTypeOf<toCheck>().toEqualTypeOf<
        Osdk.Instance<quickAndDirty, "$rid">
      >();

      // expect rid
      expectTypeOf<keyof toCheck & "$rid">().toEqualTypeOf<"$rid">();

      // ensure its the normal props
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["props"]
      >();
    });

    it("handles legacy properly: $rid and name", () => {
      type toCheck = Osdk<quickAndDirty, "$rid" | "name">;
      expectTypeOf<toCheck>().toEqualTypeOf<
        Osdk.Instance<quickAndDirty, "$rid", "name">
      >();

      // expect rid
      expectTypeOf<keyof toCheck & "$rid">().toEqualTypeOf<"$rid">();

      // ensure its the strict type
      expectTypeOf<Pick<toCheck, "name">>().toEqualTypeOf<{
        name: quickAndDirty["__DefinitionMetadata"]["strictProps"]["name"];
      }>();
    });

    it("handles legacy properly: $rid and $all", () => {
      type toCheck = Osdk<quickAndDirty, "$rid" | "$all">;
      expectTypeOf<toCheck>().branded.toEqualTypeOf<
        Osdk.Instance<quickAndDirty, "$rid", "name" | "foo">
      >();

      // expect rid
      expectTypeOf<keyof toCheck & "$rid">().toEqualTypeOf<"$rid">();

      // ensure its the normal props
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["props"]
      >();
    });

    it("handles legacy properly: just $all", () => {
      type toCheck = Osdk<quickAndDirty, "$all">;
      expectTypeOf<toCheck>().branded.toEqualTypeOf<
        Osdk.Instance<quickAndDirty, never, "name" | "foo">
      >();

      // expect no rid
      expectTypeOf<keyof toCheck & "$rid">().toEqualTypeOf<never>();

      // ensure its the normal props
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["props"]
      >();
    });

    it("defaults to second argument never if never", () => {
      type toCheck = Osdk<quickAndDirty, never>;
      expectTypeOf<toCheck>().toEqualTypeOf<
        Osdk.Instance<quickAndDirty, never>
      >();
      // ensure its the normal props
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["props"]
      >();

      // expect no rid
      expectTypeOf<keyof toCheck & "$rid">().toEqualTypeOf<never>();
    });

    it("defaults to second argument never if any", () => {
      type toCheck = Osdk<quickAndDirty, any>;
      expectTypeOf<toCheck>().branded.toEqualTypeOf<
        Osdk.Instance<quickAndDirty, never>
      >();
      // ensure its the normal props
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["props"]
      >();

      // expect no rid
      expectTypeOf<keyof toCheck & "$rid">().toEqualTypeOf<never>();
    });

    it("Does not use $notStrict if requested with old type", () => {
      type toCheck = Osdk<quickAndDirty, "$notStrict">;
      expectTypeOf<toCheck>().branded
        .toEqualTypeOf<Osdk.Instance<quickAndDirty, never>>();
      // ensure its not the strict type
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["props"]
      >();

      // expect no rid
      expectTypeOf<keyof toCheck & "$rid">().toEqualTypeOf<never>();
    });

    it("defaults to last argument all props if never", () => {
      expectTypeOf<Osdk<quickAndDirty, never, never>>().branded
        .toEqualTypeOf<
          Osdk.Instance<quickAndDirty, never, "name" | "foo">
        >();
    });

    it("defaults to last argument all props if any", () => {
      expectTypeOf<Osdk<quickAndDirty, never, any>>().branded
        .toEqualTypeOf<
          Osdk.Instance<quickAndDirty, never, "name" | "foo">
        >();
    });

    it("defaults to last argument exactly if specified", () => {
      expectTypeOf<Osdk<quickAndDirty, never, "name">>()
        .toEqualTypeOf<
          Osdk.Instance<quickAndDirty, never, "name">
        >();
    });
  });

  describe("Inferred return types from fetchPage work", () => {
    const fauxObjectSet = createMockObjectSet<quickAndDirty>();

    it("is not $notStrict", async () => {
      const page = await fauxObjectSet.fetchPage();

      expectTypeOf<typeof page["data"]>().branded
        .toEqualTypeOf<
          Osdk.Instance<quickAndDirty>[]
        >();
    });
  });

  describe("Interface casting works as intended", () => {
    it("mapping as with fqn property names works", async () => {
      expectTypeOf<
        MapPropNamesToInterface<
          quickerAndDirtier,
          quickerAndDirtierInterface,
          PropertyKeys<quickerAndDirtier>
        >
      >().toEqualTypeOf<PropertyKeys<quickerAndDirtierInterface>>;

      expectTypeOf<
        ConvertProps<
          quickerAndDirtier,
          quickerAndDirtierInterface,
          PropertyKeys<quickerAndDirtier>,
          never
        >
      >().toEqualTypeOf<PropertyKeys<quickerAndDirtierInterface>>;

      expectTypeOf<
        Osdk.Instance<
          quickerAndDirtierInterface,
          never,
          PropertyKeys<quickerAndDirtierInterface>,
          {}
        >
      >()
        .toExtend<
          Osdk.Instance<
            quickerAndDirtierInterface,
            never,
            ConvertProps<
              quickerAndDirtier,
              quickerAndDirtierInterface,
              PropertyKeys<quickerAndDirtier>,
              never
            >
          >
        >();
    });
  });

  describe("Osdk.Instance with modifiers", () => {
    describe("MainValueTypeOf helper type", () => {
      it("extracts main value struct from struct property (only main value fields)", () => {
        type AddressStructDef = NonNullable<
          EmployeeApiTest["__DefinitionMetadata"]
        >["properties"]["addressStruct"];
        // Main value fields are ["city", "zipCode"], so result is struct with those fields
        expectTypeOf<MainValueTypeOf<AddressStructDef>>().toEqualTypeOf<{
          city: string;
          zipCode: string;
        }>();
      });

      it("returns never for property without mainValue", () => {
        type FullNameDef = NonNullable<
          EmployeeApiTest["__DefinitionMetadata"]
        >["properties"]["fullName"];
        expectTypeOf<MainValueTypeOf<FullNameDef>>().toEqualTypeOf<never>();
      });

      it("extracts scalar value when mainValue has a single field (array of structs)", () => {
        type BonusHistoryDef = NonNullable<
          EmployeeApiTest["__DefinitionMetadata"]
        >["properties"]["bonusHistory"];
        // Main value field is ["amount"] (single), so wire returns the scalar value
        expectTypeOf<MainValueTypeOf<BonusHistoryDef>>().toEqualTypeOf<
          number
        >();
      });
    });

    describe("ReducedTypeOf helper type", () => {
      it("extracts element type from array property with reducers", () => {
        type SalaryHistoryDef = NonNullable<
          EmployeeApiTest["__DefinitionMetadata"]
        >["properties"]["salaryHistory"];
        expectTypeOf<ReducedTypeOf<SalaryHistoryDef>>().toEqualTypeOf<number>();
      });

      it("returns never for property without reducers", () => {
        type FullNameDef = NonNullable<
          EmployeeApiTest["__DefinitionMetadata"]
        >["properties"]["fullName"];
        expectTypeOf<ReducedTypeOf<FullNameDef>>().toEqualTypeOf<never>();
      });
    });

    describe("ApplyModifiersToProps helper type", () => {
      it("transforms struct to main value struct with applyMainValue", () => {
        type Modified = ApplyModifiersToProps<
          EmployeeApiTest,
          { addressStruct: "applyMainValue" }
        >;
        // addressStruct should be struct with only main value fields | undefined
        expectTypeOf<Modified["addressStruct"]>().toEqualTypeOf<
          { city: string; zipCode: string } | undefined
        >();
        // Other props should remain unchanged
        expectTypeOf<Modified["fullName"]>().toEqualTypeOf<
          string | undefined
        >();
        expectTypeOf<Modified["salaryHistory"]>().toEqualTypeOf<
          number[] | undefined
        >();
      });

      it("transforms array to single element with applyReducers", () => {
        type Modified = ApplyModifiersToProps<
          EmployeeApiTest,
          { salaryHistory: "applyReducers" }
        >;
        // salaryHistory should be number | undefined (single element + nullable)
        expectTypeOf<Modified["salaryHistory"]>().toEqualTypeOf<
          number | undefined
        >();
        // Other props should remain unchanged
        expectTypeOf<Modified["fullName"]>().toEqualTypeOf<
          string | undefined
        >();
      });

      it("transforms array of structs with applyReducersAndExtractMainValue (single field => scalar)", () => {
        type Modified = ApplyModifiersToProps<
          EmployeeApiTest,
          { bonusHistory: "applyReducersAndExtractMainValue" }
        >;
        // bonusHistory has single mainValue field, wire returns scalar
        expectTypeOf<Modified["bonusHistory"]>().toEqualTypeOf<
          number | undefined
        >();
      });

      it("handles multiple modifiers at once", () => {
        type Modified = ApplyModifiersToProps<
          EmployeeApiTest,
          {
            addressStruct: "applyMainValue";
            salaryHistory: "applyReducers";
          }
        >;
        expectTypeOf<Modified["addressStruct"]>().toEqualTypeOf<
          { city: string; zipCode: string } | undefined
        >();
        expectTypeOf<Modified["salaryHistory"]>().toEqualTypeOf<
          number | undefined
        >();
        // Unmodified props stay the same
        expectTypeOf<Modified["fullName"]>().toEqualTypeOf<
          string | undefined
        >();
      });
    });

    describe("Osdk.Instance with modifiers in P (property select)", () => {
      it("returns struct with only main value fields when applyMainValue modifier applied", () => {
        type toCheck = Osdk.Instance<
          EmployeeApiTest,
          never,
          "addressStruct:applyMainValue"
        >;
        expectTypeOf<toCheck["addressStruct"]>().toEqualTypeOf<
          { city: string; zipCode: string } | undefined
        >();
      });

      it("returns single element type when applyReducers modifier applied", () => {
        type toCheck = Osdk.Instance<
          EmployeeApiTest,
          never,
          "salaryHistory:applyReducers"
        >;
        expectTypeOf<toCheck["salaryHistory"]>().toEqualTypeOf<
          number | undefined
        >();
      });

      it("returns scalar when mainValue has single field with applyReducersAndExtractMainValue", () => {
        type toCheck = Osdk.Instance<
          EmployeeApiTest,
          never,
          "bonusHistory:applyReducersAndExtractMainValue"
        >;
        expectTypeOf<toCheck["bonusHistory"]>().toEqualTypeOf<
          number | undefined
        >();
      });

      it("preserves original types when no modifiers applied", () => {
        type toCheck = Osdk.Instance<
          EmployeeApiTest,
          never,
          "addressStruct" | "salaryHistory"
        >;
        expectTypeOf<toCheck["addressStruct"]>().toEqualTypeOf<
          { street: string; city: string; zipCode: string } | undefined
        >();
        expectTypeOf<toCheck["salaryHistory"]>().toEqualTypeOf<
          number[] | undefined
        >();
      });

      it("handles multiple properties with different modifiers", () => {
        type toCheck = Osdk.Instance<
          EmployeeApiTest,
          never,
          | "fullName"
          | "addressStruct:applyMainValue"
          | "salaryHistory:applyReducers"
        >;
        expectTypeOf<toCheck["fullName"]>().toEqualTypeOf<string | undefined>();
        expectTypeOf<toCheck["addressStruct"]>().toEqualTypeOf<
          { city: string; zipCode: string } | undefined
        >();
        expectTypeOf<toCheck["salaryHistory"]>().toEqualTypeOf<
          number | undefined
        >();
      });

      it("works with $rid option and modifiers", () => {
        type toCheck = Osdk.Instance<
          EmployeeApiTest,
          "$rid",
          "addressStruct:applyMainValue"
        >;
        expectTypeOf<toCheck["$rid"]>().toEqualTypeOf<string>();
        expectTypeOf<toCheck["addressStruct"]>().toEqualTypeOf<
          { city: string; zipCode: string } | undefined
        >();
      });
    });

    describe("Modifiers flow through fetchPage", () => {
      it("applies modifiers from fetchPage args to result type", async () => {
        const objectSet = createMockObjectSet<EmployeeApiTest>();

        const result = await objectSet.fetchPage({
          $applyModifiers: {
            addressStruct: "applyMainValue",
          },
        });

        type ResultType = (typeof result)["data"][0]["addressStruct"];
        expectTypeOf<ResultType>().toEqualTypeOf<
          { city: string; zipCode: string } | undefined
        >();
      });

      it("applies applyReducers modifier through fetchPage", async () => {
        const objectSet = createMockObjectSet<EmployeeApiTest>();

        const result = await objectSet.fetchPage({
          $applyModifiers: {
            salaryHistory: "applyReducers",
          },
        });

        // salaryHistory should be single number | undefined, not number[]
        type ResultType = (typeof result)["data"][0]["salaryHistory"];
        expectTypeOf<ResultType>().toEqualTypeOf<number | undefined>();
      });

      it("applies applyReducersAndExtractMainValue modifier through fetchPage", async () => {
        const objectSet = createMockObjectSet<EmployeeApiTest>();

        const result = await objectSet.fetchPage({
          $select: ["bonusHistory"],
          $applyModifiers: {
            bonusHistory: "applyReducersAndExtractMainValue",
          },
        });

        type OsdkType = (typeof result)["data"][0];
        expectTypeOf<OsdkType>().toEqualTypeOf<
          Osdk.Instance<
            EmployeeApiTest,
            never,
            "bonusHistory:applyReducersAndExtractMainValue",
            {}
          >
        >();
        // bonusHistory has single mainValue field, wire returns scalar
        type ResultType = (typeof result)["data"][0]["bonusHistory"];
        expectTypeOf<ResultType>().toEqualTypeOf<number | undefined>();
      });

      it("preserves unmodified properties alongside modified ones", async () => {
        const objectSet = createMockObjectSet<EmployeeApiTest>();

        const result = await objectSet.fetchPage({
          $applyModifiers: {
            "addressStruct": "applyMainValue",
          },
        });

        type Data = (typeof result)["data"][0];
        // fullName should be unchanged
        expectTypeOf<Data["fullName"]>().toEqualTypeOf<string | undefined>();
        // addressStruct should be transformed
        expectTypeOf<Data["addressStruct"]>().toEqualTypeOf<
          { city: string; zipCode: string } | undefined
        >();
        // salaryHistory should be unchanged (no modifier applied)
        expectTypeOf<Data["salaryHistory"]>().toEqualTypeOf<
          number[] | undefined
        >();
      });

      it("returns original types when no modifiers specified", async () => {
        const objectSet = createMockObjectSet<EmployeeApiTest>();

        const result = await objectSet.fetchPage({
          $select: ["addressStruct", "salaryHistory"],
        });

        type Data = (typeof result)["data"][0];
        // Should be original struct type
        expectTypeOf<Data["addressStruct"]>().toEqualTypeOf<
          { street: string; city: string; zipCode: string } | undefined
        >();
        // Should be original array type
        expectTypeOf<Data["salaryHistory"]>().toEqualTypeOf<
          number[] | undefined
        >();
      });

      it("works when using $select on a modified property", async () => {
        const objectSet = createMockObjectSet<EmployeeApiTest>();

        const result = await objectSet.fetchPage({
          $select: ["addressStruct"],
          $applyModifiers: {
            "addressStruct": "applyMainValue",
          },
        });

        type OsdkType = (typeof result)["data"][0];
        expectTypeOf<OsdkType>().toEqualTypeOf<
          Osdk.Instance<
            EmployeeApiTest,
            never,
            "addressStruct:applyMainValue",
            {}
          >
        >();

        type Data = (typeof result)["data"][0];
        // addressStruct should be transformed
        expectTypeOf<Data["addressStruct"]>().toEqualTypeOf<
          { city: string; zipCode: string } | undefined
        >();
      });

      it("disallows invalid modifiers in fetchPage args", async () => {
        const objectSet = createMockObjectSet<EmployeeApiTest>();

        await objectSet.fetchPage({
          $applyModifiers: {
            // @ts-expect-error invalid modifier value
            addressStruct: "invalidModifier",
          },
        });

        await objectSet.fetchPage({
          $applyModifiers: {
            // @ts-expect-error invalid modifier key
            invalidProp: "applyMainValue",
          },
        });
      });
    });
  });

  describe("$as from interface to OT", () => {
    it("all localProperty implementations is always allowed and yields the plain OT type", async () => {
      const ifaceObj = (await createMockObjectSet<FooInterfaceApiTest>()
        .fetchPage()).data[0];

      const result = ifaceObj.$as({} as EmployeeApiTest);
      expectTypeOf(result.fullName).toEqualTypeOf<string | undefined>();
    });

    it("interface → OT: any non-local impl rejects the cast", async () => {
      const ifaceObj = (await createMockObjectSet<ReducerInterfaceApiTest>()
        .fetchPage()).data[0];

      // @ts-expect-error — ReducerInterface has structField / reduced
      // implementations on Employee.
      ifaceObj.$as({} as EmployeeApiTest);
    });
  });
});
