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
import type { JSX } from "react/jsx-runtime";
import { customThemeToBlueprintTokens } from "./customThemeToBlueprintTokens.js";

// Copied from Workshop 
export type ThemeBorderRadius = "ROUNDED" | "REGULAR" | "SQUARE";

export interface IWorkshopCustomTheme {
    readonly version: 1;
    readonly borderRadius?: ThemeBorderRadius;
}
// Move this provider and its theme translation to a shared package for custom widgets and OSDK apps.
export function BlueprintThemeProvider({
    children,
    enabled = true,
    theme,
}: React.PropsWithChildren<{ enabled?: boolean; theme: IWorkshopCustomTheme | undefined }>): JSX.Element {
    const tokens = React.useMemo(
        () => (enabled && theme != null ? customThemeToBlueprintTokens(theme) : undefined),
        [enabled, theme],
    );

    React.useLayoutEffect(() => {
        if (tokens == null) {
            return;
        }
        // The iframe is dedicated to this widget; root tokens also reach Blueprint portals.
        const style = document.documentElement.style;
        const previous = Object.entries(tokens).map(([name, value]) => {
        const previousValue = style.getPropertyValue(name);
        const priority = style.getPropertyPriority(name);
        style.setProperty(name, value);
        return { name, previousValue, priority };
        });
        return () => {
        for (const { name, previousValue, priority } of previous) {
            if (previousValue === "") {
            style.removeProperty(name);
            } else {
            style.setProperty(name, previousValue, priority);
            }
        }
        };
    }, [tokens]);

    return <>{children}</>;
}
