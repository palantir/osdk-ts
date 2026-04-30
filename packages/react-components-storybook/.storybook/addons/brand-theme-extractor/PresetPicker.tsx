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

import React, { useCallback } from "react";
import { styled } from "storybook/theming";
import type { ThemePreset } from "./presets.js";
import { THEME_PRESETS } from "./presets.js";
import type { TokenAssignment } from "./types.js";

interface PresetPickerProps {
  onSelect: (assignments: TokenAssignment[]) => void;
}

export function PresetPicker(
  { onSelect }: PresetPickerProps,
): React.ReactElement {
  return (
    <div>
      <SectionLabel>Quick Start — Pick a Theme</SectionLabel>
      <PresetGrid>
        {THEME_PRESETS.map((preset) => (
          <PresetCard
            key={preset.id}
            preset={preset}
            onSelect={onSelect}
          />
        ))}
      </PresetGrid>
    </div>
  );
}

interface PresetCardProps {
  preset: ThemePreset;
  onSelect: (assignments: TokenAssignment[]) => void;
}

function PresetCard(
  { preset, onSelect }: PresetCardProps,
): React.ReactElement {
  const handleClick = useCallback(() => {
    onSelect(preset.assignments);
  }, [preset.assignments, onSelect]);

  const [bg, primary, text] = preset.swatches;

  return (
    <Card onClick={handleClick} title={preset.description}>
      <SwatchRow>
        <Swatch color={bg} border={true} />
        <Swatch color={primary} />
        <Swatch color={text} />
      </SwatchRow>
      <CardLabel>{preset.label}</CardLabel>
    </Card>
  );
}

// ── Styled Components ─────────────────────────────────────

const SectionLabel = styled.div(({ theme }) => ({
  fontSize: 11,
  fontWeight: 600,
  color: theme.color.mediumdark,
  padding: "8px 0 6px",
}));

const PresetGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
  gap: 8,
  paddingBottom: 8,
});

const Card = styled.button(({ theme }) => ({
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  gap: 6,
  padding: "10px 8px",
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 6,
  background: theme.background.content,
  cursor: "pointer",
  transition: "border-color 150ms ease, box-shadow 150ms ease",
  "&:hover": {
    borderColor: theme.color.secondary,
    boxShadow: `${theme.color.secondary}22 0 0 0 2px`,
  },
}));

const SwatchRow = styled.div({
  display: "flex",
  gap: 4,
});

const Swatch = styled.div<{ color: string; border?: boolean }>(
  ({ color, border }) => ({
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: color,
    border: border ? "1px solid rgba(0,0,0,0.15)" : "none",
  }),
);

const CardLabel = styled.span(({ theme }) => ({
  fontSize: 10,
  fontWeight: 500,
  color: theme.color.defaultText,
  textAlign: "center" as const,
}));
