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

import { useOsdkObject } from "@osdk/react";
import React from "react";

import { Assignment } from "../../generatedNoCheck2/index.js";
import { formatDate } from "../../utils/formatDate.js";
import { EndAssignmentButton } from "../actions/EndAssignmentButton.js";
import { RecordStatusUpdateForm } from "../actions/RecordStatusUpdateForm.js";
import { UpdateAssignmentForm } from "../actions/UpdateAssignmentForm.js";
import { Drawer, ErrorBanner, LoadingBar } from "../common/index.js";
import { StatusTimeline } from "./StatusTimeline.js";

import styles from "./AssignmentDrawer.module.css";

export interface AssignmentDrawerProps {
  assignmentId: string | undefined;
  onClose: () => void;
}

interface InfoItem {
  label: string;
  value: React.ReactNode;
}

export function AssignmentDrawer(
  props: AssignmentDrawerProps,
): React.JSX.Element {
  const { assignmentId, onClose } = props;
  const { object, isLoading, error } = useOsdkObject(
    Assignment,
    assignmentId ?? "",
    assignmentId != null,
  );

  const title = object?.title ?? assignmentId ?? "Assignment";

  const info: InfoItem[] = object == null
    ? []
    : [
      { label: "Status", value: object.assignmentStatus ?? "—" },
      { label: "Type", value: object.assignmentType ?? "—" },
      { label: "Employee ID", value: object.employeeId ?? "—" },
      { label: "Function", value: object.function ?? "—" },
      { label: "Office ID", value: object.officeId ?? "—" },
      { label: "Floor ID", value: object.floorId ?? "—" },
      { label: "Manager ID", value: object.managerId ?? "—" },
      { label: "Start", value: formatDate(object.startDate) || "—" },
      { label: "End", value: formatDate(object.endDate) || "—" },
      { label: "Tenure (days)", value: object.tenureDays ?? "—" },
    ];

  return (
    <Drawer isOpen={assignmentId != null} onClose={onClose} title={title}>
      <LoadingBar active={isLoading} />
      <ErrorBanner message={error?.message} context="Load assignment" />
      {object != null
        ? (
          <div className={styles.body}>
            <dl className={styles.infoGrid}>
              {info.map((item) => (
                <div key={item.label} className={styles.infoItem}>
                  <dt className={styles.infoLabel}>{item.label}</dt>
                  <dd className={styles.infoValue}>{item.value}</dd>
                </div>
              ))}
            </dl>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Record status update</h3>
              <RecordStatusUpdateForm assignment={object} />
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Status timeline</h3>
              <StatusTimeline assignmentId={object.$primaryKey} />
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Edit assignment</h3>
              {/* Remount on assignment change so the form re-seeds from the new object. */}
              <UpdateAssignmentForm
                key={object.$primaryKey}
                assignment={object}
              />
            </section>

            <section className={styles.section}>
              <EndAssignmentButton assignment={object} />
            </section>
          </div>
        )
        : null}
    </Drawer>
  );
}
