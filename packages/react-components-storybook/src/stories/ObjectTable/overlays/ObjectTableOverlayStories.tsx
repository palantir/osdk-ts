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

import { Button, Dialog as BlueprintDialog, Drawer } from "@blueprintjs/core";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type { ObjectTableProps } from "@osdk/react-components/experimental/object-table";
import { Dialog as BaseUIDialog } from "@osdk/react-components/primitives";
import React, { memo, useCallback, useState } from "react";

import type { Employee } from "../../../types/Employee.js";

import styles from "./ObjectTableOverlayStories.module.css";

type EmployeeTableProps = ObjectTableProps<typeof Employee>;

interface ObjectTableOverlayStoryProps {
  tableProps: EmployeeTableProps;
}

const HeaderMenuOverlayContent = memo(function HeaderMenuOverlayContentFn({
  tableProps,
}: ObjectTableOverlayStoryProps): React.ReactElement {
  return (
    <div className={styles.shell}>
      <div className={styles.instructions}>
        Click a column header chevron. The header menu should open above the
        overlay and stay interactive.
      </div>
      <div className={styles.tableFrame}>
        <ObjectTable {...tableProps} />
      </div>
    </div>
  );
});

export const ObjectTableInBlueprintDrawer = memo(
  function ObjectTableInBlueprintDrawerFn({
    tableProps,
  }: ObjectTableOverlayStoryProps): React.ReactElement {
    const [isOpen, setIsOpen] = useState(true);

    const handleOpen = useCallback(() => {
      setIsOpen(true);
    }, []);

    const handleClose = useCallback(() => {
      setIsOpen(false);
    }, []);

    return (
      <>
        <Button
          className={styles.reopenButton}
          onClick={handleOpen}
          text="Open drawer"
        />
        <Drawer
          isOpen={isOpen}
          onClose={handleClose}
          size="90%"
          title="ObjectTable in Blueprint Drawer"
        >
          <div className={styles.drawerBody}>
            <HeaderMenuOverlayContent tableProps={tableProps} />
          </div>
        </Drawer>
      </>
    );
  }
);

export const ObjectTableInBlueprintDialog = memo(
  function ObjectTableInBlueprintDialogFn({
    tableProps,
  }: ObjectTableOverlayStoryProps): React.ReactElement {
    const [isOpen, setIsOpen] = useState(true);

    const handleOpen = useCallback(() => {
      setIsOpen(true);
    }, []);

    const handleClose = useCallback(() => {
      setIsOpen(false);
    }, []);

    return (
      <>
        <Button
          className={styles.reopenButton}
          onClick={handleOpen}
          text="Open Blueprint dialog"
        />
        <BlueprintDialog
          className={styles.blueprintDialog}
          isOpen={isOpen}
          onClose={handleClose}
          title="ObjectTable in Blueprint Dialog"
        >
          <div className={styles.blueprintDialogContent}>
            <HeaderMenuOverlayContent tableProps={tableProps} />
          </div>
        </BlueprintDialog>
      </>
    );
  }
);

export const ObjectTableInBaseUIDialog = memo(
  function ObjectTableInBaseUIDialogFn({
    tableProps,
  }: ObjectTableOverlayStoryProps): React.ReactElement {
    const [isOpen, setIsOpen] = useState(true);

    const handleOpen = useCallback(() => {
      setIsOpen(true);
    }, []);

    const handleOpenChange = useCallback((open: boolean) => {
      setIsOpen(open);
    }, []);

    return (
      <>
        <Button
          className={styles.reopenButton}
          onClick={handleOpen}
          text="Open Base UI dialog"
        />
        <BaseUIDialog
          className={styles.baseUiDialog}
          isOpen={isOpen}
          onOpenChange={handleOpenChange}
          title="ObjectTable in Base UI Dialog"
        >
          <HeaderMenuOverlayContent tableProps={tableProps} />
        </BaseUIDialog>
      </>
    );
  }
);
