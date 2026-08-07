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
import React from "react";
import { afterEach, describe, expect, it } from "vitest";

import { createLabelsContext } from "../createLabelsContext.js";

interface TestLabels {
  greeting: string;
  farewell: string;
  count: (n: number) => string;
}

const DEFAULTS: TestLabels = {
  greeting: "Hello",
  farewell: "Bye",
  count: (n) => `${n} items`,
};

function setup() {
  return createLabelsContext(DEFAULTS, "Test");
}

describe("createLabelsContext", () => {
  afterEach(() => {
    cleanup();
  });

  it("resolves defaults when no provider is present", () => {
    const { useLabels } = setup();
    let captured: TestLabels | undefined;
    function Capture(): null {
      captured = useLabels();
      return null;
    }

    render(<Capture />);

    expect(captured).toBe(DEFAULTS);
  });

  it("merges a partial override over the defaults", () => {
    const { LabelsProvider, useLabels } = setup();
    let captured: TestLabels | undefined;
    function Capture(): null {
      captured = useLabels();
      return null;
    }

    render(
      <LabelsProvider labels={{ greeting: "Howdy" }}>
        <Capture />
      </LabelsProvider>,
    );

    expect(captured?.greeting).toBe("Howdy");
    expect(captured?.farewell).toBe("Bye");
    expect(captured?.count(2)).toBe("2 items");
  });

  it("merges a nested provider over its ancestor rather than the defaults", () => {
    const { LabelsProvider, useLabels } = setup();
    let captured: TestLabels | undefined;
    function Capture(): null {
      captured = useLabels();
      return null;
    }

    render(
      <LabelsProvider labels={{ greeting: "Howdy", farewell: "Later" }}>
        <LabelsProvider labels={{ farewell: "Ciao" }}>
          <Capture />
        </LabelsProvider>
      </LabelsProvider>,
    );

    expect(captured?.greeting).toBe("Howdy");
    expect(captured?.farewell).toBe("Ciao");
  });

  it("keeps a stable context value across re-renders with an inline labels object", () => {
    const { LabelsProvider, useLabels } = setup();
    const seen: TestLabels[] = [];
    function Capture(): null {
      seen.push(useLabels());
      return null;
    }

    const { rerender } = render(
      <LabelsProvider labels={{ greeting: "Howdy" }}>
        <Capture />
      </LabelsProvider>,
    );
    rerender(
      <LabelsProvider labels={{ greeting: "Howdy" }}>
        <Capture />
      </LabelsProvider>,
    );

    expect(seen.length).toBeGreaterThan(1);
    expect(seen[1]).toBe(seen[0]);
  });

  it("publishes a new context value when the merged labels actually change", () => {
    const { LabelsProvider, useLabels } = setup();
    const seen: TestLabels[] = [];
    function Capture(): null {
      seen.push(useLabels());
      return null;
    }

    const { rerender } = render(
      <LabelsProvider labels={{ greeting: "Howdy" }}>
        <Capture />
      </LabelsProvider>,
    );
    rerender(
      <LabelsProvider labels={{ greeting: "Hiya" }}>
        <Capture />
      </LabelsProvider>,
    );

    expect(seen.at(-1)?.greeting).toBe("Hiya");
  });

  it("withLabels supplies labels to the subtree and does not forward the prop", () => {
    const { useLabels, withLabels } = setup();
    let captured: TestLabels | undefined;
    let receivedProps: Record<string, unknown> | undefined;

    function Inner(props: { title: string }): null {
      receivedProps = props;
      captured = useLabels();
      return null;
    }
    Inner.displayName = "Inner";
    const Wrapped = withLabels(Inner);

    render(<Wrapped title="t" labels={{ greeting: "Howdy" }} />);

    expect(captured?.greeting).toBe("Howdy");
    expect(receivedProps).toEqual({ title: "t" });
  });

  it("names the generated provider and HOC after the component family", () => {
    const { LabelsProvider, withLabels } = setup();
    function Inner(): null {
      return null;
    }
    Inner.displayName = "Inner";

    expect(LabelsProvider.displayName).toBe("TestLabelsProvider");
    expect(withLabels(Inner).displayName).toBe("withTestLabels(Inner)");
  });

  it("isolates separately created contexts", () => {
    const first = createLabelsContext(DEFAULTS, "First");
    const second = createLabelsContext(DEFAULTS, "Second");
    let fromSecond: TestLabels | undefined;
    function Capture(): null {
      fromSecond = second.useLabels();
      return null;
    }

    render(
      <first.LabelsProvider labels={{ greeting: "Howdy" }}>
        <Capture />
      </first.LabelsProvider>,
    );

    expect(fromSecond?.greeting).toBe("Hello");
  });
});
