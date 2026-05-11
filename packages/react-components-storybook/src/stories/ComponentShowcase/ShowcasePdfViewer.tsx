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

import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";
import React from "react";

// cspell:disable-next-line
const PDF_SRC = `${import.meta.env.BASE_URL}compressed.tracemonkey-pldi-09.pdf`;

export const ShowcasePdfViewer = React.memo(
  function ShowcasePdfViewerFn(): React.ReactElement {
    return (
      <BasePdfViewer
        src={PDF_SRC}
        initialPage={1}
        initialScale={1.0}
      />
    );
  },
);
