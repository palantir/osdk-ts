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

import type { ParameterValue } from "@osdk/widget.api";
import {
  act,
  cleanup,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import * as React from "react";
import { afterEach, assert, describe, expect, it } from "vitest";

import {
  loadedParameterValue,
  MessageDisplay,
  ParameterConfig,
  PreviewProvider,
  useWidgetPreviewState,
  type PreviewConfig,
} from "../index.js";

const config: PreviewConfig = {
  parameters: [
    { id: "title", displayName: "Title", type: "string" },
    { id: "tags", displayName: "Tags", type: "array", subType: "string" },
    { id: "scenario", displayName: "Scenario", type: "scenario" },
    { id: "objects", displayName: "Objects", type: "objectSet" },
  ],
  events: [
    {
      id: "changed",
      displayName: "Changed",
      parameterUpdateIds: ["title", "tags", "objects"],
    },
  ],
};

afterEach(cleanup);

function Harness() {
  const state = useWidgetPreviewState({ sourceId: "one", config });
  return (
    <>
      <ParameterConfig
        parameters={config.parameters}
        parameterValues={state.parameterValues}
        onParameterValueUpdate={state.handleParameterValueChange}
        renderInput={(parameter) =>
          parameter.type === "objectSet" ? (
            <span>Platform object picker</span>
          ) : undefined
        }
      />
      <output data-testid="values">
        {JSON.stringify(state.parameterValues)}
      </output>
      <button
        onClick={() =>
          state.handleEvent({
            eventId: "changed",
            parameterUpdates: { title: "From widget", tags: ["event"] },
          })
        }
      >
        Emit event
      </button>
      <button onClick={state.handleParameterReset}>Reset</button>
    </>
  );
}

function values(): Record<string, ParameterValue> {
  return JSON.parse(screen.getByTestId("values").textContent ?? "{}");
}

describe("shared preview controls and host state", () => {
  it("edits parameters, applies widget events to the same controls, and resets", () => {
    render(<Harness />);
    const [title, scenario] = screen.getAllByPlaceholderText("Enter value");
    assert(title != null);
    assert(scenario != null);
    fireEvent.change(title, { target: { value: "Edited" } });
    fireEvent.change(scenario, { target: { value: "ri.scenario.example" } });
    expect(values().title).toEqual({
      type: "string",
      value: { type: "loaded", value: "Edited" },
    });
    expect(values().scenario?.type).toBe("scenario");
    fireEvent.click(screen.getByText("Emit event"));
    expect(screen.getByDisplayValue("From widget")).toBeDefined();
    expect(screen.getByDisplayValue("event")).toBeDefined();
    expect(screen.getByText("Platform object picker")).toBeDefined();
    fireEvent.click(screen.getByText("Reset"));
    expect(values()).toEqual({});
  });

  it("adds, edits, and removes array items without losing the declared subtype", () => {
    render(<Harness />);
    fireEvent.click(screen.getByText("Add item"));
    expect(values().tags).toEqual({
      type: "array",
      subType: "string",
      value: { type: "loaded", value: [""] },
    });
    const item = screen.getAllByPlaceholderText("Enter value")[1];
    assert(item != null);
    fireEvent.change(item, { target: { value: "new" } });
    expect(values().tags?.value.value).toEqual(["new"]);
    fireEvent.click(screen.getByLabelText("Remove"));
    expect(values().tags).toEqual({
      type: "array",
      subType: "string",
      value: { type: "loaded", value: [] },
    });
  });

  it("rejects invalid or undeclared event updates without applying a partial update", () => {
    const { result } = renderHook(() =>
      useWidgetPreviewState({ sourceId: "one", config }),
    );
    expect(() =>
      result.current.handleEvent({ eventId: "missing", parameterUpdates: {} }),
    ).toThrow("Unknown event");
    expect(() =>
      result.current.handleEvent({
        eventId: "changed",
        parameterUpdates: { title: "valid", tags: [4] },
      }),
    ).toThrow("string[]");
    expect(() =>
      result.current.handleEvent({
        eventId: "changed",
        parameterUpdates: { scenario: "forbidden" },
      }),
    ).toThrow("cannot update");
    expect(result.current.parameterValues).toEqual({});
  });

  it("retains asynchronous object-set values and accepts object sets emitted by widgets", () => {
    const { result } = renderHook(() =>
      useWidgetPreviewState({ sourceId: "one", config }),
    );
    act(() =>
      result.current.handleParameterValueChange("objects", {
        type: "objectSet",
        value: { type: "reloading", value: { objectSetRid: "old" } },
      }),
    );
    expect(result.current.parameterValues.objects?.value.type).toBe(
      "reloading",
    );
    act(() =>
      result.current.handleEvent({
        eventId: "changed",
        parameterUpdates: { objects: { objectSetRid: "new" } },
      }),
    );
    expect(result.current.parameterValues.objects).toEqual({
      type: "objectSet",
      value: { type: "loaded", value: { objectSetRid: "new" } },
    });
  });

  it("retains host-supplied map tile layers and uses the host's resource input", () => {
    const parameter = {
      id: "layer",
      displayName: "Map layer",
      type: "mapTileLayer",
    } as const;
    const { result } = renderHook(() =>
      useWidgetPreviewState({
        sourceId: "one",
        config: { parameters: [parameter], events: [] },
      }),
    );
    const layer = { styleJsonUrl: "https://example.com/style.json" };
    act(() =>
      result.current.handleParameterValueChange(
        "layer",
        loadedParameterValue(parameter, layer),
      ),
    );
    expect(result.current.parameterValues.layer).toEqual({
      type: "mapTileLayer",
      value: { type: "loaded", value: layer },
    });
    expect(() => loadedParameterValue(parameter, "invalid")).toThrow(
      "mapTileLayer",
    );
    render(
      <ParameterConfig
        parameters={[parameter]}
        parameterValues={result.current.parameterValues}
        onParameterValueUpdate={result.current.handleParameterValueChange}
        renderInput={() => <span>Platform map layer picker</span>}
      />,
    );
    expect(screen.getByText("Platform map layer picker")).toBeDefined();
  });

  it("restores a new source before rendering and ignores asynchronous writes from the previous source", () => {
    const { result, rerender } = renderHook(
      ({ sourceId, title }) =>
        useWidgetPreviewState({
          sourceId,
          config,
          initialParameters: {
            title: loadedParameterValue({ type: "string" }, title),
          },
        }),
      { initialProps: { sourceId: "one", title: "First" } },
    );
    const staleUpdate = result.current.handleParameterValueChange;
    act(() =>
      result.current.handleAppendMessageLog({
        type: "widget.ready",
        payload: { apiVersion: "1.0.0" },
      }),
    );
    rerender({ sourceId: "two", title: "Second" });
    expect(result.current.parameterValues.title?.value.value).toBe("Second");
    expect(result.current.messageLog).toEqual([]);
    act(() =>
      staleUpdate("title", loadedParameterValue({ type: "string" }, "Stale")),
    );
    expect(result.current.parameterValues.title?.value.value).toBe("Second");
    rerender({ sourceId: "two", title: "New reference" });
    expect(result.current.parameterValues.title?.value.value).toBe("Second");
  });

  it("ignores object-set completions after resetting parameters", () => {
    const { result } = renderHook(() =>
      useWidgetPreviewState({ sourceId: "one", config }),
    );
    const complete = result.current.handleParameterValueChange;
    act(() => result.current.handleParameterReset());
    act(() =>
      complete(
        "objects",
        loadedParameterValue({ type: "objectSet" }, { objectSetRid: "stale" }),
      ),
    );
    expect(result.current.parameterValues).toEqual({});
  });

  it("bounds message history during a long preview session", () => {
    const { result } = renderHook(() =>
      useWidgetPreviewState({ sourceId: "one", config }),
    );
    act(() => {
      for (let width = 0; width < 1002; width++)
        result.current.handleAppendMessageLog({
          type: "widget.resize",
          payload: { width, height: 50 },
        });
    });
    expect(result.current.messageLog).toHaveLength(1000);
    expect(result.current.messageLog[0]?.message).toEqual({
      type: "widget.resize",
      payload: { width: 1001, height: 50 },
    });
  });

  it("renders the platform's message details with supplied translations and date formatting", () => {
    render(
      <PreviewProvider
        strings={{ eventEmittedMessage: "Translated event" }}
        formatDate={() => "12:34"}
      >
        <MessageDisplay
          config={config}
          isLast
          entry={{
            timestamp: new Date(),
            message: {
              type: "widget.emit-event",
              payload: {
                eventId: "changed",
                parameterUpdates: { title: "Chosen" },
              },
            },
          }}
        />
      </PreviewProvider>,
    );
    expect(screen.getByText("Translated event")).toBeDefined();
    expect(screen.getByText("12:34")).toBeDefined();
    expect(screen.getByText("Changed")).toBeDefined();
    expect(screen.getByText("Title")).toBeDefined();
    expect(screen.getByText('"Chosen"')).toBeDefined();
  });
});
