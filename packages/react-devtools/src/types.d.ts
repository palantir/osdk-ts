/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

declare module "*.module.scss" {
  const styles: { readonly [key: string]: string };
  export default styles;
}

// @uiw/react-codemirror's .d.ts resolves @types/react@19 from the pnpm store
// while this package uses @types/react@18, causing ForwardRefExoticComponent
// type incompatibility. Override the default export with our React types.
declare module "@uiw/react-codemirror" {
  import type { Extension } from "@codemirror/state";
  import type React from "react";

  interface BasicSetupOptions {
    lineNumbers?: boolean;
    foldGutter?: boolean;
    highlightActiveLineGutter?: boolean;
    highlightSpecialChars?: boolean;
    history?: boolean;
    drawSelection?: boolean;
    dropCursor?: boolean;
    allowMultipleSelections?: boolean;
    indentOnInput?: boolean;
    syntaxHighlighting?: boolean;
    bracketMatching?: boolean;
    closeBrackets?: boolean;
    autocompletion?: boolean;
    rectangularSelection?: boolean;
    crosshairCursor?: boolean;
    highlightActiveLine?: boolean;
    highlightSelectionMatches?: boolean;
    closeBracketsKeymap?: boolean;
    defaultKeymap?: boolean;
    searchKeymap?: boolean;
    historyKeymap?: boolean;
    foldKeymap?: boolean;
    completionKeymap?: boolean;
    lintKeymap?: boolean;
    tabSize?: number;
  }

  interface ReactCodeMirrorProps
    extends
      Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "placeholder">
  {
    value?: string;
    height?: string;
    minHeight?: string;
    maxHeight?: string;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    autoFocus?: boolean;
    placeholder?: string | HTMLElement;
    theme?: "light" | "dark" | "none" | Extension;
    basicSetup?: boolean | BasicSetupOptions;
    extensions?: Extension[];
    onChange?: (value: string) => void;
    readOnly?: boolean;
    editable?: boolean;
  }

  const ReactCodeMirror: React.FC<ReactCodeMirrorProps>;
  export default ReactCodeMirror;
}
