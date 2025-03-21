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
// Interfaces and type guards for messages passed from the host Foundry UI to the widget
export let HostMessage;
(function (_HostMessage) {
  _HostMessage.Version = "1.0.0";
  /**
   * Temporary fetch proxy response
   * Will be removed in favor of server side proxy
   */
  /**
   * Temporary fetch proxy response
   * Will be removed in favor of server side proxy
   */
})(HostMessage || (HostMessage = {}));
export function isHostParametersUpdatedMessage(event) {
  return event.type === "host.update-parameters";
}
export function _unstable_isHostFetchResponseSuccessMessage(event) {
  return event.type === "host._unstable.fetch-response-success";
}
export function _unstable_isHostFetchResponseFailedMessage(event) {
  return event.type === "host._unstable.fetch-response-failed";
}
/**
 * Strongly typed visitor to handle every type of host message
 */
export function visitHostMessage(message, visitor) {
  const {
    type,
    payload
  } = message;
  const handler = visitor[type];
  if (handler) {
    // Typescript creates an & of the parameters instead of a union
    handler(payload);
  } else {
    visitor._unknown(type);
  }
}
//# sourceMappingURL=hostMessages.js.map