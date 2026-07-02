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

import React, { useCallback, useEffect, useRef, useState } from "react";
import { styled } from "storybook/theming";

import {
  autoMapFromPalette,
  type ExtractionResult,
  extractPalette,
  extractPaletteFromWebsite,
  isPredominantlyDark,
} from "./palette-extractor.js";
import type { ThemeColorMode, TokenAssignment } from "./types.js";

interface GenerateDropdownProps {
  colorMode: ThemeColorMode;
  onApply: (assignments: TokenAssignment[], colorMode: ThemeColorMode) => void;
}

type Mode = "image" | "website";

// The resulting theme roles worth previewing, in reading order.
const PREVIEW_ROLES: Array<{ role: string; label: string }> = [
  { role: "primary", label: "Primary" },
  { role: "secondary", label: "Secondary" },
  { role: "background", label: "Background" },
  { role: "surface", label: "Surface" },
  { role: "text", label: "Text" },
];

const Wrapper = styled.div({
  position: "relative",
  display: "inline-block",
});

const TriggerButton = styled.button(({ theme }) => ({
  alignItems: "center",
  background: theme.background.content,
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 6,
  color: theme.color.defaultText,
  cursor: "pointer",
  display: "flex",
  fontSize: 12,
  fontWeight: 700,
  gap: 6,
  minHeight: 30,
  padding: "6px 12px",
  transition: "background 150ms ease, border-color 150ms ease",
  "&:hover": {
    background: theme.background.hoverable,
    borderColor: theme.color.medium,
  },
}));

const Chevron = styled.span({
  fontSize: 9,
  lineHeight: 1,
});

const Menu = styled.div(({ theme }) => ({
  position: "absolute",
  top: "calc(100% + 6px)",
  right: 0,
  width: 288,
  background: theme.background.content,
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 8,
  boxShadow: "0 6px 18px rgba(0,0,0,0.14)",
  zIndex: 10,
  overflow: "hidden",
}));

const Body = styled.div({
  padding: 12,
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

const Segmented = styled.div(({ theme }) => ({
  display: "flex",
  gap: 2,
  padding: 3,
  background: theme.background.app,
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 8,
}));

const Segment = styled.button<{ active: boolean }>(({ active, theme }) => ({
  flex: 1,
  background: active ? theme.background.content : "transparent",
  border: "none",
  borderRadius: 6,
  boxShadow: active ? "0 1px 2px rgba(0,0,0,0.12)" : "none",
  color: active ? theme.color.defaultText : theme.color.mediumdark,
  cursor: "pointer",
  fontSize: 12,
  fontWeight: 600,
  padding: "6px 10px",
  transition: "background 120ms ease, color 120ms ease",
}));

const Row = styled.div({
  display: "flex",
  gap: 6,
  alignItems: "center",
});

const ChooseButton = styled.button<{ disabled?: boolean }>(
  ({ disabled, theme }) => ({
    width: "100%",
    background: "transparent",
    border: `1px dashed ${theme.appBorderColor}`,
    borderRadius: 6,
    color: disabled ? theme.color.mediumdark : theme.color.defaultText,
    cursor: disabled ? "default" : "pointer",
    fontSize: 12,
    fontWeight: 600,
    padding: "12px 8px",
    transition: "border-color 150ms ease, background 150ms ease",
    "&:hover": disabled
      ? {}
      : {
          background: theme.background.hoverable,
          borderColor: theme.color.medium,
        },
  })
);

const UrlInput = styled.input(({ theme }) => ({
  flex: 1,
  background: theme.background.app,
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 4,
  color: theme.color.defaultText,
  fontSize: 12,
  padding: "6px 8px",
  "&:focus": {
    borderColor: theme.color.secondary,
    outline: "none",
  },
}));

const GoButton = styled.button<{ disabled?: boolean }>(
  ({ disabled, theme }) => ({
    background: disabled ? theme.background.app : theme.color.secondary,
    border: "none",
    borderRadius: 4,
    color: disabled ? theme.color.mediumdark : "#ffffff",
    cursor: disabled ? "not-allowed" : "pointer",
    fontSize: 12,
    fontWeight: 600,
    padding: "6px 12px",
    whiteSpace: "nowrap",
  })
);

const Hint = styled.div(({ theme }) => ({
  color: theme.color.mediumdark,
  fontSize: 10,
}));

const ErrorText = styled.div(({ theme }) => ({
  color: theme.color.negative,
  fontSize: 11,
}));

const Preview = styled.div({
  display: "flex",
  gap: 4,
  marginTop: 2,
});

const Chip = styled.div<{ color: string }>(({ color, theme }) => ({
  flex: 1,
  height: 26,
  borderRadius: 4,
  backgroundColor: color,
  border: `1px solid ${theme.appBorderColor}`,
}));

function roleValue(
  assignments: TokenAssignment[],
  role: string
): string | undefined {
  return assignments.find((a) => a.role === role)?.customValue;
}

export function GenerateDropdown({
  colorMode,
  onApply,
}: GenerateDropdownProps): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("image");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [applied, setApplied] = useState<TokenAssignment[] | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        e.target instanceof Node &&
        !wrapperRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const runExtraction = useCallback(
    async (extract: () => Promise<ExtractionResult>) => {
      setLoading(true);
      setError(null);
      try {
        const { palette, averageLuminance } = await extract();
        // Infer the color mode from the source image itself — a dark source
        // gets a dark theme, a light source gets a light theme — so each
        // extraction stands on its own rather than inheriting whatever mode
        // a previous extraction left behind.
        const nextMode: ThemeColorMode = isPredominantlyDark(
          palette,
          averageLuminance
        )
          ? "dark"
          : "light";
        const assignments = autoMapFromPalette(palette, nextMode);
        setApplied(assignments);
        onApply(assignments, nextMode);
      } catch {
        setError("Couldn't read colors from that source.");
      } finally {
        setLoading(false);
      }
    },
    [onApply]
  );

  const handleFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (fileInputRef.current) fileInputRef.current.value = "";
      if (!file) return;
      void runExtraction(() => extractPalette(file));
    },
    [runExtraction]
  );

  const handleWebsite = useCallback(() => {
    if (!url.trim()) return;
    void runExtraction(() => extractPaletteFromWebsite(url.trim()));
  }, [runExtraction, url]);

  return (
    <Wrapper ref={wrapperRef}>
      <TriggerButton
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        Generate
        <Chevron>{open ? "▴" : "▾"}</Chevron>
      </TriggerButton>
      {open && (
        <Menu role="dialog" aria-label="Generate theme source">
          <Body>
            <Segmented role="group" aria-label="Source type">
              <Segment
                active={mode === "image"}
                onClick={() => setMode("image")}
                type="button"
                aria-pressed={mode === "image"}
              >
                From Image
              </Segment>
              <Segment
                active={mode === "website"}
                onClick={() => setMode("website")}
                type="button"
                aria-pressed={mode === "website"}
              >
                From Website
              </Segment>
            </Segmented>
            {mode === "image" ? (
              <>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFile}
                  style={{ display: "none" }}
                />
                <ChooseButton
                  onClick={() => fileInputRef.current?.click()}
                  disabled={loading}
                >
                  {loading ? "Extracting…" : "Choose an image"}
                </ChooseButton>
              </>
            ) : (
              <Row>
                <UrlInput
                  type="url"
                  placeholder="example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleWebsite();
                  }}
                />
                <GoButton
                  onClick={handleWebsite}
                  disabled={loading || !url.trim()}
                >
                  {loading ? "…" : "Extract"}
                </GoButton>
              </Row>
            )}
            {error && <ErrorText>{error}</ErrorText>}
            {applied && (
              <>
                <Preview>
                  {PREVIEW_ROLES.map(({ role, label }) => {
                    const value = roleValue(applied, role);
                    if (!value) return null;
                    return (
                      <Chip
                        key={role}
                        color={value}
                        title={`${label}: ${value}`}
                      />
                    );
                  })}
                </Preview>
                <Hint>Applied — adjust any token below to refine.</Hint>
              </>
            )}
          </Body>
        </Menu>
      )}
    </Wrapper>
  );
}
