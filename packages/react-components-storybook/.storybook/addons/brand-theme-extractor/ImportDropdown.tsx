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
  type ExtractedPalette,
  extractPalette,
  extractPaletteFromWebsite,
} from "./palette-extractor.js";
import type { ThemeColorMode, TokenAssignment } from "./types.js";

interface ImportDropdownProps {
  colorMode: ThemeColorMode;
  onApply: (assignments: TokenAssignment[]) => void;
}

type Mode = "image" | "website";

const SWATCH_LABELS: Array<{ key: keyof ExtractedPalette; label: string }> = [
  { key: "vibrant", label: "Vibrant" },
  { key: "darkVibrant", label: "Dark Vibrant" },
  { key: "lightVibrant", label: "Light Vibrant" },
  { key: "muted", label: "Muted" },
  { key: "darkMuted", label: "Dark Muted" },
  { key: "lightMuted", label: "Light Muted" },
];

const Wrapper = styled.div({
  position: "relative" as const,
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
  position: "absolute" as const,
  top: "calc(100% + 6px)",
  right: 0,
  width: 320,
  background: theme.background.content,
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 6,
  boxShadow: "0 6px 18px rgba(0,0,0,0.16)",
  zIndex: 10,
  overflow: "hidden",
}));

const Tabs = styled.div(({ theme }) => ({
  display: "flex",
  borderBottom: `1px solid ${theme.appBorderColor}`,
}));

const Tab = styled.button<{ active: boolean }>(({ active, theme }) => ({
  flex: 1,
  background: active ? theme.background.hoverable : "transparent",
  border: "none",
  borderBottom: `2px solid ${active ? theme.color.secondary : "transparent"}`,
  color: active ? theme.color.defaultText : theme.color.mediumdark,
  cursor: "pointer",
  fontSize: 12,
  fontWeight: 600,
  padding: "10px 8px",
}));

const Body = styled.div({
  padding: 12,
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

const Row = styled.div({
  display: "flex",
  gap: 8,
  alignItems: "center",
});

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

const PrimaryButton = styled.button<{ disabled?: boolean }>(
  ({ disabled, theme }) => ({
    background: disabled ? theme.background.content : theme.color.secondary,
    border: "none",
    borderRadius: 4,
    color: disabled ? theme.color.mediumdark : "#ffffff",
    cursor: disabled ? "not-allowed" : "pointer",
    fontSize: 12,
    fontWeight: 600,
    padding: "7px 14px",
    whiteSpace: "nowrap" as const,
  })
);

const ErrorText = styled.div(({ theme }) => ({
  color: theme.color.negative,
  fontSize: 11,
}));

const Hint = styled.div(({ theme }) => ({
  color: theme.color.mediumdark,
  fontSize: 10,
}));

const PreviewHeading = styled.div(({ theme }) => ({
  color: theme.color.mediumdark,
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: 0.4,
  textTransform: "uppercase" as const,
}));

const SwatchRow = styled.div({
  display: "flex",
  gap: 6,
  flexWrap: "wrap",
});

const SwatchItem = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
});

const SwatchColor = styled.div<{ color: string }>(({ color, theme }) => ({
  width: 30,
  height: 30,
  borderRadius: 4,
  backgroundColor: color,
  border: `1px solid ${theme.appBorderColor}`,
}));

const SwatchLabel = styled.span(({ theme }) => ({
  fontSize: 9,
  color: theme.color.mediumdark,
  maxWidth: 40,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap" as const,
}));

export function ImportDropdown({
  colorMode,
  onApply,
}: ImportDropdownProps): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("image");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [palette, setPalette] = useState<ExtractedPalette | null>(null);
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

  const apply = useCallback(
    (extracted: ExtractedPalette) => {
      setPalette(extracted);
      onApply(autoMapFromPalette(extracted, colorMode));
    },
    [colorMode, onApply]
  );

  const handleFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setLoading(true);
      setError(null);
      try {
        apply(await extractPalette(file));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to extract");
      } finally {
        setLoading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    },
    [apply]
  );

  const handleWebsite = useCallback(async () => {
    if (!url.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const { palette: extracted } = await extractPaletteFromWebsite(
        url.trim()
      );
      apply(extracted);
    } catch {
      setError("Couldn't reach that site or read its colors.");
    } finally {
      setLoading(false);
    }
  }, [apply, url]);

  return (
    <Wrapper ref={wrapperRef}>
      <TriggerButton
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        Import
        <Chevron>{open ? "▴" : "▾"}</Chevron>
      </TriggerButton>
      {open && (
        <Menu role="menu" aria-label="Import theme source">
          <Tabs>
            <Tab
              active={mode === "image"}
              onClick={() => setMode("image")}
              type="button"
            >
              Image
            </Tab>
            <Tab
              active={mode === "website"}
              onClick={() => setMode("website")}
              type="button"
            >
              Website
            </Tab>
          </Tabs>
          <Body>
            {mode === "image" ? (
              <>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFile}
                  style={{ display: "none" }}
                />
                <PrimaryButton
                  onClick={() => fileInputRef.current?.click()}
                  disabled={loading}
                >
                  {loading ? "Extracting…" : "Choose image…"}
                </PrimaryButton>
                <Hint>PNG, JPG, or SVG — a logo or screenshot works best.</Hint>
              </>
            ) : (
              <>
                <Row>
                  <UrlInput
                    type="url"
                    placeholder="example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") void handleWebsite();
                    }}
                  />
                  <PrimaryButton
                    onClick={() => void handleWebsite()}
                    disabled={loading || !url.trim()}
                  >
                    {loading ? "…" : "Extract"}
                  </PrimaryButton>
                </Row>
                <Hint>
                  Renders the page via a screenshot service, then reads its
                  colors.
                </Hint>
              </>
            )}
            {error && <ErrorText>{error}</ErrorText>}
            {palette && (
              <>
                <PreviewHeading>Extracted colors</PreviewHeading>
                <SwatchRow>
                  {SWATCH_LABELS.map(({ key, label }) => {
                    const swatch = palette[key];
                    if (!swatch) return null;
                    return (
                      <SwatchItem key={key}>
                        <SwatchColor
                          color={swatch.hex}
                          title={`${label}: ${swatch.hex}`}
                        />
                        <SwatchLabel>{label}</SwatchLabel>
                      </SwatchItem>
                    );
                  })}
                </SwatchRow>
                <Hint>
                  Applied to the theme below. Adjust any token to refine.
                </Hint>
              </>
            )}
          </Body>
        </Menu>
      )}
    </Wrapper>
  );
}
