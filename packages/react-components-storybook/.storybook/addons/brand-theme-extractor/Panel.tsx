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

import { MoonIcon, SunIcon } from "@storybook/icons";
import React, { useCallback, useRef, useState } from "react";
import { useGlobals } from "storybook/manager-api";
import { styled } from "storybook/theming";
import { autoMapColors } from "./auto-mapper.js";
import { GLOBALS_KEY } from "./constants.js";
import { ExportButtons } from "./ExportButtons.js";
import {
  loadImageFromFile,
  loadImageFromUrl,
  loadScreenshotFromUrl,
} from "./image-loader.js";
import { extractColorsFromImage } from "./kmeans.js";
import { PaletteGrid } from "./PaletteGrid.js";
import {
  createThemeStateForMode,
  findThemePreset,
  parseBrandThemeState,
  stringifyBrandThemeState,
} from "./state.js";
import { TokenMappingTable } from "./TokenMappingTable.js";
import type {
  BrandThemeGlobals,
  ExtractedColor,
  ThemeColorMode,
  TokenAssignment,
} from "./types.js";

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

const COLOR_ROLES = [
  "background",
  "surface",
  "text",
  "text-muted",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "icon-color",
  "border",
  "danger",
  "success",
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

const CurrentThemeRow = styled.div(({ theme }) => ({
  alignItems: "center",
  color: theme.color.mediumdark,
  display: "flex",
  fontSize: 12,
  gap: 8,
  justifyContent: "space-between",
  marginBlockEnd: 8,
}));

const ModeButton = styled.button(({ theme }) => ({
  alignItems: "center",
  background: theme.background.hoverable,
  borderColor: theme.appBorderColor,
  borderRadius: 999,
  borderStyle: "solid",
  borderWidth: 1,
  color: theme.color.defaultText,
  cursor: "pointer",
  display: "flex",
  fontSize: 11,
  gap: 4,
  fontWeight: 600,
  paddingBlock: 2,
  paddingInline: 8,
  "&:hover": {
    borderColor: theme.color.secondary,
  },
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

const SectionCount = styled.span(({ theme }) => ({
  fontSize: 10,
  color: theme.color.mediumdark,
  fontWeight: 400,
}));

const InputRow = styled.div({
  display: "flex",
  gap: 8,
  alignItems: "center",
  padding: "4px 0",
  flexWrap: "wrap",
});

const UrlInput = styled.input(({ theme }) => ({
  flex: 1,
  minWidth: 140,
  fontSize: 12,
  padding: "5px 8px",
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 4,
  background: theme.input.background,
  color: theme.input.color,
  outline: "none",
  "&:focus": {
    borderColor: theme.color.secondary,
    boxShadow: `${theme.color.secondary}33 0 0 0 1px`,
  },
}));

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
    "&:hover": disabled ? {} : {
      background: theme.background.hoverable,
    },
  }),
);

const Separator = styled.span(({ theme }) => ({
  fontSize: 11,
  color: theme.color.mediumdark,
}));

const ErrorMessage = styled.div(({ theme }) => ({
  color: theme.color.negative,
  fontSize: 11,
  padding: "4px 0",
}));

const PresetLabel = styled.div(({ theme }) => ({
  fontSize: 11,
  fontWeight: 600,
  color: theme.color.mediumdark,
  padding: "8px 0 4px",
}));

const PresetButton = styled.button<{ radius: string }>(
  ({ theme, radius }) => ({
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
  }),
);

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
  const state: BrandThemeGlobals = React.useMemo(
    () => parseBrandThemeState(globals[GLOBALS_KEY]),
    [globals],
  );

  const [extractionOpen, setExtractionOpen] = useState(true);
  const [urlValue, setUrlValue] = useState("");
  const [webpageUrl, setWebpageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const selectedPresetLabel = React.useMemo(
    () => findThemePreset(state.selectedPresetId)?.label ?? "Custom",
    [state.selectedPresetId],
  );

  const updateState = useCallback(
    (partial: Partial<BrandThemeGlobals>) => {
      const newState = { ...state, ...partial };
      updateGlobals({ [GLOBALS_KEY]: stringifyBrandThemeState(newState) });
    },
    [state, updateGlobals],
  );

  const handleExtraction = useCallback(
    (palette: ExtractedColor[]) => {
      const assignments = autoMapColors(palette);
      updateState({
        palette,
        assignments,
        active: true,
        selectedPresetId: "custom",
      });
      setExtractionOpen(false);
    },
    [updateState],
  );

  const handleFileUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setLoading(true);
      setError(null);
      try {
        const img = await loadImageFromFile(file);
        const palette = extractColorsFromImage(img);
        handleExtraction(palette);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to process image",
        );
      } finally {
        setLoading(false);
      }
    },
    [handleExtraction],
  );

  const handleUrlExtract = useCallback(async () => {
    if (!urlValue.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const img = await loadImageFromUrl(urlValue.trim());
      const palette = extractColorsFromImage(img);
      handleExtraction(palette);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load image",
      );
    } finally {
      setLoading(false);
    }
  }, [urlValue, handleExtraction]);

  const handleWebpageCapture = useCallback(async () => {
    if (!webpageUrl.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const img = await loadScreenshotFromUrl(webpageUrl.trim());
      const palette = extractColorsFromImage(img);
      handleExtraction(palette);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to capture webpage",
      );
    } finally {
      setLoading(false);
    }
  }, [webpageUrl, handleExtraction]);

  const handleAssignmentChange = useCallback(
    (role: string, partial: Partial<TokenAssignment>) => {
      const existing = state.assignments.filter((a) => a.role !== role);
      const current = state.assignments.find((a) => a.role === role);
      const updated: TokenAssignment = {
        role,
        colorIndex: partial.colorIndex ?? current?.colorIndex ?? -1,
        customValue: partial.customValue ?? current?.customValue,
      };
      updateState({
        assignments: [...existing, updated],
        selectedPresetId: "custom",
      });
    },
    [state.assignments, updateState],
  );

  const handleReset = useCallback(
    (role: string) => {
      const filtered = state.assignments.filter((a) => a.role !== role);
      updateState({ assignments: filtered, selectedPresetId: "custom" });
    },
    [state.assignments, updateState],
  );

  const handleToggle = useCallback(() => {
    updateState({ active: !state.active });
  }, [state.active, updateState]);

  const handleColorModeToggle = useCallback(() => {
    const nextColorMode: ThemeColorMode = state.colorMode === "dark"
      ? "light"
      : "dark";
    const selectedPreset = findThemePreset(state.selectedPresetId);
    if (selectedPreset) {
      const presetState = createThemeStateForMode({
        presetId: selectedPreset.id,
        colorMode: nextColorMode,
      });
      updateGlobals({
        [GLOBALS_KEY]: stringifyBrandThemeState(presetState),
      });
      return;
    }

    updateState({ colorMode: nextColorMode });
  }, [state.colorMode, state.selectedPresetId, updateGlobals, updateState]);

  const applyPreset = useCallback(
    (preset: StylePreset) => {
      const updated = state.assignments.filter(
        (a) => a.role !== "border-radius" && a.role !== "spacing",
      );
      updated.push(
        { role: "border-radius", colorIndex: -1, customValue: preset.radius },
        { role: "spacing", colorIndex: -1, customValue: preset.spacing },
      );
      updateState({ assignments: updated, selectedPresetId: "custom" });
    },
    [state.assignments, updateState],
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

      <CurrentThemeRow>
        <span>Editing {selectedPresetLabel}</span>
        <ModeButton
          type="button"
          aria-label={state.colorMode === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"}
          onClick={handleColorModeToggle}
        >
          {state.colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          {state.colorMode === "dark" ? "Dark" : "Light"}
        </ModeButton>
      </CurrentThemeRow>

      {/* Export actions are intentionally first so a selected preset can be downloaded immediately. */}
      {state.assignments.length > 0 && (
        <>
          <PresetLabel>Export</PresetLabel>
          <ExportButtons
            palette={state.palette}
            assignments={state.assignments}
          />
          <SectionDivider />
        </>
      )}

      {/* Collapsible extraction section */}
      <SectionToggle
        open={extractionOpen}
        onClick={() => setExtractionOpen(!extractionOpen)}
      >
        <span>&#x25BE;</span>
        <span>Extract from Image or Webpage</span>
        {state.palette.length > 0 && (
          <SectionCount>({state.palette.length} colors)</SectionCount>
        )}
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
              Upload Image
            </ActionButton>
            <Separator>or</Separator>
            <UrlInput
              type="text"
              placeholder="Paste image URL..."
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleUrlExtract()}
            />
            <ActionButton
              onClick={handleUrlExtract}
              disabled={loading || !urlValue.trim()}
            >
              {loading ? "Loading..." : "Extract"}
            </ActionButton>
          </InputRow>
          <InputRow>
            <UrlInput
              type="text"
              placeholder="Paste webpage URL to capture..."
              value={webpageUrl}
              onChange={(e) => setWebpageUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleWebpageCapture()}
            />
            <ActionButton
              onClick={handleWebpageCapture}
              disabled={loading || !webpageUrl.trim()}
            >
              {loading ? "Capturing..." : "Capture"}
            </ActionButton>
          </InputRow>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <PaletteGrid palette={state.palette} />
        </div>
      )}

      {/* Style presets — quick way to set radius/spacing */}
      {state.palette.length > 0 && (
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
      )}

      <SectionDivider />

      {/* Token editor */}
      <TokenMappingTable
        palette={state.palette}
        assignments={state.assignments}
        onAssignmentChange={handleAssignmentChange}
        onReset={handleReset}
      />
    </PanelWrapper>
  );
}
