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

interface ExportItem {
  label: string;
  content: string;
  filename: string;
  mime: string;
}

interface ExportDropdownProps {
  items: ExportItem[];
  disabled?: boolean;
}

const DropdownWrapper = styled.div({
  position: "relative" as const,
  display: "inline-block",
});

const DropdownButton = styled.button<{ disabled?: boolean }>(
  ({ disabled, theme }) => ({
    alignItems: "center",
    background: disabled ? theme.background.content : theme.color.secondary,
    border: `1px solid ${
      disabled ? theme.appBorderColor : theme.color.secondary
    }`,
    borderRadius: 6,
    boxShadow: disabled ? "none" : "0 1px 4px rgba(0,0,0,0.18)",
    color: disabled ? theme.color.mediumdark : "#ffffff",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "flex",
    fontSize: 12,
    fontWeight: 700,
    gap: 6,
    minHeight: 30,
    padding: "6px 12px",
    transition:
      "background 150ms ease, border-color 150ms ease, box-shadow 150ms ease",
    "&:hover": {
      background: disabled ? theme.background.content : theme.color.secondary,
      borderColor: disabled ? theme.appBorderColor : theme.color.secondary,
      boxShadow: disabled ? "none" : "0 2px 8px rgba(0,0,0,0.2)",
    },
  })
);

const Menu = styled.div(({ theme }) => ({
  position: "absolute" as const,
  top: "calc(100% + 6px)",
  right: 0,
  minWidth: 320,
  background: theme.background.content,
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 6,
  boxShadow: "0 6px 18px rgba(0,0,0,0.16)",
  zIndex: 10,
  overflow: "hidden",
}));

const ExportRow = styled.div(({ theme }) => ({
  alignItems: "center",
  borderBottom: `1px solid ${theme.appBorderColor}`,
  display: "flex",
  gap: 12,
  justifyContent: "space-between",
  padding: "10px 12px",
  "&:last-child": {
    borderBottomWidth: 0,
  },
}));

const FormatLabel = styled.span(({ theme }) => ({
  color: theme.color.defaultText,
  fontSize: 13,
  fontWeight: 600,
}));

const RowActions = styled.div({
  alignItems: "center",
  display: "flex",
  gap: 6,
});

const ActionButton = styled.button<{ intent: "copy" | "download" }>(
  ({ intent, theme }) => {
    const primary = intent === "download";
    return {
      background: primary ? theme.background.content : "transparent",
      border: `1px solid ${primary ? theme.appBorderColor : "transparent"}`,
      borderRadius: 4,
      color: theme.color.defaultText,
      cursor: "pointer",
      fontSize: 12,
      fontWeight: primary ? 600 : 500,
      minWidth: primary ? 78 : 48,
      padding: "5px 8px",
      textAlign: "center" as const,
      transition:
        "background 100ms ease, border-color 100ms ease, box-shadow 100ms ease",
      "&:focus-visible": {
        borderColor: theme.color.medium,
        boxShadow: `0 0 0 1px ${theme.color.medium}`,
        outline: "none",
      },
      "&:hover": {
        background: "rgba(0,0,0,0.04)",
      },
    };
  }
);

const Chevron = styled.span({
  fontSize: 9,
  lineHeight: 1,
});

export function ExportDropdown({
  disabled = false,
  items,
}: ExportDropdownProps): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [copiedLabel, setCopiedLabel] = useState<string | undefined>();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const copiedTimerRef = useRef<number | undefined>();
  const menuOpen = open && !disabled;

  useEffect(() => {
    return () => window.clearTimeout(copiedTimerRef.current);
  }, []);

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

  const handleCopy = useCallback(async (item: ExportItem) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(item.content);
      } else {
        copyWithTextAreaFallback(item.content);
      }
      setCopiedLabel(item.label);
      window.clearTimeout(copiedTimerRef.current);
      copiedTimerRef.current = window.setTimeout(
        () => setCopiedLabel(undefined),
        2000
      );
    } catch {
      // ignore
    }
  }, []);

  const handleDownload = useCallback((item: ExportItem) => {
    downloadFile(item.content, item.filename, item.mime);
    setOpen(false);
  }, []);

  return (
    <DropdownWrapper ref={wrapperRef}>
      <DropdownButton
        disabled={disabled}
        onClick={() => setOpen((currentOpen) => !currentOpen)}
        aria-expanded={menuOpen}
        aria-haspopup="menu"
        title={disabled ? "Add a theme override before exporting" : undefined}
      >
        Export
        <Chevron>{menuOpen ? "\u25B4" : "\u25BE"}</Chevron>
      </DropdownButton>
      {menuOpen && (
        <Menu role="menu" aria-label="Export theme">
          {items.map((item) => (
            <ExportRow key={item.filename}>
              <FormatLabel>{item.label}</FormatLabel>
              <RowActions>
                <ActionButton
                  type="button"
                  intent="copy"
                  onClick={() => handleCopy(item)}
                  aria-label={`Copy ${item.label}`}
                >
                  {copiedLabel === item.label ? "Copied" : "Copy"}
                </ActionButton>
                <ActionButton
                  type="button"
                  intent="download"
                  onClick={() => handleDownload(item)}
                  aria-label={`Download ${item.label}`}
                >
                  Download
                </ActionButton>
              </RowActions>
            </ExportRow>
          ))}
        </Menu>
      )}
    </DropdownWrapper>
  );
}

function downloadFile(content: string, filename: string, mime: string): void {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  window.setTimeout(() => {
    a.remove();
    URL.revokeObjectURL(url);
  }, 0);
}

function copyWithTextAreaFallback(content: string): void {
  const textArea = document.createElement("textarea");
  textArea.value = content;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.insetBlockStart = "0";
  textArea.style.insetInlineStart = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();

  try {
    document.execCommand("copy");
  } finally {
    textArea.remove();
  }
}
