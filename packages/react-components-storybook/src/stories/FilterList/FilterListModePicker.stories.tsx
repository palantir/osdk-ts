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

import type {
  FilterDefinitionUnion,
  FilterListProps,
} from "@osdk/react-components/experimental/filter-list";
import { FilterList } from "@osdk/react-components/experimental/filter-list";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useMemo } from "react";
import { userEvent, waitFor, within } from "storybook/test";
import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";
import styles from "./FilterListModePicker.module.css";

type EmployeeFilterListProps = FilterListProps<typeof Employee>;

const keepingFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "department",
  key: "department",
  label: "Department",
  filterComponent: "LISTOGRAM",
  filterState: { type: "EXACT_MATCH", values: ["Marketing"] },
};

const excludingFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "department",
  key: "department",
  label: "Department",
  filterComponent: "LISTOGRAM",
  filterState: {
    type: "EXACT_MATCH",
    values: ["Marketing"],
    isExcluding: true,
  },
};

const meta: Meta<EmployeeFilterListProps> = {
  title: "Beta/FilterList",
  component: FilterList,
  parameters: {
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
    docs: {
      description: {
        component:
          "Side-by-side rendering of the FilterList mode picker (the small "
          + "`Keeping` / `Excluding` dropdown that appears in the inline "
          + "exclude row). Demonstrates the visual contrast between the "
          + "default state and the active `[data-excluding]` state.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

function ModePickerStatesRender(): React.ReactElement {
  const keepingDefinitions = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [keepingFilter],
    [],
  );
  const excludingDefinitions = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [excludingFilter],
    [],
  );
  return (
    <div className={styles.row}>
      <div className={styles.column} data-testid="mode-picker-keeping">
        <p className={styles.heading}>Unselected (Keeping)</p>
        <FilterList
          objectType={Employee}
          filterDefinitions={keepingDefinitions}
          onFilterRemoved={() => {}}
        />
      </div>
      <div className={styles.column} data-testid="mode-picker-excluding">
        <p className={styles.heading}>Selected (Excluding)</p>
        <FilterList
          objectType={Employee}
          filterDefinitions={excludingDefinitions}
          onFilterRemoved={() => {}}
        />
      </div>
    </div>
  );
}

export const ModePickerStates: Story = {
  parameters: {
    docs: {
      description: {
        story: "Opens the More actions overflow on each card to reveal the "
          + "Keeping / Excluding mode picker. The trigger on the right side "
          + "renders in the selected state because its filter state has "
          + "`isExcluding: true`, so the trigger picks up bold weight, the "
          + "header-action-bg-active background, and an inset underline.",
      },
    },
  },
  render: () => <ModePickerStatesRender />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const keepingPanel = await canvas.findByTestId("mode-picker-keeping");
    const excludingPanel = await canvas.findByTestId("mode-picker-excluding");

    const keepingMoreActions = await within(keepingPanel).findByRole("button", {
      name: /more actions/i,
    });
    const excludingMoreActions = await within(excludingPanel).findByRole(
      "button",
      { name: /more actions/i },
    );

    await userEvent.click(keepingMoreActions);
    await userEvent.click(excludingMoreActions);

    await waitFor(async () => {
      await within(keepingPanel).findByRole("button", { name: /keeping/i });
      await within(excludingPanel).findByRole("button", {
        name: /excluding/i,
      });
    });
  },
};
