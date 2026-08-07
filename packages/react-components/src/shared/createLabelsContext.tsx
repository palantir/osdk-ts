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

import { isEqual } from "lodash-es";
import React, {
  createContext,
  type ReactElement,
  type ReactNode,
  useContext,
  useRef,
} from "react";

export interface LabelsProviderProps<L extends object> {
  labels?: Partial<L>;
  children: ReactNode;
}

export interface LabelsContext<L extends object> {
  LabelsProvider: React.FC<LabelsProviderProps<L>>;
  useLabels: () => L;
  withLabels: <P extends object>(
    Inner: React.ComponentType<P>,
  ) => React.FC<P & { labels?: Partial<L> }>;
}

/**
 * Builds the context, provider, hook and HOC backing a component family's
 * `labels` override prop.
 *
 * Each component family owns a label interface and a defaults object and wires
 * them together here, rather than restating the merge and memoization rules.
 * Re-export the returned members under family-specific names
 * (`use<Family>Labels`, …) so consumers and call sites keep reading naturally.
 *
 * `componentName` names the generated provider and HOC in React DevTools.
 */
export function createLabelsContext<L extends object>(
  defaults: L,
  componentName: string,
): LabelsContext<L> {
  const Context = createContext<L>(defaults);

  function LabelsProvider({
    labels,
    children,
  }: LabelsProviderProps<L>): ReactElement {
    const parent = useContext(Context);
    const merged = labels != null ? { ...parent, ...labels } : parent;

    // Reuse the previous value when the merge is equal so an inline `labels`
    // object (new identity each render) doesn't churn the context.
    const stableRef = useRef(merged);
    if (!isEqual(stableRef.current, merged)) {
      stableRef.current = merged;
    }

    return (
      <Context.Provider value={stableRef.current}>{children}</Context.Provider>
    );
  }
  LabelsProvider.displayName = `${componentName}LabelsProvider`;

  function useLabels(): L {
    return useContext(Context);
  }

  function withLabels<P extends object>(
    Inner: React.ComponentType<P>,
  ): React.FC<P & { labels?: Partial<L> }> {
    function LabelledComponent(
      props: P & { labels?: Partial<L> },
    ): ReactElement {
      const { labels, ...rest } = props;
      return (
        <LabelsProvider labels={labels}>
          <Inner {...(rest as unknown as P)} />
        </LabelsProvider>
      );
    }
    // `Inner` is expected to carry an explicit displayName; wrapped inner
    // render fns are anonymous in the published build.
    LabelledComponent.displayName = `with${componentName}Labels(${Inner.displayName})`;
    return LabelledComponent;
  }

  return { LabelsProvider, useLabels, withLabels };
}
