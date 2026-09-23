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

import { createClient } from "@osdk/client";
import {
  useCbacBanner,
  useCbacMarkingRestrictions,
  useMarkingCategories,
  useMarkings,
} from "@osdk/react/platform-apis";
import { fakeObservableClient, TestOsdkProvider } from "@osdk/react/testing";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import defer from "p-defer";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { CbacPicker } from "../CbacPicker.js";

vi.mock("@osdk/react/platform-apis", () => ({
  useCbacBanner: vi.fn(),
  useCbacMarkingRestrictions: vi.fn(),
  useMarkingCategories: vi.fn(),
  useMarkings: vi.fn(),
}));

const CATEGORIES = [
  {
    id: "c1",
    name: "Clearance",
    description: "",
    categoryType: "CONJUNCTIVE",
    markingType: "CBAC",
  },
];
const MARKINGS = [
  { id: "m1", categoryId: "c1", name: "Alpha" },
  { id: "m2", categoryId: "c1", name: "Beta" },
];
const BANNER = {
  classificationString: "SECRET",
  textColor: "#000000",
  backgroundColors: ["#123456"],
  markingIds: ["m1"],
};

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(useMarkingCategories).mockReturnValue({
    categories: CATEGORIES,
    isLoading: false,
    error: undefined,
    refetch: vi.fn(),
  } as unknown as ReturnType<typeof useMarkingCategories>);
  vi.mocked(useMarkings).mockReturnValue({
    markings: MARKINGS,
    isLoading: false,
    error: undefined,
    refetch: vi.fn(),
  } as unknown as ReturnType<typeof useMarkings>);
  vi.mocked(useCbacBanner).mockReturnValue({
    banner: BANNER,
    isLoading: false,
    error: undefined,
    refetch: vi.fn(),
  } as unknown as ReturnType<typeof useCbacBanner>);
  vi.mocked(useCbacMarkingRestrictions).mockReturnValue({
    restrictions: undefined,
    isLoading: false,
    error: undefined,
    refetch: vi.fn(),
  } as unknown as ReturnType<typeof useCbacMarkingRestrictions>);
});

describe("CbacPicker", () => {
  afterEach(cleanup);

  describe("paginated catalogues", () => {
    it("selects MU and MNF from a later marking page, including a category from a later category page", async () => {
      const realHooks = await vi.importActual<{
        useMarkings: typeof useMarkings;
        useMarkingCategories: typeof useMarkingCategories;
      }>("@osdk/react/platform-apis");
      vi.mocked(useMarkings).mockImplementation(realHooks.useMarkings);
      vi.mocked(useMarkingCategories).mockImplementation(
        realHooks.useMarkingCategories,
      );

      type Marking = NonNullable<
        ReturnType<typeof useMarkings>["markings"]
      >[number];
      type Category = NonNullable<
        ReturnType<typeof useMarkingCategories>["categories"]
      >[number];
      const marking = (id: string, categoryId: string): Marking => ({
        id,
        name: id,
        categoryId,
        createdTime: "2026-01-01T00:00:00Z",
      });
      const category = (id: string): Category => ({
        id,
        name: id,
        description: "",
        categoryType: "CONJUNCTIVE",
        markingType: "CBAC",
        markings: [],
        createdTime: "2026-01-01T00:00:00Z",
      });
      // cspell:ignore MPII MPHI MFISA
      const firstMarkings = [
        ...Array.from({ length: 97 }, (_, index) =>
          marking(`filler-${index}`, "other"),
        ),
        ...["MPII", "MPHI", "MFISA"].map((id) => marking(id, "dissemination")),
      ];
      const requests: URL[] = [];
      const secondMarkingsPage = defer<Response>();
      const fetch = vi.fn<typeof globalThis.fetch>((input) => {
        const url = new URL(
          input instanceof Request ? input.url : String(input),
        );
        requests.push(url);
        const token = url.searchParams.get("pageToken");
        let body: unknown;
        if (url.pathname === "/api/v2/admin/markings") {
          if (token === "markings/+=") return secondMarkingsPage.promise;
          body = { data: firstMarkings, nextPageToken: "markings/+=" };
        } else if (url.pathname === "/api/v2/admin/markingCategories") {
          body =
            token === "categories/+="
              ? { data: [category("classification")] }
              : {
                  data: [category("other"), category("dissemination")],
                  nextPageToken: "categories/+=",
                };
        } else {
          throw new Error(`Unexpected request: ${url.pathname}`);
        }
        return Promise.resolve(Response.json(body));
      });
      const client = createClient(
        "https://example.com",
        "ri.ontology.main.ontology.test",
        () => Promise.resolve("test-token"),
        undefined,
        fetch,
      );
      const onChange = vi.fn();
      render(
        <TestOsdkProvider
          client={client}
          observableClient={fakeObservableClient}
        >
          <CbacPicker onChange={onChange} />
        </TestOsdkProvider>,
      );
      await waitFor(() => expect(requests).toHaveLength(4));
      expect(screen.queryByRole("button", { name: "MPII" })).toBeNull();
      await act(async () => {
        secondMarkingsPage.resolve(
          Response.json({
            data: [
              marking("MU", "classification"),
              marking("MNF", "dissemination"),
            ],
          }),
        );
        await secondMarkingsPage.promise;
      });
      const mu = await screen.findByRole("button", { name: "MU" });
      expect(screen.getByText("classification")).toBeDefined();
      fireEvent.click(mu);
      expect(onChange).toHaveBeenLastCalledWith(["MU"]);
      fireEvent.click(screen.getByRole("button", { name: "MNF" }));
      expect(onChange).toHaveBeenLastCalledWith(["MU", "MNF"]);
      expect(requests).toHaveLength(4);
      for (const path of ["markings", "markingCategories"]) {
        const endpointRequests = requests.filter((url) =>
          url.pathname.endsWith(`/${path}`),
        );
        expect(
          endpointRequests.map((url) => url.searchParams.get("pageToken")),
        ).toEqual([
          null,
          path === "markings" ? "markings/+=" : "categories/+=",
        ]);
        expect(
          endpointRequests.map((url) => url.searchParams.get("pageSize")),
        ).toEqual(["100", "100"]);
      }
    });
  });

  it("fires onChange with the updated selection when a marking is toggled", () => {
    const onChange = vi.fn();
    render(<CbacPicker onChange={onChange} />);

    fireEvent.click(screen.getByRole("button", { name: "Alpha" }));
    expect(onChange).toHaveBeenCalledExactlyOnceWith(["m1"]);
  });

  it("does not change the selection when readOnly", () => {
    const onChange = vi.fn();
    render(<CbacPicker onChange={onChange} readOnly />);

    fireEvent.click(screen.getByRole("button", { name: "Alpha" }));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("clears the selection and fires onChange([]) when the banner is dismissed", () => {
    const onChange = vi.fn();
    render(<CbacPicker initialMarkingIds={["m1"]} onChange={onChange} />);

    fireEvent.click(
      screen.getByRole("button", { name: "Clear classification" }),
    );
    expect(onChange).toHaveBeenCalledExactlyOnceWith([]);
  });

  it("renders the max-classification callout when a constraint is provided", () => {
    render(
      <CbacPicker
        onChange={vi.fn()}
        maxClassificationConstraint={{
          bannerClassificationString: "TOP SECRET",
          markingIds: ["m9"],
          helperText: "Do not exceed.",
        }}
      />,
    );

    expect(screen.getByText("Maximum allowed classification")).toBeDefined();
    expect(screen.getByText("TOP SECRET")).toBeDefined();
  });

  it("does not render the max-classification callout without a constraint", () => {
    render(<CbacPicker onChange={vi.fn()} />);
    expect(screen.queryByText("Maximum allowed classification")).toBeNull();
  });
});
