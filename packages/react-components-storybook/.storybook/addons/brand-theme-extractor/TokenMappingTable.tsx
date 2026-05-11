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

import React, { useCallback, useMemo } from "react";
import { styled } from "storybook/theming";
import {
  contrastRatio,
  luminanceFromHex,
  WCAG_AA_LARGE,
  WCAG_AA_NORMAL,
} from "./color-utils.js";
import { TOKEN_ROLES } from "./token-map.js";
import type {
  ExtractedColor,
  TokenAssignment,
  TokenCategory,
  TokenRoleDefinition,
} from "./types.js";

/** Pairs to check: [foreground role, background role, min ratio] */
const CONTRAST_PAIRS: Array<[string, string, number]> = [
  ["text", "background", WCAG_AA_NORMAL],
  ["text", "primary", WCAG_AA_NORMAL],
  ["text-muted", "background", WCAG_AA_NORMAL],
  ["text-muted", "primary", WCAG_AA_NORMAL],
  ["primary", "background", WCAG_AA_LARGE],
  ["primary-foreground", "primary", WCAG_AA_NORMAL],
  ["primary-foreground", "background", WCAG_AA_NORMAL],
  ["border", "background", WCAG_AA_LARGE],
];

const SHADOW_PRESETS: Array<{ label: string; value: string }> = [
  { label: "None", value: "none" },
  { label: "Subtle", value: "0 1px 2px rgba(0,0,0,0.06)" },
  {
    label: "Small",
    value: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)",
  },
  {
    label: "Medium",
    value: "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)",
  },
  {
    label: "Large",
    value: "0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)",
  },
  {
    label: "Heavy",
    value: "0 20px 25px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.05)",
  },
];

const FONT_PRESETS: Array<{ label: string; value: string }> = [
  { label: "Inter", value: "Inter, system-ui, sans-serif" },
  { label: "System UI", value: "system-ui, -apple-system, sans-serif" },
  { label: "Roboto", value: "Roboto, system-ui, sans-serif" },
  { label: "Open Sans", value: "'Open Sans', system-ui, sans-serif" },
  { label: "Lato", value: "Lato, system-ui, sans-serif" },
  { label: "Source Sans", value: "'Source Sans 3', system-ui, sans-serif" },
  { label: "IBM Plex Sans", value: "'IBM Plex Sans', system-ui, sans-serif" },
  { label: "Noto Sans", value: "'Noto Sans', system-ui, sans-serif" },
  { label: "Georgia", value: "Georgia, 'Times New Roman', serif" },
  { label: "Monospace", value: "'SF Mono', 'Fira Code', monospace" },
];

interface TokenMappingTableProps {
  palette: ExtractedColor[];
  assignments: TokenAssignment[];
  onAssignmentChange: (
    role: string,
    assignment: Partial<TokenAssignment>,
  ) => void;
  onReset: (role: string) => void;
}

const CATEGORIES: Array<{ key: TokenCategory; label: string }> = [
  { key: "color", label: "Colors" },
  { key: "typography", label: "Typography" },
  { key: "surface", label: "Surface" },
  { key: "emphasis", label: "Emphasis" },
];

// ── Styled Components ─────────────────────────────────────

const SectionHeader = styled.div(({ theme }) => ({
  fontSize: 11,
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  color: theme.color.mediumdark,
  padding: "14px 0 6px",
}));

const Row = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "8px 0",
  borderBottom: `1px solid ${theme.appBorderColor}`,
  "&:last-child": {
    borderBottom: "none",
  },
}));

const LabelWrapper = styled.div({
  flexGrow: 2,
  paddingRight: 12,
  minWidth: 0,
  position: "relative" as const,
});

const LabelText = styled.div(({ theme }) => ({
  fontSize: 13,
  lineHeight: "20px",
  color: theme.color.defaultText,
  display: "flex",
  alignItems: "center",
  gap: 6,
  cursor: "default",
}));

const Tooltip = styled.div(({ theme }) => ({
  display: "none",
  position: "absolute" as const,
  left: 0,
  top: "100%",
  zIndex: 10,
  background: theme.color.darkest || "#1a1a1a",
  color: "#fff",
  fontSize: 10,
  fontFamily: theme.typography.fonts.mono,
  padding: "6px 8px",
  borderRadius: 4,
  whiteSpace: "pre" as const,
  lineHeight: 1.4,
  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  maxWidth: 300,
  [`${LabelWrapper}:hover &`]: {
    display: "block",
  },
}));

const Controls = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 6,
  flexShrink: 0,
});

const TextInput = styled.input(({ theme }) => ({
  fontSize: 12,
  fontFamily: theme.typography.fonts.mono,
  padding: "4px 8px",
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 4,
  background: theme.input.background,
  color: theme.input.color,
  outline: "none",
  boxSizing: "border-box" as const,
  "&:focus": {
    borderColor: theme.color.secondary,
    boxShadow: `${theme.color.secondary}33 0 0 0 1px`,
  },
}));

const SelectInput = styled.select(({ theme }) => ({
  fontSize: 11,
  padding: "4px 6px",
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 4,
  background: theme.input.background,
  color: theme.input.color,
  outline: "none",
  maxWidth: 90,
  "&:focus": {
    borderColor: theme.color.secondary,
  },
}));

const ContrastWarning = styled.span(({ theme }) => ({
  fontSize: 10,
  fontWeight: 600,
  color: theme.color.warning || "#e8a317",
  backgroundColor: `${theme.color.warning || "#e8a317"}18`,
  padding: "1px 5px",
  borderRadius: 3,
  whiteSpace: "nowrap" as const,
  flexShrink: 0,
}));

const ContrastPass = styled.span({
  fontSize: 10,
  fontWeight: 600,
  color: "#2ea043",
  backgroundColor: "#2ea04318",
  padding: "1px 5px",
  borderRadius: 3,
  whiteSpace: "nowrap" as const,
  flexShrink: 0,
});

const ResetBtn = styled.button(({ theme }) => ({
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: 13,
  padding: "2px 4px",
  borderRadius: 4,
  color: theme.color.mediumdark,
  flexShrink: 0,
  lineHeight: 1,
  "&:hover": {
    color: theme.color.defaultText,
    background: theme.background.hoverable,
  },
}));

const EmptySwatch = styled.div(({ theme }) => ({
  width: 28,
  height: 28,
  borderRadius: 4,
  border: `2px dashed ${theme.appBorderColor}`,
  cursor: "pointer",
  flexShrink: 0,
  "&:hover": {
    borderColor: theme.color.secondary,
  },
}));

const UnitSuffix = styled.span(({ theme }) => ({
  fontSize: 10,
  color: theme.color.mediumdark,
  flexShrink: 0,
}));

// ── Contrast Helpers ──────────────────────────────────────

interface ContrastInfo {
  ratio: number;
  required: number;
  pass: boolean;
  against: string;
}

/** Returns the worst (lowest ratio) contrast pair for a given role */
function getContrastInfo(
  role: string,
  assignments: TokenAssignment[],
  palette: ExtractedColor[],
): ContrastInfo | undefined {
  let worst: ContrastInfo | undefined;

  for (const [fgRole, bgRole, minRatio] of CONTRAST_PAIRS) {
    if (fgRole !== role) continue;

    const fgValue = resolveHex(
      assignments.find((a) => a.role === fgRole),
      palette,
    );
    const bgValue = resolveHex(
      assignments.find((a) => a.role === bgRole),
      palette,
    );
    if (!fgValue || !bgValue) continue;

    const fgLum = luminanceFromHex(fgValue);
    const bgLum = luminanceFromHex(bgValue);
    if (fgLum == null || bgLum == null) continue;

    const ratio = contrastRatio(fgLum, bgLum);
    const pass = ratio >= minRatio;

    // Show the worst failing pair, or the worst passing pair if all pass
    if (
      !worst || (!pass && worst.pass)
      || (pass === worst.pass && ratio < worst.ratio)
    ) {
      worst = { ratio, required: minRatio, pass, against: bgRole };
    }
  }

  return worst;
}

function resolveHex(
  assignment: TokenAssignment | undefined,
  palette: ExtractedColor[],
): string | undefined {
  if (!assignment) return undefined;
  if (assignment.colorIndex >= 0 && palette[assignment.colorIndex]) {
    return palette[assignment.colorIndex].hex;
  }
  return assignment.customValue;
}

// ── Main Component ────────────────────────────────────────

export function TokenMappingTable({
  palette,
  assignments,
  onAssignmentChange,
  onReset,
}: TokenMappingTableProps): React.ReactElement {
  return (
    <div>
      {CATEGORIES.map(({ key, label }) => {
        const roles = TOKEN_ROLES.filter((t) => t.category === key);
        return (
          <div key={key}>
            <SectionHeader>{label}</SectionHeader>
            {roles.map((roleDef) => (
              <TokenRow
                key={roleDef.role}
                roleDef={roleDef}
                palette={palette}
                assignments={assignments}
                assignment={assignments.find((a) => a.role === roleDef.role)}
                onAssignmentChange={onAssignmentChange}
                onReset={onReset}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

// ── Row Component ─────────────────────────────────────────

interface TokenRowProps {
  roleDef: TokenRoleDefinition;
  palette: ExtractedColor[];
  assignments: TokenAssignment[];
  assignment: TokenAssignment | undefined;
  onAssignmentChange: (
    role: string,
    assignment: Partial<TokenAssignment>,
  ) => void;
  onReset: (role: string) => void;
}

function TokenRow({
  roleDef,
  palette,
  assignments,
  assignment,
  onAssignmentChange,
  onReset,
}: TokenRowProps): React.ReactElement {
  const currentValue = resolveValue(assignment, palette);

  const contrast = useMemo(
    () =>
      roleDef.inputType === "color"
        ? getContrastInfo(roleDef.role, assignments, palette)
        : undefined,
    [roleDef.role, roleDef.inputType, assignments, palette],
  );

  const handleValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onAssignmentChange(roleDef.role, {
        colorIndex: -1,
        customValue: e.target.value,
      });
    },
    [roleDef.role, onAssignmentChange],
  );

  const handleSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const val = e.target.value;
      if (val === "custom") {
        onAssignmentChange(roleDef.role, {
          colorIndex: -1,
          customValue: currentValue || "",
        });
      } else {
        onAssignmentChange(roleDef.role, {
          colorIndex: Number(val),
          customValue: undefined,
        });
      }
    },
    [roleDef.role, onAssignmentChange, currentValue],
  );

  const handleReset = useCallback(
    () => onReset(roleDef.role),
    [roleDef.role, onReset],
  );

  return (
    <Row>
      <LabelWrapper>
        <LabelText>
          {roleDef.label}
          {contrast && (
            contrast.pass
              ? (
                <ContrastPass
                  title={`${
                    contrast.ratio.toFixed(1)
                  }:1 vs ${contrast.against} (needs ${contrast.required}:1)`}
                >
                  {contrast.ratio.toFixed(1)}:1
                </ContrastPass>
              )
              : (
                <ContrastWarning
                  title={`${
                    contrast.ratio.toFixed(1)
                  }:1 vs ${contrast.against} (needs ${contrast.required}:1)`}
                >
                  {contrast.ratio.toFixed(1)}:1
                </ContrastWarning>
              )
          )}
        </LabelText>
        <Tooltip>
          {`Maps to:\n${roleDef.cssProperties.join("\n")}`}
        </Tooltip>
      </LabelWrapper>
      <Controls>
        {roleDef.inputType === "color"
          ? (
            <>
              {currentValue
                ? (
                  <input
                    type="color"
                    value={currentValue}
                    onChange={handleValueChange}
                    style={{
                      width: 28,
                      height: 28,
                      padding: 0,
                      border: "none",
                      cursor: "pointer",
                      borderRadius: 4,
                    }}
                  />
                )
                : (
                  <EmptySwatch
                    onClick={() =>
                      onAssignmentChange(roleDef.role, {
                        colorIndex: -1,
                        customValue: "#808080",
                      })}
                    title="Click to set a color"
                  />
                )}
              <TextInput
                type="text"
                value={currentValue || ""}
                onChange={handleValueChange}
                placeholder="theme default"
                style={{ width: 90 }}
              />
              {palette.length > 0 && (
                <SelectInput
                  value={assignment?.colorIndex != null
                      && assignment.colorIndex >= 0
                    ? String(assignment.colorIndex)
                    : "custom"}
                  onChange={handleSelectChange}
                >
                  <option value="custom">custom</option>
                  {palette.map((c, i) => (
                    <option key={i} value={String(i)}>
                      {c.hex}
                    </option>
                  ))}
                </SelectInput>
              )}
            </>
          )
          : roleDef.inputType === "font"
          ? (
            <SelectInput
              value={currentValue || ""}
              onChange={(e) =>
                onAssignmentChange(roleDef.role, {
                  colorIndex: -1,
                  customValue: e.target.value,
                })}
              style={{ minWidth: 130, fontFamily: currentValue || "inherit" }}
            >
              <option value="">theme default</option>
              {FONT_PRESETS.map((f) => (
                <option
                  key={f.label}
                  value={f.value}
                  style={{ fontFamily: f.value }}
                >
                  {f.label}
                </option>
              ))}
            </SelectInput>
          )
          : roleDef.inputType === "shadow"
          ? (
            <SelectInput
              value={currentValue || ""}
              onChange={(e) =>
                onAssignmentChange(roleDef.role, {
                  colorIndex: -1,
                  customValue: e.target.value,
                })}
              style={{ minWidth: 100 }}
            >
              <option value="">theme default</option>
              {SHADOW_PRESETS.map((s) => (
                <option key={s.label} value={s.value}>
                  {s.label}
                </option>
              ))}
            </SelectInput>
          )
          : (
            <>
              <TextInput
                type="text"
                value={currentValue || ""}
                onChange={handleValueChange}
                placeholder="theme default"
                style={{ width: roleDef.inputType === "text" ? 140 : 55 }}
              />
              {(roleDef.inputType === "px" || roleDef.inputType === "ms") && (
                <UnitSuffix>{roleDef.inputType}</UnitSuffix>
              )}
            </>
          )}
        <ResetBtn onClick={handleReset} title="Reset to default">
          ↺
        </ResetBtn>
      </Controls>
    </Row>
  );
}

function resolveValue(
  assignment: TokenAssignment | undefined,
  palette: ExtractedColor[],
): string | undefined {
  if (!assignment) return undefined;
  if (assignment.colorIndex >= 0 && palette[assignment.colorIndex]) {
    return palette[assignment.colorIndex].hex;
  }
  return assignment.customValue;
}
