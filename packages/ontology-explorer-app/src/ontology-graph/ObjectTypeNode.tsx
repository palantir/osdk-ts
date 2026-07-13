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

import { Icon, Spinner, SpinnerSize } from "@blueprintjs/core";
import { Handle, type NodeProps, Position } from "@xyflow/react";
import classNames from "classnames";
import React from "react";

import type { ObjectTypeNode as ObjectTypeNodeType } from "./graphElements.js";

import styles from "./ObjectTypeNode.module.scss";

export function ObjectTypeNode(
  props: NodeProps<ObjectTypeNodeType>,
): React.ReactElement {
  const { info } = props.data;
  const isStub = info.loadState === "stub" || info.loadState === "loading";

  return (
    <div
      className={classNames(styles.node, {
        [styles.selected]: props.selected,
        [styles.used]: info.used,
        [styles.stub]: isStub,
        [styles.error]: info.loadState === "error",
      })}
    >
      <Handle
        type="target"
        position={Position.Left}
        className={styles.handle}
      />
      <div className={styles.header}>
        <Icon icon="cube" size={14} className={styles.icon} />
        <span className={styles.displayName} title={info.displayName}>
          {info.displayName}
        </span>
        {info.loadState === "loading" && (
          <Spinner size={SpinnerSize.SMALL} className={styles.spinner} />
        )}
      </div>
      <div className={styles.apiName}>{info.apiName}</div>
      {info.loadState === "loaded" && (
        <div className={styles.footer}>
          <span className={styles.stat}>{info.properties.length} props</span>
          <span className={styles.stat}>{info.links.length} links</span>
        </div>
      )}
      {info.loadState === "error" && (
        <div className={styles.footer}>
          <span className={styles.errorText}>failed to load</span>
        </div>
      )}
      <Handle
        type="source"
        position={Position.Right}
        className={styles.handle}
      />
    </div>
  );
}
