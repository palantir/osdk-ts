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
import type { ExtractOptions, Osdk } from "./OsdkObjectFrom.js";

describe("ExtractOptions", () => {
  describe("NullabilityAdherence Generic", () => {
    it("does not add $notStrict for any", () => {
      expectTypeOf<ExtractOptions<any, any>>().toEqualTypeOf<never>();
    });

    it("does not add $notStrict for never", () => {
      expectTypeOf<ExtractOptions<any, never>>().toEqualTypeOf<never>();
    });

    it("does add add $notStrict for false", () => {
      expectTypeOf<ExtractOptions<any, false>>().toEqualTypeOf<"$notStrict">();
    });

    it("does not add $notStrict for throw", () => {
      expectTypeOf<ExtractOptions<any, "throw">>().toEqualTypeOf<never>();
    });

    it("does not add $notStrict for drop", () => {
      expectTypeOf<ExtractOptions<any, "drop">>().toEqualTypeOf<never>();
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
  });

  type quickAndDirty = {
    apiName: "Foo";
    type: "object";
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
    };
  };

  describe("Osdk.Instance", () => {
    it("defaults to second argument never if omitted", () => {
      type toCheck = Osdk.Instance<quickAndDirty>;
      expectTypeOf<toCheck>().toEqualTypeOf<
        Osdk.Instance<quickAndDirty, never>
      >();

      // ensure its the strict type
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["strictProps"]
      >();
    });

    it("defaults to second argument never if never", () => {
      type toCheck = Osdk.Instance<quickAndDirty, never>;
      expectTypeOf<toCheck>().toEqualTypeOf<
        Osdk.Instance<quickAndDirty, never>
      >();
      // ensure its the strict type
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["strictProps"]
      >();
    });

    it("defaults to second argument never if any", () => {
      type toCheck = Osdk.Instance<quickAndDirty, any>;
      expectTypeOf<toCheck>().branded.toEqualTypeOf<
        Osdk.Instance<quickAndDirty, never>
      >();
      // ensure its the strict type
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["strictProps"]
      >();
    });

    it("uses not strict if requested", () => {
      type toCheck = Osdk.Instance<quickAndDirty, "$notStrict">;
      expectTypeOf<toCheck>().branded
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
          Osdk.Instance<quickAndDirty, never, "name" | "foo">
        >();
    });

    it("defaults to last argument exactly if specified", () => {
      expectTypeOf<Osdk.Instance<quickAndDirty, never, "name">>().branded
        .toEqualTypeOf<
          Osdk.Instance<quickAndDirty, never, "name">
        >();
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

      // ensure its the strict type
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["strictProps"]
      >();
    });

    it("returns $rid if only thing specified", () => {
      type toCheck = Osdk<quickAndDirty, "$rid">;
      expectTypeOf<toCheck>().toEqualTypeOf<
        Osdk.Instance<quickAndDirty, "$rid">
      >();

      // expect rid
      expectTypeOf<keyof toCheck & "$rid">().toEqualTypeOf<"$rid">();

      // ensure its the strict type
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["strictProps"]
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

      // ensure its the strict type
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["strictProps"]
      >();
    });

    it("handles legacy properly: just $all", () => {
      type toCheck = Osdk<quickAndDirty, "$all">;
      expectTypeOf<toCheck>().branded.toEqualTypeOf<
        Osdk.Instance<quickAndDirty, never, "name" | "foo">
      >();

      // expect no rid
      expectTypeOf<keyof toCheck & "$rid">().toEqualTypeOf<never>();

      // ensure its the strict type
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["strictProps"]
      >();
    });

    it("defaults to second argument never if never", () => {
      type toCheck = Osdk<quickAndDirty, never>;
      expectTypeOf<toCheck>().toEqualTypeOf<
        Osdk.Instance<quickAndDirty, never>
      >();
      // ensure its the strict type
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["strictProps"]
      >();

      // expect no rid
      expectTypeOf<keyof toCheck & "$rid">().toEqualTypeOf<never>();
    });

    it("defaults to second argument never if any", () => {
      type toCheck = Osdk<quickAndDirty, any>;
      expectTypeOf<toCheck>().branded.toEqualTypeOf<
        Osdk.Instance<quickAndDirty, never>
      >();
      // ensure its the strict type
      expectTypeOf<Pick<toCheck, "name" | "foo">>().toEqualTypeOf<
        quickAndDirty["__DefinitionMetadata"]["strictProps"]
      >();

      // expect no rid
      expectTypeOf<keyof toCheck & "$rid">().toEqualTypeOf<never>();
    });

    it("uses not strict if requested", () => {
      type toCheck = Osdk<quickAndDirty, "$notStrict">;
      expectTypeOf<toCheck>().branded
        .toEqualTypeOf<Osdk.Instance<quickAndDirty, "$notStrict">>();
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
});
