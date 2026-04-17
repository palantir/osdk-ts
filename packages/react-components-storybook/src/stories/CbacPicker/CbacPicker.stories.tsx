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

import {
  BaseCbacBanner,
  BaseCbacPicker,
  CbacPicker,
  CbacPickerDialog,
  computeMarkingStates,
} from "@osdk/cbac-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useMemo, useState } from "react";
import {
  mockBannerGradient,
  mockBannerSecret,
  mockBannerTopSecret,
  mockBannerUnclassified,
  mockCategoryGroups,
} from "./mockData.js";

const meta: Meta<typeof BaseCbacPicker> = {
  title: "Experimental/CbacPicker",
  tags: ["experimental"],
  component: BaseCbacPicker,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const PICKER_STYLE = { width: 500, height: 500 } as const;
const BANNER_ROW_STYLE = {
  display: "flex",
  flexDirection: "column" as const,
  gap: 12,
  width: 600,
} as const;

const EMPTY_SELECTED: string[] = [];

function InteractivePicker({
  initialSelection,
}: {
  initialSelection?: string[];
}) {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    initialSelection ?? EMPTY_SELECTED,
  );

  return (
    <div style={PICKER_STYLE}>
      <CbacPicker initialMarkingIds={selectedIds} onChange={setSelectedIds} />
    </div>
  );
}

export const Default: Story = {
  render: () => <InteractivePicker />,
};

export const WithInitialSelection: Story = {
  render: () => (
    <InteractivePicker
      initialSelection={["m-secret", "m-alpha", "m-rel-usa"]}
    />
  ),
};

function ReadOnlyPicker() {
  return (
    <div style={PICKER_STYLE}>
      <CbacPicker
        initialMarkingIds={["m-secret", "m-alpha", "m-rel-usa"]}
        onChange={() => {}}
        readOnly={true}
      />
    </div>
  );
}

export const ReadOnly: Story = {
  render: () => <ReadOnlyPicker />,
};

function WithBannerPicker() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "m-top-secret",
    "m-alpha",
    "m-bravo",
    "m-no-foreign",
  ]);

  return (
    <div style={PICKER_STYLE}>
      <CbacPicker initialMarkingIds={selectedIds} onChange={setSelectedIds} />
    </div>
  );
}

export const WithBanner: Story = {
  render: () => <WithBannerPicker />,
};

function WithImpliedAndDisallowedPicker() {
  const selectedIds = useMemo(() => ["m-secret"], []);
  const impliedIds = useMemo(() => ["m-rel-usa"], []);
  const disallowedIds = useMemo(() => ["m-top-secret"], []);

  const markingStates = useMemo(
    () => computeMarkingStates(selectedIds, impliedIds, disallowedIds),
    [selectedIds, impliedIds, disallowedIds],
  );

  const noop = useCallback(() => {}, []);

  return (
    <div style={PICKER_STYLE}>
      <BaseCbacPicker
        categories={mockCategoryGroups}
        markingStates={markingStates}
        onMarkingToggle={noop}
      />
    </div>
  );
}

export const WithImpliedAndDisallowed: Story = {
  render: () => <WithImpliedAndDisallowedPicker />,
};

function InDialogPicker() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>(EMPTY_SELECTED);

  const handleConfirm = useCallback((ids: string[]) => {
    setSelectedIds(ids);
    setIsOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Classification Picker
      </button>
      <CbacPickerDialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        onConfirm={handleConfirm}
        initialMarkingIds={selectedIds}
      />
    </div>
  );
}

export const InDialog: Story = {
  render: () => <InDialogPicker />,
};

export const BannerOnly: Story = {
  render: () => (
    <div style={BANNER_ROW_STYLE}>
      <BaseCbacBanner
        classificationString={mockBannerUnclassified.classificationString}
        textColor={mockBannerUnclassified.textColor}
        backgroundColors={mockBannerUnclassified.backgroundColors}
      />
      <BaseCbacBanner
        classificationString={mockBannerSecret.classificationString}
        textColor={mockBannerSecret.textColor}
        backgroundColors={mockBannerSecret.backgroundColors}
      />
      <BaseCbacBanner
        classificationString={mockBannerTopSecret.classificationString}
        textColor={mockBannerTopSecret.textColor}
        backgroundColors={mockBannerTopSecret.backgroundColors}
      />
      <BaseCbacBanner
        classificationString={mockBannerGradient.classificationString}
        textColor={mockBannerGradient.textColor}
        backgroundColors={mockBannerGradient.backgroundColors}
      />
    </div>
  ),
};
