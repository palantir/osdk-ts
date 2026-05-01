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

import React, { useCallback, useMemo, useState } from "react";
import { styled } from "storybook/theming";
import { generateCss, generateMarkdown } from "./export.js";
import type { ExtractedColor, TokenAssignment } from "./types.js";

interface ExportButtonsProps {
  palette: ExtractedColor[];
  assignments: TokenAssignment[];
}

const ButtonRow = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  padding: "0.5em 0",
});

const ExportButton = styled.button(({ theme }) => ({
  fontSize: 11,
  padding: "6px 12px",
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 4,
  background: theme.background.content,
  color: theme.color.defaultText,
  cursor: "pointer",
  fontWeight: 500,
  transition: "background 150ms ease, border-color 150ms ease",
  "&:hover": {
    background: theme.background.hoverable,
    borderColor: theme.color.medium,
  },
  "&:active": {
    background: theme.background.hoverable,
  },
}));

export function ExportButtons({
  palette,
  assignments,
}: ExportButtonsProps): React.ReactElement {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = useCallback(
    (content: string, label: string) => {
      navigator.clipboard.writeText(content).then(
        () => {
          setCopied(label);
          setTimeout(() => setCopied(null), 2000);
        },
        () => {
          setCopied("Failed");
          setTimeout(() => setCopied(null), 2000);
        },
      );
    },
    [],
  );

  const download = useCallback(
    (content: string, filename: string, mime: string) => {
      const blob = new Blob([content], { type: mime });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    },
    [],
  );

  const css = useMemo(() => generateCss(palette, assignments), [
    palette,
    assignments,
  ]);
  const md = useMemo(() => generateMarkdown(palette, assignments), [
    palette,
    assignments,
  ]);

  return (
    <ButtonRow>
      <ExportButton
        onClick={() => download(css, "tokens.css", "text/css")}
      >
        Download tokens.css
      </ExportButton>
      <ExportButton
        onClick={() => download(md, "design.md", "text/markdown")}
      >
        Download design.md
      </ExportButton>
      <ExportButton
        onClick={() => copyToClipboard(css, "CSS")}
      >
        {copied === "CSS" ? "Copied!" : "Copy CSS"}
      </ExportButton>
      <ExportButton
        onClick={() => copyToClipboard(md, "Markdown")}
      >
        {copied === "Markdown" ? "Copied!" : "Copy Markdown"}
      </ExportButton>
    </ButtonRow>
  );
}
