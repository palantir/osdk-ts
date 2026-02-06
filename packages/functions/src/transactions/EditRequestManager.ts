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

import {
  OntologyTransactions,
  type TransactionEdit,
} from "@osdk/foundry.ontologies";
import type { WriteableClient } from "./WriteableClient.js";
import { writeableClientContext } from "./WriteableClient.js";

export class EditRequestManager {
  private pendingEdits: TransactionEdit[] = [];
  private inFlightRequest: Promise<void> | null = null;
  private queuedRequest: Promise<void> | null = null;
  private editTimeout: NodeJS.Timeout | null = null;
  private client: WriteableClient<any>;

  public constructor(client: WriteableClient<any>) {
    this.client = client;
  }

  public postEdit(edit: TransactionEdit): Promise<void> {
    if (this.inFlightRequest) {
      if (this.editTimeout) { // This means we are in the same tick that the request was created, meaning we can just add to the same request
        this.pendingEdits.push(edit);
        return this.inFlightRequest;
      }
      if (this.queuedRequest) { // This means we already have a queued request that will run after the inFlightRequest finishes, so we can just add to that one
        this.pendingEdits.push(edit);
        return this.queuedRequest;
      }
      // This means a request has already been sent to the wire but not been returned, so we need to queue up a new request for when that one finishes
      this.queuedRequest = this.inFlightRequest.then(async () => {
        this.inFlightRequest = this.queuedRequest;
        this.queuedRequest = null;
        this.pendingEdits.push(edit);
        await this.dispatchRequest();
      });
      return this.queuedRequest;
    } else {
      // There is no request in flight, which means we should create a new one
      this.inFlightRequest = this.createInitialPromiseWithTimeout(
        edit,
      );
      return this.inFlightRequest;
    }
  }

  private createInitialPromiseWithTimeout(
    edit: TransactionEdit,
  ): Promise<void> {
    return new Promise((resolve) => {
      this.pendingEdits.push(edit);
      this.editTimeout = setTimeout(async () => {
        this.editTimeout = null;
        await this.dispatchRequest();
        if (!this.queuedRequest) { // The queued request will see this inFlightRequest resolve and should set the inFlightRequest to itself
          this.inFlightRequest = null;
        }
        resolve();
      }, 0);
    });
  }

  private async dispatchRequest(): Promise<void> {
    const copiedEdits = this.pendingEdits;
    this.pendingEdits = [];
    await OntologyTransactions.postEdits(
      this.client,
      await this.client[writeableClientContext].ontologyRid,
      this.client[writeableClientContext].transactionId,
      { edits: copiedEdits },
      { preview: true },
    );
  }

  public async flushPendingEdits(): Promise<void> {
    if (this.editTimeout) {
      clearTimeout(this.editTimeout);
      this.editTimeout = null;

      if (this.pendingEdits.length > 0) {
        await this.dispatchRequest();
        this.inFlightRequest = null;
      }
    }

    if (this.inFlightRequest) {
      await this.inFlightRequest;
    }

    if (this.queuedRequest) {
      await this.queuedRequest;
    }

    if (this.pendingEdits.length > 0) {
      await this.dispatchRequest();
    }
  }
}
