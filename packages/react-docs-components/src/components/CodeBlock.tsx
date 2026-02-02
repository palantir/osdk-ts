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

import { Highlight, themes } from "prism-react-renderer";
import type { ReactElement } from "react";
import React from "react";

export interface CodeBlockProps {
  code: string;
  language?: string;
}

interface Token {
  types: string[];
  content: string;
}

interface RenderProps {
  style: React.CSSProperties;
  tokens: Token[][];
  getLineProps: (options: { line: Token[] }) => Record<string, unknown>;
  getTokenProps: (options: { token: Token }) => Record<string, unknown>;
}

type HighlightComponentType = React.ComponentType<{
  theme: typeof themes.vsDark;
  code: string;
  language: string;
  children: (props: RenderProps) => ReactElement;
}>;

export function CodeBlock({ code, language = "typescript" }: CodeBlockProps): ReactElement {
  // Cast through unknown to avoid React version compatibility issues with prism-react-renderer
  const HighlightComponent = Highlight as unknown as HighlightComponentType;

  return (
    <HighlightComponent theme={themes.vsDark} code={code.trim()} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{
            ...style,
            backgroundColor: "#1e1e1e",
            padding: "1rem",
            borderRadius: "6px",
            overflow: "auto",
            margin: 0,
            fontSize: "0.875rem",
            lineHeight: 1.5,
          }}
        >
          {tokens.map((line, lineIndex) => {
            const { key: _lineKey, ...lineRestProps } = getLineProps({ line }) as { key?: unknown; [k: string]: unknown };
            return (
              <div key={lineIndex} {...lineRestProps}>
                {line.map((token, tokenIndex) => {
                  const { key: _tokenKey, ...tokenRestProps } = getTokenProps({ token }) as { key?: unknown; [k: string]: unknown };
                  return <span key={tokenIndex} {...tokenRestProps} />;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </HighlightComponent>
  );
}
