/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { TransactionRid } from "./TransactionRid";
import type { TransactionStatus } from "./TransactionStatus";
import type { TransactionType } from "./TransactionType";

/**
 * An operation that modifies the files within a dataset.
 */
export interface Transaction {
  rid: TransactionRid;
  transactionType: TransactionType;
  status: TransactionStatus;
  /** The timestamp when the transaction was created, in ISO 8601 timestamp format. */
  createdTime: string;
  /** The timestamp when the transaction was closed, in ISO 8601 timestamp format. */
  closedTime?: string;
}
