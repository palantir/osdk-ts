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
import { createPortal } from "react-dom";
import { styled } from "storybook/theming";

import {
  type CssExtractionResult,
  extractTokensFromCssText,
  extractTokensFromWebsite,
} from "./css-extractor.js";
import { extractTokensFromDesignMarkdown } from "./design-md-extractor.js";
import type { ThemeColorMode, TokenAssignment } from "./types.js";

interface ImportDropdownProps {
  onApply: (assignments: TokenAssignment[], colorMode: ThemeColorMode) => void;
}

type Mode = "upload" | "website";

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
    background:
      theme.base === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
    borderColor: theme.color.medium,
  },
}));

const Chevron = styled.span({
  fontSize: 9,
  lineHeight: 1,
});

// Rendered through a portal to document.body with fixed positioning so it can't
// be clipped by the addon panel when it's docked in the narrow right sidebar.
const Menu = styled.div(({ theme }) => ({
  position: "fixed",
  background: theme.background.content,
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 8,
  boxShadow: "0 6px 18px rgba(0,0,0,0.14)",
  zIndex: 2147483000,
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
  }),
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
  }),
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
  role: string,
): string | undefined {
  return assignments.find((a) => a.role === role)?.customValue;
}

function websiteNote(result: CssExtractionResult): string {
  const via = result.fetchSource === "proxy" ? " (via proxy)" : "";
  return `Mapped ${result.directMappedCount} real tokens from the site's CSS${via}.`;
}

/** Detect a DESIGN.md by filename first, then by its YAML frontmatter. */
function isDesignMarkdown(fileName: string, text: string): boolean {
  if (/\.(md|markdown)$/i.test(fileName)) return true;
  if (/\.css$/i.test(fileName)) return false;
  return /^﻿?---\s*\n[\s\S]*\n(colors|typography|rounded|spacing)\s*:/m.test(
    text,
  );
}

/**
 * Imports a brand theme from real design tokens — an uploaded stylesheet
 * (`.css`) or DESIGN.md, or the CSS scraped from a live site. Every path feeds
 * the same synthesis pipeline; if a source yields no usable tokens we surface an
 * error rather than guessing a theme from screenshots or images.
 */
export function ImportDropdown({
  onApply,
}: ImportDropdownProps): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("upload");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [applied, setApplied] = useState<TokenAssignment[] | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const [menuPos, setMenuPos] = useState<
    { top: number; left: number; width: number } | null
  >(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      const target = e.target;
      if (!(target instanceof Node)) return;
      // The menu is portaled out of the wrapper, so check it separately.
      if (wrapperRef.current?.contains(target)) return;
      if (menuRef.current?.contains(target)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Position the portaled menu under the trigger, right-aligned to it but
  // clamped to the viewport so it's never clipped or pushed off-screen.
  useEffect(() => {
    if (!open) {
      setMenuPos(null);
      return;
    }
    function place() {
      const trigger = triggerRef.current;
      if (!trigger) return;
      const rect = trigger.getBoundingClientRect();
      const width = Math.min(288, window.innerWidth - 16);
      const left = Math.max(
        8,
        Math.min(rect.right - width, window.innerWidth - width - 8),
      );
      setMenuPos({ top: rect.bottom + 6, left, width });
    }
    place();
    // Close on scroll (of anything but the menu's own content) rather than
    // trying to track the trigger — repositioning a fixed popover while the
    // panel scrolls looks like it's floating away.
    function handleScroll(e: Event) {
      if (
        menuRef.current
        && e.target instanceof Node
        && menuRef.current.contains(e.target)
      ) {
        return;
      }
      setOpen(false);
    }
    window.addEventListener("resize", place);
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [open]);

  const finish = useCallback(
    (result: CssExtractionResult, noteText: string) => {
      setApplied(result.assignments);
      setNote(noteText);
      onApply(result.assignments, result.colorMode);
    },
    [onApply],
  );

  const handleFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (fileInputRef.current) fileInputRef.current.value = "";
      if (!file) return;
      setLoading(true);
      setError(null);
      void (async () => {
        try {
          const text = await file.text();
          const isMarkdown = isDesignMarkdown(file.name, text);
          const result = isMarkdown
            ? extractTokensFromDesignMarkdown(text)
            : extractTokensFromCssText(text);
          if (result.directMappedCount < 1) {
            setError(
              isMarkdown
                ? "No usable tokens found in that DESIGN.md file."
                : "No usable design tokens found in that CSS file.",
            );
            return;
          }
          finish(
            result,
            `Mapped ${result.directMappedCount} tokens from ${
              isMarkdown ? "DESIGN.md" : "the uploaded CSS"
            }.`,
          );
        } catch {
          setError("Couldn't read that file.");
        } finally {
          setLoading(false);
        }
      })();
    },
    [finish],
  );

  const handleWebsite = useCallback(() => {
    const target = url.trim();
    if (!target) return;
    setLoading(true);
    setError(null);
    void (async () => {
      try {
        const result = await extractTokensFromWebsite(target);
        if (result.directMappedCount < 1) {
          setError("Couldn't find usable design tokens in that site's CSS.");
          return;
        }
        finish(result, websiteNote(result));
      } catch {
        setError("Couldn't read the site's CSS.");
      } finally {
        setLoading(false);
      }
    })();
  }, [finish, url]);

  return (
    <Wrapper ref={wrapperRef}>
      <TriggerButton
        ref={triggerRef}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        Import
        <Chevron>{open ? "▴" : "▾"}</Chevron>
      </TriggerButton>
      {open && menuPos && createPortal(
        <Menu
          ref={menuRef}
          role="dialog"
          aria-label="Import theme from CSS or DESIGN.md"
          style={{
            top: menuPos.top,
            left: menuPos.left,
            width: menuPos.width,
          }}
        >
          <Body>
            <Segmented role="group" aria-label="Source type">
              <Segment
                active={mode === "upload"}
                onClick={() => setMode("upload")}
                type="button"
                aria-pressed={mode === "upload"}
              >
                Upload file
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
            {mode === "upload" ? (
              <>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".css,.md,.markdown,text/css,text/markdown"
                  onChange={handleFile}
                  style={{ display: "none" }}
                />
                <ChooseButton
                  onClick={() => fileInputRef.current?.click()}
                  disabled={loading}
                >
                  {loading ? "Reading…" : "Choose a CSS or DESIGN.md file"}
                </ChooseButton>
                <Hint>
                  Upload a stylesheet (e.g. your app's tokens.css) or a DESIGN.md
                  to pull real colors, fonts, and radii into a theme.
                </Hint>
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
                      if (e.key === "Enter") handleWebsite();
                    }}
                  />
                  <GoButton
                    onClick={handleWebsite}
                    disabled={loading || !url.trim()}
                  >
                    {loading ? "…" : "Import"}
                  </GoButton>
                </Row>
                <Hint>Scrapes the site's own CSS for its design tokens.</Hint>
              </>
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
                {note && <Hint>{note}</Hint>}
                <Hint>Applied — adjust any token below to refine.</Hint>
              </>
            )}
          </Body>
        </Menu>,
        document.body,
      )}
    </Wrapper>
  );
}
