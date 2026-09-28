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

import * as React from "react";

/** @public */
export interface PreviewStrings {
  stringInputPlaceholder: string;
  removeButton: string;
  booleanLabel: string;
  selectDateText: string;
  selectTimestampText: string;
  addItemButton: string;
  unknownEvent: string;
  noEvents: string;
  unknownParameter: string;
  noParameterUpdates: string;
  eventEmittedMessage: string;
  widgetReadyMessage: string;
  widgetReloadMessage: string;
  widgetResizedMessage: string;
  parameterUpdated: string;
  payload: string;
  invalidEvent: string;
}

/** @public */
export interface PreviewPresentation {
  strings: PreviewStrings;
  formatDate: (date: Date, kind: "date" | "timestamp" | "time") => string;
}

const defaults: PreviewPresentation = {
  strings: {
    stringInputPlaceholder: "Enter value",
    removeButton: "Remove",
    booleanLabel: "Enabled",
    selectDateText: "Select date",
    selectTimestampText: "Select timestamp",
    addItemButton: "Add item",
    unknownEvent: "Unknown event",
    noEvents: "No events",
    unknownParameter: "Unknown parameter",
    noParameterUpdates: "No parameter updates",
    eventEmittedMessage: "Event emitted",
    widgetReadyMessage: "Widget ready",
    widgetReloadMessage: "Widget reloaded",
    widgetResizedMessage: "Widget resized",
    parameterUpdated: "Parameter updated",
    payload: "Payload:",
    invalidEvent: "Invalid event",
  },
  formatDate: (date, kind) =>
    kind === "date"
      ? date.toLocaleDateString()
      : kind === "time"
        ? date.toLocaleTimeString()
        : date.toLocaleString(),
};

const Context = React.createContext(defaults);

/** @public */
export interface PreviewProviderProps {
  children: React.ReactNode;
  strings?: Partial<PreviewStrings>;
  formatDate?: PreviewPresentation["formatDate"];
}

/** @public */
export function PreviewProvider({
  children,
  strings,
  formatDate,
}: PreviewProviderProps): React.ReactElement {
  const value = React.useMemo(
    () => ({
      strings: { ...defaults.strings, ...strings },
      formatDate: formatDate ?? defaults.formatDate,
    }),
    [strings, formatDate],
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function usePreviewPresentation(): PreviewPresentation {
  return React.useContext(Context);
}
