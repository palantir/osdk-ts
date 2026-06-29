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

import React, { useCallback, useMemo, useState } from "react";
import { useGlobals } from "storybook/manager-api";
import { styled } from "storybook/theming";

import { GLOBALS_KEY } from "./constants.js";
import { ExportButtons } from "./ExportButtons.js";
import {
  findMatchingPreset,
  parseBrandThemeState,
  stringifyBrandThemeState,
} from "./state.js";
import { TokenMappingTable } from "./TokenMappingTable.js";
import type { BrandThemeGlobals, TokenAssignment } from "./types.js";

interface StylePreset {
  label: string;
  radius: string;
  spacing: string;
}

const STYLE_PRESETS: StylePreset[] = [
  { label: "Sharp", radius: "2", spacing: "2" },
  { label: "Default", radius: "4", spacing: "4" },
  { label: "Rounded", radius: "8", spacing: "5" },
  { label: "Pill", radius: "16", spacing: "6" },
];

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
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 8,
});

const Title = styled.span(({ theme }) => ({
  fontWeight: 600,
  fontSize: 14,
  color: theme.color.defaultText,
}));

const ToggleRow = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 8,
  cursor: "pointer",
});

const ToggleStatusLabel = styled.span(({ theme }) => ({
  fontSize: 11,
  color: theme.color.mediumdark,
}));

const ToggleTrack = styled.div<{ on: boolean }>(({ theme, on }) => ({
  width: 32,
  height: 18,
  borderRadius: 9,
  backgroundColor: on ? theme.color.secondary : theme.color.medium,
  position: "relative" as const,
  transition: "background-color 150ms ease",
  flexShrink: 0,
}));

const ToggleThumb = styled.div<{ on: boolean }>(({ on }) => ({
  width: 14,
  height: 14,
  borderRadius: "50%",
  backgroundColor: "#fff",
  position: "absolute" as const,
  top: 2,
  left: on ? 16 : 2,
  transition: "left 150ms ease",
  boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
}));

const SectionToggle = styled.div<{ open: boolean }>(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  gap: 6,
  cursor: "pointer",
  fontSize: 12,
  fontWeight: 600,
  color: theme.color.defaultText,
  padding: "8px 0",
  userSelect: "none" as const,
  "& > span:first-of-type": {
    transition: "transform 150ms ease",
    transform: open ? "rotate(0deg)" : "rotate(-90deg)",
    display: "inline-block",
  },
}));

const InputRow = styled.div({
  display: "flex",
  gap: 8,
  alignItems: "center",
  padding: "4px 0",
  flexWrap: "wrap",
});

const PresetLabel = styled.div(({ theme }) => ({
  fontSize: 11,
  fontWeight: 600,
  color: theme.color.mediumdark,
  padding: "8px 0 4px",
}));

const PresetButton = styled.button<{ radius: string }>(({ theme, radius }) => ({
  fontSize: 11,
  padding: "4px 12px",
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: `${radius}px`,
  background: theme.background.content,
  color: theme.color.defaultText,
  cursor: "pointer",
  fontWeight: 500,
  transition: "background 150ms ease, border-radius 150ms ease",
  "&:hover": {
    background: theme.background.hoverable,
    borderColor: theme.color.medium,
  },
}));

const SectionDivider = styled.div(({ theme }) => ({
  borderBottom: `1px solid ${theme.appBorderColor}`,
  margin: "4px 0",
}));

// ── Components ────────────────────────────────────────────

export function Panel({ active }: PanelProps): React.ReactElement | null {
  if (!active) return null;
  return <PanelContent />;
}

function PanelContent(): React.ReactElement {
  const [globals, updateGlobals] = useGlobals();

  // Storybook globals can lose nested object fields during serialization.
  // Store the full state as a JSON string to preserve structure.
  const state: BrandThemeGlobals = useMemo(
    () => parseBrandThemeState(globals[GLOBALS_KEY]),
    [globals]
  );

  const [exportOpen, setExportOpen] = useState(true);

  const updateState = useCallback(
    (partial: Partial<BrandThemeGlobals>) => {
      const newState = { ...state, ...partial };
      updateGlobals({ [GLOBALS_KEY]: stringifyBrandThemeState(newState) });
    },
    [state, updateGlobals]
  );

  const resolvePresetId = useCallback(
    (assignments: TokenAssignment[]): string => {
      return findMatchingPreset(assignments, state.colorMode);
    },
    [state.colorMode]
  );

  const handleAssignmentChange = useCallback(
    (role: string, partial: Partial<TokenAssignment>) => {
      const existing = state.assignments.filter((a) => a.role !== role);
      const current = state.assignments.find((a) => a.role === role);
      const updated: TokenAssignment = {
        role,
        colorIndex: partial.colorIndex ?? current?.colorIndex ?? -1,
        customValue: partial.customValue ?? current?.customValue,
      };
      const newAssignments = [...existing, updated];
      updateState({
        assignments: newAssignments,
        selectedPresetId: resolvePresetId(newAssignments),
      });
    },
    [state.assignments, updateState, resolvePresetId]
  );

  const handleReset = useCallback(
    (role: string) => {
      const newAssignments = state.assignments.filter((a) => a.role !== role);
      updateState({
        assignments: newAssignments,
        selectedPresetId: resolvePresetId(newAssignments),
      });
    },
    [state.assignments, updateState, resolvePresetId]
  );

  const handleToggle = useCallback(() => {
    updateState({ active: !state.active });
  }, [state.active, updateState]);

  const applyPreset = useCallback(
    (preset: StylePreset) => {
      const updated = state.assignments.filter(
        (a) => a.role !== "border-radius" && a.role !== "spacing"
      );
      updated.push(
        { role: "border-radius", colorIndex: -1, customValue: preset.radius },
        { role: "spacing", colorIndex: -1, customValue: preset.spacing }
      );
      updateState({
        assignments: updated,
        selectedPresetId: resolvePresetId(updated),
      });
    },
    [state.assignments, updateState, resolvePresetId]
  );

  return (
    <PanelWrapper>
      {/* Header with on/off toggle */}
      <HeaderRow>
        <Title>Brand Theme</Title>
        <ToggleRow onClick={handleToggle}>
          <ToggleStatusLabel>
            {state.active ? "Override" : "Off"}
          </ToggleStatusLabel>
          <ToggleTrack on={state.active}>
            <ToggleThumb on={state.active} />
          </ToggleTrack>
        </ToggleRow>
      </HeaderRow>

      {/* Style presets — quick way to set radius/spacing */}
      <div>
        <PresetLabel>Style</PresetLabel>
        <InputRow>
          {STYLE_PRESETS.map((preset) => (
            <PresetButton
              key={preset.label}
              radius={preset.radius}
              onClick={() => applyPreset(preset)}
              title={`Radius: ${preset.radius}px, Spacing: ${preset.spacing}px`}
            >
              {preset.label}
            </PresetButton>
          ))}
        </InputRow>
      </div>

      <SectionDivider />

      {/* Token editor */}
      <TokenMappingTable
        assignments={state.assignments}
        onAssignmentChange={handleAssignmentChange}
        onReset={handleReset}
      />

      {/* Collapsible export section */}
      {state.assignments.length > 0 && (
        <>
          <SectionDivider />
          <SectionToggle
            open={exportOpen}
            onClick={() => setExportOpen(!exportOpen)}
          >
            <span>&#x25BE;</span>
            <span>Export</span>
          </SectionToggle>

          {exportOpen && <ExportButtons assignments={state.assignments} />}
        </>
      )}
    </PanelWrapper>
  );
}
