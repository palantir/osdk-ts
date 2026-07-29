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

import React from "react";

const CENTERED_FORM_LAYOUT_STYLE = {
  display: "flex",
  justifyContent: "center",
} as const;

interface CenteredFormLayoutProps {
  children: React.ReactNode;
}

/**
 * Centers a single form card horizontally in the story canvas. Used by
 * stories that showcase the form on its own, without a side-by-side
 * submission-output panel.
 */
export function CenteredFormLayout({
  children,
}: CenteredFormLayoutProps): React.ReactElement {
  return (
    <div style={CENTERED_FORM_LAYOUT_STYLE}>
      <div className="osdkFormCard">{children}</div>
    </div>
  );
}
