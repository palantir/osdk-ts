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

import React from "react";
import { expectTypeOf } from "vitest";

import {
  BaseWorkshopModule,
  WorkshopModule,
} from "../../public/experimental/workshop-module.js";
import type {
  BaseWorkshopModuleProps,
  WorkshopModuleProps,
  WorkshopVariableValues,
} from "../../public/experimental/workshop-module.js";

type ModuleVariables = {
  count: number;
  searchText: string;
  includeArchived: boolean;
};

const moduleRid = "ri.workshop.main.module.example";
const props: WorkshopModuleProps<ModuleVariables> = {
  moduleRid,
  variables: { count: 25, searchText: null },
  onVariablesChanged: (changes) => {
    expectTypeOf(changes.count).toEqualTypeOf<number | null | undefined>();
    expectTypeOf(changes.searchText).toEqualTypeOf<string | null | undefined>();
    expectTypeOf(changes.includeArchived).toEqualTypeOf<
      boolean | null | undefined
    >();
    // @ts-expect-error callbacks only expose declared external IDs
    void changes.unknownVariable;
  },
};

const baseProps: BaseWorkshopModuleProps<ModuleVariables> = {
  ...props,
  foundryUrl: "https://foundry.example.com",
};

// The public metrics wrapper must preserve the component's type parameter.
void (<WorkshopModule<ModuleVariables> {...props} />);
void (<BaseWorkshopModule<ModuleVariables> {...baseProps} />);

// Inputs and callbacks share the same contract in JSX.
void (
  <WorkshopModule<ModuleVariables>
    moduleRid={moduleRid}
    variables={{ count: 25 }}
    onVariablesChanged={(changes) => {
      expectTypeOf(changes).toEqualTypeOf<
        WorkshopVariableValues<ModuleVariables>
      >();
    }}
  />
);

void (
  <WorkshopModule<ModuleVariables>
    moduleRid={moduleRid}
    // @ts-expect-error declared numeric variables reject strings
    variables={{ count: "25" }}
  />
);
void (
  <BaseWorkshopModule<ModuleVariables>
    {...baseProps}
    // @ts-expect-error declared external IDs reject unknown names
    variables={{ unknownVariable: true }}
  />
);
// @ts-expect-error arrays are not supported scalar variable types
void ({} satisfies WorkshopModuleProps<{ names: string[] }>);

// Existing callers can omit the contract and all variable props.
void (<WorkshopModule moduleRid={moduleRid} />);
void (
  <BaseWorkshopModule foundryUrl={baseProps.foundryUrl} moduleRid={moduleRid} />
);

// The contract can also be inferred from supplied variable values.
const variables = { count: 25 };
void (
  <WorkshopModule
    moduleRid={moduleRid}
    variables={variables}
    onVariablesChanged={(changes) => {
      expectTypeOf(changes.count).toEqualTypeOf<number | null | undefined>();
    }}
  />
);
