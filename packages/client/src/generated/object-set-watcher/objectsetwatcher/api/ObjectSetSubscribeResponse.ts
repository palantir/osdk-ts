/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { QosError } from "./QosError.js";
import type { SubscriptionError } from "./SubscriptionError.js";
import type { SubscriptionSuccess } from "./SubscriptionSuccess.js";
export interface ObjectSetSubscribeResponse_success {
  type: "success";
  success: SubscriptionSuccess;
}

export interface ObjectSetSubscribeResponse_error {
  type: "error";
  error: SubscriptionError;
}

export interface ObjectSetSubscribeResponse_qos {
  type: "qos";
  qos: QosError;
}
export type ObjectSetSubscribeResponse =
  | ObjectSetSubscribeResponse_success
  | ObjectSetSubscribeResponse_error
  | ObjectSetSubscribeResponse_qos;
