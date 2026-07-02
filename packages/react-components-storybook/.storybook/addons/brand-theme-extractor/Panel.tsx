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

import React, { useCallback, useMemo, useRef, useState } from "react";
import { useGlobals } from "storybook/manager-api";
import { styled } from "storybook/theming";

import { GLOBALS_KEY } from "./constants.js";
import { generateCss, generateMarkdown } from "./export.js";
import { ExportDropdown } from "./ExportButtons.js";
import {
  autoMapFromPalette,
  type ExtractedPalette,
  extractPalette,
  type PaletteSwatch,
} from "./palette-extractor.js";
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

const SWATCH_LABELS: Array<{ key: keyof ExtractedPalette; label: string }> = [
  { key: "vibrant", label: "Vibrant" },
  { key: "darkVibrant", label: "Dark Vibrant" },
  { key: "lightVibrant", label: "Light Vibrant" },
  { key: "muted", label: "Muted" },
  { key: "darkMuted", label: "Dark Muted" },
  { key: "lightMuted", label: "Light Muted" },
];

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

const ActionButton = styled.button<{ disabled?: boolean }>(
  ({ theme, disabled }) => ({
    fontSize: 11,
    padding: "5px 12px",
    border: `1px solid ${theme.appBorderColor}`,
    borderRadius: 4,
    background: theme.background.content,
    color: theme.color.defaultText,
    cursor: disabled ? "not-allowed" : "pointer",
    fontWeight: 500,
    opacity: disabled ? 0.5 : 1,
    transition: "background 150ms ease",
    "&:hover": disabled
      ? {}
      : {
          background: theme.background.hoverable,
        },
  })
);

const ErrorMessage = styled.div(({ theme }) => ({
  color: theme.color.negative,
  fontSize: 11,
  padding: "4px 0",
}));

const SectionDivider = styled.div(({ theme }) => ({
  borderBottom: `1px solid ${theme.appBorderColor}`,
  margin: "0 0 8px",
}));

const SwatchRow = styled.div({
  display: "flex",
  gap: 6,
  padding: "6px 0",
  flexWrap: "wrap",
});

const SwatchItem = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
});

const SwatchColor = styled.div<{ color: string }>(({ color, theme }) => ({
  width: 32,
  height: 32,
  borderRadius: 4,
  backgroundColor: color,
  border: `1px solid ${theme.appBorderColor}`,
}));

const SwatchLabel = styled.span(({ theme }) => ({
  fontSize: 9,
  color: theme.color.mediumdark,
  textAlign: "center" as const,
  maxWidth: 40,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap" as const,
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

  const [extractionOpen, setExtractionOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [palette, setPalette] = useState<ExtractedPalette | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleFileUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setLoading(true);
      setError(null);
      try {
        const colorMode = stateRef.current.colorMode;
        const extracted = await extractPalette(file);
        setPalette(extracted);
        const assignments = autoMapFromPalette(extracted, colorMode);
        updateState({
          assignments,
          active: true,
          selectedPresetId: findMatchingPreset(assignments, colorMode),
        });
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to extract colors"
        );
      } finally {
        setLoading(false);
        // Reset file input so the same file can be re-selected
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
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

      {/* Collapsible extraction section */}
      <SectionToggle
        open={extractionOpen}
        onClick={() => setExtractionOpen(!extractionOpen)}
      >
        <span>&#x25BE;</span>
        <span>Extract from Image</span>
      </SectionToggle>

      {extractionOpen && (
        <div>
          <InputRow>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
            <ActionButton
              onClick={() => fileInputRef.current?.click()}
              disabled={loading}
            >
              {loading ? "Extracting..." : "Upload Image"}
            </ActionButton>
          </InputRow>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {palette && <PaletteSwatches palette={palette} />}
        </div>
      )}

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

function PaletteSwatches({
  palette,
}: {
  palette: ExtractedPalette;
}): React.ReactElement {
  return (
    <SwatchRow>
      {SWATCH_LABELS.map(({ key, label }) => {
        const swatch: PaletteSwatch | null = palette[key];
        if (!swatch) return null;
        return (
          <SwatchItem key={key}>
            <SwatchColor color={swatch.hex} title={`${label}: ${swatch.hex}`} />
            <SwatchLabel>{label}</SwatchLabel>
          </SwatchItem>
        );
      })}
    </SwatchRow>
  );
}
