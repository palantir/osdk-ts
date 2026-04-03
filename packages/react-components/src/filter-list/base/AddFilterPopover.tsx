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

import React, { memo } from "react";
import { SearchableMenu } from "../../base-components/searchable-menu/SearchableMenu.js";
import styles from "./AddFilterPopover.module.css";

interface HiddenFilterItem {
  key: string;
  label: string;
}

interface AddFilterPopoverProps {
  hiddenDefinitions: Array<HiddenFilterItem>;
  onShowFilter: (key: string) => void;
  renderTrigger?: () => React.ReactNode;
}

function AddFilterPopoverInner({
  hiddenDefinitions,
  onShowFilter,
  renderTrigger,
}: AddFilterPopoverProps): React.ReactElement {
  return (
    <SearchableMenu
      items={hiddenDefinitions}
      onItemSelected={onShowFilter}
      trigger={renderTrigger != null ? renderTrigger() : "+ Add filter"}
      triggerClassName={renderTrigger == null ? styles.trigger : undefined}
      searchPlaceholder="Search filters"
      emptyMessage="No matching filters"
    />
  );
}

export const AddFilterPopover: React.MemoExoticComponent<
  typeof AddFilterPopoverInner
> = memo(AddFilterPopoverInner);
