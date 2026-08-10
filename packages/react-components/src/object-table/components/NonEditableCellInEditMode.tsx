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

import styles from "../EditableCell.module.css";

/**
 * Pads a read-only cell so it lines up with the editor cells beside it while
 * the table is in edit mode. Without it, a column that mixes the two — an
 * `editable` predicate that accepts some rows and rejects others — staggers,
 * because `.osdkEditableCell` carries horizontal padding the raw content does
 * not.
 */
export function NonEditableCellInEditMode({
  children,
}: React.PropsWithChildren): React.ReactElement {
  return <span className={styles.nonEditableCellInEditMode}>{children}</span>;
}
