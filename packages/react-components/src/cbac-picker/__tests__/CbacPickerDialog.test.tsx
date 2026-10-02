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

import { cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { CbacPickerDialog } from "../CbacPickerDialog.js";
import { useCbacSelection } from "../useCbacSelection.js";

vi.mock("../useCbacSelection.js", () => ({ useCbacSelection: vi.fn() }));
vi.mock("../base/BaseCbacPickerDialog.js", () => ({
  BaseCbacPickerDialog: () => null,
}));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(useCbacSelection).mockReturnValue({
    selectedIds: [],
    selectedIdsRef: { current: [] },
    setSelectedIds: vi.fn(),
    categoryGroups: [],
    markingStates: new Map(),
    banner: undefined,
    requiredMarkingGroups: [],
    isValid: true,
    userSatisfiesMarkings: true,
    disallowedMarkingIds: [],
    isLoading: false,
    error: undefined,
    retry: vi.fn(),
    toggle: vi.fn(),
    dismiss: vi.fn(),
    reset: vi.fn(),
  });
});
afterEach(cleanup);

describe("CbacPickerDialog", () => {
  it.each([undefined, false, true, 200])(
    "passes autoFetchMore=%s to selection",
    (autoFetchMore) => {
      render(
        <CbacPickerDialog
          isOpen
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          autoFetchMore={autoFetchMore}
        />,
      );
      expect(useCbacSelection).toHaveBeenCalledWith(undefined, autoFetchMore);
    },
  );
});
