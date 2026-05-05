/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionDefinition } from "@osdk/api";
import { describe, expect, it } from "vitest";
import type { FormFieldDefinition } from "../FormFieldApi.js";

interface MixedActionDef extends ActionDefinition<unknown> {
  __DefinitionMetadata: {
    signatures: unknown;
    parameters: {
      enabled: { type: "boolean" };
      name: { type: "string" };
      years: { type: "integer" };
    };
    type: "action";
    apiName: "MixedAction";
    status: "ACTIVE";
    rid: string;
  };
}

describe("FormFieldDefinition", () => {
  it("preserves field key to component and defaultValue correlation", () => {
    function acceptFieldDefinition(
      _fieldDefinition: FormFieldDefinition<MixedActionDef>,
    ): void {
      // Type-only helper.
    }

    const stringField = {
      fieldKey: "name",
      label: "Name",
      fieldComponent: "TEXT_INPUT",
      defaultValue: "Ada Lovelace",
      fieldComponentProps: {},
    } satisfies FormFieldDefinition<MixedActionDef>;

    const booleanField = {
      fieldKey: "enabled",
      label: "Enabled",
      fieldComponent: "SWITCH",
      defaultValue: true,
      fieldComponentProps: {},
    } satisfies FormFieldDefinition<MixedActionDef>;

    const numberField = {
      fieldKey: "years",
      label: "Years",
      fieldComponent: "NUMBER_INPUT",
      defaultValue: 42,
      fieldComponentProps: {},
    } satisfies FormFieldDefinition<MixedActionDef>;

    // @ts-expect-error boolean parameters cannot render as text inputs.
    acceptFieldDefinition({
      fieldKey: "enabled",
      label: "Enabled",
      fieldComponent: "TEXT_INPUT",
      fieldComponentProps: {},
    });

    // @ts-expect-error boolean default values must be boolean.
    acceptFieldDefinition({
      fieldKey: "enabled",
      label: "Enabled",
      fieldComponent: "SWITCH",
      defaultValue: "true",
      fieldComponentProps: {},
    });

    // @ts-expect-error integer parameters cannot render as text inputs.
    acceptFieldDefinition({
      fieldKey: "years",
      label: "Years",
      fieldComponent: "TEXT_INPUT",
      fieldComponentProps: {},
    });

    expect([
      stringField.fieldKey,
      booleanField.fieldKey,
      numberField.fieldKey,
    ]).toEqual(["name", "enabled", "years"]);
  });
});
