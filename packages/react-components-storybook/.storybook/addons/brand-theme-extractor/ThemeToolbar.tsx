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

import {
  CheckIcon,
  ChevronDownIcon,
  PaintBrushIcon,
  SearchIcon,
} from "@storybook/icons";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useGlobals, useStorybookApi } from "storybook/manager-api";
import { styled } from "storybook/theming";
import { GLOBALS_KEY, PANEL_ID } from "./constants.js";
import {
  getThemePresetMode,
  THEME_PRESETS,
  type ThemePreset,
} from "./presets.js";
import {
  createThemeStateForMode,
  findThemePreset,
  parseBrandThemeState,
  stringifyBrandThemeState,
} from "./state.js";
import type { BrandThemeGlobals, ThemeColorMode } from "./types.js";

const DEFAULT_SWATCHES: [string, string, string] = [
  "#ffffff",
  "#2d72d2",
  "#1c2127",
];
const DROPDOWN_WIDTH = 340;
const DROPDOWN_MARGIN = 8;
const DROPDOWN_OFFSET = 6;

interface DropdownPosition {
  blockStart: number;
  inlineStart: number;
}

export const ThemeToolbar = React.memo(function ThemeToolbarFn() {
  const [globals, updateGlobals] = useGlobals();
  const api = useStorybookApi();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownPosition, setDropdownPosition] = useState<DropdownPosition>({
    blockStart: 0,
    inlineStart: 0,
  });
  const rootRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themeState = useMemo(
    () => parseBrandThemeState(globals[GLOBALS_KEY]),
    [globals],
  );
  const selectedPreset = useMemo(
    () => findThemePreset(themeState.selectedPresetId),
    [themeState.selectedPresetId],
  );
  const selectedMode = selectedPreset
    ? getThemePresetMode(selectedPreset, themeState.colorMode)
    : undefined;
  const selectedLabel = selectedPreset?.label ?? "Custom";
  const selectedSwatches = useMemo(
    () => selectedMode?.swatches ?? getCustomSwatches(themeState),
    [selectedMode?.swatches, themeState],
  );
  const visiblePresets = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (normalizedQuery === "") {
      return THEME_PRESETS;
    }

    return THEME_PRESETS.filter((preset) =>
      preset.label.toLowerCase().includes(normalizedQuery)
    );
  }, [searchQuery]);

  useEffect(function closeDropdownOnOutsidePointerDown() {
    if (!open) {
      return undefined;
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Node)) {
        setOpen(false);
        return;
      }

      const clickedToolbar = rootRef.current?.contains(target) ?? false;
      const clickedDropdown = dropdownRef.current?.contains(target) ?? false;
      if (
        !clickedToolbar
        && !clickedDropdown
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () =>
      document.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );
  }, [open]);

  const updateDropdownPosition = useCallback(() => {
    const trigger = rootRef.current;
    if (!trigger) {
      return;
    }

    const triggerRect = trigger.getBoundingClientRect();
    const maxInlineStart = window.innerWidth - DROPDOWN_WIDTH
      - DROPDOWN_MARGIN;
    setDropdownPosition({
      blockStart: triggerRect.bottom + DROPDOWN_OFFSET,
      inlineStart: Math.max(
        DROPDOWN_MARGIN,
        Math.min(triggerRect.left, maxInlineStart),
      ),
    });
  }, []);

  useLayoutEffect(function positionDropdown() {
    if (!open) {
      return undefined;
    }

    updateDropdownPosition();
    window.addEventListener("resize", updateDropdownPosition);
    // Storybook panes can scroll independently, so use capture to keep the
    // portaled dropdown anchored to the toolbar button during panel scrolls.
    window.addEventListener("scroll", updateDropdownPosition, true);
    return () => {
      window.removeEventListener("resize", updateDropdownPosition);
      window.removeEventListener("scroll", updateDropdownPosition, true);
    };
  }, [open, updateDropdownPosition]);

  const openBrandThemePanel = useCallback(() => {
    api.setSelectedPanel(PANEL_ID);
    api.togglePanel(true);
    api.togglePanelPosition("bottom");
  }, [api]);

  const toggleDropdown = useCallback(() => {
    setOpen((currentOpen) => !currentOpen);
  }, []);

  const selectPreset = useCallback(
    (preset: ThemePreset) => {
      const nextState = createThemeStateForMode({
        presetId: preset.id,
        colorMode: themeState.colorMode,
      });
      updateGlobals({ [GLOBALS_KEY]: stringifyBrandThemeState(nextState) });
      setOpen(false);
      setSearchQuery("");
      openBrandThemePanel();
    },
    [openBrandThemePanel, themeState.colorMode, updateGlobals],
  );

  return (
    <ToolbarRoot ref={rootRef}>
      <ToolbarButton
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Theme: ${selectedLabel}`}
        onClick={toggleDropdown}
      >
        <PaintBrushIcon />
        <SwatchGroup aria-hidden="true">
          {selectedSwatches.map((swatch) => (
            <ToolbarSwatch key={swatch} color={swatch} />
          ))}
        </SwatchGroup>
        <ToolbarLabel>{selectedLabel}</ToolbarLabel>
        <ChevronDownIcon />
      </ToolbarButton>

      {open && createPortal(
        <Dropdown
          ref={dropdownRef}
          role="dialog"
          aria-label="Theme picker"
          dropdownPosition={dropdownPosition}
        >
          <SearchRow>
            <SearchIcon />
            <SearchInput
              autoFocus={true}
              type="search"
              value={searchQuery}
              placeholder="Search themes…"
              aria-label="Search themes"
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </SearchRow>

          <DropdownHeaderRow>
            <DropdownCount>{visiblePresets.length} themes</DropdownCount>
          </DropdownHeaderRow>

          <SectionLabel>Built-in themes</SectionLabel>
          <PresetList role="listbox" aria-label="Theme presets">
            {visiblePresets.map((preset) => (
              <PresetOption
                key={preset.id}
                preset={preset}
                colorMode={themeState.colorMode}
                selected={preset.id === themeState.selectedPresetId}
                onSelect={selectPreset}
              />
            ))}
          </PresetList>

          <DropdownDivider />
          <OpenPanelButton
            type="button"
            onClick={() => {
              openBrandThemePanel();
              setOpen(false);
            }}
          >
            <PaintBrushIcon />
            Customize
          </OpenPanelButton>
        </Dropdown>,
        document.body,
      )}
    </ToolbarRoot>
  );
});

interface PresetOptionProps {
  preset: ThemePreset;
  colorMode: ThemeColorMode;
  selected: boolean;
  onSelect: (preset: ThemePreset) => void;
}

const PresetOption = React.memo(function PresetOptionFn(
  { preset, colorMode, selected, onSelect }: PresetOptionProps,
) {
  const presetMode = getThemePresetMode(preset, colorMode);
  const handleSelect = useCallback(() => {
    onSelect(preset);
  }, [onSelect, preset]);

  return (
    <PresetButton
      type="button"
      role="option"
      aria-selected={selected}
      selected={selected}
      onClick={handleSelect}
      title={preset.description}
    >
      <SwatchGroup aria-hidden="true">
        {presetMode.swatches.map((swatch) => (
          <PresetSwatch key={swatch} color={swatch} />
        ))}
      </SwatchGroup>
      <PresetLabel>{preset.label}</PresetLabel>
      {selected && <CheckIcon />}
    </PresetButton>
  );
});

const ToolbarRoot = styled.div({
  position: "relative",
});

const ToolbarButton = styled.button(({ theme }) => ({
  alignItems: "center",
  backgroundColor: "transparent",
  borderWidth: 0,
  color: theme.color.defaultText,
  cursor: "pointer",
  display: "flex",
  fontSize: 13,
  gap: 6,
  height: 28,
  paddingBlock: 0,
  paddingInline: 8,
  "&:hover": {
    backgroundColor: theme.background.hoverable,
  },
}));

const ToolbarLabel = styled.span({
  maxWidth: 120,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const SwatchGroup = styled.span({
  display: "flex",
  gap: 3,
});

const ToolbarSwatch = styled.span<{ color: string }>(({ color, theme }) => ({
  backgroundColor: color,
  borderColor: theme.appBorderColor,
  borderRadius: 3,
  borderStyle: "solid",
  borderWidth: 1,
  height: 10,
  width: 10,
}));

const Dropdown = styled.div<{ dropdownPosition: DropdownPosition }>((
  { dropdownPosition, theme },
) => ({
  backgroundColor: theme.background.content,
  borderColor: theme.appBorderColor,
  borderRadius: 8,
  borderStyle: "solid",
  borderWidth: 1,
  boxShadow: "0 12px 32px rgba(0,0,0,0.24)",
  color: theme.color.defaultText,
  inlineSize: 340,
  insetBlockStart: dropdownPosition.blockStart,
  insetInlineStart: dropdownPosition.inlineStart,
  paddingBlock: 8,
  paddingInline: 8,
  position: "fixed",
  // Storybook panes create their own stacking/overflow contexts; portaling the
  // menu keeps it above the preview without coupling to Storybook internals.
  zIndex: 10000,
}));

const SearchRow = styled.div(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.input.background,
  borderColor: theme.appBorderColor,
  borderRadius: 6,
  borderStyle: "solid",
  borderWidth: 1,
  display: "flex",
  gap: 8,
  paddingBlock: 6,
  paddingInline: 8,
}));

const SearchInput = styled.input(({ theme }) => ({
  backgroundColor: "transparent",
  borderWidth: 0,
  color: theme.input.color,
  flex: 1,
  fontSize: 13,
  minWidth: 0,
  outline: "none",
}));

const DropdownHeaderRow = styled.div({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  paddingBlock: 10,
  paddingInline: 2,
});

const DropdownCount = styled.span(({ theme }) => ({
  color: theme.color.mediumdark,
  fontSize: 13,
}));

const SectionLabel = styled.div(({ theme }) => ({
  color: theme.color.mediumdark,
  fontSize: 12,
  fontWeight: 600,
  paddingBlock: 4,
  paddingInline: 2,
}));

const PresetList = styled.div({
  display: "flex",
  flexDirection: "column",
  maxHeight: 420,
  overflowY: "auto",
});

const PresetButton = styled.button<{ selected: boolean }>(
  ({ selected, theme }) => ({
    alignItems: "center",
    backgroundColor: selected ? theme.background.hoverable : "transparent",
    borderRadius: 4,
    borderWidth: 0,
    color: theme.color.defaultText,
    cursor: "pointer",
    display: "flex",
    gap: 10,
    minHeight: 36,
    paddingBlock: 6,
    paddingInline: 8,
    textAlign: "start",
    "&:hover": {
      backgroundColor: theme.background.hoverable,
    },
    "& > svg": {
      marginInlineStart: "auto",
    },
  }),
);

const PresetSwatch = styled.span<{ color: string }>(({ color, theme }) => ({
  backgroundColor: color,
  borderColor: theme.appBorderColor,
  borderRadius: 3,
  borderStyle: "solid",
  borderWidth: 1,
  height: 14,
  width: 14,
}));

const DropdownDivider = styled.div(({ theme }) => ({
  borderBlockStartColor: theme.appBorderColor,
  borderBlockStartStyle: "solid",
  borderBlockStartWidth: 1,
  marginBlock: 8,
}));

const OpenPanelButton = styled.button(({ theme }) => ({
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: 4,
  borderWidth: 0,
  color: theme.color.defaultText,
  cursor: "pointer",
  display: "flex",
  fontSize: 13,
  gap: 8,
  paddingBlock: 8,
  paddingInline: 8,
  width: "100%",
  "&:hover": {
    backgroundColor: theme.background.hoverable,
  },
}));

const PresetLabel = styled.span({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

function getCustomSwatches(
  themeState: BrandThemeGlobals,
): [string, string, string] {
  const [backgroundFallback, primaryFallback, textFallback] = DEFAULT_SWATCHES;
  return [
    resolveAssignmentColor(themeState, "background", backgroundFallback),
    resolveAssignmentColor(themeState, "primary", primaryFallback),
    resolveAssignmentColor(themeState, "text", textFallback),
  ];
}

function resolveAssignmentColor(
  themeState: BrandThemeGlobals,
  role: string,
  fallback: string,
): string {
  const assignment = themeState.assignments.find((item) => item.role === role);
  if (!assignment) {
    return fallback;
  }

  if (assignment.colorIndex >= 0) {
    const paletteColor = themeState.palette[assignment.colorIndex];
    if (paletteColor) {
      return paletteColor.hex;
    }
  }

  return assignment.customValue ?? fallback;
}
