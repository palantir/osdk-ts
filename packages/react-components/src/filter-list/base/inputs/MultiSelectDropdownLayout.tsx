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
import { Combobox } from "../../../base-components/combobox/Combobox.js";

interface MultiSelectDropdownLayoutProps {
  renderChips: (selected: string[]) => React.ReactNode;
  renderItem: (value: string) => React.ReactElement;
  collisionBoundary?: Element;
}

export function MultiSelectDropdownLayout({
  renderChips,
  renderItem,
  collisionBoundary,
}: MultiSelectDropdownLayoutProps): React.ReactElement {
  return (
    <>
      <Combobox.Chips>
        <Combobox.Value>{renderChips}</Combobox.Value>
      </Combobox.Chips>
      <Combobox.Portal>
        <Combobox.Positioner collisionBoundary={collisionBoundary}>
          <Combobox.Popup>
            <Combobox.Empty>No matching options</Combobox.Empty>
            <Combobox.List>{renderItem}</Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </>
  );
}
