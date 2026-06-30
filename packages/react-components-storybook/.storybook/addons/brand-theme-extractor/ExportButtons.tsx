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

interface ExportDropdownProps {
  label: string;
  content: string;
  filename: string;
  mime: string;
}

const DropdownWrapper = styled.div({
  position: "relative" as const,
  display: "inline-block",
});

const DropdownButton = styled.button(({ theme }) => ({
  fontSize: 11,
  fontWeight: 500,
  padding: "4px 8px",
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 4,
  background: theme.background.content,
  color: theme.color.defaultText,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 4,
  transition: "background 150ms ease, border-color 150ms ease",
  "&:hover": {
    background: theme.background.hoverable,
    borderColor: theme.color.medium,
  },
}));

const Chevron = styled.span({
  fontSize: 8,
  lineHeight: 1,
});

const Menu = styled.div(({ theme }) => ({
  position: "absolute" as const,
  top: "calc(100% + 4px)",
  right: 0,
  minWidth: 140,
  background: theme.background.content,
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 4,
  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  zIndex: 10,
  overflow: "hidden",
}));

const MenuItem = styled.button(({ theme }) => ({
  display: "block",
  width: "100%",
  padding: "8px 12px",
  fontSize: 12,
  fontWeight: 400,
  border: "none",
  background: "transparent",
  color: theme.color.defaultText,
  cursor: "pointer",
  textAlign: "left" as const,
  transition: "background 100ms ease",
  "&:hover": {
    background: theme.background.hoverable,
  },
}));

export function ExportDropdown({
  label,
  content,
  filename,
  mime,
}: ExportDropdownProps): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const copiedTimerRef = useRef<number | undefined>();

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

  const handleCopy = useCallback(async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(content);
      } else {
        copyWithTextAreaFallback(content);
      }
      setCopied(true);
    } catch {
      // ignore
    } finally {
      setOpen(false);
      window.clearTimeout(copiedTimerRef.current);
      copiedTimerRef.current = window.setTimeout(() => setCopied(false), 2000);
    }
  }, [content]);

  const handleDownload = useCallback(() => {
    downloadFile(content, filename, mime);
    setOpen(false);
  }, [content, filename, mime]);

  return (
    <DropdownWrapper ref={wrapperRef}>
      <DropdownButton onClick={() => setOpen(!open)}>
        {copied ? "Copied!" : label}
        <Chevron>{open ? "\u25B4" : "\u25BE"}</Chevron>
      </DropdownButton>
      {open && (
        <Menu>
          <MenuItem onClick={handleDownload}>Download</MenuItem>
          <MenuItem onClick={handleCopy}>Copy to clipboard</MenuItem>
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
