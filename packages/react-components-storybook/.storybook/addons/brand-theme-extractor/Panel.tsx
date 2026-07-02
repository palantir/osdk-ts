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

import React, { useCallback, useMemo, useRef } from "react";
import { useGlobals } from "storybook/manager-api";
import { styled } from "storybook/theming";

import { GLOBALS_KEY } from "./constants.js";
import { generateCss, generateMarkdown } from "./export.js";
import { ExportDropdown } from "./ExportButtons.js";
import { ImportDropdown } from "./ImportDropdown.js";
import { getBuiltInDefaults } from "./presets.js";
import {
  findMatchingPreset,
  findThemePreset,
  parseBrandThemeState,
  stringifyBrandThemeState,
} from "./state.js";
import { TokenMappingTable } from "./TokenMappingTable.js";
import type { BrandThemeGlobals, TokenAssignment } from "./types.js";

interface PanelProps {
  active: boolean;
}

// ── Styled Components ─────────────────────────────────────

const PanelWrapper = styled.div({
  padding: "0.75em 1rem",
  overflowY: "auto",
  height: "100%",
});

const HeaderRow = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginBottom: 12,
  flexWrap: "wrap",
});

const HeaderRight = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginLeft: "auto",
  flexWrap: "wrap",
});

const Title = styled.span(({ theme }) => ({
  fontWeight: 600,
  fontSize: 14,
  color: theme.color.defaultText,
}));

const SectionDivider = styled.div(({ theme }) => ({
  borderBottom: `1px solid ${theme.appBorderColor}`,
  margin: "0 0 8px",
}));

// ── Components ────────────────────────────────────────────

export function Panel({ active }: PanelProps): React.ReactElement | null {
  if (!active) return null;
  return <PanelContent />;
}

function PanelContent(): React.ReactElement {
  const [globals, updateGlobals] = useGlobals();
  const rawState = globals[GLOBALS_KEY];

  // Storybook globals can lose nested object fields during serialization.
  // Store the full state as a JSON string to preserve structure.
  const state: BrandThemeGlobals = useMemo(
    () => parseBrandThemeState(rawState),
    [rawState]
  );

  // Keep a ref so callbacks read current state without re-creating.
  const stateRef = useRef(state);
  stateRef.current = state;

  // For built-in themes with no overrides, use the default Blueprint tokens
  // so users can always export a meaningful DESIGN.md and CSS.
  const exportAssignments = useMemo(() => {
    if (state.assignments.length > 0) return state.assignments;
    return getBuiltInDefaults(state.colorMode);
  }, [state.assignments, state.colorMode]);

  const preset = useMemo(
    () => findThemePreset(state.selectedPresetId),
    [state.selectedPresetId]
  );
  const themeName = preset?.label ?? "OSDK-brand-theme";

  const css = useMemo(
    () => generateCss(exportAssignments),
    [exportAssignments]
  );
  const md = useMemo(
    () => generateMarkdown(exportAssignments, themeName),
    [exportAssignments, themeName]
  );

  // Stable: reads state via ref, only depends on updateGlobals (stable from useGlobals).
  const updateState = useCallback(
    (partial: Partial<BrandThemeGlobals>) => {
      const newState = { ...stateRef.current, ...partial };
      updateGlobals({ [GLOBALS_KEY]: stringifyBrandThemeState(newState) });
    },
    [updateGlobals]
  );

  const handleImport = useCallback(
    (assignments: TokenAssignment[]) => {
      const colorMode = stateRef.current.colorMode;
      updateState({
        assignments,
        active: true,
        selectedPresetId: findMatchingPreset(assignments, colorMode),
      });
    },
    [updateState]
  );

  const handleAssignmentChange = useCallback(
    (role: string, partial: Partial<TokenAssignment>) => {
      const current = stateRef.current;
      const existing = current.assignments.filter((a) => a.role !== role);
      const prev = current.assignments.find((a) => a.role === role);
      const updated: TokenAssignment = {
        role,
        colorIndex: partial.colorIndex ?? prev?.colorIndex ?? -1,
        customValue: partial.customValue ?? prev?.customValue,
      };
      const newAssignments = [...existing, updated];
      updateState({
        assignments: newAssignments,
        selectedPresetId: findMatchingPreset(newAssignments, current.colorMode),
      });
    },
    [updateState]
  );

  const handleReset = useCallback(
    (role: string) => {
      const current = stateRef.current;
      const newAssignments = current.assignments.filter((a) => a.role !== role);
      updateState({
        assignments: newAssignments,
        selectedPresetId: findMatchingPreset(newAssignments, current.colorMode),
      });
    },
    [updateState]
  );

  return (
    <PanelWrapper>
      <HeaderRow>
        <Title>Brand Theme</Title>
        <HeaderRight>
          <ImportDropdown colorMode={state.colorMode} onApply={handleImport} />
          <ExportDropdown
            items={[
              {
                label: "CSS",
                content: css,
                filename: "tokens.css",
                mime: "text/css",
              },
              {
                label: "Design.md",
                content: md,
                filename: "design.md",
                mime: "text/markdown",
              },
            ]}
          />
        </HeaderRight>
      </HeaderRow>

      <SectionDivider />

      {/* Token editor */}
      <TokenMappingTable
        assignments={state.assignments}
        onAssignmentChange={handleAssignmentChange}
        onReset={handleReset}
      />
    </PanelWrapper>
  );
}
