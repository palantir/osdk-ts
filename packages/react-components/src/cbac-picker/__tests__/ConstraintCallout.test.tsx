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

import { useCbacBanner } from "@osdk/react/platform-apis";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { ConstraintCallout } from "../ConstraintCallout.js";
import type { MaxClassificationConstraint } from "../types.js";

vi.mock("@osdk/react/platform-apis", () => ({
  useCbacBanner: vi.fn(),
}));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(useCbacBanner).mockReturnValue({
    banner: undefined,
    isLoading: false,
    error: undefined,
    refetch: vi.fn(),
  } as unknown as ReturnType<typeof useCbacBanner>);
});

describe("ConstraintCallout", () => {
  afterEach(cleanup);

  it("renders the constraint's classification and helper text", () => {
    const constraint: MaxClassificationConstraint = {
      bannerClassificationString: "TOP SECRET",
      markingIds: ["m1"],
      helperText: "Selection cannot exceed this level.",
    };
    render(<ConstraintCallout constraint={constraint} />);

    expect(screen.getByText("Maximum allowed classification")).toBeDefined();
    expect(screen.getByText("TOP SECRET")).toBeDefined();
    expect(
      screen.getByText("Selection cannot exceed this level.")
    ).toBeDefined();
  });

  it("requests banner data for the constraint's marking ids", () => {
    const constraint: MaxClassificationConstraint = {
      bannerClassificationString: "SECRET",
      markingIds: ["m1", "m2"],
    };
    render(<ConstraintCallout constraint={constraint} />);

    expect(useCbacBanner).toHaveBeenCalledWith({ markingIds: ["m1", "m2"] });
  });

  it("omits helper text when the constraint has none", () => {
    const constraint: MaxClassificationConstraint = {
      bannerClassificationString: "SECRET",
      markingIds: ["m1"],
    };
    render(<ConstraintCallout constraint={constraint} />);

    expect(screen.getByText("SECRET")).toBeDefined();
    expect(screen.queryByText(/cannot exceed/iu)).toBeNull();
  });
});
